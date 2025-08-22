import { useNavigate } from "react-router-dom";

export default function OnboardingIntegrationsIntro() {
  const navigate = useNavigate();

  const handleLetsGo = () => {
    navigate("/onboarding/integrations-handling");
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-8 py-6">
        <div className="flex-1"></div>
        <h1 className="text-4xl font-bold text-black text-center">
          Voicera AI
        </h1>
        <div className="flex-1 flex justify-end">
          <button className="flex items-center gap-3 px-4 py-2 bg-[#F3F4F6] rounded-xl">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 3.125H3.75V16.875H8.75"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.75 10H17.5"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.375 6.875L17.5 10L14.375 13.125"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-base text-[#6B7280]">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-[800px] bg-white border-2 border-[#E5E7EB] rounded-3xl p-8">
          <div className="flex flex-col items-center gap-8">
            {/* Icon */}
            <div className="w-20 h-20 bg-[#F3F4F6] border border-[#E5E7EB] rounded-full flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 30C15 31.3261 15.5268 32.5979 16.4645 33.5355C17.4021 34.4732 18.6739 35 20 35C21.3261 35 22.5979 34.4732 23.5355 33.5355C24.4732 32.5979 25 31.3261 25 30"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.75029 16.25C8.75029 13.2663 9.93556 10.4048 12.0453 8.29505C14.1551 6.18526 17.0166 5 20.0003 5C22.984 5 25.8455 6.18526 27.9552 8.29505C30.065 10.4048 31.2503 13.2663 31.2503 16.25C31.2503 21.8469 32.5472 26.3438 33.5784 28.125C33.6879 28.3147 33.7457 28.5299 33.7459 28.7489C33.7461 28.9679 33.6887 29.1832 33.5795 29.3731C33.4703 29.563 33.3132 29.7209 33.1238 29.8309C32.9343 29.9409 32.7193 29.9992 32.5003 30H7.50029C7.28151 29.9987 7.06691 29.94 6.87793 29.8297C6.68895 29.7195 6.53222 29.5616 6.4234 29.3718C6.31458 29.1819 6.25748 28.9669 6.25781 28.7481C6.25815 28.5293 6.3159 28.3145 6.42529 28.125C7.45498 26.3438 8.75029 21.8453 8.75029 16.25Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="text-center space-y-3">
              <p className="text-xl font-bold text-[#6B7280] tracking-[-0.1px]">
                Step 5 of 5
              </p>
              <h2 className="text-2xl font-bold text-black tracking-[-0.144px]">
                Integrations & Notifications
              </h2>
              <p className="text-xl font-bold text-[#6B7280] tracking-[-0.1px]">
                Let's make sure everything syncs up.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={handleLetsGo}
              className="w-full h-14 bg-black text-white text-lg font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors"
            >
              Let's go
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12H4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0001 17C15.0001 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
