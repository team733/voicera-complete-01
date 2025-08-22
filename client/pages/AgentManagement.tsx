import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AgentManagement: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('basic-info');

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
            <button className="relative">
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
            <div className="flex items-center gap-3 px-4 py-1 border border-green-500 bg-green-50 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-base font-medium text-green-500">Live</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-red-500 text-white px-4 py-2 rounded-xl text-base font-medium">
              Go Offline
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-3">
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
        {activeTab === 'faqs' && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">FAQs configuration coming soon...</p>
          </div>
        )}
        {activeTab === 'advanced' && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">Advanced settings coming soon...</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AgentManagement;
