import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center px-4 py-16">
      {/* Logo/Title */}
      <h1 className="text-4xl font-bold text-black mb-32">Voicera AI</h1>

      {/* Placeholder Card */}
      <div className="w-full max-w-lg bg-white rounded-[28px] border-2 border-[#E5E7EB] p-8 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Forgot Password</h2>
        <p className="text-xl text-[#737373] mb-8">
          This page is under construction. Please continue prompting to have
          this page filled in with content.
        </p>
        <Link
          to="/"
          className="inline-block bg-black text-white text-lg font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-colors"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
