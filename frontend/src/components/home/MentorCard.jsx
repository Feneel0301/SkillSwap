import React from 'react';
import { StarIcon } from '../Icons';

export default function MentorCard({ name, role, tags, rating, reviews, rate, image }) {
  return (
    <div className="bg-white rounded-3xl p-6 pt-10 relative shadow-sm hover:shadow-md transition-shadow mt-6 flex flex-col h-full">
      <div className="absolute -top-6 left-6 w-14 h-14 rounded-full border-4 border-white shadow-sm overflow-hidden bg-slate-200">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{name}</h3>
      <p className="text-xs text-slate-500 font-medium mb-4">{role}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <span key={i} className={`px-3 py-1 rounded-full text-[10px] font-bold ${tag.colorClass}`}>
            {tag.label}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1 text-sm font-bold text-orange-600">
          <StarIcon className="w-4 h-4" />
          {rating} <span className="text-slate-400 ml-1 text-xs">({reviews})</span>
        </div>
        <div className="text-sm font-bold text-blue-600">
          {rate} c/hr
        </div>
      </div>
    </div>
  );
}
