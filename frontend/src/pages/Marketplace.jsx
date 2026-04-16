import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { StarIcon, CreditsIcon } from '../components/Icons';
import { useNavigate } from 'react-router-dom';

const mentors = [
  {
    id: 1,
    name: 'Marcus Chen',
    rating: 4.9,
    role: 'React Expert',
    description: 'Deep dive into Next.js, state management, and performance...',
    rate: 450,
    image: 'https://ui-avatars.com/api/?name=Marcus+Chen&background=0f172a&color=fff'
  },
  {
    id: 2,
    name: 'Elena Rodriguez',
    rating: 4.8,
    role: 'UI/UX Strategist',
    description: 'Expert in design systems, accessibility, and high-fidelity...',
    rate: 600,
    image: 'https://ui-avatars.com/api/?name=Elena+Rodriguez&background=ea580c&color=fff'
  },
  {
    id: 3,
    name: 'Dr. Aris Thorne',
    rating: 5.0,
    role: 'Python Lead',
    description: 'Specializing in Data Science, Machine Learning pipelines and...',
    rate: 850,
    image: 'https://ui-avatars.com/api/?name=Aris+Thorne&background=1e293b&color=fff'
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    rating: 4.7,
    role: 'Fullstack Dev',
    description: 'Expert in Tailwind CSS, Node.js, and scaling high-traffic web...',
    rate: 400,
    image: 'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=3b82f6&color=fff'
  },
  {
    id: 5,
    name: 'Jameson Wu',
    rating: 4.9,
    role: 'Product Architect',
    description: 'Mentoring on product roadmap strategy, MVP scoping, and...',
    rate: 750,
    image: 'https://ui-avatars.com/api/?name=Jameson+Wu&background=1e1b4b&color=fff'
  },
  {
    id: 6,
    name: 'Mia Lindholm',
    rating: 4.6,
    role: 'DevOps Guru',
    description: 'Optimize your CI/CD pipelines, Kubernetes clusters, and cloud...',
    rate: 550,
    image: 'https://ui-avatars.com/api/?name=Mia+Lindholm&background=4c1d95&color=fff'
  }
];

const Marketplace = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Development');
  
  const categories = ['Development', 'Design', 'Marketing', 'Business', 'Music'];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      
      <main className="max-w-[1440px] mx-auto flex gap-10 p-8">
        
        {/* Sidebar Filters */}
        <aside className="w-64 flex-shrink-0 space-y-10">
          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 font-display">Skill category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                      selectedCategory === cat 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6">Rating</h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center p-1 bg-white">
                    <div className="w-full h-full bg-blue-600 rounded-full" />
                  </div>
                  <span className="text-slate-600 font-bold group-hover:text-slate-900 transition-colors">4.5 & up <span className="text-orange-400">★</span></span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center p-1 bg-white group-hover:border-slate-300" />
                  <span className="text-slate-600 font-bold group-hover:text-slate-900 transition-colors">4.0 & up <span className="text-orange-400">★</span></span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6">Availability</h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center p-1 bg-white">
                    <div className="w-full h-full bg-blue-600 rounded-full" />
                  </div>
                  <span className="text-slate-600 font-bold group-hover:text-slate-900 transition-colors">Available Today</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center p-1 bg-white group-hover:border-slate-300" />
                  <span className="text-slate-600 font-bold group-hover:text-slate-900 transition-colors">Within 48 Hours</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center p-1 bg-white group-hover:border-slate-300" />
                  <span className="text-slate-600 font-bold group-hover:text-slate-900 transition-colors">Anytime</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-full transition-all shadow-lg shadow-blue-600/20 active:scale-95">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 space-y-10">
          <div>
            <h1 className="text-[44px] font-black text-slate-900 leading-tight mb-3">Find your next Mentor</h1>
            <p className="text-slate-500 text-lg font-medium">Curated experts ready to swap their wisdom for your credits.</p>
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 pt-6">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-[32px] p-6 pt-12 relative shadow-sm border border-slate-50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col group">
                {/* Avatar Overlay */}
                <div className="absolute -top-8 left-6 w-20 h-20 rounded-[28px] border-4 border-white shadow-lg overflow-hidden bg-slate-100 group-hover:scale-105 transition-transform duration-300">
                  <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">{mentor.name}</h3>
                    <div className="bg-orange-50 text-orange-600 px-2.5 py-1 rounded-full text-xs font-black flex items-center gap-1">
                      <StarIcon className="w-3.5 h-3.5 fill-current" />
                      {mentor.rating.toFixed(1)}
                    </div>
                  </div>

                  <span className="inline-block bg-purple-50 text-purple-700 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ring-1 ring-purple-100">
                    {mentor.role}
                  </span>

                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {mentor.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <CreditsIcon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-black text-slate-900 leading-tight">{mentor.rate}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">/ hr</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate(`/public-profile/${mentor.id}`)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl transition-all shadow-md shadow-blue-600/10 active:scale-95 text-sm"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Marketplace;
