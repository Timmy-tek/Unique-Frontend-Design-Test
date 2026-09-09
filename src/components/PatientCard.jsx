import React from 'react';

/**
 * PatientCard
 * Rounded off-white card with patient portrait image, "Female, 24" metadata,
 * and bold "Tiffany Woodward" name.
 */
export function PatientCard() {
  return (
    <div className="bg-white/80 backdrop-blur-xs rounded-[22px] p-3.5 pr-8 flex items-center gap-4 border border-[#E8E6DF] shadow-2xs max-w-sm w-full">
      {/* Patient Portrait Container */}
      <div className="relative w-16 h-16 rounded-[16px] overflow-hidden bg-[#F0EEE6] shrink-0 border border-[#E8E6DF]">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
          alt="Tiffany Woodward"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Patient Details */}
      <div className="flex flex-col justify-center gap-1">
        <span className="text-[12px] font-medium text-[#7D7D7D] tracking-tight">
          Female, 24
        </span>
        <h2 className="text-[17px] font-bold text-[#202020] leading-tight tracking-tight">
          Tiffany
          <br />
          Woodward
        </h2>
      </div>
    </div>
  );
}

export default PatientCard;
