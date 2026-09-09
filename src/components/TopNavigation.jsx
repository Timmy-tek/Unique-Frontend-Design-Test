import React from 'react';
import { Search, FileText, Pill, FlaskConical, Sparkles, Dna } from 'lucide-react';

const navItems = [
  { id: 'treatment', label: 'Treatment Dynamics', icon: Search, primary: true },
  { id: 'visits', label: 'Visits', icon: FileText },
  { id: 'medications', label: 'Medications', icon: Pill },
  { id: 'labs', label: 'Labs', icon: FlaskConical },
  { id: 'allergies', label: 'Allergies', icon: Sparkles },
  { id: 'genetics', label: 'Genetics', icon: Dna },
];

export const TopNavigation = () => {
  return (
    <nav className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto py-1 no-scrollbar max-w-full">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            className={`
              shapemorphic-pill flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium
              whitespace-nowrap transition-all duration-200 cursor-pointer border border-[#E8E6DF]
              ${item.primary
                ? 'bg-white text-[#1E1E1E] shadow-xs font-semibold'
                : 'bg-white/90 text-[#4A4A4A] hover:bg-white hover:text-black'}
            `}
          >
            <Icon size={15} className="text-[#55534E]" strokeWidth={2} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
