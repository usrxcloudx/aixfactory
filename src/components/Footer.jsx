import React from 'react';
import { Cpu, Mail, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenWaitlist }) {
  return (
    <footer className="bg-[#07090e] border-t border-slate-900 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white font-mono">AIXFACTORY</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Pioneering ambient family intelligence. Bridging computer vision, education, health telemetry, and physical IoT into an autonomous AI butler powered by Claude.
            </p>
            <div className="text-[11px] text-slate-400 pt-1 font-mono">
              Primary domain: <span className="text-indigo-400">aixfactory.io.vn</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Product</h4>
            <ul className="space-y-2">
              <li><a href="#demo" className="hover:text-white transition-colors">Interactive Demo</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Door Vision & Greeting</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Academic Companion</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Health Telemetry</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">IoT Orchestration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company & Contact</h4>
            <ul className="space-y-2">
              <li><a href="#why-claude" className="hover:text-white transition-colors">Built on Claude 3.5</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Technical Architecture</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Local-Edge Privacy</a></li>
              <li>
                <a href="mailto:xcloudx@aixfactory.io.vn" className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
                  xcloudx@aixfactory.io.vn
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} AIXFACTORY Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Powered by Anthropic Claude 3.5 Sonnet</span>
            <span>Deployed on Cloudflare</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
