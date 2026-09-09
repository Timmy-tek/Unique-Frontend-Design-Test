import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { ShapemorphicPill } from './ShapemorphicPill';

const filterCategories = [
  { id: 'office-visits', label: 'Office Visits', active: true },
  { id: 'medications', label: 'Medications', active: true },
  { id: 'labs', label: 'Labs', active: true },
  { id: 'procedures', label: 'Procedures', active: false },
  { id: 'hospitalizations', label: 'Hospitalizations', active: false },
  { id: 'imaging', label: 'Imaging', active: false },
];

export const MetricsAndFilterBar = () => {
  return (
    <div className="flex-1 flex flex-col justify-between gap-4">
      {/* Metrics Row (5 Columns) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-baseline">
        {/* Metric 1 */}
        <div>
          <span className="block text-[11px] uppercase tracking-wider text-[#7D7D7D] font-medium mb-1">
            Diagnosis
          </span>
          <div className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#1E1E1E] leading-tight">
            Hypertension
          </div>
        </div>

        {/* Metric 2 */}
        <div>
          <span className="block text-[11px] uppercase tracking-wider text-[#7D7D7D] font-medium mb-1">
            Heart Rate
          </span>
          <div className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#1E1E1E] leading-tight flex items-baseline gap-1">
            89 <span className="text-xs sm:text-sm font-normal text-[#7D7D7D]">bpm</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div>
          <span className="block text-[11px] uppercase tracking-wider text-[#7D7D7D] font-medium mb-1">
            Pressure
          </span>
          <div className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#1E1E1E] leading-tight flex items-baseline gap-0.5">
            100<span className="text-sm font-normal text-[#7D7D7D]">/67</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div>
          <span className="block text-[11px] uppercase tracking-wider text-[#7D7D7D] font-medium mb-1">
            Oxygen
          </span>
          <div className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#1E1E1E] leading-tight flex items-baseline gap-0.5">
            98<span className="text-xs sm:text-sm font-normal text-[#7D7D7D]">%</span>
          </div>
        </div>

        {/* Metric 5 */}
        <div>
          <span className="block text-[11px] uppercase tracking-wider text-[#7D7D7D] font-medium mb-1">
            Temperature
          </span>
          <div className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#1E1E1E] leading-tight flex items-baseline gap-0.5">
            36.8<span className="text-xs sm:text-sm font-normal text-[#7D7D7D]">°C</span>
          </div>
        </div>
      </div>

      {/* Secondary Filter Navigation Row */}
      <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto py-1 no-scrollbar">
        {/* Sliders / Filter icon pill */}
        <button className="w-9 h-9 rounded-full bg-white text-[#55534E] border border-[#E8E6DF] hover:bg-neutral-50 transition-all flex items-center justify-center cursor-pointer shadow-xs">
          <SlidersHorizontal size={15} strokeWidth={2} />
        </button>

        {filterCategories.map((cat) => (
          <ShapemorphicPill key={cat.id} active={cat.active}>
            <span className={cat.active ? 'text-[#1E1E1E]' : 'text-[#8C8A84]'}>
              {cat.label}
            </span>
          </ShapemorphicPill>
        ))}
      </div>
    </div>
  );
};
