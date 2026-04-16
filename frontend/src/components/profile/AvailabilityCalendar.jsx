import React, { useState } from 'react';
import { CalendarIcon, PlusIcon, TrashIcon } from '../Icons';

export default function AvailabilityCalendar({ availability, sessionRate, onUpdate, isEditMode }) {
  // Use current date as reference
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Generate next 30 days
  const days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    d.setHours(0, 0, 0, 0);
    return d;
  });

  const [selectedDate, setSelectedDate] = useState(days[0]);
  const [editingAvailability, setEditingAvailability] = useState(availability || []);
  const [newRate, setNewRate] = useState(sessionRate || 0);

  const getISODate = (date) => date.toISOString().split('T')[0];

  const getSlotsForDate = (date) => {
    const isoDate = getISODate(date);
    const dayData = editingAvailability.find(a => a.date === isoDate);
    return dayData ? dayData.slots : [];
  };

  const toggleSlot = (date, slot) => {
    const isoDate = getISODate(date);
    const newAvail = [...editingAvailability];
    const dayIndex = newAvail.findIndex(a => a.date === isoDate);

    if (dayIndex >= 0) {
      const slots = newAvail[dayIndex].slots;
      if (slots.includes(slot)) {
        newAvail[dayIndex].slots = slots.filter(s => s !== slot);
      } else {
        newAvail[dayIndex].slots = [...slots, slot].sort();
      }
      
      // Remove the day entry if no slots left
      if (newAvail[dayIndex].slots.length === 0) {
        newAvail.splice(dayIndex, 1);
      }
    } else {
      newAvail.push({ date: isoDate, slots: [slot] });
    }
    setEditingAvailability(newAvail);
  };

  const handleRateChange = (e) => {
    const val = parseInt(e.target.value) || 0;
    setNewRate(Math.max(0, val)); // Prevent negative
  };

  const handleSave = () => {
    onUpdate({ availability: editingAvailability, sessionRate: newRate });
  };

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  const activeSlots = getSlotsForDate(selectedDate);

  return (
    <div className="bg-white rounded-[2rem] shadow-sm p-6 md:p-8 border border-slate-100 mb-8 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Availability</h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">30-Day Outlook</p>
          </div>
        </div>
        
        {isEditMode ? (
          <div className="flex items-center gap-4 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Rate (Hr)</span>
            <div className="flex items-center gap-2">
              <input 
                type="number"
                min="0"
                value={newRate}
                onChange={handleRateChange}
                className="w-16 bg-transparent text-sm font-bold text-blue-600 outline-none"
              />
              <span className="text-[10px] font-bold text-slate-400">CREDITS</span>
            </div>
          </div>
        ) : (
          <div className="text-right">
            <p className="text-2xl font-black text-blue-600 leading-none">{sessionRate}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Credits/hour</p>
          </div>
        )}
      </div>

      {/* 30-Day Horizontal Scroll Container */}
      <div className="flex gap-3 overflow-x-auto pb-6 mb-8 no-scrollbar scroll-smooth snap-x">
        {days.map((date, i) => {
          const isSelected = getISODate(date) === getISODate(selectedDate);
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
          const dayNum = date.getDate();
          const hasSlots = getSlotsForDate(date).length > 0;

          return (
            <button
              key={i}
              onClick={() => setSelectedDate(date)}
              className={`flex-shrink-0 w-16 h-20 flex flex-col items-center justify-center rounded-2xl transition-all snap-start ${
                isSelected 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              <span className={`text-[10px] font-bold uppercase mb-1 ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                {dayName}
              </span>
              <span className="text-lg font-black">{dayNum}</span>
              {hasSlots && (
                <div className={`w-1 h-1 rounded-full mt-1 ${isSelected ? 'bg-white' : 'bg-blue-500'}`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Slots Section */}
      <div className="bg-slate-50/50 rounded-3xl p-6 border border-slate-50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">
            Slots for {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
          </h3>
          {activeSlots.length > 0 && (
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
              {activeSlots.length} Bookable Slots
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {timeSlots.map(slot => {
            const isSelected = activeSlots.includes(slot);
            
            return (
              <button
                key={slot}
                disabled={!isEditMode && !isSelected}
                onClick={() => isEditMode && toggleSlot(selectedDate, slot)}
                className={`px-4 py-3 rounded-xl text-xs font-bold transition-all border ${
                  isSelected 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm' 
                    : isEditMode 
                      ? 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'
                      : 'hidden'
                }`}
              >
                {slot}
              </button>
            );
          })}
          
          {!isEditMode && activeSlots.length === 0 && (
            <div className="w-full py-8 text-center text-slate-400 border-2 border-dashed border-slate-100 rounded-2xl">
              <p className="text-sm italic font-medium">No available slots for this date.</p>
            </div>
          )}
          
          {isEditMode && activeSlots.length === 0 && (
            <p className="text-xs text-slate-400 italic px-1">Select time slots to show availability.</p>
          )}
        </div>
      </div>

      {isEditMode && (
        <div className="mt-8 pt-6 border-t border-slate-100">
          <button
            onClick={handleSave}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
          >
            Update Availability & Rate
          </button>
        </div>
      )}
    </div>
  );
}
