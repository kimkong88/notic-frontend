"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { APP_URL } from "@/lib/site";

declare global {
    interface Window {
        umami?: { track: (event: string, data?: object) => void };
    }
}

const primaryClass =
    "inline-flex items-center justify-center gap-2 sm:gap-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-colors shadow-sm hover:shadow-md w-full sm:w-auto";

export default function HeroCTA({ className = "" }: { className?: string }) {
    const handleTryApp = () => {
        window.umami?.track("cta_try_app");
    };

    return (
        <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto ${className}`.trim()}
        >
            <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTryApp}
                className={primaryClass}
            >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span className="whitespace-nowrap">Try Notic free</span>
            </a>
        </div>
    );
}
