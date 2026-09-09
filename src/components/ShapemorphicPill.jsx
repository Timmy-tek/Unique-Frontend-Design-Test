import React from 'react';

/**
 * Shapemorphic pill button component using continuous curvature.
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
      className={`relative inline-flex items-center justify-center h-10 px-5 text-[13.5px] font-medium transition-all duration-200 group select-none ${
        active
          ? 'text-[#1E1E1E] font-semibold'
          : 'text-[#4A4A4A] hover:text-[#1E1E1E]'
      } ${className}`}
      style={{
        borderRadius: '20px',
        backgroundColor: active ? '#FFFFFF' : '#FFFFFF',
        border: '1px solid #E8E6DF',
        boxShadow: active
          ? '0 2px 6px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)'
          : '0 1px 3px rgba(0,0,0,0.03)',
        transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}
    >
      <div className="relative z-10 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-[#6E6E6E] group-hover:text-[#1E1E1E] transition-colors stroke-[1.75]" />}
        <span>{children}</span>
        {badge && (
          <span className="ml-1 text-[11px] font-semibold bg-[#2B2B2B] text-white px-1.5 py-0.5 rounded-full leading-none">
            {badge}
          </span>
        )}
      </div>
    </button>
  );
}

export default ShapemorphicPill;
