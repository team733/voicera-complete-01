import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "@/components/OnboardingLayout";

export default function OnboardingStep5() {
  const [primaryLocation, setPrimaryLocation] = useState(
    "350 5th Avenue, Suite 2100, New York, NY 10118",
  );
  const [secondLocation, setSecondLocation] = useState("");
  const [additionalLocations, setAdditionalLocations] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load any previously saved locations
    const savedPrimary = sessionStorage.getItem("primaryLocation");
    const savedSecond = sessionStorage.getItem("secondLocation");
    const savedAdditional = sessionStorage.getItem("additionalLocations");

    if (savedPrimary) setPrimaryLocation(savedPrimary);
    if (savedSecond) setSecondLocation(savedSecond);
    if (savedAdditional) setAdditionalLocations(JSON.parse(savedAdditional));
  }, []);

  const handlePrevious = () => {
    navigate("/onboarding/step4");
  };

  const handleNext = () => {
    // Store all locations
    sessionStorage.setItem("primaryLocation", primaryLocation.trim());
    sessionStorage.setItem("secondLocation", secondLocation.trim());
    sessionStorage.setItem(
      "additionalLocations",
      JSON.stringify(additionalLocations),
    );

    // Navigate to AI personality configuration
    navigate("/onboarding/ai-intro");
  };

  const handleAddMoreLocations = () => {
    if (secondLocation.trim()) {
      setAdditionalLocations([...additionalLocations, secondLocation.trim()]);
      setSecondLocation("");
    }
  };

  const isNextDisabled = !primaryLocation.trim();

  return (
    <OnboardingLayout
      step={1}
      totalSteps={5}
      completionPercentage={18}
      onPrevious={handlePrevious}
      onNext={handleNext}
      showPrevious={true}
      nextDisabled={isNextDisabled}
    >
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-black">
            Enter your business locations?
          </h2>
          <p className="text-base italic text-[#737373] leading-6">
            Provide your business addresses for accurate scheduling and
            communication.
          </p>
        </div>

        {/* Primary Location */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold text-black">Primary location</h3>
          <input
            type="text"
            value={primaryLocation}
            onChange={(e) => setPrimaryLocation(e.target.value)}
            placeholder="Enter your primary location..."
            className="w-full p-4 text-lg font-semibold text-black border-2 border-[#E5E7EB] rounded-xl placeholder-[#6B7280] focus:outline-none focus:border-black transition-colors"
          />
        </div>

        {/* Second Location */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold text-black">Location 2</h3>
          <input
            type="text"
            value={secondLocation}
            onChange={(e) => setSecondLocation(e.target.value)}
            placeholder="Enter your second location"
            className="w-full p-4 text-lg font-semibold border-2 border-[#E5E7EB] rounded-xl placeholder-[#6B7280] focus:outline-none focus:border-black transition-colors"
          />
        </div>

        {/* Additional Locations */}
        {additionalLocations.map((location, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-black">
              Location {index + 3}
            </h3>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={location}
                readOnly
                className="flex-1 p-4 text-lg font-semibold text-black border-2 border-[#E5E7EB] rounded-xl bg-gray-50"
              />
              <button
                onClick={() => {
                  const newLocations = additionalLocations.filter(
                    (_, i) => i !== index,
                  );
                  setAdditionalLocations(newLocations);
                }}
                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {/* Add More Locations Button */}
        <button
          onClick={handleAddMoreLocations}
          disabled={!secondLocation.trim()}
          className="flex items-center justify-center gap-2 px-5 py-3.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors self-start disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00001 1V11M11 6.0007H1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-semibold">Add more locations</span>
        </button>
      </div>
    </OnboardingLayout>
  );
}
