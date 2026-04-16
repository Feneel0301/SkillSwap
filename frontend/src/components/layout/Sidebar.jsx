import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  MarketplaceIcon,
  SessionsIcon,
  MessagesIcon,
  CreditsIcon,
  LogoutIcon,
  XIcon
} from '../Icons';

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const menuItems = [
    { path: '/home', label: 'Home', icon: HomeIcon },
    { path: '/marketplace', label: 'Marketplace', icon: MarketplaceIcon },
    { path: '/sessions', label: 'Sessions', icon: SessionsIcon },
    { path: '/messages', label: 'Messages', icon: MessagesIcon },
    { path: '/credits', label: 'Credits', icon: CreditsIcon },
  ];

  return (
    <>
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white p-6 flex flex-col justify-between border-r border-slate-200 
        transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:z-0 lg:h-auto lg:top-0
        ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className="flex justify-between items-center mb-8 px-4">
            <div>
              <h2 className="text-lg font-bold text-blue-800">Welcome, Learner</h2>
              <p className="text-xs text-slate-400 font-semibold mt-1 uppercase tracking-wider">
                Premium Curator
              </p>
            </div>
            {/* Close button - Mobile only */}
            <button 
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <XIcon className="w-5 h-5 text-slate-400" />
            </button>
          </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-slate-100 space-y-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 font-bold text-sm hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
        >
          <LogoutIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Logout
        </button>

        {/* Sidebar CTA */}
        <div className="bg-slate-50 rounded-2xl p-4 text-center">
          <h3 className="text-xs font-bold text-slate-900 mb-2">
            Ready to level up?
          </h3>
          <button className="w-full bg-slate-900 hover:bg-black text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-sm">
            Find a Mentor
          </button>
        </div>
      </div>
    </aside>
    </>
  );
}
