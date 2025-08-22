import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import SignUpVerify from "./pages/SignUpVerify";
import SignUpPassword from "./pages/SignUpPassword";
import ForgotPassword from "./pages/ForgotPassword";
import OnboardingStep1 from "./pages/OnboardingStep1";
import OnboardingStep2 from "./pages/OnboardingStep2";
import OnboardingStep3 from "./pages/OnboardingStep3";
import OnboardingStep4 from "./pages/OnboardingStep4";
import OnboardingStep5 from "./pages/OnboardingStep5";
import OnboardingAIIntro from "./pages/OnboardingAIIntro";
import OnboardingAIVoice from "./pages/OnboardingAIVoice";
import OnboardingAIName from "./pages/OnboardingAIName";
import OnboardingAISchedule from "./pages/OnboardingAISchedule";
import OnboardingAIGreeting from "./pages/OnboardingAIGreeting";
import OnboardingBookingIntro from "./pages/OnboardingBookingIntro";
import OnboardingBookingServices from "./pages/OnboardingBookingServices";
import OnboardingBookingDuration from "./pages/OnboardingBookingDuration";
import OnboardingBookingDays from "./pages/OnboardingBookingDays";
import OnboardingBookingHours from "./pages/OnboardingBookingHours";
import OnboardingBookingFull from "./pages/OnboardingBookingFull";
import OnboardingFAQsIntro from "./pages/OnboardingFAQsIntro";
import OnboardingFAQs from "./pages/OnboardingFAQs";
import OnboardingIntegrationsIntro from "./pages/OnboardingIntegrationsIntro";
import OnboardingIntegrationsHandling from "./pages/OnboardingIntegrationsHandling";
import OnboardingIntegrationsSummary from "./pages/OnboardingIntegrationsSummary";
import OnboardingIntegrationsConfirmations from "./pages/OnboardingIntegrationsConfirmations";
import OnboardingIntegrationsReminders from "./pages/OnboardingIntegrationsReminders";
import OnboardingComplete from "./pages/OnboardingComplete";
import Dashboard from "./pages/Dashboard";
import CallLogs from "./pages/CallLogs";
import DailySummary from "./pages/DailySummary";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/verify" element={<SignUpVerify />} />
          <Route path="/signup/password" element={<SignUpPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/onboarding/step1" element={<OnboardingStep1 />} />
          <Route path="/onboarding/step2" element={<OnboardingStep2 />} />
          <Route path="/onboarding/step3" element={<OnboardingStep3 />} />
          <Route path="/onboarding/step4" element={<OnboardingStep4 />} />
          <Route path="/onboarding/step5" element={<OnboardingStep5 />} />
          <Route path="/onboarding/ai-intro" element={<OnboardingAIIntro />} />
          <Route path="/onboarding/ai-voice" element={<OnboardingAIVoice />} />
          <Route path="/onboarding/ai-name" element={<OnboardingAIName />} />
          <Route path="/onboarding/ai-schedule" element={<OnboardingAISchedule />} />
          <Route path="/onboarding/ai-greeting" element={<OnboardingAIGreeting />} />
          <Route path="/onboarding/booking-intro" element={<OnboardingBookingIntro />} />
          <Route path="/onboarding/booking-services" element={<OnboardingBookingServices />} />
          <Route path="/onboarding/booking-duration" element={<OnboardingBookingDuration />} />
          <Route path="/onboarding/booking-days" element={<OnboardingBookingDays />} />
          <Route path="/onboarding/booking-hours" element={<OnboardingBookingHours />} />
          <Route path="/onboarding/booking-full" element={<OnboardingBookingFull />} />
          <Route path="/onboarding/faqs-intro" element={<OnboardingFAQsIntro />} />
          <Route path="/onboarding/faqs" element={<OnboardingFAQs />} />
          <Route path="/onboarding/integrations-intro" element={<OnboardingIntegrationsIntro />} />
          <Route path="/onboarding/integrations-handling" element={<OnboardingIntegrationsHandling />} />
          <Route path="/onboarding/integrations-summary" element={<OnboardingIntegrationsSummary />} />
          <Route path="/onboarding/integrations-confirmations" element={<OnboardingIntegrationsConfirmations />} />
          <Route path="/onboarding/integrations-reminders" element={<OnboardingIntegrationsReminders />} />
          <Route path="/onboarding/complete" element={<OnboardingComplete />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/call-logs" element={<CallLogs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
