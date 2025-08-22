import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpVerify() {
  const [verificationCode, setVerificationCode] = useState("");
  const [countdown, setCountdown] = useState(30);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get email from sessionStorage
    const signupData = JSON.parse(sessionStorage.getItem("signupData") || "{}");
    setEmail(signupData.businessEmail || "john@gmail.com");

    // Countdown timer
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleVerify = () => {
    // Navigate to password creation step
    navigate("/signup/password");
  };

  const handleCancel = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center px-4 py-16">
      {/* Logo/Title */}
      <h1 className="text-4xl font-bold text-black mb-32">Voicera AI</h1>

      {/* Verification Modal */}
      <div className="w-full max-w-lg bg-white rounded-2xl border-2 border-[#E5E7EB] p-5 relative">
        {/* Close Button */}
        <button
          onClick={handleCancel}
          className="absolute top-5 right-5 w-4 h-4"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3337 2.66699L2.66699 13.3337"
              stroke="#6B7280"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.66699 2.66699L13.3337 13.3337"
              stroke="#6B7280"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6 px-5">
          <h2 className="text-2xl font-bold text-black mb-2">
            Verify your identity
          </h2>
          <p className="text-base text-[#737373] leading-5">
            We've sent a 6-digit verification code to{" "}
            <span className="font-bold">{email}</span>. Enter it below to verify
            your identity.
          </p>
        </div>

        {/* Form */}
        <div className="px-5 space-y-8">
          <div className="space-y-4">
            {/* Code Input */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-black">
                Enter Code
              </label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter the 6 digits code"
                className="w-full h-[52px] p-4 text-lg border-2 border-[#E5E7EB] rounded-xl placeholder-[#6B7280] focus:outline-none focus:border-black transition-colors"
                maxLength={6}
              />
            </div>

            {/* Resend Timer */}
            <div className="text-center">
              <span className="text-base text-[#737373]">
                Didn't receive the code? Resend in{" "}
              </span>
              <span className="text-base font-bold text-black">
                {countdown}s
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleCancel}
              className="flex-1 bg-[#F3F4F6] text-[#6B7280] text-lg font-semibold py-4 px-5 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleVerify}
              className="flex-1 bg-black text-white text-lg font-semibold py-4 px-5 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Verify & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
