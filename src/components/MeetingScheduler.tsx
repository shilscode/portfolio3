import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, Send, CheckCircle2, Video, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MeetingScheduler() {
  const [selectedDate, setSelectedDate] = useState<string>('June 11, 2026');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [agenda, setAgenda] = useState<string>('Portfolio Review & Design Collab');
  const [email, setEmail] = useState<string>('');
  const [booked, setBooked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const dates = [
    { day: 'Thu', date: '11', month: 'June' },
    { day: 'Fri', date: '12', month: 'June' },
    { day: 'Mon', date: '15', month: 'June' },
    { day: 'Tue', date: '16', month: 'June' }
  ];

  const slots = [
    '09:00 AM UTC',
    '11:30 AM UTC',
    '02:00 PM UTC',
    '04:30 PM UTC'
  ];

  const agendas = [
    'Portfolio Review & Design Collab',
    'Electro-Technical Systems Consultation',
    'Industrial & UI/UX Graphic Project',
    'General Explorer Meetup'
  ];

  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setBooked(true);
    }, 1200);
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-6 md:p-8 relative overflow-hidden box-glow" id="meeting-scheduler">
      {/* Soft color highlights representing designer styling */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-1 rounded bg-indigo-500/10 text-indigo-400">
                <Video className="w-4 h-4 text-indigo-400" />
              </span>
              <span className="font-mono text-xxs tracking-widest text-indigo-400 uppercase font-bold">
                1:1 Ocean-to-Shore Bridge Call
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-medium text-slate-100 tracking-tight mb-4">
              Let's craft something together.
            </h3>

            <p className="text-xs font-sans text-slate-400 leading-relaxed font-light mb-6 space-y-2">
              <span>Book a direct synchronous 1:1 digital session with Shuvendu Shil. </span>
              <span className="block mt-2 font-medium text-slate-300">
                Discuss electrical automation layouts, modern typographic publications, or bespoke brand designs at LTIMindtree system integration layers.
              </span>
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-800/60 text-xxs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-cyan-500" />
              <span>Session Mode: Google Meet (Video Call)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>Standard Duration: 30 minutes</span>
            </div>
          </div>
        </div>

        {/* Right column booking process */}
        <div className="lg:col-span-7 bg-slate-950/40 p-5 md:p-6 rounded-lg border border-slate-800/80">
          <AnimatePresence mode="wait">
            {!booked ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleBookSession}
                className="space-y-6"
              >
                {/* Select Date */}
                <div>
                  <label className="block text-xxs font-mono text-slate-400 uppercase tracking-widest mb-3">
                    Select Date
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {dates.map((d) => {
                      const dateStr = `${d.month} ${d.date}, 2026`;
                      const isSelected = selectedDate === dateStr;
                      return (
                        <button
                          key={d.date}
                          type="button"
                          onClick={() => setSelectedDate(dateStr)}
                          className={`flex flex-col items-center p-2 rounded transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-gradient-to-br from-cyan-600 to-indigo-600 text-white border-transparent scale-105 shadow-[0_4px_10px_rgba(8,145,178,0.2)]'
                              : 'bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300'
                          }`}
                        >
                          <span className="text-[10px] font-mono font-medium opacity-80 uppercase">
                            {d.day}
                          </span>
                          <span className="text-sm font-semibold tracking-tight mt-0.5">
                            {d.date}
                          </span>
                          <span className="text-[9px] opacity-70 mt-0.5">
                            {d.month.substring(0, 3)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Select Time Slots */}
                <div>
                  <label className="block text-xxs font-mono text-slate-400 uppercase tracking-widest mb-3">
                    Select Available Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {slots.map((s) => {
                      const isSelected = selectedTime === s;
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedTime(s)}
                          className={`py-2 rounded text-[10px] font-mono tracking-wider transition-all cursor-pointer text-center ${
                            isSelected
                              ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500 scale-105'
                              : 'bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400'
                          }`}
                        >
                          {s.split(' ')[0]} {s.split(' ')[1]}
                        </button>
                      );
                    })}
                  </div>
                  {!selectedTime && (
                    <p className="text-[10px] text-indigo-400/80 mt-2 font-mono">
                      * Please capture a precise time system signal before proceeding.
                    </p>
                  )}
                </div>

                {/* Session Agenda options */}
                <div>
                  <label className="block text-xxs font-mono text-slate-400 uppercase tracking-widest mb-2.5">
                    Select Session Focus
                  </label>
                  <div className="space-y-2">
                    {agendas.map((ag) => {
                      const isSelected = agenda === ag;
                      return (
                        <div
                          key={ag}
                          onClick={() => setAgenda(ag)}
                          className={`p-2.5 rounded border text-xs font-sans font-normal transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'border-indigo-500/55 bg-indigo-950/10 text-slate-100'
                              : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 text-slate-400'
                          }`}
                        >
                          <span>{ag}</span>
                          <span className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-cyan-500 bg-cyan-500' : 'border-slate-800'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Email Address & Submission */}
                <div className="pt-2">
                  <label className="block text-xxs font-mono text-slate-400 uppercase tracking-widest mb-2.5">
                    Your Digital Email Address
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="client@studiohouston.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-slate-900 border border-slate-800 hover:border-slate-750 focus:border-cyan-500 rounded px-3 py-2 text-xs text-slate-200 placeholder-slate-600 outline-none transition-all"
                    />
                    <button
                      type="submit"
                      disabled={!selectedTime || !email || loading}
                      className={`px-4 py-2 rounded font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        selectedTime && email && !loading
                          ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white shadow-md'
                          : 'bg-slate-900 text-slate-500 border border-slate-800 cursor-not-allowed'
                      }`}
                    >
                      {loading ? (
                        <span>TRANSMITTING...</span>
                      ) : (
                        <>
                          <span>SECURE MEETING</span>
                          <Send className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-950/40 text-cyan-400 border border-cyan-800/40 flex items-center justify-center mx-auto mb-2 animate-bounce">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h4 className="font-display text-lg font-medium text-slate-100">
                  Meeting Transmitted Successfully
                </h4>
                
                <div className="max-w-md mx-auto p-4 bg-slate-900 rounded border border-slate-850 text-left">
                  <div className="grid grid-cols-2 gap-4 text-xxs font-mono">
                    <div>
                      <span className="text-slate-500 block">SELECTED DATE</span>
                      <span className="text-cyan-400 font-bold">{selectedDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">SELECTED TIME</span>
                      <span className="text-cyan-400 font-bold">{selectedTime}</span>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-slate-850">
                      <span className="text-slate-500 block">SESSION AGENDA</span>
                      <span className="text-slate-200">{agenda}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-500 block">SYNC COMMERCE LINK</span>
                      <span className="text-slate-350">{email} (Invitation sent)</span>
                    </div>
                  </div>
                </div>

                <p className="text-xxxs font-mono text-slate-500 pt-2">
                  SECURE SEC_ID: {Math.random().toString(36).substring(2, 9).toUpperCase()} &bull; PENDING BRIDGE SIGNAL
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setBooked(false);
                    setSelectedTime('');
                  }}
                  className="mt-6 px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-400 hover:text-slate-200 border border-slate-800 rounded transition-all cursor-pointer"
                >
                  SCHEDULE ANOTHER SESSION
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
