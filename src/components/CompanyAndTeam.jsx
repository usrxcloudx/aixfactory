import React from 'react';
import { Mail, MapPin, Globe, Sparkles, Cpu, Award } from 'lucide-react';

export default function CompanyAndTeam({ onOpenWaitlist }) {
  return (
    <section id="about" className="py-24 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold">
              <Cpu className="w-4 h-4" />
              About AIXFACTORY
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pioneering Ambient Intelligence for the Physical World
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              <strong>AIXFACTORY</strong> is an AI systems and physical-intelligence research lab founded to bring autonomous generative agents into daily family life. 
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              We believe the next frontier of artificial intelligence is not another chat window, but ambient agents that interact with cameras, sensors, school portals, and home appliances. By leveraging Anthropic's Claude 3.5 Sonnet, we are turning the concept of a real-world Jarvis or Alfred into everyday reality.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div>
                <div className="text-2xl font-bold font-mono text-white">2025</div>
                <div className="text-xs text-slate-400 mt-0.5">Founded & Incorporated</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-indigo-400">Claude 3.5</div>
                <div className="text-xs text-slate-400 mt-0.5">Core Foundation Model</div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Headquarters: Hanoi, Vietnam • Global Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Founder Contact: <strong>xcloudx@aixfactory.io.vn</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-400" />
                <span>Primary Web Gateway: <strong>https://aixfactory.io.vn</strong></span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
            <div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-[10px] font-bold text-white uppercase tracking-wider shadow-lg">
              Founder Edition
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Join the Early Pioneer Cohort</h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              We are currently onboarding selected early-adopter homes, smart apartment developments, and educational partners for the Aura Butler closed pilot.
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-6 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-indigo-300 font-semibold">
                <Award className="w-4 h-4 text-indigo-400" />
                <span>What's included in the Founder Pilot:</span>
              </div>
              <ul className="text-slate-400 space-y-1.5 list-disc list-inside text-[11px]">
                <li>Aura Edge Gateway hardware node with Matter/Zigbee antennas</li>
                <li>Door Vision Webcam integration & facial calibration</li>
                <li>Custom school portal (SIS) and EHR medical bridge setup</li>
                <li>Direct support from AIXFACTORY engineering team</li>
              </ul>
            </div>

            <button
              onClick={onOpenWaitlist}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-indigo-500 transition-all shadow-lg shadow-indigo-600/30 cursor-pointer"
            >
              Request Founder Access
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
