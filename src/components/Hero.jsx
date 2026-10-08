import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Camera, GraduationCap, HeartPulse, Home, Smartphone, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenWaitlist }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden glow-gradient">
      {/* Background glow orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-pink-500/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-600/10 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-300">
            AIXFACTORY introduces <span className="text-indigo-400 font-bold">Aura Butler</span>
          </span>
          <span className="text-xs text-slate-500">•</span>
          <span className="text-xs text-amber-300 font-medium flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Built on Anthropic Claude 3.5 Sonnet
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Your Home, Orchestrated. <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            A True Real-World AI Butler
          </span> <br className="hidden sm:inline" />
          for the Whole Family.
        </h1>

        {/* Subtitle */}
        <p className="mt-7 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Not just another chatbot. <strong>AIXFACTORY</strong> bridges multimodal door vision, children's school report cards, family medical telemetry, and physical IoT devices into one proactive agent. 
          Managed seamlessly through your phone and ambient home voice.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-indigo-500 transition-all shadow-xl shadow-indigo-600/30 hover:scale-[1.02] cursor-pointer"
          >
            Explore Interactive Demo
            <ArrowRight className="w-5 h-5" />
          </a>
          <button
            onClick={onOpenWaitlist}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all hover:text-white cursor-pointer"
          >
            Apply for Founder Beta
          </button>
        </div>

        {/* 4 Pillars Quick Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          {/* Card 1 */}
          <div className="p-4 rounded-2xl glass-panel border border-slate-800/80 hover:border-indigo-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-3">
              <Camera className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="text-sm font-bold text-white">Door Vision & Welcome</h3>
            <p className="text-xs text-slate-400 mt-1">
              Webcam facial recognition greets you by name & briefs daily family events.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-2xl glass-panel border border-slate-800/80 hover:border-purple-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-sm font-bold text-white">Kids Academic Companion</h3>
            <p className="text-xs text-slate-400 mt-1">
              Syncs school portals & grades; proactively triggers study & exam reminders.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-4 rounded-2xl glass-panel border border-slate-800/80 hover:border-pink-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center mb-3">
              <HeartPulse className="w-5 h-5 text-pink-400" />
            </div>
            <h3 className="text-sm font-bold text-white">Family Health Telemetry</h3>
            <p className="text-xs text-slate-400 mt-1">
              Tracks vitals, smartwatches & elder medication schedules with smart alerts.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-4 rounded-2xl glass-panel border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
              <Home className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-sm font-bold text-white">Real IoT Automation</h3>
            <p className="text-xs text-slate-400 mt-1">
              Autonomous Matter & Zigbee control for HVAC, smart locks, lights & robots.
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Anthropic Claude 3.5 Sonnet Reasoning</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Matter & Zigbee Compatible</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Local Edge Privacy Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Mobile-First Interface (iOS & Android)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
