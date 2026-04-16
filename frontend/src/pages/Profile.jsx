import React, { useState } from 'react';
import Header from '../components/layout/Header';
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
  InfoIcon,
  ShieldCheckIcon,
} from '../components/Icons';

const Profile = () => {
  const [selectedDate, setSelectedDate] = useState(14);
  const [selectedTime, setSelectedTime] = useState('02:00 PM');

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
      comment: "Alex is an incredible mentor. He doesn't just show you how to do things; he explains the 'why' behind every design decision. My session on Figma auto-layouts was a game changer!"
    },
    {
      name: 'Marcus Chen',
      role: 'Junior Developer',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Marcus+Chen&background=0f172a&color=fff',
      comment: "Helped me debug a complex state issue in React in under 30 minutes. Extremely knowledgeable and patient. Highly recommend for technical hurdles."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            
            {/* Hero Section */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-start gap-8">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-[24px] bg-[#1e293b] flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://ui-avatars.com/api/?name=Alex+Rivers&background=1e293b&color=fff&size=128" 
                    alt="Alex Rivers" 
                    className="w-full h-full object-cover opacity-90"
                  />
                  {/* Silhouette overlay simulation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-4xl font-bold text-slate-900">Alex Rivers</h1>
                  <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
                    <StarIcon className="w-3 h-3 fill-purple-700" /> TOP MENTOR
                  </span>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed max-w-2xl font-medium">
                  Senior Product Designer & Creative Technologist. I help aspiring designers bridge the gap between aesthetics and engineering. Over 500 successful sessions completed.
                </p>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <StarIcon className="w-4 h-4 text-orange-400 fill-orange-400" />
                    <span>4.9</span>
                    <span className="text-slate-400 font-normal ml-1">(128 reviews)</span>
                  </div>
                  <div className="w-px h-4 bg-slate-200"></div>
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <MapPinIcon className="w-4 h-4 text-blue-600" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex flex-col gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                  Book a Session
                </button>
                <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-4 px-8 rounded-full transition-all active:scale-95">
                  Message Alex
                </button>
              </div>
            </div>

            {/* Skills I Teach */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Skills I Teach</h2>
                <button className="text-blue-600 font-bold hover:underline transition-all">View Portfolio</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 hover:border-blue-200 transition-colors cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:bg-blue-50 transition-colors">
                      <PenIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-slate-900 text-lg">UI/UX Design</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Advanced Figma workflows, design systems, and component architecture.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 hover:border-blue-200 transition-colors cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:bg-blue-50 transition-colors">
                      <CodeIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-slate-900 text-lg">React Development</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Building scalable front-end applications with Tailwind and TypeScript.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills I Want to Learn */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Skills I Want to Learn</h2>
              <div className="flex flex-wrap gap-4">
                <span className="bg-purple-50 text-purple-700 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 border border-purple-100 hover:bg-purple-100 transition-colors cursor-default">
                  <BrainIcon className="w-5 h-5" /> Machine Learning
                </span>
                <span className="bg-indigo-50 text-indigo-700 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-default">
                  <VideoCameraIcon className="w-5 h-5" /> Video Editing
                </span>
                <span className="bg-pink-50 text-pink-700 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 border border-pink-100 hover:bg-pink-100 transition-colors cursor-default">
                  <TranslateIcon className="w-5 h-5" /> Spanish
                </span>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 ml-2">Recent Reviews</h2>
              <div className="space-y-4">
                {reviews.map((review, idx) => (
                  <div key={idx} className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 space-y-4">
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
                    <p className="text-slate-600 italic leading-relaxed text-lg">
                      "{review.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[400px] space-y-8">
            
            {/* Availability Selection */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <CalendarIcon className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">Availability</h2>
              </div>
              
              <div className="grid grid-cols-7 gap-2 mb-8">
                {days.map((day, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedDate(day.date)}
                    className={`flex flex-col items-center py-4 rounded-2xl transition-all ${
                      selectedDate === day.date 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-4 ring-blue-100 scale-105' 
                        : day.available 
                          ? 'bg-slate-900 text-white hover:scale-105'
                          : 'bg-white hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    <span className={`text-[10px] font-bold mb-2 ${selectedDate === day.date ? 'text-blue-100' : 'text-slate-400'}`}>
                      {day.day}
                    </span>
                    <span className="text-lg font-bold">
                      {day.date}
                    </span>
                    {day.available && selectedDate !== day.date && (
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1"></div>
                    )}
                  </button>
                ))}
              </div>
              
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Available Times (Mar {selectedDate})</h3>
                <div className="grid grid-cols-2 gap-3">
                  {times.map((time, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSelectedTime(time)}
                      className={`font-bold py-4 rounded-2xl border transition-all ${
                        selectedTime === time 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20' 
                          : 'bg-white border-slate-100 text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-50">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-400 font-bold">Session Rate</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-blue-700">50 Credits</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-bold">1 hour focused mentorship</p>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-[24px] mt-8 flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-blue-600/20 group">
                  Confirm Booking 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Trust & Safety */}
            <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Trust & Safety</h2>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <ShieldCheckIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">Identity Verified</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <CalendarIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">Joined June 2022</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">Avg. Response: 2 hours</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Profile;
