import React from 'react';

/**
 * TopHeaderContour & DashboardShell
 * Recreates the outer dark shell (#55534E) and the inner surface (#F7F5EF)
 */
export const DashboardShell = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#F5F5F3] flex items-center justify-center p-3 sm:p-6 lg:p-10 font-sans selection:bg-accent selection:text-black">
      {/* Outer Dark Frame */}
      <div className="relative w-full max-w-[1500px] bg-[#55534E] rounded-[34px] p-[10px] sm:p-[12px] shadow-2xl border border-[#484642] overflow-hidden">

        {/* Inner Surface Panel */}
        <div className="relative w-full h-full bg-[#F7F5EF] rounded-[26px] overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};
