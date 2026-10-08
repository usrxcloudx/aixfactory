import React from 'react';
import { Sparkles, Eye, Brain, Wrench, Shield, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function WhyClaudeArchitecture() {
  return (
    <section id="why-claude" className="py-24 relative overflow-hidden bg-[#090b10]">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-indigo-500/10 blur-[140px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Foundation Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why We Build on Anthropic Claude
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            A real-world home butler cannot afford hallucinations or delayed vision parsing. 
            Anthropic Claude 3.5 Sonnet provides the precision, safety, and reasoning required to touch physical reality.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Pillar 1: Multimodal Vision */}
          <div className="glass-panel rounded-3xl p-7 border border-slate-800 hover:border-amber-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Claude 3.5 Sonnet Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Ultra-accurate scene comprehension for door webcams and documents. Claude differentiates family members from strangers in varied lighting, detects if a package was dropped, and performs OCR on handwritten school homework or printed medical prescriptions.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-xs text-amber-300/80 flex items-center gap-2 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              Sub-second visual context inference
            </div>
          </div>

          {/* Pillar 2: 200k Longitudinal Memory */}
          <div className="glass-panel rounded-3xl p-7 border border-slate-800 hover:border-purple-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">200K Long-Context Memory</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Family life is cumulative. Claude’s 200,000-token window holds months of children’s academic progress, multi-week vital statistics, and physical home habits without catastrophic forgetting or lost nuance.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-xs text-purple-300/80 flex items-center gap-2 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
              Episodic family memory preservation
            </div>
          </div>

          {/* Pillar 3: Tool Use & Actuation */}
          <div className="glass-panel rounded-3xl p-7 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Deterministic Tool Use</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Direct connection to Matter and Home Assistant APIs. Claude's industry-leading function-calling reliability ensures smart locks, HVAC, and power circuits are actuated with zero drift and strict safety guardrails.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-xs text-indigo-300/80 flex items-center gap-2 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              40+ verified hardware tool integrations
            </div>
          </div>

          {/* Pillar 4: Claude Code & Engineering Speed */}
          <div className="glass-panel rounded-3xl p-7 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Engineered with Claude Code</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our engineering team builds, simulates, and benchmarks autonomous edge agents using Claude Code CLI. Claude Code accelerates firmware driver authoring, regression test suites, and edge protocol bridges by 5x.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-xs text-emerald-300/80 flex items-center gap-2 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Agentic developer velocity
            </div>
          </div>

          {/* Pillar 5: Safety & Constitutional AI */}
          <div className="glass-panel rounded-3xl p-7 border border-slate-800 hover:border-pink-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Constitutional AI Safety</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              In-home AI interacts with children and health records. Anthropic’s Constitutional AI guarantees polite, encouraging, and harmless interactions, while refusing dangerous physical actions requested by unauthorized third parties.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-xs text-pink-300/80 flex items-center gap-2 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
              Family-first safety principles
            </div>
          </div>

          {/* Pillar 6: Zero-Retention API Privacy */}
          <div className="glass-panel rounded-3xl p-7 border border-slate-800 hover:border-blue-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Zero Data Retention</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Anthropic’s strict enterprise privacy policy ensures family health data, report cards, and video telemetry are never used for model training. Paired with AIXFACTORY’s local edge tokenizer for total family privacy.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-xs text-blue-300/80 flex items-center gap-2 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              HIPAA & GDPR architectural alignment
            </div>
          </div>

        </div>

        {/* Technical Architecture Block */}
        <div id="architecture" className="mt-16 glass-panel rounded-3xl p-8 border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">System Architecture: Edge-to-Claude Pipeline</h3>
            <p className="text-xs text-slate-400 mt-2">
              How high-bandwidth video streams and sensitive health telemetry are securely mediated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">Layer 1: Sensors</div>
              <div className="text-sm font-bold text-white">In-Home Hardware</div>
              <p className="text-[11px] text-slate-400 mt-2">
                Door Webcams (RTSP), Zigbee Sensors, Apple Watch Vitals, SIS School Webhooks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">Layer 2: Local Edge</div>
              <div className="text-sm font-bold text-white">Aura Edge Box</div>
              <p className="text-[11px] text-slate-400 mt-2">
                Local biometric tokenization, on-premise video buffering, privacy scrubbing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-amber-500/40 relative">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">Layer 3: Intelligence</div>
              <div className="text-sm font-bold text-white">Claude 3.5 Sonnet</div>
              <p className="text-[11px] text-slate-300 mt-2">
                Long-context reasoning, multimodal visual parsing, tool orchestration, natural voice.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">Layer 4: Action</div>
              <div className="text-sm font-bold text-white">Physical Actuation</div>
              <p className="text-[11px] text-slate-400 mt-2">
                Matter door unlocks, HVAC climate adjustment, voice greeting, mobile push alert.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
