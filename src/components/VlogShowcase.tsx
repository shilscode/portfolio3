import { motion } from 'motion/react';
import { Youtube, Play, ArrowUpRight, Clock, Eye, Video } from 'lucide-react';

export interface VlogItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'ETO Life' | 'Dry Dock' | 'Career Pivot' | 'Design Talk';
  thumbnailUrl: string;
  youtubeUrl: string;
  views: string;
}

const VLOGS: VlogItem[] = [
  {
    id: 'eto-life',
    title: 'Life of an ETO Cadet – Day in Training | Tolani Maritime Institute Vlog 🇮🇳⚓',
    description: 'In this vlog, you’ll experience what a typical day looks like for an Electro Technical Officer cadet — from early morning routines to technical classes, practical lab sessions, and evening chill moments with fellow cadets. It’s a real look into what life is like during this intense 4-month training program at one of India’s top maritime institutes.',
    duration: '14:57',
    category: 'ETO Life',
    thumbnailUrl: '/thumb1.jpg',
    youtubeUrl: 'https://youtu.be/v4cqFABAjr0?si=rX01g-uValf34wkq',
    views: '3.1K'
  },
  {
    id: 'dry-dock',
    title: '366-Meter Container Ship Room Tour | Life of an ETO Cadet',
    description: 'Living and working at sea is a unique experience, and it all starts in your personal space. In this video, I am giving you a full room tour of my home aboard a massive 366-meter-long container ship as an Electro-Technical Officer (ETO) Cadet.',
    duration: '18:57',
    category: 'Dry Dock',
    thumbnailUrl: '/thumb2.jpg',
    youtubeUrl: 'https://youtu.be/YSQuS7po3HA?si=W98ux89e1Kx-l0Nx',
    views: '1.1K'
  },
  {
    id: 'career-pivot',
    title: 'Tolani Maritime Institute | ETO-15 Feb Batch 2025 | Life at Sea Begins!',
    description: 'Welcome to the full vlog of my 4-month journey as an Electro Technical Officer (ETO) cadet at Tolani Maritime Institute (TMI), Batch 15 – Feb 2025. From Day 1 on February 2 to our final moments on May 31, this video captures everything: classes, training, daily life, and the real experience of becoming a future seafarer.',
    duration: '22:38',
    category: 'Career Pivot',
    thumbnailUrl: '/thumb3.webp',
    youtubeUrl: 'https://youtu.be/9gHxeNcLoQ8',
    views: '1.5K'
  },
  {
    id: 'design-talk',
    title: 'US C1D Visa Interview Experience (2025) | Merchant Navy Cadet | Questions, Tips & Do’s & Don’ts',
    description: 'I’m sharing my US C1D Visa Interview Experience (2025) as a Merchant Navy cadet. ',
    duration: '13:27',
    category: 'Design Talk',
    thumbnailUrl: '/thumb4.webp',
    youtubeUrl: 'https://youtu.be/kzTY5XxK524',
    views: '6.7K'
  }
];

export default function VlogShowcase() {
  return (
    <section className="py-20 border-t border-slate-800/60 scroll-mt-24 mb-16" id="vlogs">
      <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xxs tracking-widest text-[#0891b2] uppercase font-bold block mb-2 animate-pulse">
            Video Logs &amp; Chronicles
          </span>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight text-white font-medium">
            Sea &amp; Creative Vlogs
          </h2>
          <p className="text-sm font-sans text-slate-400 mt-2 max-w-xl font-light">
            Bringing raw ocean views, intensive industrial systems tutorials, and pixel-perfect design perspectives from high-seas transit straight to your screen.
          </p>
        </div>

        <div>
          <a
            href="https://youtube.com/@shuvendushil?si=f0SbLGVN7yzWd1pa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 via-rose-500 to-red-700 hover:from-red-500 hover:to-rose-600 text-white border border-red-500/30 font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.35)] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
            id="channel-subscribe-btn"
          >
            <Youtube className="w-4 h-4 fill-white text-[#ef4444] animate-bounce" />
            <span>Subscribe to Channel</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Grid of Youtube Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {VLOGS.map((video, idx) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group relative bg-slate-900/10 border border-slate-800/60 hover:border-slate-700/60 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
            id={`vlog-${video.id}`}
          >
            {/* Thumbnail Frame */}
            <div className="aspect-[16/10] relative overflow-hidden bg-slate-950 border-b border-slate-800/40">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Hover Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-[#ef4444]/90 text-white flex items-center justify-center shadow-lg group-hover:bg-[#ef4444] group-hover:scale-110 active:scale-95 transform transition-all duration-300 opacity-80 group-hover:opacity-100">
                  <Play className="w-5 h-5 fill-white text-[#ef4444] translate-x-0.5" />
                </div>
              </div>

              {/* Duration Badge & Category */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-slate-950/80 backdrop-blur-sm border border-slate-800/40 rounded text-[9px] font-mono text-slate-300 font-medium">
                  {video.duration}
                </span>
                <span className="px-2 py-0.5 bg-[#0891b2]/20 border border-[#0891b2]/30 rounded text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wide">
                  {video.category}
                </span>
              </div>
            </div>

            {/* Video content descriptions */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-sm font-semibold text-slate-100 line-clamp-2 leading-snug group-hover:text-cyan-400 transition-colors">
                  {video.title}
                </h4>
                <p className="text-xs font-sans text-slate-400 font-light mt-1.5 leading-relaxed line-clamp-3">
                  {video.description}
                </p>
              </div>

              {/* Views count & call to action */}
              <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between font-mono text-[10px] text-slate-500 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-slate-500" />
                  <span>{video.views} Views</span>
                </span>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 tracking-wider uppercase font-semibold text-[9px] transition-colors"
                >
                  <span>Play Video</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
