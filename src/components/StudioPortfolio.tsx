import { CLIENT_COLLABORATIONS, ClientCollaboration } from '../data';
import { ArrowUpRight, Palette, Sparkles, HeartHandshake, Award, Music, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function StudioPortfolio() {
  return (
    <div className="space-y-12" id="design-studio-section">
      
      {/* Editorial design intro card with vibrant gradient accent */}
      <div className="relative border border-slate-800 rounded-xl p-6 md:p-10 bg-slate-900/10 backdrop-blur-md overflow-hidden box-glow">
        
        {/* Soft background ambient gradient lights */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-600/5 to-pink-500/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle grid pattern of a designer canvas */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:28px_28px]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1 rounded bg-indigo-500/10 text-indigo-400">
                <Palette className="w-4 h-4 text-cyan-400 animate-pulse" />
              </span>
              <span className="font-mono text-xxs tracking-widest text-[#0891b2] uppercase font-bold">
                Shils Design &bull; Strategic Partners
              </span>
            </div>
            
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
              Clients &amp; Collaborations
            </h3>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              Crafting premium identities, layout architectures, and bespoke promotional assets for legends of Indian classical music, award-winning composers, independent networks, and software consultants. 
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 font-medium">
                Merging structured marine engineering standards with raw digital aesthetics.
              </span>
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                <Music className="w-3.5 h-3.5 text-cyan-500" /> Classical Arts Archival
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                <Award className="w-3.5 h-3.5 text-indigo-400" /> Visual Identity Systems
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-500" /> Layout Rigor
              </span>
            </div>

            <div className="pt-4">
              <a
                href="https://shils-design.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 hover:from-cyan-400 hover:via-teal-300 hover:to-indigo-450 text-white font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] border border-cyan-400/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                id="cta-inquire-services"
              >
                Inquire for Creative Designs
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Graphic Representation Showcase for Shils Design */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-slate-950/60 border border-slate-800 rounded-xl p-5 overflow-hidden backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4 border-b border-slate-850 pb-3">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Design Studio Node
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 text-[8px] font-mono font-bold uppercase">
                  ESTD 2021
                </span>
              </div>
              <div className="space-y-4">
                <div className="p-3 border border-slate-850 bg-slate-900/30 rounded-lg">
                  <span className="text-slate-500 block text-[9px] font-mono uppercase tracking-wider mb-1">Creative Direction</span>
                  <p className="text-xs text-slate-300 font-light">"Symmetry, typography, and mathematical margins. Creating visuals with the same meticulous standards applied to marine generator safety panels."</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-400">
                  <div className="p-2.5 border border-slate-850 bg-slate-900/40 rounded-lg">
                    <span className="text-slate-500 block text-[8px] uppercase tracking-wider">Luminance</span>
                    <span className="text-cyan-400 font-bold">Vibrant Gradient</span>
                  </div>
                  <div className="p-2.5 border border-slate-850 bg-slate-900/40 rounded-lg">
                    <span className="text-slate-500 block text-[8px] uppercase tracking-wider font-medium">Grid Alignment</span>
                    <span className="text-indigo-400 font-bold">Absolute Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Wall Circular Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 justify-center py-6">
        {CLIENT_COLLABORATIONS.map((client, idx) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group flex flex-col items-center justify-center text-center"
            id={`client-card-${client.id}`}
          >
            {/* Circular Avatar Frame styling */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-950 shadow-[0_4px_20px_rgba(0,0,0,0.4)] group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
              <img
                src={client.photoUrl}
                alt={client.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
            </div>

            {/* Just Name & subtle role */}
            <h4 className="font-display text-xs sm:text-sm font-semibold text-slate-100 mt-4 group-hover:text-cyan-400 transition-colors tracking-wide">
              {client.name}
            </h4>
          </motion.div>
        ))}

        {/* And Many More Circular Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: CLIENT_COLLABORATIONS.length * 0.05 }}
          className="group flex flex-col items-center justify-center text-center"
          id="client-card-more"
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-dashed border-cyan-500/40 bg-gradient-to-br from-slate-950 to-slate-900 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:border-cyan-400 group-hover:shadow-[0_0_18px_rgba(6,182,212,0.35)] flex flex-col items-center justify-center p-4 transition-all duration-300">
            <span className="font-mono text-[9px] sm:text-xxs font-bold text-cyan-400 uppercase tracking-widest text-center animate-pulse">
              And Many
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-black text-slate-300 uppercase tracking-wider text-center mt-0.5">
              More
            </span>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
          </div>

          <h4 className="font-display text-xs sm:text-sm font-semibold text-slate-400 mt-4 group-hover:text-cyan-400 transition-colors tracking-wide">
            Global Networks
          </h4>
        </motion.div>
      </div>
    </div>
  );
}
