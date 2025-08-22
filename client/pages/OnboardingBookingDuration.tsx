import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "@/components/OnboardingLayout";

const presetDurations = ["15 min", "30 min", "45 min", "60 min"];
const hourOptions = ["01 hr", "02 hr", "03 hr", "04 hr"];
const minuteOptions = ["15 min", "30 min", "45 min"];

export default function OnboardingBookingDuration() {
  const [selectedPreset, setSelectedPreset] = useState("");
  const [customHour, setCustomHour] = useState("01 hr");
  const [customMinute, setCustomMinute] = useState("30 min");
  const [useCustom, setUseCustom] = useState(false);
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/onboarding/booking-services");
  };

  const handleNext = () => {
    const duration = useCustom
      ? `${customHour} ${customMinute}`
      : selectedPreset;
    if (duration) {
      sessionStorage.setItem("appointmentDuration", duration);
      navigate("/onboarding/booking-days");
    }
  };

  const handlePresetSelect = (duration: string) => {
    setSelectedPreset(duration);
    setUseCustom(false);
  };

  const handleCustomToggle = () => {
    setUseCustom(true);
    setSelectedPreset("");
  };

  const isNextDisabled = !selectedPreset && !useCustom;

  return (
    <OnboardingLayout
      step={3}
      totalSteps={5}
      completionPercentage={66}
      onPrevious={handlePrevious}
      onNext={handleNext}
      showPrevious={true}
      nextDisabled={isNextDisabled}
    >
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-black">
            How long is each appointment?
          </h2>

          {/* Preset Duration Options */}
          <div className="flex gap-3 flex-wrap">
            {presetDurations.map((duration) => (
              <button
                key={duration}
                onClick={() => handlePresetSelect(duration)}
                className={`px-4 py-2.5 border-2 rounded-xl text-lg transition-colors ${
                  selectedPreset === duration
                    ? "border-black bg-black text-white"
                    : "border-[#E5E7EB] text-[#6B7280] hover:border-gray-400"
                }`}
              >
                {duration}
              </button>
            ))}
          </div>

          {/* Custom Duration Section */}
          <div className="flex items-center gap-4">
            <span className="text-lg text-[#6B7280]">Custom durations</span>

            {/* Hour Selector */}
            <div className="relative">
              <button
                onClick={handleCustomToggle}
                className={`flex items-center gap-5 px-4 py-2.5 border-2 rounded-xl text-lg transition-colors ${
                  useCustom ? "border-black" : "border-black"
                }`}
              >
                <span className="text-black">{customHour}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Hour Dropdown */}
              {useCustom && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border-2 border-[#E5E7EB] rounded-xl overflow-hidden z-10">
                  {hourOptions.map((hour) => (
                    <button
                      key={hour}
                      onClick={() => setCustomHour(hour)}
                      className="w-full px-4 py-2 text-left text-lg text-[#6B7280] hover:bg-gray-50 transition-colors"
                    >
                      {hour}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Minute Selector */}
            <div className="relative">
              <button
                onClick={handleCustomToggle}
                className={`flex items-center gap-5 px-4 py-2.5 border-2 rounded-xl text-lg transition-colors ${
                  useCustom ? "border-black" : "border-black"
                }`}
              >
                <span className="text-black">{customMinute}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Minute Dropdown */}
              {useCustom && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border-2 border-[#E5E7EB] rounded-xl overflow-hidden z-10">
                  {minuteOptions.map((minute) => (
                    <button
                      key={minute}
                      onClick={() => setCustomMinute(minute)}
                      className="w-full px-4 py-2 text-left text-lg text-[#6B7280] hover:bg-gray-50 transition-colors"
                    >
                      {minute}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </OnboardingLayout>
  );
}
