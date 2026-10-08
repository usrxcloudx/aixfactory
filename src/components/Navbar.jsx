import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Cpu, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenWaitlist }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-800/80 bg-[#090b10]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-[1px] shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-[#0d111a] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-6 h-6 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white font-mono">AIXFACTORY</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Aura Butler
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Autonomous Family Intelligence</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#demo" className="hover:text-indigo-400 transition-colors">Live Demo</a>
            <a href="#capabilities" className="hover:text-indigo-400 transition-colors">Capabilities</a>
            <a href="#why-claude" className="flex items-center gap-1.5 text-amber-300/90 hover:text-amber-200 transition-colors">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Why Claude
            </a>
            <a href="#architecture" className="hover:text-indigo-400 transition-colors">Architecture</a>
            <a href="#privacy" className="hover:text-indigo-400 transition-colors">Privacy & Edge</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          </div>

          {/* CTA & Status */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Claude 3.5 Sonnet Core
            </div>
            <button
              onClick={onOpenWaitlist}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-500/25 cursor-pointer hover:shadow-indigo-500/40"
            >
              Request Beta
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-3 bg-[#0d111a]/95 border-b border-slate-800">
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Live Demo
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Capabilities
          </a>
          <a
            href="#why-claude"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-amber-300 hover:bg-slate-800"
          >
            Why Claude
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Architecture
          </a>
          <a
            href="#privacy"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Privacy & Security
          </a>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenWaitlist(); }}
            className="w-full mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500"
          >
            Request Beta Access
          </button>
        </div>
      )}
    </nav>
  );
}
