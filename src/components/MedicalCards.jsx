import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

/**
 * BloodPressureCard
 */
export const BloodPressureCard = ({ day, currentReading, averageReading, trend, isHigh }) => {
  return (
    <div className="bg-white rounded-[24px] p-5 border border-[#E8E6DF] shadow-xs flex flex-col justify-between h-full min-h-[170px] w-full max-w-[340px] interactive-hover">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#1E1E1E] font-sans">Blood Pressure</h3>
        <button className="text-[#7D7D7D] hover:text-black transition-colors cursor-pointer">
          <SlidersHorizontal size={14} strokeWidth={2} />
        </button>
      </div>

      {/* Graph Area */}
      <div className="relative my-2 h-[60px] w-full flex flex-col justify-center">
        <span className="text-[10px] text-[#7D7D7D] text-center block mb-0.5">{day}</span>
        <div className="relative w-full h-[40px] flex items-center justify-center">
          {/* Subtle SVG baseline waveform */}
          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40" preserveAspectRatio="none">
            <path
              d="M 0 20 Q 20 10, 40 20 T 80 20 T 120 15 T 160 25 T 200 20"
              fill="none"
              stroke="#E0DED6"
              strokeWidth="2"
            />
            {/* Highlight area */}
            <path
              d="M 60 20 Q 80 5, 100 12 T 140 20 L 140 30 L 60 30 Z"
              fill="#E8EB2A"
              opacity="0.6"
            />
          </svg>

          {/* Floating dark badge for reading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1E1E1E] text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
            {currentReading}
          </div>
        </div>
      </div>

      {/* Footer / Stats */}
      <div className="flex items-center justify-between text-xs pt-1 border-t border-neutral-100">
        <span className="text-[#7D7D7D]">
          Average: <strong className="text-[#1E1E1E] font-semibold">{averageReading}</strong>
        </span>
        <span className={`font-semibold ${isHigh ? 'text-[#1E1E1E]' : 'text-emerald-600'}`}>
          {trend}
        </span>
      </div>
    </div>
  );
};

/**
 * SymptomsCard
 */
export const SymptomsCard = () => {
  return (
    <div className="bg-white rounded-[24px] p-5 border border-[#E8E6DF] shadow-xs flex flex-col justify-between h-full min-h-[150px] w-full max-w-[340px] interactive-hover">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#1E1E1E]">Symptoms</h3>
        <button className="text-[#7D7D7D] hover:text-black transition-colors cursor-pointer">
          <SlidersHorizontal size={14} strokeWidth={2} />
        </button>
      </div>

      <div className="flex items-center justify-between my-2">
        <div>
          <span className="text-xs font-semibold text-[#1E1E1E] block">Headache</span>
          <span className="text-[11px] text-[#7D7D7D]">Mild intensity</span>
        </div>

        {/* Stylized minimal torso graphic with active symptom marker */}
        <div className="relative w-12 h-12 bg-neutral-50 rounded-full border border-neutral-100 flex items-center justify-center">
          <div className="w-6 h-8 border-2 border-neutral-300 rounded-lg relative flex justify-center">
            <div className="w-2.5 h-2.5 bg-[#E8EB2A] rounded-full border border-black absolute -top-1 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * EcgCard
 */
export const EcgCard = () => {
  return (
    <div className="bg-white rounded-[24px] p-5 border border-[#E8E6DF] shadow-xs flex flex-col justify-between h-full min-h-[150px] w-full max-w-[340px] interactive-hover">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#1E1E1E]">ECG</h3>
        <button className="text-[#7D7D7D] hover:text-black transition-colors cursor-pointer">
          <SlidersHorizontal size={14} strokeWidth={2} />
        </button>
      </div>

      {/* Realistic ECG Waveform */}
      <div className="h-[50px] w-full my-1 flex items-center">
        <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
          <path
            d="M 0 20 L 30 20 L 35 15 L 40 25 L 45 5 L 50 35 L 55 20 L 80 20 L 85 18 L 90 22 L 95 20 L 120 20 L 125 15 L 130 25 L 135 5 L 140 35 L 145 20 L 200 20"
            fill="none"
            stroke="#1E1E1E"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
