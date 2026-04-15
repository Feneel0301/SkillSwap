import React from 'react';
import { Link } from 'react-router-dom';
import { SkillSwapLogo, WalletIcon, StarIcon } from '../components/Icons';

/* ------------- INLINE ICONS ------------- */
const SearchIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

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

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#fafafb] font-sans text-slate-900 overflow-x-hidden">
      
      {/* 1. Navbar */}
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

      {/* 2. Hero Section */}
      <section className="relative px-8 pt-20 pb-32 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Abstract Background Elements */}
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
            {/* Top Left: UX Design */}
            <div className="absolute top-[10%] left-[5%] w-[45%] rounded-3xl bg-white shadow-xl p-2 transform rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80" alt="UX Design" className="rounded-2xl w-full h-40 object-cover" />
               <span className="absolute bottom-4 left-4 bg-purple-100 text-purple-700 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">UX DESIGN</span>
            </div>
            
            {/* Top Right: Cooking */}
            <div className="absolute top-0 right-[5%] w-[40%] rounded-3xl bg-white shadow-xl p-2 transform rotate-[4deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80" alt="Cooking" className="rounded-2xl w-full h-36 object-cover" />
               <span className="absolute bottom-4 left-4 bg-orange-100 text-orange-700 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">COOKING</span>
            </div>

            {/* Bottom Left: Business */}
            <div className="absolute bottom-[20%] left-[8%] w-[42%] rounded-3xl bg-white shadow-xl p-2 transform rotate-[2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1556761175-5973e659b841?auto=format&fit=crop&w=400&q=80" alt="Business" className="rounded-2xl w-full h-32 object-cover object-top" />
               <span className="absolute bottom-4 left-4 bg-indigo-100 text-indigo-700 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">BUSINESS</span>
            </div>

            {/* Bottom Right: Programming */}
            <div className="absolute bottom-[5%] right-[2%] w-[50%] rounded-3xl bg-white shadow-xl p-2 transform rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-300 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="Programming" className="rounded-2xl w-full h-56 object-cover" />
               <span className="absolute bottom-4 left-4 bg-fuchsia-100 text-fuchsia-700 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">PROGRAMMING</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
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
                 <WalletIcon className="w-7 h-7" />
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
                 <button className="bg-white text-purple-600 font-bold px-6 py-2.5 rounded-full text-xs shadow-sm hover:bg-slate-50 transition-colors">
                   Explore Mentors
                 </button>
               </div>
               {/* Decorative Image */}
               <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-64 h-full  bg-black/10 rounded-2xl overflow-hidden self-end transform translate-y-10 scale-125">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="Mentor" className="w-full h-full object-cover object-top opacity-90 mix-blend-luminosity" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
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

      {/* 5. CTA Section */}
      <section className="px-8 pb-32 max-w-[1240px] mx-auto">
        <div className="bg-blue-600 rounded-[3rem] p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/20">
          {/* Subtle grid pattern background */}
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

      {/* 6. Footer */}
      <footer className="bg-slate-200/50 pt-20 pb-10 px-8 border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <SkillSwapLogo className="w-6 h-6" />
              <span className="text-lg font-bold tracking-tight text-blue-700">SkillSwap</span>
            </Link>
            <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
              Redefining peer-to-peer education through the philosophy of tactile wisdom and global exchange.
            </p>
            <div className="flex gap-3">
              {/* Fake Social Icons */}
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-600 shadow-sm cursor-pointer hover:text-blue-600 transition-colors">
                 <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-600 shadow-sm cursor-pointer hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-6 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4 text-xs font-medium text-slate-500">
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Marketplace</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Live Sessions</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Curators</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Credits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-xs font-medium text-slate-500">
              <li><Link to="#" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-xs font-bold text-slate-900 mb-6 uppercase tracking-wider">Subscribe to our curator newsletter</h4>
            <div className="flex bg-white rounded-full p-1 shadow-sm border border-slate-200">
              <input type="email" placeholder="Email address" className="bg-transparent border-none outline-none text-xs font-semibold px-4 w-full text-slate-700 placeholder:text-slate-400" />
              <button className="bg-blue-600 text-white rounded-full px-5 py-2 text-xs font-bold hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200/60 text-[10px] font-semibold text-slate-400 gap-4">
          <p>© 2024 SkillSwap. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
