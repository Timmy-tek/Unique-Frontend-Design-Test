import React from 'react';
import { DashboardShell } from './components/DashboardShell';
import { HeaderContour } from './components/HeaderContour';
import { TopNavigation } from './components/TopNavigation';
import { PatientCard } from './components/PatientCard';
import { MetricsAndFilterBar } from './components/MetricsAndFilterBar';
import { TimelineControlsAndNodes, MedicationCapsule } from './components/TimelineControlsAndNodes';
import { BloodPressureCard, SymptomsCard, EcgCard } from './components/MedicalCards';
import { BottomToolbar } from './components/BottomToolbar';
import { Square } from 'lucide-react';

export function App() {
  return (
    <DashboardShell>
      {/* Top Header Section */}
      <div className="flex flex-col gap-5">
        {/* Row 1: Header Contour + Top Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <HeaderContour />
          <TopNavigation />
        </div>

        {/* Row 2: Patient Card + Medical Metrics & Filter Bar */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 mt-1">
          <PatientCard />
          <MetricsAndFilterBar />
        </div>
      </div>

      {/* Main Content Area: Horizontal Medical Timeline */}
      <div className="relative my-6 flex-1 flex flex-col justify-center">
        <TimelineControlsAndNodes />

        {/* Timeline Rail Container */}
        <div className="relative w-full py-2 pr-14">
          {/* Main Horizontal Line - positioned cleanly behind node indicators */}
          <div className="absolute top-[17px] left-0 right-16 h-[2px] bg-[#D9D7D1] z-0" />

          {/* Timeline Columns (Aug / Sep) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 pl-2 md:pl-10">

            {/* August Section */}
            <div className="flex flex-col gap-4 relative">
              {/* Timeline Node Aug Header */}
              <div className="flex items-center gap-3 bg-[#F7F5EF] pr-3 w-max z-10">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E8EB2A] border-2 border-black flex items-center justify-center shadow-xs z-10 cursor-pointer hover:scale-110 transition-transform">
                  <Square size={8} className="fill-black stroke-none" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-[#1E1E1E]">Aug</span>
                  <span className="text-xs text-[#7D7D7D]">1 Week</span>
                </div>
              </div>

              {/* Vertical Branch Line */}
              <div className="absolute left-[8px] top-[24px] bottom-0 w-[2px] bg-[#D9D7D1] z-0" />

              {/* August Items Container */}
              <div className="pl-6 pt-2 flex flex-col gap-4">
                {/* Medication Capsule */}
                <div>
                  <MedicationCapsule name="Aspirin" dose="x2" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <BloodPressureCard
                    day="Friday"
                    currentReading="180/120"
                    averageReading="160/110"
                    trend="+10°"
                    isHigh={true}
                  />
                  <SymptomsCard />
                </div>
              </div>
            </div>

            {/* September Section */}
            <div className="flex flex-col gap-4 relative">
              {/* Timeline Node Sep Header */}
              <div className="flex items-center gap-3 bg-[#F7F5EF] pr-3 w-max z-10">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E8EB2A] border-2 border-black flex items-center justify-center shadow-xs z-10 cursor-pointer hover:scale-110 transition-transform">
                  <Square size={8} className="fill-black stroke-none" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-[#1E1E1E]">Sep</span>
                  <span className="text-xs text-[#7D7D7D]">1 Week</span>
                </div>
              </div>

              {/* Vertical Branch Line */}
              <div className="absolute left-[8px] top-[24px] bottom-0 w-[2px] bg-[#D9D7D1] z-0" />

              {/* September Items Container */}
              <div className="pl-6 pt-2 flex flex-col gap-4">
                {/* Medication Capsules */}
                <div className="flex flex-wrap gap-2">
                  <MedicationCapsule name="Bisoprolol" dose="x3" />
                  <MedicationCapsule name="Aspirin" dose="x2" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <BloodPressureCard
                    day="Thursday"
                    currentReading="135/92"
                    averageReading="130/90"
                    trend="-20°"
                    isHigh={false}
                  />
                  <EcgCard />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Dock Toolbar */}
      <BottomToolbar />
    </DashboardShell>
  );
}

export default App;
