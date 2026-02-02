import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
  containerClassName?: string;
  /** Use smaller border radius for small icons (e.g. PiP, footer) */
  compact?: boolean;
}

/**
 * Lucide Layers icon paths (from lucide-react), with top layer filled.
 * Original: stroke-only; we fill the first (top) path for emphasis.
 */
const LAYERS_PATHS = [
  // Top layer – filled
  "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
  // Middle layer – outline
  "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
  // Bottom layer – outline
  "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
] as const;

function LayersIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d={LAYERS_PATHS[0]}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
      />
      <path
        d={LAYERS_PATHS[1]}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d={LAYERS_PATHS[2]}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Logo({
  size = 20,
  className = "",
  containerClassName = "w-10 h-10",
  compact = false,
}: LogoProps) {
  const roundedClass = compact ? "rounded-lg" : "rounded-xl";
  return (
    <div
      className={`${containerClassName} ${roundedClass} flex items-center justify-center bg-[#4f46e5] text-white ${className}`}
    >
      <LayersIcon size={size} className="shrink-0" />
    </div>
  );
}
