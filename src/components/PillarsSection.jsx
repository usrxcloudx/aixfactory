import React from 'react';
import { Camera, GraduationCap, HeartPulse, Home, Smartphone, Check, Sparkles } from 'lucide-react';

export default function PillarsSection() {
  return (
    <section id="capabilities" className="py-24 bg-[#0a0d14] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Designed for Real Family Life
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Smart homes today are fragmented silos. Aura Butler unifies safety, learning, health, and physical appliances into one cohesive intelligence.
          </p>
        </div>

        {/* Pillar 1: Door Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold font-mono">
              PILLAR 01 // COMPUTER VISION
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Door Vision & Personalized Warm Welcome
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Standard smart doorbells send annoying motion alerts. Aura Butler utilizes computer vision and Claude 3.5 Sonnet to recognize family members, inspect situational context (carrying groceries, returning late, fatigue), and greet them verbally by name with a contextual daily brief.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong>Instant Facial Verification:</strong> Welcomes verified family members by name and unlocks the smart lock before you reach the handle.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong>Package Delivery Handling:</strong> Identifies couriers, directs them to the parcel drop box, and unlocks temporary storage compartments.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong>Gentle Daily Audio Brief:</strong> Summarizes family progress (kids' homework, spouse schedule, weather) upon crossing the threshold.</span>
              </li>
            </ul>
          </div>
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl bg-gradient-to-br from-indigo-950/20 to-slate-900/40">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-indigo-400 font-mono">
                <span>RTSP Stream // Claude Vision Analysis</span>
                <span>200ms Latency</span>
              </div>
              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-900/50 text-xs text-slate-200 italic">
                "Chào anh Sơn, mừng anh về nhà! Nhiệt độ phòng khách đã được bật 24°C, cháu Alex đã làm xong bài tập Toán lúc 5:40 chiều..."
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 font-mono">
                <div className="p-2 rounded bg-slate-900">Face: Son Chu (99.8%)</div>
                <div className="p-2 rounded bg-slate-900">Lock: Yale Matter Open</div>
                <div className="p-2 rounded bg-slate-900">Scene: Homecoming</div>
                <div className="p-2 rounded bg-slate-900">AC: Daikin 24°C Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 2: Academic Companion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl bg-gradient-to-br from-purple-950/20 to-slate-900/40">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-purple-400 font-mono">
                <span>SIS Webhook // Gradebook Telemetry</span>
                <span>Active Sync</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900 flex justify-between">
                  <span className="text-slate-300">Alex - Physics Midterm</span>
                  <span className="text-amber-400 font-bold">In 3 Days (Score: 6.8/10)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 flex justify-between">
                  <span className="text-slate-300">Alex - Math Homework #14</span>
                  <span className="text-emerald-400 font-bold">Submitted (Score: 9.2/10)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 flex justify-between">
                  <span className="text-slate-300">Mia - Reading Chapter 5</span>
                  <span className="text-emerald-400 font-bold">100% Completed</span>
                </div>
              </div>
              <div className="p-3 bg-purple-950/40 border border-purple-900/50 rounded-xl text-xs text-purple-200">
                Scheduled 45-min study block for Alex at 7:30 PM. Focus lamp set to 4000K. TV paused.
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold font-mono">
              PILLAR 02 // EDUCATION & HABITS
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Children's Academic Companion & Habit Orchestrator
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Parents rarely have time to check multiple school portals every evening. Aura Butler connects directly with electronic gradebooks (VnEdu, SIS, Google Classroom), monitors exam schedules, and takes proactive physical actions to help children succeed without shouting.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span><strong>Autonomous Grade Monitoring:</strong> Reads report cards, identifies learning gaps, and flags upcoming tests before they become emergencies.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span><strong>Physical Focus Mode:</strong> When study time arrives, Aura dims entertainment displays and sets optimal 4000K study lighting.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span><strong>AI Study Breakdown:</strong> Generates tailored practice exercises via Claude to help kids overcome specific weak concepts.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pillar 3: Family Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-bold font-mono">
              PILLAR 03 // HEALTH & WELLNESS
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Non-Invasive Family Health & Vital Telemetry
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Health care at home should be continuous, not reactive. Aura Butler aggregates smartwatches, blood pressure cuffs, and sleep telemetry into a family electronic health record (EHR), watching over elderly relatives and active adults alike.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <span><strong>Elderly Medication Safeguard:</strong> Tracks daily medication times; sounds ambient verbal reminders if morning or evening pills are missed.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <span><strong>Continuous Vital Analysis:</strong> Analyzes blood pressure and heart rate trends over weeks, alerting to subtle cardiovascular shifts.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <span><strong>Physician-Ready Reports:</strong> Automatically exports clear medical briefs for family doctor checkups.</span>
              </li>
            </ul>
          </div>
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl bg-gradient-to-br from-pink-950/20 to-slate-900/40">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-pink-400 font-mono">
                <span>EHR Telemetry // HIPAA Encrypted</span>
                <span>Active Monitor</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-slate-400">Grandma (Age 72)</div>
                  <div className="text-lg font-bold text-white mt-1">124 / 81</div>
                  <div className="text-[10px] text-emerald-400">BP Optimal • Meds Taken</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-slate-400">Father (Age 39)</div>
                  <div className="text-lg font-bold text-white mt-1">HRV 58 ms</div>
                  <div className="text-[10px] text-indigo-400">Sleep: 86% • 8.4k Steps</div>
                </div>
              </div>
              <div className="p-3 bg-pink-950/40 border border-pink-900/50 rounded-xl text-xs text-pink-200">
                14-Day Cardiovascular Stability: 96/100. Generated summary ready for Thursday's cardiology checkup.
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 4: Real IoT Orchestration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl bg-gradient-to-br from-emerald-950/20 to-slate-900/40">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs font-mono">
              <div className="text-emerald-400 text-xs">Matter & Zigbee Autonomous Routine //</div>
              <div className="p-3 rounded-lg bg-slate-900 text-slate-300">
                &gt; Claude.execute_tool("set_climate", &#123; zone: "living_room", temp: 24.0 &#125;)<br />
                &gt; Claude.execute_tool("matter_unlock", &#123; device: "yale_front_door" &#125;)<br />
                &gt; Claude.execute_tool("hue_scene", &#123; preset: "warm_welcome_2700k" &#125;)<br />
                &gt; Claude.execute_tool("synthesize_voice", &#123; voice: "aura_vn_natural" &#125;)
              </div>
              <div className="text-slate-400 text-[11px]">
                Execution Latency: 84ms • Zero Cloud Relay for Hardware
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold font-mono">
              PILLAR 04 // PHYSICAL EMBODIMENT
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              True Physical World Embodiment
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Software alone is not a butler. Aura Butler bridges AI reasoning directly into physical reality through Matter, Zigbee, and Home Assistant. It operates locks, climate systems, lighting arrays, robot vacuums, and air purifiers with deterministic tool precision.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>No More Brittle If-Then Rules:</strong> Aura understands natural human intentions like "Make the house ready for dinner" and actuates 10+ devices simultaneously.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Universal Protocol Compatibility:</strong> Works natively with Matter, Zigbee, Apple HomeKit, and Home Assistant hardware.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Energy & Cost Optimization:</strong> Coordinates solar generation, battery storage, and dynamic AC cycles to reduce electricity bills by up to 28%.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
