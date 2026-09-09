import React from 'react';
import { X } from 'lucide-react';

/**
 * HeaderContour
 * Renders the top-left sculpted dip header contour where the dark outer frame (#55534E)
 * seamlessly curves down into the inner dashboard surface (#F7F5EF) around "Cardiology".
 */
export const HeaderContour = () => {
  return (
    <div className="relative flex items-center pl-2 pt-1">
      {/* Close Button + Title */}
      <div className="relative z-10 flex items-center gap-3">
        <button
          aria-label="Close dashboard"
          className="w-[34px] h-[34px] rounded-full bg-white text-[#202020] flex items-center justify-center shadow-xs hover:bg-neutral-100 hover:scale-105 transition-all duration-200 border border-[#E8E6DF] cursor-pointer"
        >
          <X size={17} strokeWidth={2.5} />
        </button>

        <h1 className="text-[28px] sm:text-[32px] font-bold text-[#202020] tracking-tight font-sans">
          Cardiology
        </h1>
      </div>
    </div>
  );
};
