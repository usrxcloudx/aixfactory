import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveButlerDemo from './components/InteractiveButlerDemo';
import WhyClaudeArchitecture from './components/WhyClaudeArchitecture';
import PillarsSection from './components/PillarsSection';
import SecurityAndPrivacy from './components/SecurityAndPrivacy';
import CompanyAndTeam from './components/CompanyAndTeam';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar onOpenWaitlist={() => setWaitlistOpen(true)} />
      
      <main>
        <Hero onOpenWaitlist={() => setWaitlistOpen(true)} />
        <InteractiveButlerDemo />
        <WhyClaudeArchitecture />
        <PillarsSection />
        <SecurityAndPrivacy />
        <CompanyAndTeam onOpenWaitlist={() => setWaitlistOpen(true)} />
      </main>

      <Footer onOpenWaitlist={() => setWaitlistOpen(true)} />

      <WaitlistModal 
        isOpen={waitlistOpen} 
        onClose={() => setWaitlistOpen(false)} 
      />
    </div>
  );
}
