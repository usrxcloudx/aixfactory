import React, { useState } from 'react';
import { 
  Camera, GraduationCap, HeartPulse, Home, Smartphone, 
  Volume2, Lock, Unlock, CheckCircle2, AlertTriangle, 
  Play, RefreshCw, Send, Sparkles, UserCheck, BookOpen, Clock, Battery, Wifi
} from 'lucide-react';

export default function InteractiveButlerDemo() {
  const [activeTab, setActiveTab] = useState('door');

  // Door Vision State
  const [doorScenario, setDoorScenario] = useState('homeowner'); // 'homeowner' | 'mother' | 'courier' | 'stranger'
  const [doorLocked, setDoorLocked] = useState(false);

  // Education State
  const [selectedChild, setSelectedChild] = useState('alex');
  const [studyReminderSent, setStudyReminderSent] = useState(false);

  // Health State
  const [healthAlertActive, setHealthAlertActive] = useState(false);

  // IoT State
  const [devices, setDevices] = useState({
    ac: true,
    acTemp: 24,
    lights: true,
    vacuum: false,
    purifier: true,
  });

  // Mobile Chat State
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'user',
      text: "How's the house looking right now?",
      time: "6:14 PM"
    },
    {
      sender: 'butler',
      text: "Everything is peaceful! Front porch camera detected Son arriving 2 minutes ago. Living room AC is cooled to 24°C. Alex has finished his math homework, and grandma's blood pressure (124/81) is in the optimal range.",
      time: "6:14 PM"
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSendChat = (textToSend) => {
    const prompt = textToSend || chatInput;
    if (!prompt.trim()) return;

    const newMsg = { sender: 'user', text: prompt, time: 'Just now' };
    setChatMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setChatInput('');

    setTimeout(() => {
      let reply = "Understood. I am orchestrating the physical devices and updating the family dashboard.";
      const lower = prompt.toLowerCase();
      if (lower.includes('kid') || lower.includes('con') || lower.includes('học') || lower.includes('alex') || lower.includes('mia')) {
        reply = "Alex is currently in his room reviewing Physics for his Thursday midterm. Mia has completed her reading assignment. I've set ambient study lighting in the study room to 4000K.";
      } else if (lower.includes('package') || lower.includes('hàng') || lower.includes('cửa') || lower.includes('door')) {
        reply = "A DHL package was safely received at 2:40 PM. The delivery courier placed it into the secure package drop after camera verification.";
      } else if (lower.includes('health') || lower.includes('sức khỏe') || lower.includes('grandma') || lower.includes('bà')) {
        reply = "Grandma's morning blood pressure was 124/81 mmHg with 68 bpm resting heart rate. She took her Amlodipine on schedule at 8:12 AM. No anomalies detected in the past 48 hours.";
      } else if (lower.includes('movie') || lower.includes('phim') || lower.includes('dinner') || lower.includes('tối')) {
        reply = "Activating Cinema Scene: Dimming living room lights to 15% warm amber, setting Daikin AC to silent mode (23.5°C), and routing home audio to soundbar.";
      }
      setChatMessages((prev) => [...prev, { sender: 'butler', text: reply, time: 'Just now' }]);
    }, 700);
  };

  return (
    <section id="demo" className="py-24 relative bg-[#0a0d14] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See Aura Butler in Action
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Test the live capabilities powered by Claude 3.5 Sonnet: Door computer vision, children's academic monitoring, family health telemetry, and autonomous IoT control.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveTab('door')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'door'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500'
                : 'glass-panel text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            <Camera className="w-4 h-4 text-indigo-400" />
            1. Door Vision & Greeting
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'education'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-500'
                : 'glass-panel text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-purple-400" />
            2. Kids School Companion
          </button>

          <button
            onClick={() => setActiveTab('health')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'health'
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30 border border-pink-500'
                : 'glass-panel text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            <HeartPulse className="w-4 h-4 text-pink-400" />
            3. Family Health Telemetry
          </button>

          <button
            onClick={() => setActiveTab('iot')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'iot'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 border border-emerald-500'
                : 'glass-panel text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            <Home className="w-4 h-4 text-emerald-400" />
            4. IoT Orchestration
          </button>

          <button
            onClick={() => setActiveTab('mobile')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'mobile'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30 border border-amber-500'
                : 'glass-panel text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            <Smartphone className="w-4 h-4 text-amber-400" />
            5. Mobile Chat Interface
          </button>
        </div>

        {/* Tab 1: Door Vision & Welcome */}
        {activeTab === 'door' && (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Simulated Camera Feed (Left) */}
              <div className="lg:col-span-7 relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 aspect-video flex flex-col justify-between p-4 shadow-inner">
                {/* Camera Top Bar */}
                <div className="flex items-center justify-between text-xs text-slate-400 z-10 font-mono">
                  <div className="flex items-center gap-2 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <span>LIVE RTSP // FRONT_DOOR_CAM_01</span>
                  </div>
                  <div className="bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md">
                    FPS: 30 • 1080p • Claude Vision Edge
                  </div>
                </div>

                {/* Simulated Visual Center Target */}
                <div className="relative flex-1 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Bounding Box Simulation */}
                  <div className="relative border-2 border-indigo-400 rounded-xl p-6 bg-indigo-500/10 backdrop-blur-xs max-w-xs w-full text-center shadow-lg shadow-indigo-500/20 animate-float-slow">
                    <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-[11px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                      {doorScenario === 'homeowner' && 'Target: Son Chu (Homeowner)'}
                      {doorScenario === 'mother' && 'Target: Thao (Homeowner)'}
                      {doorScenario === 'courier' && 'Target: Amazon Logistics Courier'}
                      {doorScenario === 'stranger' && 'Target: Unrecognized Guest'}
                    </div>

                    <div className="w-20 h-20 rounded-full mx-auto mb-3 bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                      {doorScenario === 'homeowner' && 'SC'}
                      {doorScenario === 'mother' && 'TC'}
                      {doorScenario === 'courier' && '📦'}
                      {doorScenario === 'stranger' && '?'}
                    </div>

                    <p className="text-sm font-semibold text-white">
                      {doorScenario === 'homeowner' && 'Son Chu (Head of Household)'}
                      {doorScenario === 'mother' && 'Thao Chu (Family Member)'}
                      {doorScenario === 'courier' && 'Delivery Agent #4829'}
                      {doorScenario === 'stranger' && 'Unknown Individual'}
                    </p>

                    <div className="mt-2 text-[11px] text-slate-300 font-mono space-y-0.5">
                      <div className="flex justify-between">
                        <span>Match Confidence:</span>
                        <span className="text-emerald-400 font-bold">
                          {doorScenario === 'stranger' ? '0.0% (No match)' : '99.8% Verified'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Physical Access:</span>
                        <span className={doorScenario === 'stranger' ? 'text-amber-400' : 'text-emerald-400'}>
                          {doorScenario === 'stranger' ? 'Requires Approval' : 'Auto-Authorized'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Camera Bottom Status Bar */}
                <div className="flex items-center justify-between z-10 text-xs">
                  <div className="flex items-center gap-2 bg-black/70 px-3 py-1.5 rounded-lg text-slate-300">
                    {doorLocked ? (
                      <>
                        <Lock className="w-3.5 h-3.5 text-amber-400" />
                        <span>Yale Smart Lock: <strong>LOCKED</strong></span>
                      </>
                    ) : (
                      <>
                        <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Yale Smart Lock: <strong>UNLOCKED (Matter)</strong></span>
                      </>
                    )}
                  </div>
                  <div className="text-slate-400 font-mono text-[11px]">
                    Latency: 142ms to Edge
                  </div>
                </div>
              </div>

              {/* Butler Intelligence & Speech (Right) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400" />
                    Proactive Arrival Briefing
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    When you step in front of the door, Claude synthesizes camera vision, IoT context, and family status into a personalized verbal greeting.
                  </p>
                </div>

                {/* Scenario Selectors */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Simulate Visitor:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => { setDoorScenario('homeowner'); setDoorLocked(false); }}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                        doorScenario === 'homeowner'
                          ? 'bg-indigo-600/30 border-indigo-500 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      👤 Son (Homeowner)
                    </button>
                    <button
                      onClick={() => { setDoorScenario('mother'); setDoorLocked(false); }}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                        doorScenario === 'mother'
                          ? 'bg-indigo-600/30 border-indigo-500 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      👩 Thao (Spouse)
                    </button>
                    <button
                      onClick={() => { setDoorScenario('courier'); setDoorLocked(false); }}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                        doorScenario === 'courier'
                          ? 'bg-indigo-600/30 border-indigo-500 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      📦 Delivery Courier
                    </button>
                    <button
                      onClick={() => { setDoorScenario('stranger'); setDoorLocked(true); }}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                        doorScenario === 'stranger'
                          ? 'bg-indigo-600/30 border-indigo-500 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      ❓ Unknown Visitor
                    </button>
                  </div>
                </div>

                {/* Generated Voice Greeting Box */}
                <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold">
                      <Volume2 className="w-4 h-4 text-indigo-400 animate-pulse" />
                      <span>Butler Ambient Voice Synthesizer</span>
                    </div>
                    <span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded">
                      Natural Vietnamese / English
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 italic leading-relaxed bg-slate-900/80 p-3 rounded-xl border border-indigo-900/30">
                    {doorScenario === 'homeowner' && (
                      `"Chào anh Sơn, mừng anh đã về nhà! Nhiệt độ phòng khách đã được bật sẵn 24°C, cháu Alex đã hoàn thành bài tập Toán lúc 5:40 chiều và bà đã uống thuốc huyết áp đúng giờ. Chúc anh buổi tối thoải mái!"`
                    )}
                    {doorScenario === 'mother' && (
                      `"Chào chị Thảo, mừng chị về nhà! Robot hút bụi đã dọn dẹp sạch sàn nhà, bồn tắm đã được chuẩn bị nước ấm theo thói quen của chị. Các con đang ngoan ngoãn ôn bài trong phòng học."`
                    )}
                    {doorScenario === 'courier' && (
                      `"Xin chào nhân viên giao hàng! Vui lòng để kiện hàng vào tủ nhận đồ thông minh bên tay phải. Cửa tủ số 2 đã được tự động mở khóa tạm thời trong 60 giây. Cảm ơn bạn!"`
                    )}
                    {doorScenario === 'stranger' && (
                      `"Xin chào quý khách, hiện tại chủ nhà đang bận. Bạn có muốn để lại tin nhắn thoại kèm hình ảnh để quản gia gửi trực tiếp qua ứng dụng điện thoại cho chủ nhà không?"`
                    )}
                  </p>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                    <span>Physical Action:</span>
                    <span className="text-emerald-400 font-medium">
                      {doorScenario === 'stranger' ? 'Door Remains Locked' : 'Auto Unlocking + Foyer Lighting 2700K'}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Kids Education Companion */}
        {activeTab === 'education' && (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left: School Portal Sync View */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-purple-400" />
                      Live Academic Portal Sync (SIS / Sổ liên lạc điện tử)
                    </h3>
                    <p className="text-xs text-slate-400">
                      Claude securely syncs school notifications, homework assignments & test scores.
                    </p>
                  </div>
                  
                  {/* Child Selector */}
                  <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                    <button
                      onClick={() => setSelectedChild('alex')}
                      className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                        selectedChild === 'alex' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Alex (Grade 8)
                    </button>
                    <button
                      onClick={() => setSelectedChild('mia')}
                      className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                        selectedChild === 'mia' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Mia (Grade 4)
                    </button>
                  </div>
                </div>

                {/* Gradebook Card */}
                <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                    <span>Subject / Module</span>
                    <span>Recent Score / Status</span>
                  </div>

                  {selectedChild === 'alex' ? (
                    <>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xs">M</span>
                          <div>
                            <div className="text-white font-medium">Mathematics (Algebra II)</div>
                            <div className="text-[11px] text-slate-400">Homework #14 Completed on time</div>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-emerald-400">9.2 / 10</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs">E</span>
                          <div>
                            <div className="text-white font-medium">English Literature</div>
                            <div className="text-[11px] text-slate-400">Essay on Hamlet submitted</div>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-emerald-400">8.8 / 10</span>
                      </div>

                      <div className="flex items-center justify-between text-sm bg-purple-950/20 p-2.5 rounded-xl border border-purple-900/40">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-xs">P</span>
                          <div>
                            <div className="text-white font-medium flex items-center gap-2">
                              Physics (Thermodynamics)
                              <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-400 font-bold">
                                Exam in 3 Days
                              </span>
                            </div>
                            <div className="text-[11px] text-amber-400">Last quiz: 6.8 / 10 • Needs practice</div>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-amber-400">6.8 / 10</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">R</span>
                          <div>
                            <div className="text-white font-medium">Reading & Storytelling</div>
                            <div className="text-[11px] text-slate-400">Chapter 5 book review completed</div>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-emerald-400">9.5 / 10</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xs">M</span>
                          <div>
                            <div className="text-white font-medium">Primary Math (Fractions)</div>
                            <div className="text-[11px] text-slate-400">Practicing flashcards daily</div>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-emerald-400">9.0 / 10</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Portal last checked 12 minutes ago via VNedu / Google Classroom API webhook.</span>
                </div>
              </div>

              {/* Right: Claude Academic Tutor Action */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    Autonomous Academic Routine
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Instead of passive report cards, Aura Butler organizes physical focus time and motivates the kids.
                  </p>
                </div>

                {/* AI Butler Intervention Card */}
                <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-800/40 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                      Claude Analysis & Strategy
                    </span>
                    <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono">
                      High Priority
                    </span>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed">
                    <strong>Butler Insight:</strong> "Alex scored 6.8 in Thermodynamics. His midterm exam is on Thursday morning. Claude has isolated the weak topic to <em>Heat Capacity & Entropy formulas</em>."
                  </p>

                  <div className="p-3 bg-slate-900/90 rounded-xl border border-purple-900/50 text-xs space-y-2">
                    <div className="text-purple-300 font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      Scheduled Automation:
                    </div>
                    <ul className="text-slate-300 space-y-1 text-[11px] list-disc list-inside">
                      <li>7:30 PM: Desk lamp turns to 4000K Focus White</li>
                      <li>Smart TV & gaming console disabled for 60 mins</li>
                      <li>Aura Butler ambient voice reminds Alex with 3 Claude practice problems</li>
                      <li>Parent receives progress summary at 8:30 PM</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => setStudyReminderSent(true)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-all cursor-pointer shadow-md shadow-purple-600/30"
                  >
                    {studyReminderSent ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                        Focus Mode & Reminder Triggered!
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Trigger Study Session & Focus Lighting
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Family Health Telemetry */}
        {activeTab === 'health' && (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left: Health Dashboard */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <HeartPulse className="w-5 h-5 text-pink-400" />
                      Family Vital Telemetry & EHR
                    </h3>
                    <p className="text-xs text-slate-400">
                      Non-invasive monitoring via Apple Watch, smart scale & Omron blood pressure monitor.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full border border-pink-500/20">
                    HIPAA Encrypted
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Grandma Card */}
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-xs">B</div>
                        <span className="text-sm font-bold text-white">Grandma (Age 72)</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono">Stable</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between p-2 rounded-lg bg-slate-900">
                        <span className="text-slate-400">Blood Pressure:</span>
                        <span className="font-mono font-bold text-white">124 / 81 mmHg</span>
                      </div>
                      <div className="flex justify-between p-2 rounded-lg bg-slate-900">
                        <span className="text-slate-400">Resting Pulse:</span>
                        <span className="font-mono font-bold text-white">68 bpm</span>
                      </div>
                      <div className="flex justify-between p-2 rounded-lg bg-slate-900">
                        <span className="text-slate-400">Morning Meds:</span>
                        <span className="font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Taken (8:12 AM)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Son Card */}
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">S</div>
                        <span className="text-sm font-bold text-white">Son (Age 39)</span>
                      </div>
                      <span className="text-[10px] text-indigo-400 font-mono">Active</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between p-2 rounded-lg bg-slate-900">
                        <span className="text-slate-400">Sleep Score:</span>
                        <span className="font-mono font-bold text-white">86% (7h 14m)</span>
                      </div>
                      <div className="flex justify-between p-2 rounded-lg bg-slate-900">
                        <span className="text-slate-400">HRV (Stress):</span>
                        <span className="font-mono font-bold text-emerald-400">58 ms (Optimal)</span>
                      </div>
                      <div className="flex justify-between p-2 rounded-lg bg-slate-900">
                        <span className="text-slate-400">Daily Steps:</span>
                        <span className="font-mono font-bold text-white">8,420 / 10,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900/50 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>Upcoming Checkup: <strong>Cardiology consultation on Thursday</strong></span>
                  <span className="text-indigo-400 font-medium">Export Clinical PDF</span>
                </div>
              </div>

              {/* Right: Butler Health Intelligence */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-pink-400" />
                    Predictive Health Guardian
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Continuous evaluation of family vitals with proactive early alerts for chronic illness prevention.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-pink-950/30 border border-pink-800/40 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">
                      Claude Clinical Synthesis
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                      All Normal
                    </span>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed">
                    "Analyzing grandma's 14-day cardiovascular trend: Blood pressure variance has dropped by 18% since her morning walk routine began. Medication adherence is 100% this month."
                  </p>

                  <div className="p-3 bg-slate-900/90 rounded-xl border border-pink-900/50 text-xs space-y-2">
                    <div className="text-pink-300 font-semibold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      Emergency & Medication Protocol:
                    </div>
                    <p className="text-slate-300 text-[11px]">
                      If blood pressure exceeds 145 mmHg or evening medication is missed by 9:00 PM, Aura Butler automatically sounds a gentle voice reminder and alerts family on their phones.
                    </p>
                  </div>

                  <button
                    onClick={() => setHealthAlertActive(!healthAlertActive)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-pink-600 hover:bg-pink-500 transition-all cursor-pointer shadow-md shadow-pink-600/30"
                  >
                    {healthAlertActive ? 'Reset Vital Simulation' : 'Simulate Elderly Missed-Medication Alert'}
                  </button>

                  {healthAlertActive && (
                    <div className="p-3 bg-amber-500/20 border border-amber-500/40 rounded-xl text-xs text-amber-200 flex items-center gap-2 animate-bounce">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Alert: Gentle voice reminder broadcasted to grandma's room: "Grandma, it's 8:30 PM, time for your evening calcium tablet."</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 4: Physical IoT Orchestration */}
        {activeTab === 'iot' && (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left: Device Matrix */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Home className="w-5 h-5 text-emerald-400" />
                      Matter & Zigbee Hardware Matrix
                    </h3>
                    <p className="text-xs text-slate-400">
                      24 online devices connected via Home Assistant & Matter Bridge.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
                    Local Zigbee Network
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {/* AC */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    devices.ac ? 'bg-indigo-950/40 border-indigo-500/50' : 'bg-slate-950 border-slate-800'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-white">Daikin AC</span>
                      <button
                        onClick={() => setDevices(d => ({ ...d, ac: !d.ac }))}
                        className={`w-8 h-4 rounded-full transition-colors cursor-pointer relative ${
                          devices.ac ? 'bg-indigo-600' : 'bg-slate-700'
                        }`}
                      >
                        <span className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform ${
                          devices.ac ? 'right-0.5' : 'left-0.5'
                        }`} />
                      </button>
                    </div>
                    <div className="text-2xl font-bold font-mono text-white">{devices.acTemp}°C</div>
                    <div className="text-[10px] text-slate-400 mt-1">Living Room • Inverter</div>
                  </div>

                  {/* Lights */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    devices.lights ? 'bg-amber-950/40 border-amber-500/50' : 'bg-slate-950 border-slate-800'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-white">Philips Hue</span>
                      <button
                        onClick={() => setDevices(d => ({ ...d, lights: !d.lights }))}
                        className={`w-8 h-4 rounded-full transition-colors cursor-pointer relative ${
                          devices.lights ? 'bg-amber-600' : 'bg-slate-700'
                        }`}
                      >
                        <span className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform ${
                          devices.lights ? 'right-0.5' : 'left-0.5'
                        }`} />
                      </button>
                    </div>
                    <div className="text-lg font-bold text-white">2700K Warm</div>
                    <div className="text-[10px] text-slate-400 mt-1">65% Brightness</div>
                  </div>

                  {/* Roborock */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    devices.vacuum ? 'bg-emerald-950/40 border-emerald-500/50' : 'bg-slate-950 border-slate-800'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-white">Robot Vacuum</span>
                      <button
                        onClick={() => setDevices(d => ({ ...d, vacuum: !d.vacuum }))}
                        className={`w-8 h-4 rounded-full transition-colors cursor-pointer relative ${
                          devices.vacuum ? 'bg-emerald-600' : 'bg-slate-700'
                        }`}
                      >
                        <span className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform ${
                          devices.vacuum ? 'right-0.5' : 'left-0.5'
                        }`} />
                      </button>
                    </div>
                    <div className="text-sm font-bold text-white">
                      {devices.vacuum ? 'Cleaning 84m²' : 'Docked (100%)'}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">Roborock S8 Pro</div>
                  </div>

                  {/* Air Purifier */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    devices.purifier ? 'bg-teal-950/40 border-teal-500/50' : 'bg-slate-950 border-slate-800'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-white">Air Purifier</span>
                      <button
                        onClick={() => setDevices(d => ({ ...d, purifier: !d.purifier }))}
                        className={`w-8 h-4 rounded-full transition-colors cursor-pointer relative ${
                          devices.purifier ? 'bg-teal-600' : 'bg-slate-700'
                        }`}
                      >
                        <span className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform ${
                          devices.purifier ? 'right-0.5' : 'left-0.5'
                        }`} />
                      </button>
                    </div>
                    <div className="text-lg font-bold text-teal-300">PM2.5: 6 µg</div>
                    <div className="text-[10px] text-slate-400 mt-1">Air Quality: Optimal</div>
                  </div>

                  {/* Yale Lock */}
                  <div className="p-4 rounded-2xl border bg-slate-950 border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-white">Yale Smart Lock</span>
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-sm font-bold text-emerald-400">Armed & Secure</div>
                    <div className="text-[10px] text-slate-400 mt-1">Auto-lock on entry</div>
                  </div>

                  {/* Solar Inverter */}
                  <div className="p-4 rounded-2xl border bg-slate-950 border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-white">Home Energy</span>
                      <span className="text-[10px] text-emerald-400 font-mono">Solar</span>
                    </div>
                    <div className="text-lg font-bold text-white">3.4 kW Gen</div>
                    <div className="text-[10px] text-slate-400 mt-1">Battery at 92%</div>
                  </div>
                </div>
              </div>

              {/* Right: Autonomous Routines */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                    Autonomous Scene Engine
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Unlike rigid rules, Claude reasons over time, weather, arrival predictions, and resident habits.
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setDevices({ ac: true, acTemp: 24, lights: true, vacuum: false, purifier: true })}
                    className="w-full text-left p-3.5 rounded-2xl glass-panel border border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">🏡 Homecoming Scene</span>
                      <span className="text-[10px] font-mono text-emerald-400">Triggered on arrival</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Sets temperature to 24°C, gentle entrance lighting, plays personalized family brief.
                    </p>
                  </button>

                  <button
                    onClick={() => setDevices({ ac: true, acTemp: 25, lights: true, vacuum: false, purifier: true })}
                    className="w-full text-left p-3.5 rounded-2xl glass-panel border border-slate-800 hover:border-purple-500/40 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">📚 Kids Focus & Study Scene</span>
                      <span className="text-[10px] font-mono text-purple-400">Academic Trigger</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Mutes media appliances, sets 4000K study lighting, silences door bells in bedroom wing.
                    </p>
                  </button>

                  <button
                    onClick={() => setDevices({ ac: true, acTemp: 26, lights: false, vacuum: false, purifier: true })}
                    className="w-full text-left p-3.5 rounded-2xl glass-panel border border-slate-800 hover:border-indigo-500/40 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">🌙 Night Deep Sleep Scene</span>
                      <span className="text-[10px] font-mono text-indigo-400">22:30 PM</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Locks all doors, enables perimeter sensors, adjusts climate to 26°C for optimal REM sleep.
                    </p>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 5: Mobile Chat Interface */}
        {activeTab === 'mobile' && (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Mobile Phone Mockup */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-sm rounded-[40px] bg-slate-950 border-[6px] border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[560px]">
                  
                  {/* Phone Notch / Status Bar */}
                  <div className="bg-slate-950 px-6 pt-3 pb-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>18:14</span>
                    <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto" />
                    <div className="flex items-center gap-1.5">
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        A
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Aura Butler</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Home Ambient Active
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      Claude 3.5
                    </span>
                  </div>

                  {/* Message Thread */}
                  <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#080a0f] text-xs">
                    {chatMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${
                          msg.sender === 'user' ? 'items-end' : 'items-start'
                        }`}
                      >
                        <div
                          className={`max-w-[85%] p-3 rounded-2xl ${
                            msg.sender === 'user'
                              ? 'bg-indigo-600 text-white rounded-br-none'
                              : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-bl-none'
                          }`}
                        >
                          {msg.text}
                        </div>
                        <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.time}</span>
                      </div>
                    ))}
                  </div>

                  {/* Input Box */}
                  <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                      placeholder="Ask your butler anything..."
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      onClick={() => handleSendChat()}
                      className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>

              {/* Right: Quick Action Prompts */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-amber-400" />
                    Mobile-First Family Command Center
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Whether you are at your office, stuck in traffic, or in bed, interact with your butler naturally in Vietnamese or English.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Click to test instant prompts:
                  </span>
                  
                  <div className="space-y-2">
                    <button
                      onClick={() => handleSendChat("Are the kids studying or playing?")}
                      className="w-full text-left p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-xs text-slate-200 transition-all flex items-center justify-between cursor-pointer"
                    >
                      <span>"Are the kids studying or playing?"</span>
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                    </button>

                    <button
                      onClick={() => handleSendChat("Did any packages arrive at the front door today?")}
                      className="w-full text-left p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-xs text-slate-200 transition-all flex items-center justify-between cursor-pointer"
                    >
                      <span>"Did any packages arrive at the front door today?"</span>
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                    </button>

                    <button
                      onClick={() => handleSendChat("How is grandma's blood pressure today?")}
                      className="w-full text-left p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-xs text-slate-200 transition-all flex items-center justify-between cursor-pointer"
                    >
                      <span>"How is grandma's blood pressure today?"</span>
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                    </button>

                    <button
                      onClick={() => handleSendChat("Prepare the living room for family movie night.")}
                      className="w-full text-left p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-xs text-slate-200 transition-all flex items-center justify-between cursor-pointer"
                    >
                      <span>"Prepare the living room for family movie night."</span>
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200/90 leading-relaxed">
                  💡 <strong>Native Mobile Integrations:</strong> iOS Lock Screen Live Activities, Apple Watch Complications, Android Dynamic Island, and secure encrypted Telegram/WhatsApp family chat bridge.
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

function ArrowRight(props) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
