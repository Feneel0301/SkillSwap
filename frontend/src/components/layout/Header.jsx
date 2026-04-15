import React from 'react';
import { Link } from 'react-router-dom';
import {
  SkillSwapLogo,
  WalletIcon,
} from '../Icons';

export default function Header() {
  return (
    <header className="h-16 px-8 flex items-center justify-between border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="flex items-center gap-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <SkillSwapLogo className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight text-blue-700">
            SkillSwap
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-8 h-full">
          <Link
            to="/home"
            className="text-sm font-semibold text-blue-700 h-16 flex items-center border-b-2 border-blue-700"
          >
            Home
          </Link>
          <Link
            to="/marketplace"
            className="text-sm font-semibold text-slate-500 hover:text-slate-900 h-16 flex items-center border-b-2 border-transparent transition-colors"
          >
            Marketplace
          </Link>
        </nav>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-[#f0eee4] px-4 py-2 rounded-full text-sm font-bold text-slate-800">
          <WalletIcon className="w-4 h-4 text-orange-600" />
          1,240
        </div>
        <button className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
          <WalletIcon className="w-5 h-5 flex-shrink-0" />
        </button>
        <div className="flex items-center gap-2 cursor-pointer ml-2">
          <img
            src="https://ui-avatars.com/api/?name=Learner&background=F59E0B&color=fff"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-bold text-slate-700">Profile</span>
        </div>
      </div>
    </header>
  );
}
