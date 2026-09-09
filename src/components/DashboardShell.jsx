import React from 'react';

/**
 * DashboardShell
 * The outer dark gray CNC-machined frame (#55534E) containing the inner surface panel (#F7F5EF).
 * The dark shell serves as the continuous background for the top header navigation area.
 */
export const DashboardShell = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#F5F5F3] flex items-center justify-center p-3 sm:p-6 lg:p-10 font-sans selection:bg-accent selection:text-black">
      {/* Outer Dark Frame (~1500px x 760px) */}
      <div className="relative w-full max-w-[1500px] bg-[#55534E] rounded-[34px] p-[10px] sm:p-[14px] shadow-2xl border border-[#484642] overflow-hidden">

        {/* Outer Frame Highlight */}
        <div className="absolute inset-0 rounded-[34px] pointer-events-none border border-white/10" />

        {/* Dashboard Canvas Surface Container */}
        <div className="relative w-full h-full min-h-[740px] flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
};
