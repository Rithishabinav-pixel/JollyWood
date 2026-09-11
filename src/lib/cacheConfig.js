// Centralized caching policy for public frontend pages.
// Development: always fresh — admin/content changes must appear immediately, no stale cache.
// Production: cached with a 60-second ISR revalidation window.
const isDev = process.env.NODE_ENV === "development";

export const PUBLIC_REVALIDATE_SECONDS = isDev ? 0 : 60;

export function publicFetchOptions() {
  return isDev ? { cache: "no-store" } : { next: { revalidate: PUBLIC_REVALIDATE_SECONDS } };
}
