import React from 'react';

/**
 * DashboardShell
 * The outer dark gray CNC-machined frame (#55534E) containing the inner surface panel (#F7F5EF).
 * The dark shell surrounds the main surface and hosts top navigation pills directly on its background.
 */
export const DashboardShell = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#F5F5F3] flex items-center justify-center p-2 sm:p-4 lg:p-8 font-sans selection:bg-[#E8EB2A] selection:text-black">
      {/* Outer Dark Frame (~1500px x 760px) */}
      <div className="relative w-full max-w-[1480px] bg-[#55534E] rounded-[32px] sm:rounded-[36px] p-3 sm:p-4 shadow-2xl border border-[#484642] overflow-hidden">

        {/* Subtle Outer Frame Edge Highlight */}
        <div className="absolute inset-0 rounded-[32px] sm:rounded-[36px] pointer-events-none border border-white/10" />

        {/* Outer Frame Content */}
        <div className="relative w-full h-full flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardShell;
