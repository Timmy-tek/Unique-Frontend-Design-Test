import React, { useState } from 'react';
import { Search, FileText, Pill, TestTube, Sparkles, Dna } from 'lucide-react';
import { ShapemorphicPill } from './ShapemorphicPill';

/**
 * TopNavigation
 * Floating navigation buttons sitting directly on the dark shell frame (#55534E).
 * Includes the longer "Treatment Dynamics" search pill and key categories.
 */
export function TopNavigation() {
  const [activeTab, setActiveTab] = useState('Treatment Dynamics');

  const navItems = [
    { label: 'Treatment Dynamics', icon: Search, isSearch: true },
    { label: 'Visits', icon: FileText },
    { label: 'Medications', icon: Pill },
    { label: 'Labs', icon: TestTube },
    { label: 'Allergies', icon: Sparkles },
    { label: 'Genetics', icon: Dna },
  ];

  return (
    <nav className="flex items-center flex-wrap gap-2.5">
      {navItems.map((item) => {
        const isActive = activeTab === item.label;
        return (
          <ShapemorphicPill
            key={item.label}
            active={isActive}
            icon={item.icon}
            onClick={() => setActiveTab(item.label)}
            className={item.isSearch ? 'px-6 min-w-[200px] justify-start' : 'px-4.5'}
          >
            {item.label}
          </ShapemorphicPill>
        );
      })}
    </nav>
  );
}

export default TopNavigation;
