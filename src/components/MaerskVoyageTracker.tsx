import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Compass, Anchor, Clock, ArrowUpRight, ShieldAlert, Sparkles, AlertCircle } from 'lucide-react';

// =========================================================================
// CONFIGURATION CARD: Edit this tentative Sign-On Date to automatically 
// update the entire live tracking, countdowns, statuses, and sign-off estimates.
// =========================================================================
export const TENTATIVE_SIGN_ON_DATE = "2026-07-04"; // Format: YYYY-MM-DD
// =========================================================================

export default function MaerskVoyageTracker() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [dateInfo, setDateInfo] = useState({
    now: new Date(),
    signOn: new Date(),
    signOff: new Date(),
    status: 'Home',
    countdownTarget: new Date(),
    countdownLabel: 'Days until Sign-On',
    percentProgress: 0,
    diffDaysTotal: 0
  });

  useEffect(() => {
    function calculateVoyageState() {
      const now = new Date();
      // Parse tentative sign on date cleanly as local midnight
      const signOn = new Date(`${TENTATIVE_SIGN_ON_DATE}T00:00:00`);
      
      // Calculate sign-off automatically as exactly 6 calendar months later
      const signOff = new Date(signOn);
      signOff.setMonth(signOff.getMonth() + 6);

      let status = 'Home';
      let countdownTarget = signOn;
      let countdownLabel = 'Days until Sign-On';
      let percentProgress = 0;

      // Calculate state status
      if (now < signOn) {
        // Calculate days until joining
        const timeDiff = signOn.getTime() - now.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        
        // Logical threshold: if within 14 days of joining, set to Preparing for Joining
        if (daysDiff <= 14) {
          status = 'Preparing for Joining';
        } else {
          status = 'Home';
        }
        
        countdownTarget = signOn;
        countdownLabel = 'Days until Sign-On';

        // Percentage progress till sign on (assuming a 30-day preparation tracking period window)
        const prepPeriod = 30 * 24 * 60 * 60 * 1000;
        const elapsedPrep = prepPeriod - Math.max(0, signOn.getTime() - now.getTime());
        percentProgress = Math.min(100, Math.max(0, (elapsedPrep / prepPeriod) * 100));
      } else if (now >= signOn && now < signOff) {
        status = 'On Board – MV Maersk Canyon';
        countdownTarget = signOff;
        countdownLabel = 'Days remaining until Sign-Off';

        // Percentage progress of standard 6-month contract completed
        const totalContractDuration = signOff.getTime() - signOn.getTime();
        const elapsedContractDuration = now.getTime() - signOn.getTime();
        percentProgress = Math.min(100, Math.max(0, (elapsedContractDuration / totalContractDuration) * 100));
      } else {
        status = 'Contract Completed';
        countdownTarget = signOff;
        countdownLabel = 'Contract Completed';
        percentProgress = 100;
      }

      setDateInfo({
        now,
        signOn,
        signOff,
        status,
        countdownTarget,
        countdownLabel,
        percentProgress,
        diffDaysTotal: Math.ceil(Math.abs(signOff.getTime() - signOn.getTime()) / (1000 * 60 * 60 * 24))
      });

      // Update active clock countdown
      const diffMs = countdownTarget.getTime() - now.getTime();
      if (diffMs <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 3000 / 50));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }

    // Call state calculations immediately and set running interval
    calculateVoyageState();
    const timer = setInterval(calculateVoyageState, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format Helper to print neat user-friendly dates
  const formatDisplayDate = (d: Date) => {
    return d.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Status Visual Configurations
  const getStatusConfig = (st: string) => {
    switch (st) {
      case 'Home':
        return {
          textColor: 'text-indigo-400',
          bgColor: 'bg-indigo-500/10',
          borderColor: 'border-indigo-500/30',
          glowRing: 'shadow-[0_0_15px_rgba(99,102,241,0.25)]',
          dotPulse: 'bg-indigo-400',
          description: 'Awaiting shipping instruction. Managing layout projects from the land studio.'
        };
      case 'Preparing for Joining':
        return {
          textColor: 'text-amber-400',
          bgColor: 'bg-amber-500/10',
          borderColor: 'border-amber-500/30',
          glowRing: 'shadow-[0_0_15px_rgba(245,158,11,0.25)]',
          dotPulse: 'bg-amber-400',
          description: 'Pre-voyage checklists, medical clearances, and technical briefing preparations.'
        };
      case 'On Board – MV Maersk Canyon':
        return {
          textColor: 'text-emerald-400',
          bgColor: 'bg-emerald-500/10',
          borderColor: 'border-emerald-500/30',
          glowRing: 'shadow-[0_0_15px_rgba(16,185,129,0.3)]',
          dotPulse: 'bg-emerald-400 animate-ping',
          description: 'Sailing active worldwide supply lines. Overseeing vessel automation networks.'
        };
      case 'Contract Completed':
        return {
          textColor: 'text-cyan-400',
          bgColor: 'bg-cyan-500/10',
          borderColor: 'border-cyan-500/30',
          glowRing: 'shadow-[0_0_15px_rgba(6,182,212,0.25)]',
          dotPulse: 'bg-cyan-400',
          description: 'All logs successfully closed, transit completed. Returned to onshore research.'
        };
      default:
        return {
          textColor: 'text-slate-400',
          bgColor: 'bg-slate-500/10',
          borderColor: 'border-slate-500/30',
          glowRing: '',
          dotPulse: 'bg-slate-400',
          description: 'Data scanning in progress...'
        };
    }
  };

  const config = getStatusConfig(dateInfo.status);

  return (
    <div className="mt-6 p-5 sm:p-6 rounded-xl border border-slate-800 bg-slate-950/60 transition-all duration-300 relative overflow-hidden" id="voyage-tracker-widget">
      {/* Decorative subtle background radar sweep */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Title & Status Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/60 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <Compass className="w-4.5 h-4.5 text-cyan-400 animate-spin-slow" />
          <h4 className="font-display text-sm font-bold tracking-wider text-slate-200 uppercase">
            Live Voyage Monitor
          </h4>
        </div>

        {/* Dynamic Glowing Status Badge */}
        <div className={`px-3 py-1.5 rounded-lg border ${config.bgColor} ${config.borderColor} ${config.glowRing} flex items-center gap-2 transition-all duration-300`}>
          <span className="relative flex h-2 w-2">
            <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${config.dotPulse}`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${config.dotPulse}`} />
          </span>
          <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${config.textColor}`}>
            {dateInfo.status}
          </span>
        </div>
      </div>

      {/* Description details of status */}
      <div className="mb-5">
        <p className="text-xs text-slate-400 italic">
          {config.description}
        </p>
      </div>

      {/* Dynamic Progress Metric Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-2 font-medium">
          <span className="uppercase">Voyage Timeline Index</span>
          <span className="text-cyan-400 font-bold">{Math.round(dateInfo.percentProgress)}% Completed</span>
        </div>
        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/40 p-px">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${dateInfo.percentProgress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
          />
        </div>
      </div>

      {/* Grid Countdown Clock */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 my-6 text-center">
        <div className="bg-slate-950/80 p-2 sm:p-3 rounded-lg border border-slate-800/85">
          <span className="block text-lg sm:text-2xl font-black text-cyan-400 font-mono tracking-tight glow-cyan">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-[9px] text-slate-500 uppercase font-mono font-bold tracking-widest">Days</span>
        </div>
        <div className="bg-slate-950/80 p-2 sm:p-3 rounded-lg border border-slate-800/85">
          <span className="block text-lg sm:text-2xl font-black text-cyan-400 font-mono tracking-tight glow-cyan">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[9px] text-slate-500 uppercase font-mono font-bold tracking-widest">Hrs</span>
        </div>
        <div className="bg-slate-950/80 p-2 sm:p-3 rounded-lg border border-slate-800/85">
          <span className="block text-lg sm:text-2xl font-black text-slate-350 font-mono tracking-tight">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-[9px] text-slate-500 uppercase font-mono font-bold tracking-widest">Mins</span>
        </div>
        <div className="bg-slate-950/80 p-2 sm:p-3 rounded-lg border border-slate-800/85">
          <span className="block text-lg sm:text-2xl font-black text-indigo-400 font-mono tracking-tight animate-pulse">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-[9px] text-slate-500 uppercase font-mono font-bold tracking-widest">Secs</span>
        </div>
      </div>
      
      {/* Subtitle mapping current focus target */}
      <div className="text-center font-mono text-[9px] tracking-wide text-cyan-500 uppercase font-bold mb-6">
        ▲ {dateInfo.countdownLabel}
      </div>

      {/* Contract specifications section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-850/60 pt-5 text-xs">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/20 border border-slate-900">
          <Calendar className="w-4 h-4 text-slate-500 flex-shrink-0" />
          <div className="min-w-0">
            <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">Planned Sign-On</span>
            <span className="block text-slate-200 font-medium font-sans truncate mt-0.5">{formatDisplayDate(dateInfo.signOn)}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/20 border border-slate-900">
          <Anchor className="w-4 h-4 text-cyan-600 flex-shrink-0" />
          <div className="min-w-0">
            <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-1">
              Estimated Sign-Off
              <Sparkles className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
            </span>
            <span className="block text-cyan-300 font-bold font-sans truncate mt-0.5">{formatDisplayDate(dateInfo.signOff)}</span>
          </div>
        </div>
      </div>

      {/* Information Alert Badge */}
      <div className="mt-4 flex items-start gap-2 text-[10px] text-slate-500 leading-normal p-2.5 rounded bg-slate-900/10 border border-slate-900/40">
        <AlertCircle className="w-3.5 h-3.5 text-slate-600 mt-0.5 flex-shrink-0" />
        <span className="font-sans font-light">
          Sign-off date recalculates automatically in realtime to exactly 6 calendar months (approx. {dateInfo.diffDaysTotal} days) post tentative Sign-On date. Voyage statuses are computed dynamically based on the system calendar.
        </span>
      </div>
    </div>
  );
}
