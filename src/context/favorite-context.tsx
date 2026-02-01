import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface FavoritesContextValue {
  /** True while favorites are being loaded from storage */
  isHydrating: boolean;

  /** Total number of favorites */
  count: number;

  /** Badge count (resets when Favorites tab is focused) */
  badgeCount: number;

  /** Reset badge to 0 */
  resetBadge: () => void;

  /** Check if an item is favorited */
  isFavorite: (id: string) => boolean;

  /** Add an item to favorites */
  addFavorite: (id: string) => void;

  /** Remove an item from favorites */
  removeFavorite: (id: string) => void;

  /** Toggle favorite state */
  toggleFavorite: (id: string) => void;

  /** Get favorites as an array (useful for lists, syncing, etc.) */
  getFavoritesArray: () => string[];
}

const FAVORITES_KEY = "favorites:v1";

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

async function readFavoritesFromStorage(): Promise<string[]> {
  // Temporary code to clear old storage format
  //await AsyncStorage.removeItem("favorites:v2");
  const raw = await AsyncStorage.getItem(FAVORITES_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed))
      return parsed.filter((x) => typeof x === "string");
    return [];
  } catch {
    return [];
  }
}

async function writeFavoritesToStorage(ids: string[]): Promise<void> {
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [isHydrating, setIsHydrating] = useState(true);

  // Keep favorites in a Set for O(1) lookups.
  const [favoritesSet, setFavoritesSet] = useState<Set<string>>(
    () => new Set(),
  );

  // Badge count = "unseen favorites additions" since last visit to favorites tab
  const [badgeCount, setBadgeCount] = useState(0);

  // Avoid writing to storage before initial hydration finishes.
  const hasHydratedRef = useRef(false);

  // Hydrate once on mount.
  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const ids = await readFavoritesFromStorage();
        if (!isMounted) return;
        setFavoritesSet(new Set(ids));

        // Optional: when app starts, we usually don't want a badge.
        // Keep it 0 by default.
        setBadgeCount(0);
      } finally {
        if (!isMounted) return;
        hasHydratedRef.current = true;
        setIsHydrating(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const persist = useCallback(async (nextSet: Set<string>) => {
    if (!hasHydratedRef.current) return;
    await writeFavoritesToStorage(Array.from(nextSet));
  }, []);

  const isFavorite = useCallback(
    (itemId: string) => favoritesSet.has(itemId),
    [favoritesSet],
  );

  const resetBadge = useCallback(() => {
    setBadgeCount(0);
  }, []);

  const addFavorite = useCallback(
    (id: string) => {
      setFavoritesSet((prev) => {
        if (prev.has(id)) return prev;

        const next = new Set(prev);
        next.add(id);

        // increment badge only when newly added
        setBadgeCount((c) => c + 1);

        void persist(next);
        return next;
      });
    },
    [persist],
  );

  const removeFavorite = useCallback(
    (id: string) => {
      setFavoritesSet((prev) => {
        if (!prev.has(id)) return prev;

        const next = new Set(prev);
        next.delete(id);

        // do NOT change badge when removing (keeps "new additions" semantics)
        void persist(next);
        return next;
      });
    },
    [persist],
  );

  const toggleFavorite = useCallback(
    (id: string) => {
      setFavoritesSet((prev) => {
        const next = new Set(prev);

        const wasFavorited = next.has(id);
        if (wasFavorited) {
          next.delete(id);
          // do NOT change badge on removal
        } else {
          next.add(id);
          // increment badge only on add
          setBadgeCount((c) => c + 1);
        }

        void persist(next);
        return next;
      });
    },
    [persist],
  );

  const getFavoritesArray = useCallback(
    () => Array.from(favoritesSet),
    [favoritesSet],
  );

  const value: FavoritesContextValue = useMemo(
    () => ({
      isHydrating,
      count: favoritesSet.size,
      badgeCount,
      resetBadge,
      isFavorite,
      getFavoritesArray,
      toggleFavorite,
      addFavorite,
      removeFavorite,
    }),
    [
      isHydrating,
      favoritesSet.size,
      badgeCount,
      resetBadge,
      isFavorite,
      getFavoritesArray,
      toggleFavorite,
      addFavorite,
      removeFavorite,
    ],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavoritesContext must be used within a FavoritesProvider",
    );
  }
  return context;
}
