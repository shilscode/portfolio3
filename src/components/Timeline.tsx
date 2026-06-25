import { LogbookEntry } from '../types';
import { Compass, ArrowUpRight, Anchor, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import MaerskVoyageTracker from './MaerskVoyageTracker';

interface TimelineProps {
  entries: LogbookEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative border-l border-slate-800 ml-4 md:ml-6 pl-6 md:pl-10 py-2 space-y-12" id="timeline-container">
      {entries.map((entry, idx) => {
        const isCurrent = entry.status === 'Active';
        
        return (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group"
            id={`timeline-entry-${entry.id}`}
          >
            {/* Elegant Circle Timeline Pin */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex items-center justify-center">
              <div 
                className={`w-3.5 h-3.5 rounded-full border bg-slate-900 flex items-center justify-center transition-all duration-300 ${
                  isCurrent 
                    ? 'border-cyan-500 scale-110 shadow-[0_0_12px_rgba(8,145,178,0.4)]'
                    : 'border-slate-800 group-hover:border-slate-600'
                }`}
              >
                {isCurrent && (
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                )}
              </div>
            </div>

            {/* Content Container */}
            <div className="bg-slate-900/20 border border-slate-800/60 hover:border-slate-700/60 rounded-xl p-6 hover:shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2.5">
                    <span className="font-mono text-[10px] tracking-widest text-[#0891b2] font-semibold uppercase">
                      {entry.period}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-mono leading-none tracking-wider uppercase ${
                      isCurrent 
                        ? 'bg-cyan-950/30 text-cyan-400 border border-cyan-900/30' 
                        : 'bg-slate-800/30 text-slate-400 border border-slate-700/30'
                    }`}>
                      {entry.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {entry.vesselName}
                  </h3>
                  <p className="text-xs font-sans text-slate-300 mt-1 font-semibold tracking-wide uppercase text-cyan-500/90">
                    {entry.role}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-slate-400 bg-slate-950/40 px-3 py-1 rounded border border-slate-800/80">
                  <Compass className="w-3.5 h-3.5 text-cyan-600" />
                  <span>{entry.location}</span>
                </div>
              </div>

              {/* Description Paragraph */}
              <p className="text-slate-300 text-[14px] leading-relaxed mt-4 max-w-3xl font-light">
                {entry.description}
              </p>

              {/* Dynamic Voyage Tracker Widget */}
              {entry.id === 'maersk-canyon' && (
                <MaerskVoyageTracker />
              )}

              {/* Visually Segmented SubPhases for China dry dock separation */}
              {entry.subPhases && entry.subPhases.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-800/50 space-y-3">
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                    Tactical Operations Breakdowns
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    {entry.subPhases.map((phase, pIdx) => {
                      const isDock = phase.type === 'dock';
                      return (
                        <div 
                          key={pIdx} 
                          className={`p-4 rounded-lg border transition-all ${
                            isDock 
                              ? 'bg-gradient-to-br from-amber-950/15 to-slate-950/60 border-amber-800/40 hover:border-amber-700/55' 
                              : 'bg-slate-950/20 border-slate-850 hover:border-slate-800'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono text-[9px] text-slate-500 font-semibold">{phase.period}</span>
                            <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                              isDock 
                                ? 'bg-amber-950/50 text-amber-400' 
                                : 'bg-cyan-950/50 text-cyan-400'
                            }`}>
                              {isDock ? 'Dry Dock yard' : 'Sailing Track'}
                            </span>
                          </div>
                          <h5 className="text-[12px] font-sans font-semibold text-slate-200">{phase.title}</h5>
                          <p className="text-[11px] text-slate-450 mt-1 font-light leading-relaxed">{phase.details}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Render Bullet specifications for Professional Job */}
              {entry.bullets && entry.bullets.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-800/50">
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold mb-3">
                    Core Mandates & Engineering Contributions
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-300">
                    {entry.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                        <span className="font-light leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Core CTA Link */}
              <div className="border-t border-slate-800/40 pt-4 mt-6">
                <a
                  href={entry.vesselLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono tracking-wider uppercase transition-colors group/link"
                  id={`link-${entry.id}`}
                >
                  <span>
                    {entry.id === 'maersk-canyon'
                      ? 'Explore Voyage Logbook'
                      : entry.id === 'ltimindtree'
                        ? 'Verify LinkedIn Profile'
                        : 'Explore Voyage Logbook'}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-cyan-400" />
                </a>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
