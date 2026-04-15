import React from 'react';
import { VideoIcon } from '../Icons';

export default function SessionCard({ date, title, time, mentor, icon: IconComponent }) {
  return (
    <div className="bg-slate-100/50 hover:bg-slate-100 transition-colors rounded-3xl p-4 flex items-center justify-between group">
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-2xl w-16 h-16 flex flex-col items-center justify-center shadow-sm">
          <span className="text-[10px] font-extrabold text-orange-500 leading-none">{date.month}</span>
          <span className="text-xl font-black text-slate-900 leading-none mt-1">{date.day}</span>
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-900">{title}</h4>
          <p className="text-xs text-slate-500 font-medium mt-1">
            <span className="inline-block w-3 h-3 mr-1 bg-slate-300 rounded-full align-middle"></span>
            {time} • With {mentor}
          </p>
        </div>
      </div>
      
      {IconComponent ? (
        <button className="w-10 h-10 rounded-full bg-white text-blue-600 border border-slate-200 flex items-center justify-center mr-2 shadow-sm hover:border-slate-300 transition-colors">
          <IconComponent className="w-5 h-5" />
        </button>
      ) : (
        <button className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 opacity-80 hover:opacity-100 transition-opacity">
          <VideoIcon className="w-5 h-5 fill-current" />
        </button>
      )}
    </div>
  );
}
