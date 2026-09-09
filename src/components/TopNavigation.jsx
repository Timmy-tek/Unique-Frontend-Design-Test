import React from 'react';
import { Search, FileText, Pill, FlaskConical, Sparkles, Dna } from 'lucide-react';
import { ShapemorphicPill } from './ShapemorphicPill';

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
          <ShapemorphicPill key={item.id} active={item.primary}>
            <Icon size={15} className="text-[#55534E]" strokeWidth={2} />
            <span className={item.primary ? 'font-semibold' : 'font-medium text-[#4A4A4A]'}>
              {item.label}
            </span>
          </ShapemorphicPill>
        );
      })}
    </nav>
  );
};
