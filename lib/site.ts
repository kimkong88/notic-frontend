/**
 * Shared URLs for CTAs: cloud app (primary) and Chrome extension (secondary).
 * Set NEXT_PUBLIC_SAAS_APP_URL in Vercel (e.g. https://app.getnotic.io).
 * After changing it, redeploy so the new value is baked into the build.
 */
export const APP_URL =
  process.env.NEXT_PUBLIC_SAAS_APP_URL || "https://app.getnotic.io";
export const DOWNLOAD_URL = "/download";
