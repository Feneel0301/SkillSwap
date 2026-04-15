import React from 'react';

export default function HeroCredits() {
  return (
    <div className="relative bg-gradient-to-br from-blue-700 to-indigo-600 rounded-3xl p-8 overflow-hidden shadow-sm">
      {/* Decorative shapes */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 flex items-center justify-end pr-8 pointer-events-none opacity-20">
        <div className="w-48 h-32 border-4 border-indigo-400 rounded-2xl rotate-12 absolute scale-110 translate-x-4"></div>
        <div className="w-48 h-32 border-4 border-indigo-300 rounded-2xl -rotate-6 absolute flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-indigo-300 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <p className="text-indigo-100 text-xs font-bold tracking-widest uppercase mb-1">
          TOTAL BALANCE
        </p>
        <div className="flex items-baseline gap-2 text-white mb-8">
          <span className="text-6xl font-extrabold tracking-tight">1,240</span>
          <span className="text-lg font-medium opacity-80">Credits</span>
        </div>
        <div className="flex gap-4">
          <button className="bg-white text-blue-700 font-bold px-6 py-3 rounded-full text-sm hover:bg-slate-50 transition-colors">
            Buy Credits
          </button>
          <button className="bg-white/10 text-white backdrop-blur-sm border border-white/20 font-bold px-6 py-3 rounded-full text-sm hover:bg-white/20 transition-colors">
            Transaction History
          </button>
        </div>
      </div>
    </div>
  );
}
