import React from 'react';
import { Link } from 'react-router-dom';

const ArrowRightIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ArrowLeftIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const QuoteIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export default function LandingTestimonials() {
  return (
    <section className="px-8 py-32 max-w-[1240px] mx-auto">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">Voices of Wisdom</h2>
          <p className="text-slate-500 font-medium">See how SkillSwap is transforming personal growth.</p>
        </div>
        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 shadow-md shadow-blue-700/30 transition-colors">
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-3xl p-8 relative shadow-sm border border-slate-100">
          <QuoteIcon className="absolute top-6 left-6 w-12 h-12 text-blue-100 opacity-60" />
          <p className="relative z-10 text-slate-700 font-medium italic mb-8 mt-4">
            "I taught three sessions of Python basics and earned enough credits to learn French Cooking and advanced UI design. The trade-off is incredibly empowering."
          </p>
          <div className="flex items-center gap-4">
            <img src="https://ui-avatars.com/api/?name=Julian+Rivera&background=020617&color=fff" alt="Julian" className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">Julian Rivera</h4>
              <p className="text-xs text-slate-500 font-medium">Full-stack Developer</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white rounded-3xl p-8 relative shadow-sm border border-slate-100">
          <QuoteIcon className="absolute top-6 left-6 w-12 h-12 text-blue-100 opacity-60" />
          <p className="relative z-10 text-slate-700 font-medium italic mb-8 mt-4">
            "The live sessions are a game-changer. Being able to ask questions and get instant feedback made me learn faster than any pre-recorded course ever could."
          </p>
          <div className="flex items-center gap-4">
            <img src="https://ui-avatars.com/api/?name=Sarah+Chen&background=1e293b&color=fff" alt="Sarah" className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">Sarah Chen</h4>
              <p className="text-xs text-slate-500 font-medium">Content Strategist</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white rounded-3xl p-8 relative shadow-sm border border-slate-100">
          <QuoteIcon className="absolute top-6 left-6 w-12 h-12 text-blue-100 opacity-60" />
          <p className="relative z-10 text-slate-700 font-medium italic mb-8 mt-4">
            "Teaching on SkillSwap helped me refine my own skills while building a global network. It's more than a learning platform; it's a real community."
          </p>
          <div className="flex items-center gap-4">
            <img src="https://ui-avatars.com/api/?name=Marcus+Thorne&background=334155&color=fff" alt="Marcus" className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">Marcus Thorne</h4>
              <p className="text-xs text-slate-500 font-medium">Executive Coach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
