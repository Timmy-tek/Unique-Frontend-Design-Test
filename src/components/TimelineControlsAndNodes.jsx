import React from 'react';
import { ChevronUp, ChevronDown, Plus, Pill } from 'lucide-react';

export const TimelineControlsAndNodes = () => {
  return (
    <>
      {/* Floating Action Button (Top Right) */}
      <button
        aria-label="Add item"
        className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#2B2B2B] text-white flex items-center justify-center shadow-lg hover:bg-black hover:scale-105 transition-all duration-200 z-30 cursor-pointer"
      >
        <Plus size={22} strokeWidth={2} />
      </button>

      {/* Floating Vertical Direction Controls (Left side) */}
      <div className="hidden md:flex flex-col gap-1.5 bg-white p-1.5 rounded-2xl shadow-sm border border-[#E8E6DF] absolute left-3 top-1/2 -translate-y-1/2 z-20">
        <button aria-label="Up" className="p-1.5 hover:bg-neutral-100 rounded-xl text-[#55534E] transition-colors cursor-pointer">
          <ChevronUp size={16} strokeWidth={2.5} />
        </button>
        <button aria-label="Down" className="p-1.5 hover:bg-neutral-100 rounded-xl text-[#55534E] transition-colors cursor-pointer">
          <ChevronDown size={16} strokeWidth={2.5} />
        </button>
      </div>
    </>
  );
};

export const MedicationCapsule = ({ name, dose }) => {
  return (
    <div className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-full border border-[#E8E6DF] shadow-xs text-xs font-medium text-[#1E1E1E] interactive-hover">
      <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-[#55534E]">
        <Pill size={12} strokeWidth={2.5} />
      </div>
      <span>{name}</span>
      <span className="bg-[#2B2B2B] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
        {dose}
      </span>
    </div>
  );
};
