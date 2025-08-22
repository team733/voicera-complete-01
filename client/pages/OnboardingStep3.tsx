import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "@/components/OnboardingLayout";

export default function OnboardingStep3() {
  const [businessName, setBusinessName] = useState("Silhouette Hair Co.");
  const navigate = useNavigate();

  useEffect(() => {
    // Load any previously saved business name
    const savedName = sessionStorage.getItem("businessName");
    if (savedName) {
      setBusinessName(savedName);
    }
  }, []);

  const handlePrevious = () => {
    navigate("/onboarding/step2");
  };

  const handleNext = () => {
    if (businessName.trim()) {
      // Store the business name
      sessionStorage.setItem("businessName", businessName.trim());
      navigate("/onboarding/step4");
    }
  };

  const isNextDisabled = !businessName.trim();

  return (
    <OnboardingLayout
      step={1}
      totalSteps={5}
      completionPercentage={6}
      onPrevious={handlePrevious}
      onNext={handleNext}
      showPrevious={true}
      nextDisabled={isNextDisabled}
    >
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-black">
            What's your business name?
          </h2>
          <p className="text-base italic text-[#737373] leading-6">
            This is how your AI will introduce your business when it answers
            calls.
          </p>
        </div>

        {/* Business Name Input */}
        <div className="flex flex-col gap-6">
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Enter your business name..."
            className="w-full p-4 text-lg font-semibold text-black border-2 border-[#E5E7EB] rounded-xl placeholder-[#6B7280] focus:outline-none focus:border-black transition-colors"
          />
        </div>
      </div>
    </OnboardingLayout>
  );
}
