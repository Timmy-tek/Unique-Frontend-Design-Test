import React from 'react';
import { ChevronUp, ChevronDown, Plus, Pill } from 'lucide-react';

/**
 * TimelineControlsAndNodes
 * Vertical scroll controls (Up / Down arrows) and floating action button (+).
 */
export function TimelineControlsAndNodes() {
  return (
    <>
      {/* Vertical Navigation Controls (Left side) */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center bg-white rounded-full p-1 border border-[#E8E6DF] shadow-md">
        <button
          type="button"
          className="w-7 h-7 flex items-center justify-center text-[#7D7D7D] hover:text-[#202020] transition-colors cursor-pointer"
          aria-label="Scroll Up"
        >
          <ChevronUp className="w-4 h-4 stroke-[2.5]" />
        </button>
        <div className="w-4 h-[1px] bg-[#E8E6DF] my-0.5" />
        <button
          type="button"
          className="w-7 h-7 flex items-center justify-center text-[#7D7D7D] hover:text-[#202020] transition-colors cursor-pointer"
          aria-label="Scroll Down"
        >
          <ChevronDown className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Floating Plus Action Button (Top Right of Timeline) */}
      <div className="absolute right-2 top-0 z-20">
        <button
          type="button"
          className="w-11 h-11 rounded-full bg-[#2B2B2B] hover:bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Add Medical Record"
        >
          <Plus className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </>
  );
}

/**
 * MedicationCapsule
 * Small floating white medication capsule badge ("Aspirin x2", "Bisoprolol x3").
 */
export function MedicationCapsule({ name, dose, icon: Icon = Pill }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#E8E6DF] shadow-xs text-xs font-medium text-[#202020]">
      <Icon className="w-3.5 h-3.5 text-[#7D7D7D]" />
      <span className="font-semibold">{name}</span>
      <span className="bg-[#55534E] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
        {dose}
      </span>
    </div>
  );
}

export default TimelineControlsAndNodes;
