import React from 'react';
import { Link } from 'react-router-dom';
import { SkillSwapLogo } from '../Icons';

export default function LandingHeader() {
  return (
    <header className="h-[72px] px-8 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-2">
          <SkillSwapLogo className="w-7 h-7" />
          <span className="text-xl font-bold tracking-tight text-blue-700">SkillSwap</span>
        </Link>
        <nav className="hidden md:flex flex-row items-center gap-8 h-full">
          <Link to="/" className="text-sm font-bold text-blue-700 border-b-2 border-blue-700 h-[72px] flex items-center">
            Home
          </Link>
          <Link to="/marketplace" className="text-sm font-semibold text-slate-500 hover:text-slate-900 border-b-2 border-transparent h-[72px] flex items-center transition-colors">
            Marketplace
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/login" className="text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors">
          Log in
        </Link>
        <Link to="/register" className="text-sm font-bold bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-sm">
          Sign up
        </Link>
      </div>
    </header>
  );
}
