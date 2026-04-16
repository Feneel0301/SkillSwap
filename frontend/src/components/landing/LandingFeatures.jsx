import React from 'react';
import { Link } from 'react-router-dom';

const FeatureRefreshIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
    <path d="M21 3v5h-5"></path>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
    <path d="M3 21v-5h5"></path>
    <path d="M12 8v8M8 12h8"></path> 
  </svg>
);

const FeatureCalendarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const FeaturePeopleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

export default function LandingFeatures() {
  return (
    <section className="px-8 py-24 bg-slate-100/50">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">A Platform Built for Mastery</h2>
          <p className="text-slate-500 font-medium">We've removed the barriers to peer-to-peer education with a seamless ecosystem of exchange.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Feature 1: Credit System (Spans 2 cols) */}
          <div className="md:col-span-2 bg-white rounded-[2rem] p-10 relative overflow-hidden shadow-sm group hover:shadow-md transition-all">
             <div className="absolute -right-8 -bottom-16 opacity-[0.03] text-slate-900 group-hover:scale-110 transition-transform duration-500">
                <FeatureRefreshIcon className="w-96 h-96" />
             </div>
             <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                {/* Replaced generic wallet/credit sync icon */}
                <FeatureRefreshIcon className="w-7 h-7" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">Seamless Credit System</h3>
             <p className="text-slate-500 font-medium relative z-10 max-w-md">
               No direct payments required. Earn credits by teaching what you love, then spend them to learn from world-class experts across the globe.
             </p>
          </div>

          {/* Feature 2: Live Sessions (Blue Card) */}
          <div className="bg-blue-700 rounded-[2rem] p-10 relative overflow-hidden shadow-lg shadow-blue-700/20 text-white flex flex-col justify-between">
             <div>
               <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 backdrop-blur-sm">
                 <FeatureCalendarIcon className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold mb-3">Live Sessions</h3>
               <p className="text-blue-100 font-medium text-sm">
                 Real-time feedback and interactive workshops. No more passive watching.
               </p>
             </div>
             <div className="flex items-center gap-2 mt-auto">
               <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
               <span className="text-[10px] font-extrabold uppercase tracking-wider">68 SESSIONS LIVE NOW</span>
             </div>
          </div>

          {/* Feature 3: Global Community */}
          <div className="bg-white rounded-[2rem] p-10 relative shadow-sm">
             <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
               <FeaturePeopleIcon className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Global Community</h3>
             <p className="text-slate-500 text-sm font-medium">
               Join focus groups and niche circles to grow alongside peers who share your passions.
             </p>
          </div>

          {/* Feature 4: Ideal Mentor (Spans 2 cols, Purple) */}
          <div className="md:col-span-2 bg-[#8b5cf6] rounded-[2rem] p-10 relative overflow-hidden shadow-lg shadow-purple-500/20 text-white flex items-center justify-between">
             <div className="max-w-sm relative z-10">
               <h3 className="text-2xl font-bold mb-3">Find Your Ideal Mentor</h3>
               <p className="text-purple-100 font-medium text-sm mb-6">
                 Our curator status ensures you learn from verified experts. Filter by skill, rating, or language to find the perfect match for your learning journey.
               </p>
               <Link to="/register" className="inline-block bg-white text-purple-600 font-bold px-6 py-2.5 rounded-full text-xs shadow-sm hover:bg-slate-50 transition-colors">
                 Explore Mentors
               </Link>
             </div>
             {/* Decorative Image */}
             <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-64 h-full bg-black/10 rounded-2xl overflow-hidden self-end transform translate-y-10 scale-125">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="Mentor" className="w-full h-full object-cover object-top opacity-90 mix-blend-luminosity" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
