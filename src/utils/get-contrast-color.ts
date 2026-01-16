/**
 * Returns a readable text color ("#000000" or "#FFFFFF") for a given background
 * color based on perceived brightness.
 *
 * Supported input formats:
 * - "#RGB"
 * - "#RRGGBB"
 * - "RGB" / "RRGGBB" (leading "#" optional)
 *
 * If the input is invalid, this falls back to "#000000".
 *
 * Implementation:
 * - Uses WCAG relative luminance (sRGB -> linear) and a luminance threshold.
 */
export function getContrastColor(
  bgColor: string,
  options?: {
    lightText?: string; // default "#FFFFFF"
    darkText?: string; // default "#000000"
    /**
     * Luminance threshold in [0..1].
     * Higher threshold => more backgrounds considered "dark" (thus returning light text).
     * Default: 0.5 (reasonable for UI headers).
     */
    threshold?: number;
  },
): string {
  const lightText = options?.lightText ?? "#FFFFFF";
  const darkText = options?.darkText ?? "#000000";
  const threshold = clamp01(options?.threshold ?? 0.5);

  const rgb = parseHexToRgb(bgColor);
  if (!rgb) return darkText;

  const luminance = relativeLuminance(rgb.r, rgb.g, rgb.b);

  // If the background is "dark" (low luminance), choose light text (white).
  return luminance < threshold ? lightText : darkText;
}

type Rgb = { r: number; g: number; b: number };

function parseHexToRgb(input: string): Rgb | null {
  const hex = normalizeHex(input);
  if (!hex) return null;

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  if ([r, g, b].some((n) => Number.isNaN(n))) return null;
  return { r, g, b };
}

function normalizeHex(input: string): string | null {
  if (typeof input !== "string") return null;

  let s = input.trim();
  if (s.startsWith("#")) s = s.slice(1);

  // Expand short hex (#RGB => #RRGGBB)
  if (s.length === 3) {
    const [r, g, b] = s.split("");
    if (!r || !g || !b) return null;
    s = `${r}${r}${g}${g}${b}${b}`;
  }

  if (s.length !== 6) return null;
  if (!/^[0-9a-fA-F]{6}$/.test(s)) return null;

  return s.toUpperCase();
}

function relativeLuminance(r8: number, g8: number, b8: number): number {
  const r = srgbToLinear(r8 / 255);
  const g = srgbToLinear(g8 / 255);
  const b = srgbToLinear(b8 / 255);

  // WCAG definition
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function srgbToLinear(c: number): number {
  // c is in [0..1]
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0;
  if (n < 0) return 0;
  if (n > 1) return 1;
  return n;
}
