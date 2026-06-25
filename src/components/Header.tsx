import { useState, useEffect } from 'react';
import { Mail, Compass } from 'lucide-react';

export default function Header() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a]/85 backdrop-blur-md border-b border-slate-800/80 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Branding */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-md bg-slate-950 border border-slate-800/80 flex items-center justify-center text-cyan-500 hover:border-cyan-500 transition-colors">
            <Compass className="w-4 h-4 text-cyan-500" />
          </div>
          <div>
            <div className="font-display text-sm font-semibold text-slate-100 tracking-wide">
              Shuvendu Shil
            </div>
            <div className="text-[10px] font-mono text-slate-400 tracking-wider">
              Electro-Technical Cadet
            </div>
          </div>
        </div>

        {/* Navigation links - Anchors to sections */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-medium">
          <button
            onClick={() => scrollToSection('journey')}
            className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Journey
          </button>
          <button
            onClick={() => scrollToSection('logbook')}
            className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Logbook
          </button>
          <button
            onClick={() => scrollToSection('studio')}
            className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Design Studio
          </button>
          <button
            onClick={() => scrollToSection('vlogs')}
            className="text-slate-400 hover:text-[#ef4444] transition-colors cursor-pointer"
          >
            Vlogs
          </button>
        </nav>

        {/* Dynamic status widgets */}
        <div className="flex items-center gap-5">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest leading-none">
              Time Signal
            </span>
            <span className="text-[11px] font-mono text-cyan-500 tracking-tight mt-1">
              {time || '2026-06-10 15:02:10 UTC'}
            </span>
          </div>

          <a
            href="mailto:electromariner25@gmail.com"
            className="p-1.5 px-3.5 bg-slate-950 border border-slate-800 hover:border-cyan-500/60 rounded text-xxs font-mono text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-all"
          >
            <Mail className="w-3 h-3 text-cyan-500" />
            <span className="hidden sm:inline">Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
}
