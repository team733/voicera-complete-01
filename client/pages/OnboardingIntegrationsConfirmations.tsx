import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "@/components/OnboardingLayout";

export default function OnboardingIntegrationsConfirmations() {
  const [wantsEmailConfirmations, setWantsEmailConfirmations] = useState(true);
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate('/onboarding/integrations-summary');
  };

  const handleNext = () => {
    sessionStorage.setItem('wantsEmailConfirmations', wantsEmailConfirmations.toString());
    navigate('/onboarding/integrations-reminders');
  };

  const handleToggle = () => {
    setWantsEmailConfirmations(!wantsEmailConfirmations);
  };

  return (
    <OnboardingLayout
      step={5}
      totalSteps={5}
      completionPercentage={96}
      onPrevious={handlePrevious}
      onNext={handleNext}
      showPrevious={true}
      nextDisabled={false}
    >
      <div className="flex flex-col gap-12">
        {/* Question */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-black leading-[22px]">
            Should customers receive booking confirmations by Email?
          </h2>
          
          {/* Toggle Switch */}
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-[#6B7280] leading-[22px]">
              No
            </span>
            
            <button
              onClick={handleToggle}
              className="flex p-0.5 items-center rounded-full bg-[#E5E7EB] transition-colors"
              style={{ width: '52px', height: '28px' }}
            >
              <div
                className={`w-6 h-6 rounded-full transition-all duration-200 ${
                  wantsEmailConfirmations 
                    ? 'bg-black translate-x-6' 
                    : 'bg-transparent translate-x-0'
                }`}
              />
              <div
                className={`w-6 h-6 rounded-full transition-all duration-200 ${
                  wantsEmailConfirmations 
                    ? 'bg-transparent -translate-x-6' 
                    : 'bg-black translate-x-0'
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
