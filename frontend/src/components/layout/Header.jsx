import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  SkillSwapLogo,
  WalletIcon,
} from '../Icons';

export default function Header() {
  const navigate = useNavigate();
  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="h-16 px-8 flex items-center justify-between border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="flex items-center gap-12">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
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
        
        <div className="flex items-center gap-3 ml-2 border-l pl-4 border-slate-200">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-none mb-0.5">{user.displayName}</p>
                <button 
                  onClick={handleLogout}
                  className="text-[10px] font-bold text-slate-400 hover:text-red-500 uppercase tracking-wider transition-colors"
                >
                  Logout
                </button>
              </div>
              <img
                src={user.avatarUrl || `https://ui-avatars.com/api/?name=${user.displayName}&background=3b82f6&color=fff`}
                alt="Profile"
                className="w-9 h-9 rounded-full border border-slate-100 shadow-sm"
              />
            </div>
          ) : (
            <Link to="/login" className="text-sm font-bold text-blue-600 hover:text-blue-700">Sign In</Link>
          )}
        </div>
      </div>
    </header>
  );
}
