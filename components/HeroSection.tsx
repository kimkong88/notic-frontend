"use client";

import React from "react";
import { Sparkles, FileText, FolderTree, Palette } from "lucide-react";
import { motion } from "framer-motion";
import HeroCTA from "@/components/HeroCTA";
import HeroDesktopSimulation from "@/components/HeroDesktopSimulation";

export default function HeroSection() {
    return (
        <section className="pt-40 sm:pt-48 pb-28 sm:pb-36 px-6 overflow-hidden relative">
            {/* Gradient – soft top glow */}
            <div
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(79, 70, 229, 0.06) 0%, transparent 60%)",
                }}
            />
            {/* Layered soft shapes – accent + neutral */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)]/6 blur-[120px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-[var(--accent)]/4 blur-[100px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 -right-24 w-[360px] h-[360px] bg-zinc-400/5 blur-[100px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-indigo-300/4 blur-[90px] rounded-[3rem] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.h1
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[var(--text-primary)] mb-10 sm:mb-12 md:mb-14 tracking-tighter leading-[0.95]"
                >
                    Keep your notes in
                    <span className="gradient-text">sight</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[var(--text-muted)] text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mb-12 sm:mb-16 md:mb-20 leading-relaxed font-medium px-0"
                >
                    A floating window that doesn't hide when you switch tabs.
                    Perfect for saving snippets and capturing ideas without
                    losing your flow.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 mb-20 sm:mb-28 md:mb-32 justify-center items-center"
                >
                    <HeroCTA />
                    <a
                        href="#features"
                        className="w-full sm:w-auto inline-flex items-center justify-center bg-[var(--bg-secondary)] text-[var(--text-primary)] px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold border border-[var(--border-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                    >
                        How it works
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="w-full relative"
                >
                    {/* Accent glow behind browser + floating editor – opacity ok (no text) */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,520px)] h-[280px] bg-[var(--accent)]/12 blur-[70px] rounded-3xl pointer-events-none" />
                    <HeroDesktopSimulation />
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-[var(--accent)]/10 blur-[80px] rounded-full hidden lg:block pointer-events-none" />
                    <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full hidden lg:block pointer-events-none" />
                </motion.div>

                {/* Four proof points – below browser, icon + title inline */}
                <motion.div
                    initial={{ y: 16 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full max-w-7xl px-0 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-40 sm:mt-28 md:mt-32 min-w-0"
                >
                    <div className="card rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col gap-3 text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center shrink-0">
                                <Sparkles className="text-[var(--accent)] w-5 h-5" />
                            </div>
                            <h4 className="text-base font-semibold text-[var(--text-primary)]">
                                Minimal
                            </h4>
                        </div>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                            No bloat, no templates, no complexity. Notes that
                            stay out of your way—unlike heavy editors.
                        </p>
                    </div>
                    <div className="card rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col gap-3 text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center shrink-0">
                                <FileText className="text-[var(--accent)] w-5 h-5" />
                            </div>
                            <h4 className="text-base font-semibold text-[var(--text-primary)]">
                                Markdown
                            </h4>
                        </div>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                            Write in Markdown, images, checklists. Export to
                            .md—your format, portable. No lock-in.
                        </p>
                    </div>
                    <div className="card rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col gap-3 text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center shrink-0">
                                <FolderTree className="text-[var(--accent)] w-5 h-5" />
                            </div>
                            <h4 className="text-base font-semibold text-[var(--text-primary)]">
                                Organization
                            </h4>
                        </div>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                            Folders and tabs. Find what you need without a
                            sidebar the size of a filing cabinet.
                        </p>
                    </div>
                    <div className="card rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col gap-3 text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center shrink-0">
                                <Palette className="text-[var(--accent)] w-5 h-5" />
                            </div>
                            <h4 className="text-base font-semibold text-[var(--text-primary)]">
                                Theme
                            </h4>
                        </div>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                            Light, dark, or match your system. One click—no
                            design fatigue from heavy apps.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
