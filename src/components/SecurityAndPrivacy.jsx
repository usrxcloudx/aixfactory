import React from 'react';
import { ShieldCheck, Lock, EyeOff, Server, HardDrive, FileCheck } from 'lucide-react';

export default function SecurityAndPrivacy() {
  return (
    <section id="privacy" className="py-24 bg-[#090b10] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <ShieldCheck className="w-4 h-4" />
            Security & Zero-Retention
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Family Privacy is Absolute
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            We operate inside the most sacred space on earth: your family home. We built Aura Butler from the ground up with local-edge processing and cryptographic guarantees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <HardDrive className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Local-Edge Tokenization</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Camera feeds never leave your local network unencrypted. The local Aura Edge gateway extracts anonymized semantic vectors before sending high-level reasoning prompts to Claude API.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <EyeOff className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Zero Model Training</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Under Anthropic's commercial terms, your family photos, conversations, children's test scores, and medical telemetry are strictly excluded from AI model training.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-400 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">End-to-End Encryption</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              AES-256 at rest and TLS 1.3 in transit. All IoT actuation commands require cryptographic handshakes, ensuring no malicious actors can compromise physical home security.
            </p>
          </div>

        </div>

        <div className="mt-12 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <FileCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Compliance: Designed for HIPAA Electronic Protected Health Information (ePHI) & GDPR Article 9 standards.</span>
          </div>
          <span className="font-mono text-slate-500 shrink-0">v2.4 Audit Passed</span>
        </div>

      </div>
    </section>
  );
}
