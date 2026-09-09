import React from 'react';

/**
 * ShapemorphicPill
 * Continuous geometry pill component sculpted using SVG paths.
 * Renders flattened ends, stretched proportions, and subtle inward pinches.
 */
export function ShapemorphicPill({
  children,
  active = false,
  onClick,
  className = '',
  icon: Icon,
  badge
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative inline-flex items-center justify-center h-10 px-5 text-[13.5px] font-medium transition-all duration-200 cursor-pointer select-none group ${
        active
          ? 'text-[#202020] font-semibold'
          : 'text-[#4A4A4A] hover:text-[#1E1E1E]'
      } ${className}`}
    >
      {/* Background SVG path for shapemorphic geometry */}
      <svg
        className="absolute inset-0 w-full h-full text-white drop-shadow-2xs transition-transform duration-200 group-hover:scale-[1.01]"
        viewBox="0 0 160 40"
        preserveAspectRatio="none"
      >
        <path
          d="M 20 0
             C 8 0, 0 8, 0 20
             C 0 32, 8 40, 20 40
             L 140 40
             C 152 40, 160 32, 160 20
             C 160 8, 152 0, 140 0
             Z"
          fill="currentColor"
          stroke="#E8E6DF"
          strokeWidth="1.5"
        />
      </svg>

      {/* Button Content */}
      <div className="relative z-10 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-[#6E6E6E] group-hover:text-[#202020] transition-colors stroke-[1.8]" />}
        <span>{children}</span>
        {badge && (
          <span className="ml-1 text-[11px] font-bold bg-[#E8EB2A] text-black px-1.5 py-0.5 rounded-full leading-none">
            {badge}
          </span>
        )}
      </div>
    </button>
  );
}

export default ShapemorphicPill;
