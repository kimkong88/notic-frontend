import React from "react";
import {
    Monitor,
    LayoutGrid,
    Chrome,
    ArrowRight,
    MousePointer2,
    Download,
    Check,
    Folder,
    Plug2,
    Share2,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/PricingSection";
import HeroSection from "@/components/HeroSection";

export default function Page() {
    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-light)]">
            <Header />

            <main>
                <HeroSection />

                {/* Features – bento grid, differentiator-first. Text in DOM for SEO/SSR. */}
                <section
                    id="features"
                    aria-labelledby="features-heading"
                    className="bento-section py-20 sm:py-24 md:py-32"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="mb-16 sm:mb-20 text-center">
                            <h2
                                id="features-heading"
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 md:mb-8 tracking-tight"
                            >
                                Built for how you work.
                            </h2>
                            <p className="text-[var(--text-muted)] text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
                                No more hunting for that tab with your
                                scratchpad. Notic floats over every tab and
                                stays where you need it.
                            </p>
                        </div>

                        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
                            {/* Always in sight – differentiator */}
                            <div
                                className="bento-card md:col-span-2 card rounded-2xl sm:rounded-3xl p-8 sm:p-10 relative overflow-hidden group"
                                tabIndex={0}
                            >
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center mb-6 sm:mb-8">
                                            <Monitor className="text-[var(--accent)] w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-4">
                                            Always in sight
                                        </h3>
                                        <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-md leading-relaxed">
                                            Notic floats over every tab. Move
                                            from Gmail to Docs to code—your note
                                            stays exactly where you pinned it.
                                            No switching tabs.
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity flex items-end justify-end p-4">
                                    <MousePointer2 className="w-32 h-32 sm:w-40 sm:h-40 text-[var(--accent)]" />
                                </div>
                            </div>

                            {/* One window, many notes */}
                            <div
                                className="bento-card card rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col justify-between group"
                                tabIndex={0}
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center mb-6 sm:mb-8">
                                        <LayoutGrid className="text-[var(--accent)] w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-2">
                                        One window, many notes
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg leading-relaxed">
                                        Multiple notes in one floating window.
                                        Switch between meeting notes, tasks, and
                                        scratch without leaving the tab
                                        you&apos;re on.
                                    </p>
                                </div>
                            </div>

                            {/* Integration – Notion, Obsidian (coming) */}
                            <div
                                className="bento-card card rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col justify-between group"
                                tabIndex={0}
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center mb-6 sm:mb-8">
                                        <Plug2 className="text-[var(--accent)] w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-2">
                                        Integration
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                                        Connect your notes to the tools you
                                        already use. Notion and Obsidian
                                        integrations included.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-xs font-medium text-[var(--text-secondary)]">
                                            Notion
                                        </span>
                                        <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-xs font-medium text-[var(--text-secondary)]">
                                            Obsidian
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Publish & share – spans 2 cols to fill row */}
                            <div
                                className="bento-card md:col-span-2 card rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col justify-between group"
                                tabIndex={0}
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center mb-6 sm:mb-8">
                                        <Share2 className="text-[var(--accent)] w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-2">
                                        Publish & share
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg leading-relaxed">
                                        Share a note as a link or publish it so
                                        others can view it. Great for meeting
                                        notes, specs, and read-only handoffs.
                                    </p>
                                </div>
                            </div>

                            {/* Sync across devices – full width row */}
                            <div
                                className="bento-card md:col-span-3 card rounded-2xl sm:rounded-[2rem] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 overflow-hidden"
                                tabIndex={0}
                            >
                                <div className="flex-1 min-w-0">
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center mb-6 sm:mb-8">
                                        <Chrome className="text-[var(--accent)] w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-4">
                                        Sync across your devices
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-md leading-relaxed">
                                        Your notes travel with you. Start at
                                        work, finish at home. Unlimited sync for
                                        everyone—sign in once and your notes are
                                        everywhere.
                                    </p>
                                </div>
                                <div className="flex-1 w-full max-w-lg flex items-center justify-center gap-6 sm:gap-8">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-20 sm:w-24 h-14 sm:h-16 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-2 space-y-2">
                                            <div className="h-1.5 w-full bg-[var(--accent)]/30 rounded" />
                                            <div className="h-1.5 w-2/3 bg-[var(--border-secondary)] rounded" />
                                        </div>
                                        <span className="text-[10px] text-[var(--text-muted)] font-mono uppercase">
                                            Work
                                        </span>
                                    </div>
                                    <div
                                        className="text-[var(--accent)]/50 animate-pulse"
                                        aria-hidden
                                    >
                                        <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-20 sm:w-24 h-14 sm:h-16 rounded-lg border border-[var(--accent)]/30 bg-[var(--bg-secondary)] p-2 space-y-2 shadow-sm">
                                            <div className="h-1.5 w-full bg-[var(--accent)]/60 rounded" />
                                            <div className="h-1.5 w-2/3 bg-[var(--border-secondary)] rounded" />
                                        </div>
                                        <span className="text-[10px] text-[var(--accent)] font-mono uppercase font-medium">
                                            Home
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy / Data */}
                <section
                    id="data"
                    className="py-16 sm:py-24 md:py-32 bg-[var(--bg-secondary)]"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 tracking-tight">
                                Your data is yours.
                                <br />
                                Period.
                            </h2>
                            <p className="text-[var(--text-muted)] text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                                Notic is local-first and works offline. Notes
                                live in your browser—we don&apos;t mine them for
                                AI or sell usage data. Export to .md anytime;
                                when you leave, take everything with you.
                            </p>
                            <ul className="space-y-4 text-left list-none pl-0 text-sm sm:text-base md:text-lg text-[var(--text-secondary)]">
                                {[
                                    "Works offline (notes & sync when you’re back)",
                                    "Native .md markdown exports—no lock-in",
                                    "Privacy-first browser storage",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 text-[var(--text-secondary)]"
                                    >
                                        <span className="w-6 h-6 rounded-full bg-[var(--accent-light)] flex items-center justify-center shrink-0">
                                            <Check className="w-3.5 h-3.5 text-[var(--accent)]" />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center">
                                        <Folder className="text-[var(--text-muted)] w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[var(--text-primary)] font-semibold block">
                                            Notic_Export.zip
                                        </span>
                                        <span className="text-[var(--text-muted)] text-xs">
                                            Export anytime from the app
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { name: "Work", files: 12 },
                                        { name: "Personal", files: 8 },
                                        { name: "Ideas", files: 5 },
                                    ].map((folder, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between py-3 px-4 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Folder className="text-[var(--accent)] w-5 h-5" />
                                                <span className="text-[var(--text-primary)] font-medium">
                                                    {folder.name}
                                                </span>
                                            </div>
                                            <span className="text-[var(--text-muted)] text-sm">
                                                {folder.files} notes
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    className="w-full mt-6 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold bg-[var(--text-primary)] text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                                >
                                    <Download className="w-5 h-5 shrink-0" />{" "}
                                    One-click export
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Notic */}
                <section className="py-12 sm:py-16 md:py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-8 sm:mb-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 tracking-tighter text-[var(--text-primary)]">
                                Notes that don’t get in the way
                            </h2>
                            <p className="text-[var(--text-muted)] text-base sm:text-lg md:text-xl max-w-xl mx-auto">
                                No sign-up to write. No hunting for that tab. No
                                lock-in.
                            </p>
                        </div>

                        <div className="space-y-6 sm:space-y-7 text-[var(--text-secondary)]">
                            <div className="card p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl">
                                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-left sm:text-center">
                                    You shouldn’t need an account just to
                                    capture a thought. Open Notic in your
                                    browser, start writing.{" "}
                                    <span className="text-[var(--accent)] font-semibold">
                                        No email, no credit card.
                                    </span>
                                </p>
                            </div>

                            <div className="card p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl">
                                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-left sm:text-center">
                                    When you want the same notes on another
                                    laptop or browser, turn on sync—unlimited,
                                    for free. Go Pro for unlimited windows and
                                    priority support.
                                </p>
                            </div>

                            <div className="card p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl border-2 border-[var(--accent)]/20">
                                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-left sm:text-center font-semibold text-[var(--text-primary)]">
                                    Floating windows over every tab. Your notes,{" "}
                                    <span className="text-[var(--accent)]">
                                        your format
                                    </span>
                                    , your data—take them anywhere.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <PricingSection />
            </main>

            <Footer />
        </div>
    );
}
