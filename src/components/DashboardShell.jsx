import React from "react";

/**
 * DashboardShell
 * The outer dark gray CNC-machined frame (#55534E) containing the inner surface panel (#F7F5EF).
 * Fits the screen cleanly while maintaining rounded industrial corners.
 */
export const DashboardShell = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#F5F5F3] flex items-center justify-center p-0 font-sans selection:bg-[#E8EB2A] selection:text-black">
      {/* Outer Dark Frame - Maximized width/height */}
      <div className="relative w-full max-w-[1520px] min-h-screen sm:min-h-[92vh] bg-[#55534E]  pt-2.5 sm:pt-3.5 shadow-2xl border-0 sm:border border-[#484642] overflow-hidden flex flex-col justify-between">
        {/* Subtle Outer Frame Edge Highlight */}
        {/* <div className="absolute inset-0 rounded-none sm:rounded-[36px] pointer-events-none border border-white/10" /> */}

        {/* Inner Content Surface */}
        <div className="relative flex flex-col justify-between flex-1 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardShell;
