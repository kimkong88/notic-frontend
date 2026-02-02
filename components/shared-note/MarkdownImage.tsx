"use client";

import React, { useCallback, useState } from "react";

/**
 * Custom img component for markdown: images are external (e.g. CloudFront).
 * Copy button shows a toast styled with our branding (--accent) when image is copied.
 */
export function MarkdownImage({
  src,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [showToast, setShowToast] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  const copyImage = useCallback(async () => {
    const url = typeof src === "string" ? src : "";
    if (!url) return;
    try {
      const res = await fetch(url, { mode: "cors" });
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ]);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch {
      // Copy failed (e.g. CORS); ignore
    }
  }, [src]);

  return (
    <span className="my-3 block relative group">
      {!loadFailed && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt ?? ""}
            loading="lazy"
            decoding="async"
            className="max-h-[70vh] w-full object-contain rounded-md"
            referrerPolicy="no-referrer"
            onError={() => setLoadFailed(true)}
            {...props}
          />
        </>
      )}
      {!loadFailed && src && (
        <button
          type="button"
          onClick={copyImage}
          className="absolute bottom-2 right-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
          aria-label="Copy image"
        >
          Copy image
        </button>
      )}
      {showToast && (
        <span
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg text-sm font-medium text-white shadow-lg"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Copied!
        </span>
      )}
      {loadFailed && (
        <span
          className="block text-sm text-[var(--text-muted)]"
          aria-hidden
        >
          Image could not be loaded
        </span>
      )}
    </span>
  );
}
