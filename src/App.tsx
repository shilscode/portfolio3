import { useState } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import StudioPortfolio from './components/StudioPortfolio';
import VlogShowcase from './components/VlogShowcase';
import shuvenduProfilePic from './assets/images/shuvendu_profile_1781168820006.png';
import { LOGBOOK_ENTRIES } from './data';
import { 
  Linkedin, 
  Instagram, 
  Youtube, 
  Twitter,
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Anchor,
  Compass,
  Palette,
  Ship,
  Sparkles,
  Zap,
  Sliders,
  Smartphone
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('electromariner25@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300 antialiased overflow-x-hidden relative" id="app-root">
      
      {/* Absolute Decorative Ambient Gradient Orbs (Rich graphic designer look) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-600/10 via-indigo-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/5 via-purple-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[300px] left-10 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <Header />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 relative">
        
        {/* HERO SECTION */}
        <section className="mb-20 md:mb-32" id="hero-section">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Custom Designer / Cadet Unified Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-md backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 animate-pulse"></span>
                </span>
                <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-widest">
                  Electro-Technical Cadet || Graphic Designer
                </span>
              </div>

              {/* Main Name Heading */}
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                  Shuvendu Shil
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="font-sans text-xl sm:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl italic">
                "Engineering systems on the high seas. Designing narratives in the studio."
              </p>

              {/* Immediate CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://canyon-sea-track.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 hover:from-cyan-400 hover:via-teal-300 hover:to-indigo-400 text-white font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] border border-cyan-400/20 hover:-translate-y-0.5 active:translate-y-0"
                  id="cta-live-voyage"
                >
                  Live Voyage Tracking
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>

                <a
                  href="#vlogs"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 hover:from-rose-500 hover:via-red-400 hover:to-orange-400 text-white font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_rgba(239,68,68,0.55)] border border-red-500/20 hover:-translate-y-0.5 active:translate-y-0"
                  id="cta-youtube-vlogs"
                >
                  <Youtube className="w-4 h-4 text-white fill-white animate-pulse" />
                  Watch YouTube Vlogs
                </a>

                <a
                  href="#studio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-cyan-500/40 hover:border-cyan-400 bg-slate-950/60 hover:bg-slate-900/60 text-cyan-300 hover:text-white font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                  id="cta-graphic-design"
                >
                  Graphic Portfolio
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE JOURNEY (ABOUT) SECTION */}
        <section className="py-20 border-t border-slate-800/60 mb-8 scroll-mt-24" id="journey">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="font-mono text-xxs tracking-widest text-cyan-500 uppercase font-bold block mb-2">
                  Biography
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white">
                  The Journey
                </h2>
              </div>
              
              {/* Elegant ETO Portrait Frame */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-transparent rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
                  <img
                    src={shuvenduProfilePic}
                    alt="Shuvendu Shil Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-102"
                  />
                  {/* Subtle technical corner overlays representing ETO theme */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cyan-400/40 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-cyan-400/40 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-cyan-400/40 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cyan-400/40 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-65 pointer-events-none" />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="prose prose-invert max-w-3xl">
                <p className="font-sans text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
                  "From Software Engineering at LTIMindtree to Electro-Technical Cadet at sea. A journey defined by technical precision and a lifelong obsession with the Sea."
                </p>
                <p className="font-sans text-sm text-slate-400 leading-relaxed mt-5">
                  I bring the extreme rigor of electrical control mechanics and industrial power logic on world trade routes together with artistic layouts. Overseeing complex automation structures in deep waters informs a unique approach to graphic projects—where layout weights, font pairings, and design grids align with physical system standards.
                </p>
              </div>

              {/* Aesthetic Pillars */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-slate-800/40">
                <div className="p-4 bg-slate-950/20 border border-slate-850 rounded">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    <span className="font-mono text-[10px] font-bold text-slate-300 uppercase tracking-widest">Marine Control Specs</span>
                  </div>
                  <p className="text-xs font-sans text-slate-400 leading-relaxed font-light">
                    Diagnostics of heavy generators, power system automation, automated PLC network checks on giant commercial vessels.
                  </p>
                </div>
                <div className="p-4 bg-slate-950/20 border border-slate-850 rounded">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    <span className="font-mono text-[10px] font-bold text-slate-300 uppercase tracking-widest font-medium">Creative Typography</span>
                  </div>
                  <p className="text-xs font-sans text-slate-400 leading-relaxed font-light">
                    Symmetric layouts, minimalist font systems, publication branding, and functional grids crafted during ocean transits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMOTIONAL QUOTE 1 (TRANSITION POINT 1) */}
        <section className="py-16 my-8 flex flex-col items-center justify-center text-center relative border-y border-slate-800/30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0f172a] border border-slate-800 flex items-center justify-center">
            <Anchor className="w-3.5 h-3.5 text-cyan-600" />
          </div>
          <div className="max-w-3xl px-4">
            <p className="font-display text-lg md:text-xl italic text-slate-300 leading-relaxed font-light tracking-wide glow-cyan">
              "The heart of a sailor belongs to the horizon, but his mind is built on the precision of the grid."
            </p>
          </div>
        </section>

        {/* THE LOGBOOK (EXPERIENCE) SECTION WITH LTIMINDTREE */}
        <section className="py-20 scroll-mt-24" id="logbook">
          <div className="mb-14">
            <span className="font-mono text-xxs tracking-widest text-cyan-500 uppercase font-bold block mb-2">
              Milestones & Experience
            </span>
            <h2 className="font-display text-2xl md:text-3xl tracking-tight text-white font-medium">
              The Logbook
            </h2>
            <p className="text-sm font-sans text-slate-400 mt-2 max-w-xl font-light">
              Deep sea vessel infrastructure operations, China dry-dock overhauls, and early industrial scale software engineering at LTIMindtree.
            </p>
          </div>

          <Timeline entries={LOGBOOK_ENTRIES} />
        </section>

        {/* EMOTIONAL QUOTE 2 (TRANSITION POINT 2) */}
        <section className="py-16 my-8 flex flex-col items-center justify-center text-center relative border-y border-slate-800/30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0f172a] border border-slate-800 flex items-center justify-center">
            <Compass className="w-3.5 h-3.5 text-cyan-600 animate-spin-slow" />
          </div>
          <div className="max-w-3xl px-4">
            <p className="font-display text-lg md:text-xl italic text-slate-300 leading-relaxed font-light tracking-wide glow-cyan">
              "Smooth seas do not make skillful sailors; they make for beautiful stories told in the studio."
            </p>
          </div>
        </section>

        {/* CLIENT DETAILS & COLLABORATIONS */}
        <section className="py-20 scroll-mt-24 mb-16" id="studio">
          <div className="mb-14">
            <span className="font-mono text-xxs tracking-widest text-cyan-500 uppercase font-bold block mb-2">
              Creative Partnerships
            </span>
            <h2 className="font-display text-2xl md:text-3xl tracking-tight text-white font-medium">
              Clients &amp; Collaborations
            </h2>
            <p className="text-sm font-sans text-slate-400 mt-2 max-w-xl font-light">
              Strategic visual systems generated for legendary performing artists, composer icons, local collectives, and key software enterprises.
            </p>
          </div>

          <StudioPortfolio />
        </section>

        {/* YOUTUBE VLOGS SECTION */}
        <VlogShowcase />

      </main>

      {/* FOOTER SECTION & SOCIALS */}
      <footer className="bg-slate-950 border-t border-slate-900 py-16 px-6 md:px-12 mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Left Col Brand info with custom paragraph about me */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 rounded bg-slate-900 border border-slate-800/80 flex items-center justify-center text-cyan-500">
                  <Compass className="w-4 h-4 text-cyan-500" />
                </div>
                <span className="font-display text-base font-semibold text-slate-200 tracking-wide">
                  Shuvendu Shil
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-light">
                Hi, I'm Shuvendu Shil, an Electro-Technical Cadet and Senior Systems & Graphic Designer. Combining software engineering precision from LTIMindtree with heavy-metal marine automation logic, I build reliable hardware networks across world routes, while maintaining a creative design studio dedicated to print media and clean digital graphics.
              </p>
            </div>

            {/* Middle Col Mail */}
            <div className="md:col-span-4" id="footer-contact">
              <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-4 font-bold">
                Direct Dispatch Bridge
              </span>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5 group/email">
                  <Mail className="w-4 h-4 text-slate-500 group-hover/email:text-cyan-400 transition-colors" />
                  <a
                    href="mailto:electromariner25@gmail.com"
                    className="text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors tracking-wide"
                  >
                    electromariner25@gmail.com
                  </a>
                </div>
                
                {/* Copy Mail Button */}
                <button
                  onClick={copyEmailToClipboard}
                  className="w-fit mt-1 inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-mono text-slate-400 hover:text-slate-200 transition-all active:scale-95 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-cyan-400 uppercase tracking-wider font-semibold">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-wider font-semibold">Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Col Links */}
            <div className="md:col-span-3">
              <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-4 font-bold">
                Socials
              </span>
              <div className="flex items-center gap-4 text-slate-400">
                <a
                  href="https://www.linkedin.com/in/shilshuvendu/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-slate-900 hover:bg-slate-800 rounded border border-slate-850 hover:border-slate-700 hover:text-cyan-400 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://youtube.com/@shuvendushil?si=f0SbLGVN7yzWd1pa"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-slate-900 hover:bg-slate-800 rounded border border-slate-850 hover:border-slate-700 hover:text-cyan-400 transition-all"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/the_electro_mariner/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-slate-900 hover:bg-slate-800 rounded border border-slate-850 hover:border-slate-700 hover:text-cyan-400 transition-all"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://x.com/shuvendushil"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-slate-900 hover:bg-slate-800 rounded border border-slate-850 hover:border-slate-700 hover:text-cyan-400 transition-all"
                  aria-label="X Twitter Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom attribution */}
          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-600">
            <div>
              &copy; {new Date().getFullYear()} Shuvendu Shil. All Rights Reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-700" />
              <span>CRAFTED WITH PRECISION</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
