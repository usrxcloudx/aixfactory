import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';

export default function WaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Homeowner');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl bg-[#0d111a]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Founder Beta Application
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              Experience the Future of Family Living
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Join early families piloting Aura Butler powered by Claude 3.5 Sonnet. Receive our technical architecture whitepaper and invite code.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Son Chu"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com or personal email"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  I am applying as:
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Homeowner">Homeowner / Family Pilot</option>
                  <option value="Investor">Investor / Venture Capital</option>
                  <option value="Anthropic Reviewer">Anthropic / Claude Partner</option>
                  <option value="Smart Home Integrator">Smart Home Integrator</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-indigo-500 transition-all shadow-lg shadow-indigo-600/30 cursor-pointer"
              >
                Submit Application
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Application Received!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Thank you, <strong>{name || 'Friend'}</strong>. We have logged your request. Our founder team will reach out to <strong>{email}</strong> shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
