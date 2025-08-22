import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AgentManagement: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('basic-info');
  const [isAgentLive, setIsAgentLive] = useState(true);
  const [isTestMode, setIsTestMode] = useState(false);
  const [showTestCallModal, setShowTestCallModal] = useState(false);
  const [testCalls, setTestCalls] = useState<Array<{
    id: string;
    name: string;
    phone: string;
    duration: string;
    timestamp: string;
  }>>([]);
  const [faqs, setFaqs] = useState([
    { id: 1, question: 'Q1. Agent Management', answer: 'ANS1. Customize your AI agent\'s knowledge base and behavior', checked: false },
    { id: 2, question: 'Q1. Agent Management', answer: 'ANS1. Customize your AI agent\'s knowledge base and behavior', checked: false },
    { id: 3, question: 'Q1. Agent Management', answer: 'ANS1. Customize your AI agent\'s knowledge base and behavior', checked: false },
    { id: 4, question: 'Q1. Agent Management', answer: 'ANS1. Customize your AI agent\'s knowledge base and behavior', checked: false },
    { id: 5, question: 'Q1. Agent Management', answer: 'ANS1. Customize your AI agent\'s knowledge base and behavior', checked: false }
  ]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [dailySummary, setDailySummary] = useState(true);
  const [emailConfirmations, setEmailConfirmations] = useState(true);
  const [autoReminders, setAutoReminders] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [navigate]);

  // Logout function
  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userEmail');
    navigate('/');
  };

  // Test Agent handlers
  const handleTestAgentClick = () => {
    setIsTestMode(true);
  };

  const handleStartTestCall = () => {
    setShowTestCallModal(true);

    // Simulate call duration of 3-5 seconds
    setTimeout(() => {
      setShowTestCallModal(false);

      // Add new test call to the list
      const newCall = {
        id: `Test Call-${String(testCalls.length + 1).padStart(3, '0')}`,
        name: `Test Call-${String(testCalls.length + 1).padStart(3, '0')}`,
        phone: `+1 (555) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
        duration: `${Math.floor(Math.random() * 4) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
        timestamp: new Date().toLocaleString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).replace(',', ',')
      };

      setTestCalls(prev => [...prev, newCall]);
    }, 4000);
  };

  const testScenarios = [
    "I'd like to book an appointment",
    "What are your business hours?",
    "How much does a consultation cost?",
    "Where are you located?",
    "I need to cancel my appointment",
    "What services do you offer?"
  ];

  const renderBasicInfo = () => (
    <div className="space-y-5">
      {/* Section Header */}
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.716C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.0399 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.716C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.716 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.0399 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.716 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z" stroke="black" strokeWidth="1.5"/>
              <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="black" strokeWidth="1.5"/>
            </svg>
            <h2 className="text-xl font-semibold text-black">Business Information</h2>
          </div>
          <p className="text-lg font-semibold text-gray-500">Basic information about your business that the AI agent will use</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-xl bg-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6743 1.66699V4.27715C16.6743 4.52203 16.3681 4.63289 16.2114 4.44477C14.6855 2.73991 12.468 1.66699 9.99996 1.66699C5.39758 1.66699 1.66663 5.39795 1.66663 10.0003C1.66663 14.6027 5.39758 18.3337 9.99996 18.3337C14.6023 18.3337 18.3333 14.6027 18.3333 10.0003" stroke="#141B34" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-base font-medium text-black">Refresh</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-xl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_60_7)">
                <path d="M16.875 6.50859V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V3.75C3.125 3.58424 3.19085 3.42527 3.30806 3.30806C3.42527 3.19085 3.58424 3.125 3.75 3.125H13.4914C13.6569 3.12508 13.8157 3.19082 13.9328 3.30781L16.6922 6.06719C16.8092 6.18431 16.8749 6.34305 16.875 6.50859Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.25 16.875V11.875C6.25 11.7092 6.31585 11.5503 6.43306 11.4331C6.55027 11.3158 6.70924 11.25 6.875 11.25H13.125C13.2908 11.25 13.4497 11.3158 13.5669 11.4331C13.6842 11.5503 13.75 11.7092 13.75 11.875V16.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.875 5.625H7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_60_7">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="text-base font-medium">Save Changes</span>
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <div className="space-y-5">
          {/* First Row */}
          <div className="flex gap-5">
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">Business Name</label>
              <input
                type="text"
                defaultValue="The Gents' Chair"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">Business Type</label>
              <div className="relative">
                <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 appearance-none bg-white">
                  <option>Barbing Saloon</option>
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex gap-5">
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">Primary Location</label>
              <input
                type="text"
                defaultValue="350 5th Avenue, Suite 2100, New York, NY 10118"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">Business Hours</label>
              <input
                type="text"
                defaultValue="8:00am - 05:00pm"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAIPersonality = () => (
    <div className="space-y-5">
      {/* Section Header */}
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.716C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.0399 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.716C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.716 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.0399 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.716 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z" stroke="black" strokeWidth="1.5"/>
              <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="black" strokeWidth="1.5"/>
            </svg>
            <h2 className="text-xl font-semibold text-black">AI personality</h2>
          </div>
          <p className="text-lg font-semibold text-gray-500">Customize how your AI assistant communicates and engages with customers.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-xl bg-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6744 1.66699V4.27715C16.6744 4.52203 16.3682 4.63289 16.2115 4.44477C14.6856 2.73991 12.4682 1.66699 10.0001 1.66699C5.39771 1.66699 1.66675 5.39795 1.66675 10.0003C1.66675 14.6027 5.39771 18.3337 10.0001 18.3337C14.6024 18.3337 18.3334 14.6027 18.3334 10.0003" stroke="#141B34" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-base font-medium text-black">Refresh</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-xl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_60_152)">
                <path d="M16.875 6.50859V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V3.75C3.125 3.58424 3.19085 3.42527 3.30806 3.30806C3.42527 3.19085 3.58424 3.125 3.75 3.125H13.4914C13.6569 3.12508 13.8157 3.19082 13.9328 3.30781L16.6922 6.06719C16.8092 6.18431 16.8749 6.34305 16.875 6.50859Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.25 16.875V11.875C6.25 11.7092 6.31585 11.5503 6.43306 11.4331C6.55027 11.3158 6.70924 11.25 6.875 11.25H13.125C13.2908 11.25 13.4497 11.3158 13.5669 11.4331C13.6842 11.5503 13.75 11.7092 13.75 11.875V16.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.875 5.625H7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_60_152">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="text-base font-medium">Save Changes</span>
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <div className="space-y-5">
          {/* First Row */}
          <div className="flex gap-5">
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">AI voice style</label>
              <div className="relative">
                <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 appearance-none bg-white">
                  <option>Friendly Female</option>
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">AI assistant name</label>
              <div className="relative">
                <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 appearance-none bg-white">
                  <option>Your [Business Name] Assistant</option>
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="space-y-5">
            <div>
              <label className="block text-lg font-semibold text-black mb-3">Answering Hours</label>
              <div className="relative">
                <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 appearance-none bg-white">
                  <option>During business hours</option>
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-black mb-3">AI greeting style</label>
              <div className="relative">
                <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 appearance-none bg-white">
                  <option>Warm & Reassuring: "Hello, you're through to [Business Name]. I'm here to help, how can I assist?"</option>
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFAQs = () => (
    <div className="space-y-5">
      {/* Section Header */}
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.716C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.0399 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.716C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.716 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.0399 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.716 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z" stroke="black" strokeWidth="1.5"/>
              <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="black" strokeWidth="1.5"/>
            </svg>
            <h2 className="text-xl font-semibold text-black">FAQs</h2>
          </div>
          <p className="text-lg font-semibold text-gray-500">Manage the information your AI agent uses to answer questions accurately.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-xl bg-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6747 1.66699V4.27715C16.6747 4.52203 16.3685 4.63289 16.2117 4.44477C14.6858 2.73991 12.4684 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003" stroke="#141B34" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-base font-medium text-black">Refresh</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-xl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_60_47)">
                <path d="M16.875 6.50859V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V3.75C3.125 3.58424 3.19085 3.42527 3.30806 3.30806C3.42527 3.19085 3.58424 3.125 3.75 3.125H13.4914C13.6569 3.12508 13.8157 3.19082 13.9328 3.30781L16.6922 6.06719C16.8092 6.18431 16.8749 6.34305 16.875 6.50859Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.25 16.875V11.875C6.25 11.7092 6.31585 11.5503 6.43306 11.4331C6.55027 11.3158 6.70924 11.25 6.875 11.25H13.125C13.2908 11.25 13.4497 11.3158 13.5669 11.4331C13.6842 11.5503 13.75 11.7092 13.75 11.875V16.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.875 5.625H7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_60_47">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="text-base font-medium">Save Changes</span>
          </button>
        </div>
      </div>

      {/* FAQs Content */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <div className="space-y-3">
          {/* FAQ Label */}
          <h3 className="text-lg font-semibold text-black mb-3">FAQ</h3>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="flex items-start gap-5">
                <div className="w-6 h-6 border-2 border-gray-200 rounded-sm mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-black mb-1">{faq.question}</h4>
                  <p className="text-sm font-semibold text-gray-500">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Add New FAQ Section */}
          <div className="flex gap-5 pt-5">
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">Question</label>
              <input
                type="text"
                placeholder="Enter your question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 placeholder-gray-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">Answer</label>
              <input
                type="text"
                placeholder="Enter an answer to your question"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Add FAQ Button */}
          <button className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-xl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_70_202)">
                <path d="M3.125 10H16.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 3.125V16.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_70_202">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="text-base font-medium">Add FAQ</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderAdvanced = () => (
    <div className="space-y-5">
      {/* Section Header */}
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.716C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.0399 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.716C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.716 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.0399 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.716 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z" stroke="black" strokeWidth="1.5"/>
              <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="black" strokeWidth="1.5"/>
            </svg>
            <h2 className="text-xl font-semibold text-black">Advanced</h2>
          </div>
          <p className="text-lg font-semibold text-gray-500">Fine-tune your AI agent's behavior, integrations, and system controls.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-xl bg-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6747 1.66699V4.27715C16.6747 4.52203 16.3685 4.63289 16.2117 4.44477C14.6858 2.73991 12.4684 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003" stroke="#141B34" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-base font-medium text-black">Refresh</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-xl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_183_405)">
                <path d="M16.875 6.50859V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V3.75C3.125 3.58424 3.19085 3.42527 3.30806 3.30806C3.42527 3.19085 3.58424 3.125 3.75 3.125H13.4914C13.6569 3.12508 13.8157 3.19082 13.9328 3.30781L16.6922 6.06719C16.8092 6.18431 16.8749 6.34305 16.875 6.50859Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.25 16.875V11.875C6.25 11.7092 6.31585 11.5503 6.43306 11.4331C6.55027 11.3158 6.70924 11.25 6.875 11.25H13.125C13.2908 11.25 13.4497 11.3158 13.5669 11.4331C13.6842 11.5503 13.75 11.7092 13.75 11.875V16.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.875 5.625H7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_183_405">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="text-base font-medium">Save Changes</span>
          </button>
        </div>
      </div>

      {/* Advanced Settings */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <div className="space-y-5">
          {/* First Row */}
          <div className="flex gap-5">
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">How should your AI handle common questions that it can't answer?</label>
              <div className="relative">
                <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 appearance-none bg-white">
                  <option>Select what the AI should do</option>
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <label className="block text-lg font-semibold text-black">Do you want a daily summary of all calls and bookings?</label>
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-gray-500">No</span>
                <button
                  onClick={() => setDailySummary(!dailySummary)}
                  className={`flex p-1 rounded-full transition-colors ${
                    dailySummary ? 'bg-gray-200' : 'bg-gray-200'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full transition-all ${
                    dailySummary ? 'bg-black translate-x-6' : 'bg-transparent'
                  }`}></div>
                  <div className={`w-6 h-6 rounded-full transition-all ${
                    !dailySummary ? 'bg-black -translate-x-6' : 'bg-transparent'
                  }`}></div>
                </button>
                <span className="text-lg font-semibold text-gray-500">Yes</span>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex gap-5">
            <div className="flex-1 space-y-4">
              <label className="block text-lg font-semibold text-black">Should customers receive booking confirmations by Email?</label>
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-gray-500">No</span>
                <button
                  onClick={() => setEmailConfirmations(!emailConfirmations)}
                  className={`flex p-1 rounded-full transition-colors ${
                    emailConfirmations ? 'bg-gray-200' : 'bg-gray-200'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full transition-all ${
                    emailConfirmations ? 'bg-black translate-x-6' : 'bg-transparent'
                  }`}></div>
                  <div className={`w-6 h-6 rounded-full transition-all ${
                    !emailConfirmations ? 'bg-black -translate-x-6' : 'bg-transparent'
                  }`}></div>
                </button>
                <span className="text-lg font-semibold text-gray-500">Yes</span>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <label className="block text-lg font-semibold text-black">Would you like your AI to send automatic reminders before each appointment?</label>
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-gray-500">No</span>
                <button
                  onClick={() => setAutoReminders(!autoReminders)}
                  className={`flex p-1 rounded-full transition-colors ${
                    autoReminders ? 'bg-gray-200' : 'bg-gray-200'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full transition-all ${
                    autoReminders ? 'bg-black translate-x-6' : 'bg-transparent'
                  }`}></div>
                  <div className={`w-6 h-6 rounded-full transition-all ${
                    !autoReminders ? 'bg-black -translate-x-6' : 'bg-transparent'
                  }`}></div>
                </button>
                <span className="text-lg font-semibold text-gray-500">Yes</span>
              </div>
            </div>
          </div>

          {/* Calendar Integration */}
          <div className="flex justify-between items-end gap-5">
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">Calendar Integration</label>
              <div className="relative">
                <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 appearance-none bg-white">
                  <option>Google Calendar</option>
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <button className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-xl">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_183_684)">
                  <path d="M7.5 12.5L12.5 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.75 5.94598L11.0984 3.60223C11.8036 2.90843 12.7544 2.52139 13.7437 2.52542C14.7329 2.52945 15.6805 2.92422 16.3801 3.62374C17.0796 4.32326 17.4743 5.27086 17.4784 6.26012C17.4824 7.24938 17.0954 8.20016 16.4016 8.90536L14.0531 11.2499" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.94598 8.75L3.60223 11.0984C2.90843 11.8036 2.52139 12.7544 2.52542 13.7437C2.52945 14.7329 2.92422 15.6805 3.62374 16.3801C4.32326 17.0796 5.27086 17.4743 6.26012 17.4784C7.24938 17.4824 8.20016 17.0954 8.90536 16.4016L11.2499 14.0531" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_183_684">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="text-base font-medium">Sync Account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBooking = () => (
    <div className="space-y-5">
      {/* Section Header */}
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.716C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.0399 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.716C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.716 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.0399 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.716 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z" stroke="black" strokeWidth="1.5"/>
              <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="black" strokeWidth="1.5"/>
            </svg>
            <h2 className="text-xl font-semibold text-black">Booking</h2>
          </div>
          <p className="text-lg font-semibold text-gray-500">Control how your calls and appointments are scheduled and managed.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-xl bg-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6742 1.66699V4.27715C16.6742 4.52203 16.368 4.63289 16.2113 4.44477C14.6853 2.73991 12.4679 1.66699 9.99984 1.66699C5.39746 1.66699 1.6665 5.39795 1.6665 10.0003C1.6665 14.6027 5.39746 18.3337 9.99984 18.3337C14.6022 18.3337 18.3332 14.6027 18.3332 10.0003" stroke="#141B34" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-base font-medium text-black">Refresh</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-xl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_60_257)">
                <path d="M16.875 6.50859V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V3.75C3.125 3.58424 3.19085 3.42527 3.30806 3.30806C3.42527 3.19085 3.58424 3.125 3.75 3.125H13.4914C13.6569 3.12508 13.8157 3.19082 13.9328 3.30781L16.6922 6.06719C16.8092 6.18431 16.8749 6.34305 16.875 6.50859Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.25 16.875V11.875C6.25 11.7092 6.31585 11.5503 6.43306 11.4331C6.55027 11.3158 6.70924 11.25 6.875 11.25H13.125C13.2908 11.25 13.4497 11.3158 13.5669 11.4331C13.6842 11.5503 13.75 11.7092 13.75 11.875V16.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.875 5.625H7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_60_257">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="text-base font-medium">Save Changes</span>
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <div className="space-y-5">
          {/* First Row */}
          <div className="flex gap-5">
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">What can customers book?</label>
              <div className="relative">
                <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 appearance-none bg-white">
                  <option>Select the services you want your customers to book</option>
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">How long is each appointment?</label>
              <div className="relative">
                <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 appearance-none bg-white">
                  <option>Select the duration you want each appointment to last</option>
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex gap-5">
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-6">Select your business days</label>
              <div className="flex gap-3">
                {['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'].map((day) => (
                  <button
                    key={day}
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl text-lg text-gray-500 hover:border-gray-300 transition-colors"
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-lg font-semibold text-black mb-3">Enter your business hours</label>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="From"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 placeholder-gray-500"
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6.75V12H17.25" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="To"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 placeholder-gray-500"
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6.75V12H17.25" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div>
            <label className="block text-lg font-semibold text-black mb-4">If your schedule is full, what should the AI do?</label>
            <div className="relative">
              <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg text-gray-500 appearance-none bg-white">
                <option>Select Options</option>
              </select>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-16 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-black">Voicera AI</h1>
          
          <div className="flex items-center gap-8">
            {/* Agent Live */}
            <div className="flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 16V14C19 11.1716 19 9.75736 18.1213 8.87868C17.2426 8 15.8284 8 13 8H11C8.17157 8 6.75736 8 5.87868 8.87868C5 9.75736 5 11.1716 5 14V16C5 18.8284 5 20.2426 5.87868 21.1213C6.75736 22 8.17157 22 11 22H13C15.8284 22 17.2426 22 18.1213 21.1213C19 20.2426 19 18.8284 19 16Z" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M19 18C20.4142 18 21.1213 18 21.5607 17.5607C22 17.1213 22 16.4142 22 15C22 13.5858 22 12.8787 21.5607 12.4393C21.1213 12 20.4142 12 19 12" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M5 18C3.58579 18 2.87868 18 2.43934 17.5607C2 17.1213 2 16.4142 2 15C2 13.5858 2 12.8787 2.43934 12.4393C2.87868 12 3.58579 12 5 12" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z" stroke="#141B34" strokeWidth="1.5"/>
                <path d="M12 5V8" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13V14" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 13V14" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 17.5C10 17.5 10.6667 18 12 18C13.3333 18 14 17.5 14 17.5" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-lg font-semibold text-black">Agent Live</span>
            </div>

            {/* Notification Bell */}
            <button
              onClick={() => setShowNotifications(true)}
              className="relative"
            >
              <svg width="29" height="33" viewBox="0 0 29 33" fill="none">
                <path d="M15.5 27C15.5 28.933 13.933 30.5 12 30.5C10.067 30.5 8.5 28.933 8.5 27" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.2311 27H4.76887C3.79195 27 3 26.208 3 25.2311C3 24.762 3.18636 24.3121 3.51809 23.9803L4.12132 23.3771C4.68393 22.8145 5 22.0514 5 21.2558V18.5C5 14.634 8.13401 11.5 12 11.5C15.866 11.5 19 14.634 19 18.5V21.2558C19 22.0514 19.3161 22.8145 19.8787 23.3771L20.4819 23.9803C20.8136 24.3121 21 24.762 21 25.2311C21 26.208 20.208 27 19.2311 27Z" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="24.5" cy="4" r="4" fill="#EF4444"/>
              </svg>
            </button>

            {/* User Avatar */}
            <div className="flex items-center gap-5">
              <button
                onClick={handleLogout}
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                title="Click to logout"
              >
                <span className="text-lg font-semibold text-gray-800">H</span>
              </button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-center mt-4">
          <div className="bg-gray-100 rounded-full p-2 flex items-center gap-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-4 py-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <span className="text-lg font-semibold text-gray-500">Dashboard</span>
            </button>
            <button
              onClick={() => navigate('/call-logs')}
              className="px-4 py-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <span className="text-lg font-semibold text-gray-500">Call Logs</span>
            </button>
            <button
              onClick={() => navigate('/daily-summary')}
              className="px-4 py-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <span className="text-lg font-semibold text-gray-500">Daily Summary</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-16 py-8">
        {/* Page Header */}
        <div className="mb-7">
          <h1 className="text-3xl font-semibold text-black mb-1">Agent Management</h1>
          <p className="text-xl font-semibold text-gray-500">Configure your AI agent and test its performance</p>
        </div>

        {/* Agent Status */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-black">Agent status:</span>
            <div className={`flex items-center gap-3 px-4 py-1 border rounded-full ${
              isAgentLive
                ? 'border-green-500 bg-green-50'
                : 'border-red-500 bg-red-50'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                isAgentLive ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <span className={`text-base font-medium ${
                isAgentLive ? 'text-green-500' : 'text-red-500'
              }`}>
                {isAgentLive ? 'Live' : 'Offline'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAgentLive(!isAgentLive)}
              className={`px-4 py-2 rounded-xl text-base font-medium text-white ${
                isAgentLive ? 'bg-red-500' : 'bg-green-500'
              }`}
            >
              {isAgentLive ? 'Go Offline' : 'Go Live'}
            </button>
            <button
              onClick={handleTestAgentClick}
              className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 16V14C19 11.1716 19 9.75736 18.1213 8.87868C17.2426 8 15.8284 8 13 8H11C8.17157 8 6.75736 8 5.87868 8.87868C5 9.75736 5 11.1716 5 14V16C5 18.8284 5 20.2426 5.87868 21.1213C6.75736 22 8.17157 22 11 22H13C15.8284 22 17.2426 22 18.1213 21.1213C19 20.2426 19 18.8284 19 16Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M19 18C20.4142 18 21.1213 18 21.5607 17.5607C22 17.1213 22 16.4142 22 15C22 13.5858 22 12.8787 21.5607 12.4393C21.1213 12 20.4142 12 19 12" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M5 18C3.58579 18 2.87868 18 2.43934 17.5607C2 17.1213 2 16.4142 2 15C2 13.5858 2 12.8787 2.43934 12.4393C2.87868 12 3.58579 12 5 12" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z" stroke="white" strokeWidth="1.5"/>
                <path d="M12 5V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 13V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 17.5C10 17.5 10.6667 18 12 18C13.3333 18 14 17.5 14 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-base font-medium">Test Agent</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-gray-200 rounded-full p-2 flex items-center gap-3 mb-7">
          <button
            onClick={() => setActiveTab('basic-info')}
            className={`px-4 py-2 rounded-full text-lg font-semibold transition-all ${
              activeTab === 'basic-info' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-black hover:bg-gray-100'
            }`}
          >
            Basic info
          </button>
          <button
            onClick={() => setActiveTab('ai-personality')}
            className={`px-4 py-2 rounded-full text-lg font-semibold transition-all ${
              activeTab === 'ai-personality' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-black hover:bg-gray-100'
            }`}
          >
            AI personality
          </button>
          <button
            onClick={() => setActiveTab('booking')}
            className={`px-4 py-2 rounded-full text-lg font-semibold transition-all ${
              activeTab === 'booking' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-black hover:bg-gray-100'
            }`}
          >
            Booking
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`px-4 py-2 rounded-full text-lg font-semibold transition-all ${
              activeTab === 'faqs' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-black hover:bg-gray-100'
            }`}
          >
            FAQs
          </button>
          <button
            onClick={() => setActiveTab('advanced')}
            className={`px-4 py-2 rounded-full text-lg font-semibold transition-all ${
              activeTab === 'advanced' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-black hover:bg-gray-100'
            }`}
          >
            Advanced
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'basic-info' && renderBasicInfo()}
        {activeTab === 'ai-personality' && renderAIPersonality()}
        {activeTab === 'booking' && renderBooking()}
        {activeTab === 'faqs' && renderFAQs()}
        {activeTab === 'advanced' && renderAdvanced()}
      </main>

      {/* Notification Popup */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-end items-start pt-24 pr-16 z-50">
          <div className="bg-white rounded-2xl w-[650px] max-h-[936px] overflow-y-auto shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
              <h3 className="text-xl font-medium text-gray-600">
                Notifications <span className="text-gray-500">(6)</span>
              </h3>
              <button onClick={() => setShowNotifications(false)} className="text-gray-500 hover:text-gray-700">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3337 2.6665L2.66699 13.3332" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.66699 2.6665L13.3337 13.3332" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Notifications */}
            <div className="p-5 space-y-4">
              {/* Sample Notifications */}
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                    <path d="M14 0.666992C21.3637 0.666992 27.333 6.6362 27.333 14C27.3329 21.3637 21.3637 27.333 14 27.333C6.63629 27.333 0.667081 21.3636 0.666992 14C0.666992 6.63623 6.63624 0.667036 14 0.666992Z" fill="#22C55E"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xl text-black">
                    Agent Configuration Saved · <span className="text-gray-500">Your AI agent settings have been successfully updated.</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-2">Today · 3:15 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M13 0.333984C18.9709 0.333984 21.9565 0.333566 23.8115 2.18848C25.6664 4.04346 25.667 7.02899 25.667 13C25.667 18.9709 25.6663 21.9564 23.8115 23.8115C21.9565 25.6664 18.971 25.667 13 25.667C7.02888 25.667 4.04348 25.6665 2.18848 23.8115C0.333558 21.9565 0.333008 18.971 0.333008 13C0.333008 7.02899 0.333507 4.04346 2.18848 2.18848C4.04349 0.333612 7.02901 0.333984 13 0.333984Z" fill="#007AFF"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xl text-black">
                    Agent Testing Complete · <span className="text-gray-500">Agent testing session has been completed successfully.</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-2">Today · 2:45 PM</p>
                  <button className="bg-black text-white px-5 py-2 rounded-lg text-xs font-semibold mt-3">
                    View Results
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentManagement;
