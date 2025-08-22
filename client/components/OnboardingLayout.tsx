import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface OnboardingLayoutProps {
  step: number;
  totalSteps: number;
  completionPercentage: number;
  children: ReactNode;
  onPrevious?: () => void;
  onNext?: () => void;
  nextButtonText?: string;
  showPrevious?: boolean;
  nextDisabled?: boolean;
}

export default function OnboardingLayout({
  step,
  totalSteps,
  completionPercentage,
  children,
  onPrevious,
  onNext,
  nextButtonText = "Next",
  showPrevious = true,
  nextDisabled = false
}: OnboardingLayoutProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored data and redirect to login
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-4xl font-bold text-black">Voicera AI</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-[#F3F4F6] rounded-xl hover:bg-gray-200 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_150_3447)">
              <path d="M8.75 3.125H3.75V16.875H8.75" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.75 10H17.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.375 6.875L17.5 10L14.375 13.125" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_150_3447">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span className="text-base text-[#6B7280]">Logout</span>
        </button>
      </div>

      {/* Progress Section */}
      <div className="flex flex-col items-center px-8 mb-12">
        <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
          <div className="text-xl font-semibold text-[#6B7280]">
            Step {step} of {totalSteps}
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-2.5 bg-[#D1D5DB] rounded-full overflow-hidden">
            <div 
              className="h-full bg-black rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          
          <div className="text-xl font-semibold text-[#6B7280]">
            {completionPercentage}% completed
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center px-4">
        <div className="w-full max-w-4xl bg-white rounded-[28px] border-2 border-[#E5E7EB] p-8">
          {children}
          
          {/* Navigation Buttons */}
          {(showPrevious || onNext) && (
            <div className="flex justify-between items-center mt-10">
              {showPrevious ? (
                <button
                  onClick={onPrevious}
                  className="flex items-center gap-2 px-5 py-3.5 bg-[#F3F4F6] rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.99976 12H19.9997" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.99973 17C8.99973 17 3.99978 13.3176 3.99976 12C3.99975 10.6824 8.99976 7 8.99976 7" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-lg font-semibold text-[#6B7280]">Previous</span>
                </button>
              ) : (
                <div />
              )}
              
              {onNext && (
                <button
                  onClick={onNext}
                  disabled={nextDisabled}
                  className="flex items-center gap-2 px-5 py-3.5 bg-black rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-lg font-semibold text-white">{nextButtonText}</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 12H4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.0001 17C15.0001 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
