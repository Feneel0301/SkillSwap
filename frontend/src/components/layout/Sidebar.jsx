import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  MarketplaceIcon,
  SessionsIcon,
  MessagesIcon,
  CreditsIcon,
} from '../Icons';

export default function Sidebar() {
  return (
    <aside className="w-64 p-6 flex flex-col justify-between border-r border-transparent">
      <div>
        <div className="mb-8 px-4">
          <h2 className="text-lg font-bold text-blue-700">Welcome, Learner</h2>
          <p className="text-xs text-slate-400 font-semibold mt-1">
            Premium Curator Status
          </p>
        </div>

        <nav className="space-y-1">
          <Link
            to="/home"
            className="flex items-center gap-3 px-4 py-3 rounded-full bg-blue-50/80 text-blue-700 font-bold text-sm transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            Home
          </Link>
          <Link
            to="/marketplace"
            className="flex items-center gap-3 px-4 py-3 rounded-full text-slate-500 font-semibold text-sm hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            <MarketplaceIcon className="w-5 h-5" />
            Marketplace
          </Link>
          <Link
            to="/sessions"
            className="flex items-center gap-3 px-4 py-3 rounded-full text-slate-500 font-semibold text-sm hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            <SessionsIcon className="w-5 h-5" />
            Sessions
          </Link>
          <Link
            to="/messages"
            className="flex items-center gap-3 px-4 py-3 rounded-full text-slate-500 font-semibold text-sm hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            <MessagesIcon className="w-5 h-5" />
            Messages
          </Link>
          <Link
            to="/credits"
            className="flex items-center gap-3 px-4 py-3 rounded-full text-slate-500 font-semibold text-sm hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            <CreditsIcon className="w-5 h-5" />
            Credits
          </Link>
        </nav>
      </div>

      {/* Sidebar CTA */}
      <div className="bg-slate-100 rounded-3xl p-5 text-center mt-12">
        <h3 className="text-sm font-bold text-blue-700 mb-4">
          Ready to level up?
        </h3>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full text-sm transition-colors shadow-md shadow-blue-600/20">
          Find a Mentor
        </button>
      </div>
    </aside>
  );
}
