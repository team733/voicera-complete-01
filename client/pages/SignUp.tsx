import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    // Store form data in sessionStorage or state management
    sessionStorage.setItem(
      "signupData",
      JSON.stringify({ fullName, businessEmail }),
    );
    navigate("/signup/verify");
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center px-4 py-16">
      {/* Logo/Title */}
      <h1 className="text-4xl font-bold text-black mb-32">Voicera AI</h1>

      {/* Sign Up Card */}
      <div className="w-full max-w-lg bg-white rounded-[28px] border-2 border-[#E5E7EB] p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-2">
            Create an Account
          </h2>
          <p className="text-xl text-[#737373]">
            Get started with your Voicera AI dashboard in minutes.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-7">
          {/* Full Name Field */}
          <div className="space-y-3">
            <label className="block text-lg text-black">Full name</label>
            <div className="relative">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name..."
                className="w-full p-4 text-lg border-2 border-[#E5E7EB] rounded-xl placeholder-[#6B7280] focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          {/* Business Email Field */}
          <div className="space-y-3">
            <label className="block text-lg text-black">Business email</label>
            <div className="relative">
              <input
                type="email"
                value={businessEmail}
                onChange={(e) => setBusinessEmail(e.target.value)}
                placeholder="Enter your business email..."
                className="w-full p-4 text-lg border-2 border-[#E5E7EB] rounded-xl placeholder-[#6B7280] focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleContinue}
            className="w-full bg-black text-white text-lg font-semibold py-4 px-5 rounded-xl hover:bg-gray-800 transition-colors"
          >
            Continue
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center mt-7">
          <span className="text-2xl text-[#6B7280]">
            Already have an account?{" "}
          </span>
          <Link to="/" className="text-2xl text-black font-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
