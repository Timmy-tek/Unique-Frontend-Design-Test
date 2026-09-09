import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

/**
 * MetricsAndFilterBar
 * 5 distinct columns: Diagnosis (Hypertension), Heart Rate (89 bpm), Pressure (100 / 67),
 * Oxygen (98 %), Temperature (36.8 °C).
 * Secondary Filter Pills below metrics ("Office Visits", "Medications", "Labs", "Procedures", etc.).
 */
export function MetricsAndFilterBar() {
  const [activeFilter, setActiveFilter] = useState('Labs');

  const filters = [
    'Office Visits',
    'Medications',
    'Labs',
    'Procedures',
    'Hospitalizations',
    'Imaging',
  ];

  return (
    <div className="flex-1 flex flex-col justify-between gap-5 py-1">
      {/* Metrics Row (5 evenly spaced columns) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-baseline">
        {/* Metric 1: Diagnosis */}
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold text-[#7D7D7D] uppercase tracking-wider mb-1">
            DIAGNOSIS
          </span>
          <span className="text-[26px] font-bold text-[#202020] tracking-tight leading-none">
            Hypertension
          </span>
        </div>

        {/* Metric 2: Heart Rate */}
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold text-[#7D7D7D] uppercase tracking-wider mb-1">
            HEART RATE
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-[26px] font-bold text-[#202020] tracking-tight leading-none">
              89
            </span>
            <span className="text-[14px] font-normal text-[#7D7D7D]">
              bpm
            </span>
          </div>
        </div>

        {/* Metric 3: Pressure */}
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold text-[#7D7D7D] uppercase tracking-wider mb-1">
            PRESSURE
          </span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-[26px] font-bold text-[#202020] tracking-tight leading-none">
              100
            </span>
            <span className="text-[16px] font-normal text-[#7D7D7D]">
              /67
            </span>
          </div>
        </div>

        {/* Metric 4: Oxygen */}
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold text-[#7D7D7D] uppercase tracking-wider mb-1">
            OXYGEN
          </span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-[26px] font-bold text-[#202020] tracking-tight leading-none">
              98
            </span>
            <span className="text-[16px] font-normal text-[#7D7D7D]">
              %
            </span>
          </div>
        </div>

        {/* Metric 5: Temperature */}
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold text-[#7D7D7D] uppercase tracking-wider mb-1">
            TEMPERATURE
          </span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-[26px] font-bold text-[#202020] tracking-tight leading-none">
              36.8
            </span>
            <span className="text-[16px] font-normal text-[#7D7D7D]">
              °C
            </span>
          </div>
        </div>
      </div>

      {/* Secondary Navigation / Filter Pills Bar */}
      <div className="flex items-center flex-wrap gap-2 pt-1">
        {/* Sliders / Filter Icon Pill */}
        <button
          type="button"
          className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#4A4A4A] hover:text-black border border-[#E8E6DF] shadow-2xs cursor-pointer transition-all"
          aria-label="Filter Options"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>

        {/* Secondary Navigation Options */}
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`h-9 px-4 rounded-[18px] text-[13px] font-medium transition-all duration-200 cursor-pointer select-none border ${
                isActive
                  ? 'bg-white text-[#202020] font-semibold border-[#E8E6DF] shadow-xs'
                  : 'bg-white/60 text-[#7D7D7D] hover:text-[#202020] border-transparent hover:bg-white/90'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MetricsAndFilterBar;
