import React from "react";

/**
 * HeaderContour
 * Renders the sculpted continuous S-curve header contour using SVG paths.
 * The curve smoothly dips downward from the Cardiology badge into the inner dashboard surface (#F7F5EF).
 */
export function HeaderContour({ title = "Cardiology" }) {
  return (
    <div className="relative flex items-center h-[52px]">
      {/* Off-White Surface Badge with Sculpted Corner Transition */}
      <div className="relative flex items-center bg-[#F7F5EF] h-full pl-3 pr-44 z-10">
        {/* Close Button */}
        <button
          type="button"
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#202020] hover:bg-[#F0EEE6] transition-all shadow-xs border border-[#E8E6DF] text-lg font-medium leading-none cursor-pointer"
          aria-label="Close"
        >
          ×
        </button>

        {/* Title */}
        <h1 className="ml-3 text-[26px] font-bold text-[#202020] tracking-tight leading-none select-none">
          {title}
        </h1>
      </div>

      {/* Organic S-Curve Transition into Inner Surface */}
      <svg
        className="h-full w-24 -ml-[1px] text-[#F7F5EF] pointer-events-none z-10"
        viewBox="0 0 48 52"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M 0 0 C 16 0, 24 52, 48 52 L 0 52 Z" />
      </svg>
    </div>
  );
}

export default HeaderContour;
