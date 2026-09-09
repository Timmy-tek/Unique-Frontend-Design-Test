import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

/**
 * BloodPressureCard
 * Displays blood pressure waveform chart, Friday/Thursday reading, current badge ("180/120"),
 * average reading ("160/110"), and trend indicator ("+10°").
 */
export function BloodPressureCard({
  day = "Friday",
  currentReading = "180/120",
  averageReading = "160/110",
  trend = "+10°",
  isHigh = true
}) {
  return (
    <div className="bg-white rounded-[22px] p-5 border border-[#E8E6DF] shadow-xs flex flex-col justify-between gap-4">
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-bold text-[#202020] tracking-tight">
          Blood Pressure
        </h3>
        <button
          type="button"
          className="text-[#7D7D7D] hover:text-[#202020] transition-colors"
          aria-label="Settings"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Chart Visual Surface */}
      <div className="relative h-20 w-full flex items-center justify-center my-1">
        {/* Day Label */}
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[11px] font-semibold text-[#7D7D7D]">
          {day}
        </span>

        {/* SVG Chart Line & Highlight Area */}
        <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
          {/* Baseline Waveform */}
          <path
            d="M 0 35 Q 40 42, 80 30 T 160 38 T 200 32"
            fill="none"
            stroke="#D9D7D1"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Highlight Yellow Peak Area */}
          <path
            d="M 60 32 Q 90 12, 120 30 L 120 38 Q 90 38, 60 38 Z"
            fill="#E8EB2A"
            opacity="0.85"
          />

          <path
            d="M 60 32 Q 90 12, 120 30"
            fill="none"
            stroke="#1E1E1E"
            strokeWidth="2"
          />
        </svg>

        {/* Floating Reading Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1E1E1E] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md tracking-wider">
          {currentReading}
        </div>
      </div>

      {/* Card Footer Details */}
      <div className="flex items-center justify-between pt-1 border-t border-[#F0EEE6]">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[12px] font-medium text-[#7D7D7D]">Average:</span>
          <span className="text-[13px] font-bold text-[#202020]">{averageReading}</span>
        </div>

        <span className={`text-[13px] font-bold ${isHigh ? 'text-[#202020]' : 'text-[#202020]'}`}>
          {trend}
        </span>
      </div>
    </div>
  );
}

/**
 * SymptomsCard
 * Card showing Headache symptom severity and human body silhouette with highlighted focal area.
 */
export function SymptomsCard() {
  return (
    <div className="bg-white rounded-[22px] p-5 border border-[#E8E6DF] shadow-xs flex flex-col justify-between gap-4">
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-bold text-[#202020] tracking-tight">
          Symptoms
        </h3>
        <button
          type="button"
          className="text-[#7D7D7D] hover:text-[#202020] transition-colors"
          aria-label="Settings"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Symptoms Visual Area */}
      <div className="flex items-center justify-between my-1">
        {/* Symptom Info */}
        <div className="flex flex-col gap-1">
          <span className="text-[14px] font-bold text-[#202020]">
            Headache
          </span>
          <span className="text-[12px] font-medium text-[#7D7D7D]">
            Mild intensity
          </span>
        </div>

        {/* Human Silhouette Graphic with Glowing Accent Dot */}
        <div className="relative w-14 h-20 flex items-center justify-center">
          <svg className="w-full h-full text-[#E0DDD5]" viewBox="0 0 50 80" fill="currentColor">
            {/* Minimalist Body Silhouette */}
            <circle cx="25" cy="12" r="8" />
            <path d="M 15 24 C 15 22, 35 22, 35 24 L 38 48 C 38 50, 34 50, 33 48 L 30 78 L 26 78 L 26 52 L 24 52 L 24 78 L 20 78 L 17 48 C 16 50, 12 50, 12 48 Z" />
          </svg>

          {/* Focal Yellow Highlight Dot at Chest/Neck */}
          <div className="absolute top-[22px] left-[23px] w-3 h-3 rounded-full bg-[#E8EB2A] border-2 border-black shadow-xs animate-pulse" />
        </div>
      </div>
    </div>
  );
}

/**
 * EcgCard
 * Displays ECG rhythm trace waveform line on clean white background.
 */
export function EcgCard() {
  return (
    <div className="bg-white rounded-[22px] p-5 border border-[#E8E6DF] shadow-xs flex flex-col justify-between gap-4">
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-bold text-[#202020] tracking-tight">
          ECG
        </h3>
        <button
          type="button"
          className="text-[#7D7D7D] hover:text-[#202020] transition-colors"
          aria-label="Settings"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* ECG Trace Line */}
      <div className="h-20 w-full flex items-center justify-center my-1 overflow-hidden">
        <svg className="w-full h-12" viewBox="0 0 240 40" preserveAspectRatio="none">
          <path
            d="M 0 20 L 40 20 L 48 20 L 52 8 L 58 34 L 64 2 L 70 24 L 74 20 L 110 20 L 150 20 L 158 20 L 162 8 L 168 34 L 174 2 L 180 24 L 184 20 L 240 20"
            fill="none"
            stroke="#1E1E1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default BloodPressureCard;
