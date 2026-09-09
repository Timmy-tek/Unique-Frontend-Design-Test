import React from 'react';

/**
 * Continuous sculpted header contour using SVG Bezier curves.
 * Creates a smooth, organic flow between the outer dark frame and the header title badge.
 */
export function HeaderContour({ title = "Cardiology" }) {
  return (
    <div className="relative flex items-center gap-3">
      {/* Sculpted Container using SVG continuous Bezier path */}
      <div className="relative flex items-center h-[52px]">
        {/* Background SVG path with continuous smooth Bezier curves */}
        <svg
          className="absolute inset-0 w-full h-full text-[#F7F5EF] drop-shadow-sm"
          preserveAspectRatio="none"
          viewBox="0 0 240 52"
          fill="currentColor"
        >
          {/* Continuous smooth path with sculpted bezier transitions */}
          <path d="M 26 0
                   C 11.6 0, 0 11.6, 0 26
                   C 0 40.4, 11.6 52, 26 52
                   L 214 52
                   C 228.4 52, 240 40.4, 240 26
                   C 240 11.6, 228.4 0, 214 0
                   Z" />
        </svg>

        {/* Content inside the sculpted contour */}
        <div className="relative z-10 flex items-center gap-3 px-3.5 py-1.5">
          {/* Close button inside top shell */}
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#55534E] hover:bg-[#F0EEE6] transition-all shadow-sm border border-[#E8E6DF]/60 text-lg font-medium leading-none"
            aria-label="Close"
          >
            ×
          </button>

          {/* Cardiology Title */}
          <h1 className="text-[26px] font-bold text-[#1E1E1E] tracking-tight pr-3 select-none">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderContour;
