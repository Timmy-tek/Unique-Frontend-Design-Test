import React from 'react';
import {
  Calendar,
  Link2,
  TestTube,
  Stethoscope,
  Heart,
  Activity,
  FileText,
  Pill,
  Scissors,
  Eye,
} from 'lucide-react';

/**
 * BottomToolbar
 * Floating dark toolbar containing monochrome icons, yellow count badges,
 * year indicator, and "Aug" / "Sep" month controls.
 */
export function BottomToolbar() {
  return (
    <div className="flex justify-center w-full mt-4">
      <div className="bg-[#2B2B2B] text-white h-[50px] px-4 rounded-[25px] flex items-center gap-3.5 shadow-xl border border-black/20">
        {/* Calendar Year Badge */}
        <button
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-xs font-semibold hover:bg-white/20 transition-colors cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#E8EB2A]" />
          <span>2022</span>
        </button>

        <div className="w-[1px] h-4 bg-white/20" />

        {/* Toolbar Action Icons */}
        <div className="flex items-center gap-3">
          <button type="button" className="text-white/70 hover:text-white transition-colors cursor-pointer" aria-label="Link">
            <Link2 className="w-4 h-4" />
          </button>

          {/* TestTube with Yellow Badge '2' */}
          <button type="button" className="relative text-white/70 hover:text-white transition-colors cursor-pointer" aria-label="Labs">
            <TestTube className="w-4 h-4" />
            <span className="absolute -top-1.5 -right-2 bg-[#E8EB2A] text-black text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* Stethoscope with Yellow Badge '3' */}
          <button type="button" className="relative text-white/70 hover:text-white transition-colors cursor-pointer" aria-label="Stethoscope">
            <Stethoscope className="w-4 h-4" />
            <span className="absolute -top-1.5 -right-2 bg-[#E8EB2A] text-black text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          <button type="button" className="text-white/70 hover:text-white transition-colors cursor-pointer" aria-label="Heart">
            <Heart className="w-4 h-4" />
          </button>

          <button type="button" className="text-white/70 hover:text-white transition-colors cursor-pointer" aria-label="Activity">
            <Activity className="w-4 h-4" />
          </button>

          <button type="button" className="text-white/70 hover:text-white transition-colors cursor-pointer" aria-label="Files">
            <FileText className="w-4 h-4" />
          </button>

          {/* Pill with Yellow Badge '6' */}
          <button type="button" className="relative text-white/70 hover:text-white transition-colors cursor-pointer" aria-label="Medications">
            <Pill className="w-4 h-4" />
            <span className="absolute -top-1.5 -right-2 bg-[#E8EB2A] text-black text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              6
            </span>
          </button>

          <button type="button" className="text-white/70 hover:text-white transition-colors cursor-pointer" aria-label="Procedures">
            <Scissors className="w-4 h-4" />
          </button>

          {/* Eye with Yellow Badge '2' */}
          <button type="button" className="relative text-white/70 hover:text-white transition-colors cursor-pointer" aria-label="Imaging">
            <Eye className="w-4 h-4" />
            <span className="absolute -top-1.5 -right-2 bg-[#E8EB2A] text-black text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        <div className="w-[1px] h-4 bg-white/20" />

        {/* Month Buttons (Aug & Sep) */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold hover:bg-white/30 transition-colors cursor-pointer"
          >
            Aug
          </button>
          <button
            type="button"
            className="px-2.5 py-1 rounded-full text-white/70 hover:text-white text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer"
          >
            Sep
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomToolbar;
