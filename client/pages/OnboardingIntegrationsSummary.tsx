import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "@/components/OnboardingLayout";

export default function OnboardingIntegrationsSummary() {
  const [wantsDailySummary, setWantsDailySummary] = useState(true);
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate('/onboarding/integrations-handling');
  };

  const handleNext = () => {
    sessionStorage.setItem('wantsDailySummary', wantsDailySummary.toString());
    navigate('/onboarding/integrations-confirmations');
  };

  const handleToggle = () => {
    setWantsDailySummary(!wantsDailySummary);
  };

  return (
    <OnboardingLayout
      step={5}
      totalSteps={5}
      completionPercentage={90}
      onPrevious={handlePrevious}
      onNext={handleNext}
      showPrevious={true}
      nextDisabled={false}
    >
      <div className="flex flex-col gap-12">
        {/* Question */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-black leading-[22px]">
            Do you want a daily summary of all calls and bookings?
          </h2>
          
          {/* Toggle Switch */}
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-[#6B7280] leading-[22px]">
              No
            </span>
            
            <button
              onClick={handleToggle}
              className="flex p-0.5 items-center rounded-full bg-[#E5E7EB]"
              style={{ width: '52px', height: '28px' }}
            >
              <div
                className={`w-6 h-6 rounded-full ${
                  wantsDailySummary ? 'bg-transparent' : 'bg-black'
                }`}
              />
              <div
                className={`w-6 h-6 rounded-full ${
                  wantsDailySummary ? 'bg-black' : 'bg-transparent'
                }`}
              />
            </button>
            
            <span className="text-lg font-bold text-[#6B7280] leading-[22px]">
              Yes
            </span>
          </div>
        </div>
      </div>
    </OnboardingLayout>
  );
}
