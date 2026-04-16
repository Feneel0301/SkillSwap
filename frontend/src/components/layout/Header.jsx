import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  SkillSwapLogo,
  WalletIcon,
  MenuIcon
} from '../Icons';

export default function Header({ onMenuToggle }) {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;

  return (
    <header className="h-16 px-4 md:px-8 flex items-center justify-between border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="flex items-center gap-4 lg:gap-12">
        {/* Hamburger Menu Toggle - Mobile Only */}
        <button 
          onClick={onMenuToggle}
          className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors"
        >
          <MenuIcon className="w-6 h-6 text-slate-600" />
        </button>

        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <SkillSwapLogo className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight text-blue-700 hidden xs:block">
            SkillSwap
          </span>
        </Link>

        {/* Desktop Nav Links - Hidden on Mobile */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          <Link
            to="/home"
            className={`text-sm font-semibold h-16 flex items-center border-b-2 transition-colors ${
              location.pathname === '/home' 
                ? 'text-blue-700 border-blue-700' 
                : 'text-slate-500 hover:text-slate-900 border-transparent'
            }`}
          >
            Home
          </Link>
          <Link
            to="/marketplace"
            className={`text-sm font-semibold h-16 flex items-center border-b-2 transition-colors ${
              location.pathname === '/marketplace' 
                ? 'text-blue-700 border-blue-700' 
                : 'text-slate-500 hover:text-slate-900 border-transparent'
            }`}
          >
            Marketplace
          </Link>
          <Link
            to="/sessions"
            className={`text-sm font-semibold h-16 flex items-center border-b-2 transition-colors ${
              location.pathname === '/sessions' 
                ? 'text-blue-700 border-blue-700' 
                : 'text-slate-500 hover:text-slate-900 border-transparent'
            }`}
          >
            Sessions
          </Link>
          <Link
            to="/messages"
            className={`text-sm font-semibold h-16 flex items-center border-b-2 transition-colors ${
              location.pathname === '/messages' 
                ? 'text-blue-700 border-blue-700' 
                : 'text-slate-500 hover:text-slate-900 border-transparent'
            }`}
          >
            Messages
          </Link>
        </nav>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 bg-[#f0eee4] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold text-slate-800">
          <WalletIcon className="w-4 h-4 text-orange-600" />
          <span className="hidden xs:inline">1,240</span>
        </div>
        
        <div className="flex items-center gap-3 ml-1 md:ml-2 border-l pl-2 md:pl-4 border-slate-200">
          {user ? (
            <Link to="/profile" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-none">{user.displayName}</p>
                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Premium Member</p>
              </div>
              <img
                src={user.avatarUrl || `https://ui-avatars.com/api/?name=${user.displayName}&background=3b82f6&color=fff`}
                alt="Profile"
                className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-slate-100 shadow-sm"
              />
            </Link>
          ) : (
            <Link to="/login" className="text-sm font-bold text-blue-600 hover:text-blue-700">Sign In</Link>
          )}
        </div>
      </div>
    </header>
  );
}
