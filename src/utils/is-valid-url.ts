/**
 * Check whether an image URL returns a "good" HTTP response.
 *
 * Notes:
 * - Designed for React Native / Expo environments (uses global `fetch` + `AbortController`).
 * - Uses a lightweight request:
 *   - Attempts `HEAD` first (best-case: no body downloaded).
 *   - Falls back to `GET` with `Range: bytes=0-0` (some CDNs/servers don't support HEAD).
 * - Returns `false` for invalid URLs, network errors, timeouts, non-2xx responses, or non-image content-types.
 */

export type isValidUrlOptions = {
  /**
   * Request timeout in milliseconds.
   * Default: 6000ms
   */
  timeoutMs?: number;

  /**
   * Whether to require the response `Content-Type` to start with `image/`.
   * Default: true
   */
  requireImageContentType?: boolean;

  /**
   * Additional headers to include in the request.
   * Useful for auth/proxy/CDN behaviors.
   */
  headers?: Record<string, string>;

  /**
   * If you want to allow `http://` images (generally discouraged), set this true.
   * Default: false (requires https)
   */
  allowInsecureHttp?: boolean;
};

export async function isValidUrl(
  url?: string,
  options?: isValidUrlOptions,
): Promise<boolean> {
  if (!url) return false;

  const timeoutMs = options?.timeoutMs ?? 6000;
  const requireImageContentType = options?.requireImageContentType ?? true;
  const allowInsecureHttp = options?.allowInsecureHttp ?? false;

  const normalized = normalizeUrl(url);
  if (!normalized) return false;

  // Basic scheme check
  if (!allowInsecureHttp && normalized.protocol !== "https:") return false;

  // A tiny bit of sanitization: block obvious non-network cases
  // (You can expand this later if you support `file://`, `asset://`, etc.)
  if (normalized.protocol !== "https:" && normalized.protocol !== "http:") {
    return false;
  }

  // Try HEAD first.
  // If the server responds with a usable content-type and status, we're done.
  const head = await requestWithTimeout(
    normalized.toString(),
    {
      method: "HEAD",
      headers: {
        Accept: "image/*",
        ...(options?.headers ?? {}),
      },
    },
    timeoutMs,
  );

  if (head.ok) {
    if (!requireImageContentType) return true;
    const ct = head.headers.get("content-type");
    return isContentType(ct);
  }

  // Some servers/CDNs reject HEAD (e.g., 403/405) but allow GET.
  // Try a "range" GET to avoid pulling the full image.
  const get = await requestWithTimeout(
    normalized.toString(),
    {
      method: "GET",
      headers: {
        Accept: "image/*",
        Range: "bytes=0-0",
        ...(options?.headers ?? {}),
      },
    },
    timeoutMs,
  );

  if (!get.ok) return false;

  if (!requireImageContentType) return true;
  const ct = get.headers.get("content-type");
  return isContentType(ct);
}

function normalizeUrl(input: string): URL | null {
  if (typeof input !== "string") return null;
  const trimmed = input.trim();
  if (!trimmed) return null;

  try {
    return new URL(trimmed);
  } catch {
    return null;
  }
}

function isContentType(contentType: string | null): boolean {
  if (!contentType) return false;
  // Examples:
  // - "image/jpeg"
  // - "image/webp"
  // - "image/png; charset=binary"
  return contentType.toLowerCase().startsWith("image/");
}

async function requestWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs: number,
): Promise<Response & { ok: boolean }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      ...init,
      signal: controller.signal,
    });

    return res as Response & { ok: boolean };
  } catch {
    // Network failure, timeout (AbortError), DNS issues, etc.
    // Treat as not OK.
    return {
      ok: false,
      status: 0,
      statusText: "NETWORK_ERROR",
      url,
      headers: new Headers(),
      redirected: false,
      type: "default",
      body: null,
      bodyUsed: false,
      clone: () => {
        throw new Error("Not implemented");
      },
      arrayBuffer: async () => new ArrayBuffer(0),
      blob: async () => new Blob(),
      formData: async () => new FormData(),
      json: async () => ({}),
      text: async () => "",
    } as unknown as Response & { ok: boolean };
  } finally {
    clearTimeout(timeout);
  }
}
