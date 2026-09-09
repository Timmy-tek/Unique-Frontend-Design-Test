import React from 'react';

export const PatientCard = () => {
  return (
    <div className="bg-white/95 rounded-[24px] p-3 sm:p-4 border border-[#E8E6DF] shadow-sm flex items-center gap-3.5 max-w-[280px] w-full hover:shadow-md transition-shadow">
      {/* Patient Avatar Image */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] overflow-hidden bg-[#F0EEE6] flex-shrink-0 border border-[#E0DED6]">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
          alt="Tiffany Woodward"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Patient Details */}
      <div className="flex flex-col justify-center">
        <span className="text-[11px] sm:text-xs font-normal text-[#7D7D7D] tracking-tight">
          Female, 24
        </span>
        <h2 className="text-base sm:text-lg font-bold text-[#1E1E1E] leading-tight font-sans">
          Tiffany<br />Woodward
        </h2>
      </div>
    </div>
  );
};
