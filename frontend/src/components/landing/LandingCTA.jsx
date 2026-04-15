import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingCTA() {
  return (
    <section className="px-8 pb-32 max-w-[1240px] mx-auto">
      <div className="bg-blue-600 rounded-[3rem] p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/20">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">Ready to swap skills?</h2>
          <p className="text-blue-100 font-medium text-lg mb-10">
            Join thousands of learners and teachers in the world's most dynamic exchange network.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register" className="px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-sm shadow-xl hover:bg-slate-50 transition-colors">
              Create Free Account
            </Link>
            <Link to="/register" className="px-8 py-4 rounded-full bg-blue-600 border-2 border-white/20 text-white font-bold text-sm hover:bg-blue-700 hover:border-white/40 transition-colors">
              Learn How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
