import React from 'react';
import { 
  StarIcon, 
  MapPinIcon, 
  CalendarIcon, 
  PenIcon, 
  CodeIcon, 
  BrainIcon, 
  VideoCameraIcon, 
  TranslateIcon, 
  ClockIcon, 
  ShieldCheckIcon 
} from '../Icons';

export default function PublicProfileView({ user, isOwner, onEdit }) {
  // Use user data passed from parent, or fallback to demo data if needed
  const days = [
    { day: 'MO', date: 12 },
    { day: 'TU', date: 13 },
    { day: 'WE', date: 14, active: true },
    { day: 'TH', date: 15 },
    { day: 'FR', date: 16, available: true },
    { day: 'SA', date: 17 },
    { day: 'SU', date: 18 },
  ];

  const times = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Product Designer at TechFlow',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=ea580c&color=fff',
      comment: "Incredible mentor. They don't just show you how to do things; they explain the 'why' behind every design decision."
    },
    {
      name: 'Marcus Chen',
      role: 'Junior Developer',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Marcus+Chen&background=0f172a&color=fff',
      comment: "Extremely knowledgeable and patient. Highly recommend for technical hurdles."
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 space-y-8">
        {/* Profile Card */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-start gap-8">
          <div className="relative">
            <img 
              src={user.avatarUrl || `https://ui-avatars.com/api/?name=${user.displayName}&background=3b82f6&color=fff`} 
              alt={user.displayName} 
              className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-xl border-4 border-slate-50"
            />
          </div>
          
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{user.displayName}</h1>
              <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 uppercase tracking-wider border border-blue-100">
                <StarIcon className="w-3 h-3" /> TOP MENTOR
              </span>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl font-medium">
              {user.bio || "Experience matters. I help aspiring professionals bridge the gap between theory and practice."}
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-6 text-sm">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <StarIcon className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span>4.9</span>
                <span className="text-slate-400 font-normal ml-1">(128 reviews)</span>
              </div>
              <div className="w-px h-4 bg-slate-200"></div>
              <div className="flex items-center gap-1.5 text-slate-600 font-medium font-bold">
                <MapPinIcon className="w-4 h-4 text-blue-600" />
                <span>{user.location || "Earth"}</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-auto flex flex-col gap-3 pt-4 md:pt-0">
            {isOwner ? (
              <button 
                onClick={onEdit}
                className="bg-slate-900 hover:bg-black text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <PenIcon className="w-4 h-4" />
                Edit My Profile
              </button>
            ) : (
              <>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                  Book a Session
                </button>
                <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-4 px-8 rounded-2xl transition-all active:scale-95">
                  Message
                </button>
              </>
            )}
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 font-bold">Skills I Teach</h2>
            <div className="flex flex-wrap gap-3">
              {(user.skillsTeach || ['UI/UX Design', 'React Development']).map(skill => (
                <span key={skill} className="bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-2xl text-sm font-semibold text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 font-bold">Goals</h2>
            <div className="flex flex-wrap gap-3">
              {(user.skillsLearn || ['Machine Learning', 'Public Speaking']).map(skill => (
                <span key={skill} className="bg-purple-50 border border-purple-100 px-4 py-2.5 rounded-2xl text-sm font-semibold text-purple-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 ml-2 font-bold">Recent Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 space-y-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border border-slate-100" />
                    <div>
                      <h4 className="font-bold text-slate-900">{review.name}</h4>
                      <p className="text-slate-400 text-xs font-semibold">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed text-lg font-medium">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Info */}
      <div className="w-full lg:w-[400px] space-y-8">
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8">
            <CalendarIcon className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900 font-bold">Availability</h2>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-7 gap-2 mb-8">
            {days.map((day, idx) => (
              <div 
                key={idx}
                className={`flex flex-col items-center py-4 rounded-2xl transition-all ${
                  day.active 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-slate-50 text-slate-400'
                }`}
              >
                <span className="text-[10px] font-bold mb-2 uppercase">{day.day}</span>
                <span className="text-lg font-bold">{day.date}</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select Hour</p>
            <div className="grid grid-cols-2 gap-3">
              {times.map((time, idx) => (
                <button 
                  key={idx}
                  className={`font-bold py-4 rounded-2xl border transition-all ${
                    idx === 1 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-slate-100 text-slate-900'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">Rate</span>
              <span className="text-2xl font-black text-blue-700">{user.sessionRate || 50} Credits/Hr</span>
            </div>
            <button className="w-full bg-slate-900 hover:bg-black text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-slate-200">
              Confirm Booking →
            </button>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-sm space-y-6 text-white overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl -mr-16 -mt-16 opacity-20" />
          <h2 className="text-xl font-bold relative z-10">Trust & Safety</h2>
          <div className="space-y-5 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 text-blue-400" />
              </div>
              <span className="font-bold text-slate-300 text-sm">Identity Verified</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <ClockIcon className="w-5 h-5 text-orange-400" />
              </div>
              <span className="font-bold text-slate-300 text-sm">Response Time: 2h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
