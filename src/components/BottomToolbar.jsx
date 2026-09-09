import React from 'react';
import {
  Calendar,
  Link,
  FlaskConical,
  Stethoscope,
  Heart,
  Activity,
  FileText,
  Pill,
  Dna,
  Scissors,
  Eye
} from 'lucide-react';

export const BottomToolbar = () => {
  return (
    <div className="w-full flex justify-center mt-6 z-30">
      {/* Floating Toolbar Container */}
      <div className="bg-[#2B2B2B] text-white rounded-[22px] px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl flex items-center gap-1.5 sm:gap-2.5 max-w-full overflow-x-auto no-scrollbar border border-neutral-700">

        {/* Date item */}
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl hover:bg-neutral-700 transition-colors cursor-pointer text-xs font-medium text-neutral-300">
          <Calendar size={14} className="text-neutral-400" />
          <span>2022</span>
        </button>

        <div className="w-[1px] h-4 bg-neutral-700 my-auto" />

        {/* Toolbar Icons with tiny yellow badge numbers where applicable */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button className="relative p-2 rounded-xl hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer">
            <Link size={15} />
          </button>

          <button className="relative p-2 rounded-xl hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer">
            <FlaskConical size={15} />
            <span className="absolute -top-1 -right-1 bg-[#E8EB2A] text-black text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          <button className="relative p-2 rounded-xl hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer">
            <Stethoscope size={15} />
            <span className="absolute -top-1 -right-1 bg-[#E8EB2A] text-black text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          <button className="relative p-2 rounded-xl hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer">
            <Heart size={15} />
          </button>

          <button className="relative p-2 rounded-xl hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer">
            <Activity size={15} />
          </button>

          <button className="relative p-2 rounded-xl hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer">
            <FileText size={15} />
          </button>

          <button className="relative p-2 rounded-xl hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer">
            <Pill size={15} />
            <span className="absolute -top-1 -right-1 bg-[#E8EB2A] text-black text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              6
            </span>
          </button>

          <button className="relative p-2 rounded-xl hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer">
            <Dna size={15} />
          </button>

          <button className="relative p-2 rounded-xl hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer">
            <Scissors size={15} />
          </button>

          <button className="relative p-2 rounded-xl hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer">
            <Eye size={15} />
            <span className="absolute -top-1 -right-1 bg-[#E8EB2A] text-black text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        {/* Right side month badges */}
        <div className="flex items-center gap-1 ml-1 bg-neutral-800 p-1 rounded-xl">
          <span className="px-2 py-0.5 text-[11px] font-semibold text-white bg-neutral-700 rounded-lg">Aug</span>
          <span className="px-2 py-0.5 text-[11px] font-medium text-neutral-400">Sep</span>
        </div>
      </div>
    </div>
  );
};
