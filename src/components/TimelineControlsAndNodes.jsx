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
 * Dark gray medication pill container with white circular icon badge on the left
 * and clean white text ("Aspirin x2", "bisoprolol x3").
 */
export function MedicationCapsule({ name, dose, icon: Icon = Pill }) {
  return (
    <div className="inline-flex items-center gap-2.5 bg-[#6D6B66] text-white pl-1.5 pr-4 py-1.5 rounded-full border border-[#5E5C57] shadow-sm text-xs font-medium">
      {/* White Circular Left Badge */}
      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
        <Icon className="w-3.5 h-3.5 text-[#4A4A4A]" />
      </div>

      {/* Medication Name & Dose */}
      <div className="flex items-center gap-1.5">
        <span className="font-semibold text-[13px] tracking-tight">{name}</span>
        <span className="text-[12px] text-white/80 font-normal">{dose}</span>
      </div>
    </div>
  );
}

export default TimelineControlsAndNodes;
