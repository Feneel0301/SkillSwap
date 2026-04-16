import React, { useState } from 'react';
import { TrashIcon, PlusIcon } from '../Icons';

export default function SkillsSection({ title, skills, onAdd, onRemove, isEditMode }) {
  const [newSkill, setNewSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSkill.trim()) {
      onAdd(newSkill.trim());
      setNewSkill('');
    }
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-sm p-6 md:p-8 border border-slate-100 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills && skills.map((skill, index) => (
          <div 
            key={index}
            className="group flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-2xl transition-all hover:border-blue-200 hover:bg-white"
          >
            <span className="text-sm font-semibold text-slate-700">{skill}</span>
            {isEditMode && (
              <button 
                onClick={() => onRemove(skill)}
                className="text-slate-300 hover:text-red-500 transition-colors"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}

        {isEditMode && (
          <form onSubmit={handleSubmit} className="flex-1 min-w-[150px]">
            <div className="relative">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add skill..."
                className="w-full bg-blue-50/50 border border-dashed border-blue-200 focus:border-blue-500 focus:bg-white transition-all rounded-2xl px-4 py-2 text-sm outline-none"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
              >
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {!isEditMode && (!skills || skills.length === 0) && (
          <p className="text-sm text-slate-400 italic">No skills added yet.</p>
        )}
      </div>
    </div>
  );
}
