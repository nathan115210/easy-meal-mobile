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
import AsyncStorage from "@react-native-async-storage/async-storage";

interface FavoritesContextValue {
  /** True while favorites are being loaded from storage */
  isHydrating: boolean;
  /** Number of favorites */
  count: number;
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
  // Persist helper (debounce not necessary for typical favorites usage;
  // if you expect rapid toggles, add a debounce here).
  const persist = useCallback(async (nextSet: Set<string>) => {
    if (!hasHydratedRef.current) return;
    await writeFavoritesToStorage(Array.from(nextSet));
  }, []);

  const isFavorite = useCallback(
    (itemId: string) => favoritesSet.has(itemId),
    [favoritesSet],
  );

  const addFavorite = useCallback(
    (id: string) => {
      setFavoritesSet((prev) => {
        if (prev.has(id)) return prev;
        const next = new Set(prev);
        next.add(id);
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
        if (next.has(id)) next.delete(id);
        else next.add(id);
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
      isFavorite,
      getFavoritesArray,
      toggleFavorite,
      addFavorite,
      removeFavorite,
    }),
    [
      isHydrating,
      isFavorite,
      favoritesSet.size,
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
