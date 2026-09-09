import React from 'react';
import {
  Calendar,
  Pill,
  TestTube,
  Stethoscope,
  FileText,
  Eye,
  Scissors,
} from 'lucide-react';

/**
 * BottomToolbar
 * Redesigned as a continuous horizontal timeline bar stretching across the bottom surface,
 * displaying months (Jan 2022 through Sep) with monochrome medical icons, yellow count badges,
 * and a dark active month dock on the right.
 */
export function BottomToolbar() {
  return (
    <div className="w-full mt-2">
      {/* Full Horizontal Timeline Bar Container */}
      <div className="w-full bg-[#F0EEE6] h-[46px] rounded-full px-3 flex items-center justify-between border border-[#E0DDD5] shadow-inner text-[#55534E]">

        {/* Left Section: Calendar Icon & Year 2022 */}
        <div className="flex items-center gap-2 pl-2 pr-3 border-r border-[#D9D7D1]/80 shrink-0">
          <div className="w-7 h-7 rounded-full bg-[#2B2B2B] flex items-center justify-center text-white">
            <Calendar className="w-3.5 h-3.5 text-[#E8EB2A]" />
          </div>
          <span className="text-xs font-bold text-[#202020]">2022</span>
        </div>

        {/* Middle Section: Timeline Months Grid */}
        <div className="flex-1 flex items-center justify-evenly px-2 overflow-x-auto gap-2 text-xs font-medium">
          {/* Jan */}
          <div className="flex items-center gap-1 opacity-70 hover:opacity-100 cursor-pointer">
            <span>Jan</span>
            <FileText className="w-3 h-3 text-[#7D7D7D]" />
          </div>

          {/* Feb - Pill with yellow badge 6 */}
          <div className="flex items-center gap-1 opacity-80 hover:opacity-100 cursor-pointer relative">
            <span className="text-[11px] text-[#7D7D7D]">Feb</span>
            <div className="relative">
              <Pill className="w-3.5 h-3.5 text-[#4A4A4A]" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#E8EB2A] text-black text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center leading-none">
                6
              </span>
            </div>
          </div>

          {/* Mar - TestTube */}
          <div className="flex items-center gap-1 opacity-70 hover:opacity-100 cursor-pointer">
            <span className="text-[11px] text-[#7D7D7D]">Mar</span>
            <TestTube className="w-3.5 h-3.5 text-[#7D7D7D]" />
          </div>

          {/* Apr */}
          <div className="flex items-center gap-1 opacity-70 hover:opacity-100 cursor-pointer">
            <span className="text-[11px] text-[#7D7D7D]">Apr</span>
            <FileText className="w-3.5 h-3.5 text-[#7D7D7D]" />
          </div>

          {/* May - Pill with badge 2 + Stethoscope with badge 3 */}
          <div className="flex items-center gap-1 opacity-80 hover:opacity-100 cursor-pointer">
            <span className="text-[11px] text-[#7D7D7D]">May</span>
            <div className="relative">
              <Pill className="w-3.5 h-3.5 text-[#4A4A4A]" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#E8EB2A] text-black text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center leading-none">
                2
              </span>
            </div>
            <div className="relative ml-0.5">
              <Stethoscope className="w-3.5 h-3.5 text-[#4A4A4A]" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#E8EB2A] text-black text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center leading-none">
                3
              </span>
            </div>
          </div>

          {/* Jun */}
          <div className="flex items-center gap-1 opacity-70 hover:opacity-100 cursor-pointer">
            <span className="text-[11px] text-[#7D7D7D]">Jun</span>
            <Scissors className="w-3.5 h-3.5 text-[#7D7D7D]" />
          </div>

          {/* Jul - Pill with badge 6 */}
          <div className="flex items-center gap-1 opacity-80 hover:opacity-100 cursor-pointer">
            <span className="text-[11px] text-[#7D7D7D]">Jul</span>
            <div className="relative">
              <Pill className="w-3.5 h-3.5 text-[#4A4A4A]" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#E8EB2A] text-black text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center leading-none">
                6
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Active Dark Month Control Dock (Aug & Sep) */}
        <div className="bg-[#2B2B2B] text-white h-[38px] px-3.5 rounded-full flex items-center gap-3 shrink-0 shadow-md">
          {/* Aug active section */}
          <div className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-xs font-bold text-white">Aug</span>
            <FileText className="w-3.5 h-3.5 text-white/80" />
            <div className="relative">
              <Stethoscope className="w-3.5 h-3.5 text-white/80" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#E8EB2A] text-black text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center leading-none">
                2
              </span>
            </div>
          </div>

          <div className="w-[1px] h-3.5 bg-white/20" />

          {/* Sep active section */}
          <div className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-xs font-bold text-white">Sep</span>
            <div className="relative">
              <Pill className="w-3.5 h-3.5 text-white/80" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#E8EB2A] text-black text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center leading-none">
                2
              </span>
            </div>
            <div className="relative">
              <Eye className="w-3.5 h-3.5 text-white/80" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#E8EB2A] text-black text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center leading-none">
                5
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BottomToolbar;
