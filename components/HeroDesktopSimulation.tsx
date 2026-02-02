"use client";

import React, { useState, useEffect } from "react";
import {
  Video,
  Table,
  Layout,
  Chrome,
  Layers,
  Plus,
  Check,
  Maximize2,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

const TABS = [
  { title: "Pipeline", icon: <Layout className="w-4 h-4" />, url: "lightning.force.com/opportunities" },
  { title: "Google Meet", icon: <Video className="w-4 h-4" />, url: "meet.google.com/abc-defg-hij" },
  { title: "Finance_Q4.csv", icon: <Table className="w-4 h-4" />, url: "docs.google.com/spreadsheets/d/..." },
];

/** Google Meet – header/controls match existing; video tile area reads as video (dark tiles). */
function MeetMockup() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden bg-[#f8f9fa] border border-[var(--border-primary)] flex flex-col min-h-0">
      <div className="flex-shrink-0 px-2 sm:px-3 pt-1.5 sm:pt-2 pb-0.5 sm:pb-1">
        <h3 className="text-[10px] sm:text-[11px] font-semibold text-[var(--text-primary)] truncate">Product Roadmap Sync</h3>
      </div>
      <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-1 sm:gap-2 p-1.5 sm:p-3 min-h-0 auto-rows-1fr">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="min-w-0 min-h-0 rounded sm:rounded-lg bg-[#1e293b] border border-[#334155] flex items-center justify-center overflow-hidden relative shadow-sm"
          >
            <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-emerald-500/80 flex items-center justify-center text-white text-[10px] sm:text-sm font-medium shrink-0">
              {String.fromCharCode(64 + i)}
            </div>
            {i === 1 && (
              <div className="absolute bottom-0.5 left-0.5 sm:bottom-1 sm:left-1 px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded bg-black/50 text-[8px] sm:text-[10px] text-white font-medium">
                You
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex-shrink-0 flex items-center justify-center gap-2 sm:gap-4 py-1.5 sm:py-2 px-2 sm:px-3 bg-[var(--bg-primary)] border-t border-[var(--border-primary)]">
        <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0" />
        <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0" />
        <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0" />
        <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0" />
      </div>
    </div>
  );
}

/** Spreadsheet – matches Meet/Pipeline chrome: same outer bg, header padding, footer. */
function SpreadsheetMockup() {
  const rows = [
    ["Region", "Q4 Revenue", "Growth", "Target"],
    ["North", "$124k", "+12%", "✓"],
    ["South", "$98k", "+8%", "✓"],
    ["East", "$87k", "-2%", "—"],
    ["West", "$156k", "+18%", "✓"],
  ];
  return (
    <div className="w-full h-full rounded-lg overflow-hidden bg-[#f8f9fa] border border-[var(--border-primary)] flex flex-col min-h-0">
      <div className="flex-shrink-0 px-2 sm:px-3 pt-1.5 sm:pt-2 pb-0.5 sm:pb-1">
        <h3 className="text-[10px] sm:text-[11px] font-semibold text-[var(--text-primary)] truncate">Finance_Q4</h3>
      </div>
      <div className="flex-1 overflow-auto p-2 min-h-0 bg-white rounded-b">
        <table className="w-full text-left border-collapse" style={{ fontSize: "10px" }}>
          <thead>
            <tr className="border-b border-blue-200/80 bg-blue-50">
              {rows[0].map((cell, j) => (
                <th key={j} className="px-2 py-1.5 font-semibold text-blue-900/90">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(1).map((row, i) => (
              <tr key={i} className="border-b border-[var(--border-secondary)]/60 bg-white">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-2 py-1.5 bg-white ${
                      cell.startsWith("+") ? "text-emerald-600 font-medium" : cell.startsWith("-") ? "text-red-500 font-medium" : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex-shrink-0 h-6 bg-[var(--bg-primary)] border-t border-[var(--border-primary)] flex items-center px-2 text-[10px] text-[var(--text-muted)]">
        Sheet1
      </div>
    </div>
  );
}

/** Salesforce-style CRM – pipeline columns with deal cards */
function CRMMockup() {
  const columns = [
    { title: "Lead", color: "bg-sky-100 border-sky-200", deals: ["Acme Corp", "TechStart", "Beta Co"] },
    { title: "Qualified", color: "bg-amber-50 border-amber-200", deals: ["Global Inc", "Nexus"] },
    { title: "Proposal", color: "bg-violet-50 border-violet-200", deals: ["Summit LLC"] },
    { title: "Won", color: "bg-emerald-50 border-emerald-200", deals: ["Prime Inc"] },
  ];
  return (
    <div className="w-full h-full rounded-lg overflow-hidden bg-[#f8f9fa] border border-[var(--border-primary)] flex flex-col min-h-0">
      <div className="flex-shrink-0 px-2 sm:px-3 pt-1.5 sm:pt-2 pb-0.5 sm:pb-1">
        <h3 className="text-[10px] sm:text-[11px] font-semibold text-[var(--text-primary)] truncate">Pipeline</h3>
      </div>
      <div className="flex-1 flex gap-2 min-h-0 overflow-hidden p-2">
        {columns.map((col, i) => (
          <div key={i} className={`flex-1 min-w-0 rounded-lg border ${col.color} p-1.5 flex flex-col`}>
            <div className="flex-shrink-0 flex items-center justify-between mb-1">
              <span className="text-[10px] font-semibold text-[var(--text-secondary)]">{col.title}</span>
              <span className="text-[10px] text-[var(--text-muted)]">{col.deals.length}</span>
            </div>
            <div className="flex-1 space-y-1 overflow-auto">
              {col.deals.map((name, j) => (
                <div key={j} className="rounded bg-white border border-[var(--border-primary)] p-1.5 shadow-sm">
                  <div className="text-[10px] font-medium text-[var(--text-primary)] truncate">{name}</div>
                  <div className="text-[9px] text-[var(--text-muted)]">$12k – $45k</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroDesktopSimulation() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] min-h-[200px] sm:min-h-[280px] bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-primary)] shadow-2xl overflow-visible sm:overflow-hidden group">
      {/* Browser UI Header */}
      <div className="bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80 border border-red-500/30" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/30" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80 border border-emerald-500/30" />
        </div>
        <div className="flex-1 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-md px-3 py-1 text-[11px] text-[var(--text-muted)] flex items-center justify-between min-w-0">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <Chrome className="w-3 h-3 min-w-[12px] shrink-0" />
            <span className="truncate">
              {TABS[activeTab].url}
            </span>
          </div>
          <div className="flex gap-2 shrink-0">
            <div className="w-4 h-4 rounded bg-[var(--accent-light)] flex items-center justify-center border border-[var(--accent)]/30">
              <Layers className="w-2 h-2 text-[var(--accent)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="relative h-full p-3 sm:p-6 md:p-8 bg-[var(--bg-primary)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full rounded-lg overflow-hidden flex flex-col"
          >
            {activeTab === 0 && <CRMMockup />}
            {activeTab === 1 && <MeetMockup />}
            {activeTab === 2 && <SpreadsheetMockup />}
          </motion.div>
        </AnimatePresence>

        {/* Floating Notic PiP – top bar with logo, tabs, rendered note content */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute top-2 right-2 sm:top-12 sm:right-12 sm:translate-y-2 w-[260px] sm:w-[300px] md:w-[340px] max-w-[calc(100%-1rem)] rounded-lg sm:rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-primary)] flex flex-col min-h-[240px] sm:min-h-[280px] md:min-h-[320px]"
        >
          {/* Top bar with logo (reused for branding) */}
          <div className="flex-shrink-0 flex items-center justify-between px-3 py-2.5 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)]">
            <div className="flex items-center gap-2 min-w-0">
              <Logo compact containerClassName="w-7 h-7 shrink-0" size={16} />
              <span className="text-[13px] font-semibold text-[var(--text-primary)] truncate">
                Notic
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                aria-label="Maximize"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* pip-tabs: tab bar; light: bg-tertiary */}
          <div className="flex-shrink-0 flex items-end gap-0 px-2 pt-2 bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)] min-w-0">
            <div className="flex items-center gap-1.5 py-1.5 pl-2 pr-3 rounded-t-lg min-w-0 max-w-[180px] text-[13px] font-medium text-[var(--text-primary)] bg-[var(--bg-primary)] border-b-2 border-[var(--accent)] shadow-[0_1px_0_0_var(--bg-primary)] mb-[-1px]">
              <span className="w-2 h-2 rounded-sm bg-[var(--accent)] shrink-0" aria-hidden />
              <span className="truncate">Quick list</span>
            </div>
            <div className="w-px h-5 self-center bg-[var(--border-primary)] shrink-0" aria-hidden />
            <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-t-lg min-w-0 max-w-[120px] text-[13px] font-medium text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] mb-[-1px]">
              <span className="truncate">Ideas</span>
            </div>
            <button
              type="button"
              className="ml-1 p-2 rounded-t-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] shrink-0 mb-[-1px]"
              aria-label="New note"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* pip-content: editor area – minimal, universal note */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 px-4 py-4 overflow-auto">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                To do
              </p>
              <ul className="list-none pl-0 space-y-2.5">
                <li className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-[4px] border border-[var(--border-primary)] bg-[var(--bg-primary)] shrink-0 mt-0.5" aria-hidden />
                  <span className="text-[13px] text-[var(--text-secondary)] leading-snug">Send proposal</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-[4px] border border-[var(--accent)] bg-[var(--accent)] shrink-0 mt-0.5 flex items-center justify-center" aria-hidden>
                    <Check className="w-2 h-2 text-white stroke-[2.5]" />
                  </span>
                  <span className="text-[13px] text-[var(--text-muted)] leading-snug line-through">Reply to Anna</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-[4px] border border-[var(--border-primary)] bg-[var(--bg-primary)] shrink-0 mt-0.5" aria-hidden />
                  <span className="text-[13px] text-[var(--text-secondary)] leading-snug">Schedule call</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
