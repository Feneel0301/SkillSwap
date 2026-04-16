import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingHero() {
  return (
    <section className="relative px-8 pt-20 pb-32 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
         <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-gradient-to-b from-blue-50 to-transparent blur-[80px]"></div>
      </div>

      <div className="max-w-xl">
        <h1 className="text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-slate-900 mb-6">
          Learn Anything. <br />
          <span className="text-blue-600">Teach Everything.</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
          Join the world's most tactile wisdom exchange. Master new crafts through high-definition live sessions or share your expertise to earn credits.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <Link to="/register" className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">
            Start Learning
          </Link>
          <Link to="/register" className="px-8 py-4 rounded-full bg-slate-200 text-slate-800 font-bold text-sm hover:bg-slate-300 transition-colors">
            Start Teaching
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            <img className="w-10 h-10 rounded-full border-2 border-white relative z-30" src="https://ui-avatars.com/api/?name=J+R&background=020617&color=fff" alt="" />
            <img className="w-10 h-10 rounded-full border-2 border-white relative z-20" src="https://ui-avatars.com/api/?name=S+C&background=1e293b&color=fff" alt="" />
            <img className="w-10 h-10 rounded-full border-2 border-white relative z-10" src="https://ui-avatars.com/api/?name=M+T&background=334155&color=fff" alt="" />
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Joined by <span className="font-bold text-blue-600">11,000+</span> curators this week
          </p>
        </div>
      </div>

      <div className="relative h-[600px] w-full hidden md:block">
        <div className="absolute right-0 top-0 w-full h-full">
          <div className="absolute top-[10%] left-[5%] w-[45%] rounded-3xl bg-white shadow-xl p-2 transform rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80" alt="UX Design" className="rounded-2xl w-full h-40 object-cover" />
             <span className="absolute bottom-4 left-4 bg-purple-100 text-purple-700 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">UX DESIGN</span>
          </div>
          
          <div className="absolute top-0 right-[5%] w-[40%] rounded-3xl bg-white shadow-xl p-2 transform rotate-[4deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80" alt="Cooking" className="rounded-2xl w-full h-36 object-cover" />
             <span className="absolute bottom-4 left-4 bg-orange-100 text-orange-700 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">COOKING</span>
          </div>

          <div className="absolute bottom-[20%] left-[8%] w-[42%] rounded-3xl bg-white shadow-xl p-2 transform rotate-[2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1556761175-5973e659b841?auto=format&fit=crop&w=400&q=80" alt="Business" className="rounded-2xl w-full h-32 object-cover object-top" />
             <span className="absolute bottom-4 left-4 bg-indigo-100 text-indigo-700 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">BUSINESS</span>
          </div>

          <div className="absolute bottom-[5%] right-[2%] w-[50%] rounded-3xl bg-white shadow-xl p-2 transform rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-300 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="Programming" className="rounded-2xl w-full h-56 object-cover" />
             <span className="absolute bottom-4 left-4 bg-fuchsia-100 text-fuchsia-700 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">PROGRAMMING</span>
          </div>
        </div>
      </div>
    </section>
  );
}
