'use client';
import React from 'react';
import Image from 'next/image';

const RolePlay = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 px-8 py-5 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <Image src="/logo/logo.svg" alt="FluentPro Logo" width={40} height={40} className="transition-all hover:scale-105" />
          <span className="text-xl font-medium bg-gradient-to-r from-dynamic-blue to-blue-500 bg-clip-text text-transparent">FluentPro</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Role-Play: <span className="text-dynamic-blue">Part 1</span></h1>
        <div className="flex items-center bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow transition-shadow">
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-full h-14 w-14 flex items-center justify-center mr-4 border-2 border-white shadow-sm">
            <span className="text-xl font-medium text-dynamic-blue">A</span>
          </div>
          <div>
            <p className="font-medium text-gray-800">Alex Wood</p>
            <p className="text-sm text-gray-600">Project Manager</p>
            <p className="text-xs text-gray-500">The LanguageKey Ltd</p>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="border-r border-gray-200 w-72 flex flex-col bg-white shadow-sm">
          <div className="p-6 font-bold text-xl border-b border-gray-100">Role-Play Sections</div>
          
          <div className="py-4 px-6 flex justify-between items-center border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
            <span className="text-lg">Introduction</span>
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-green-500 text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="py-4 px-6 flex justify-between items-center border-b border-gray-100 bg-blue-50 cursor-pointer">
            <span className="text-lg font-medium text-dynamic-blue">Part 1</span>
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white border-2 border-dynamic-blue shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dynamic-blue" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="py-4 px-6 flex justify-between items-center border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
            <span className="text-lg text-gray-700">Part 2</span>
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white border-2 border-gray-300 shadow-sm"></div>
          </div>
          
          <div className="py-4 px-6 flex justify-between items-center border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
            <span className="text-lg text-gray-700">Part 3</span>
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white border-2 border-gray-300 shadow-sm"></div>
          </div>
          
          <div className="py-4 px-6 flex justify-between items-center border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
            <span className="text-lg text-gray-700">Part 4</span>
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white border-2 border-gray-300 shadow-sm"></div>
          </div>
          
          <div className="py-4 px-6 flex justify-between items-center border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
            <span className="text-lg text-gray-700">Grade</span>
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white border-2 border-gray-300 shadow-sm"></div>
          </div>
          
          <div className="py-4 px-6 flex justify-between items-center border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
            <span className="text-lg text-gray-700">Summary</span>
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white border-2 border-gray-300 shadow-sm"></div>
          </div>
          
          <div className="mt-auto border-t border-gray-200 p-6">
            <button className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-center hover:bg-dynamic-blue hover:text-white hover:border-dynamic-blue transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-3xl mx-auto py-10 px-8">
            <div className="rounded-2xl bg-white p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-3 text-dynamic-blue">Introduce Yourself</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Introduce yourself including your name, job position, company and reason for calling
              </p>
              
              <div className="text-center mb-10">
                <div className="inline-block px-8 py-2 rounded-full bg-blue-50 text-dynamic-blue font-medium">
                  Exchange 1/9
                </div>
              </div>

              <div className="flex mb-8">
                <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full flex items-center justify-center mr-4 border-2 border-white shadow-sm">
                  <span className="text-purple-700 font-medium">A</span>
                </div>
                <div className="bg-gray-100 rounded-2xl p-5 max-w-md shadow-sm relative">
                  <p className="text-gray-800">Hi, who is this?</p>
                  <div className="absolute w-4 h-4 bg-gray-100 rotate-45 left-[-8px] top-[15px]"></div>
                </div>
              </div>

              <div className="flex justify-end mb-16">
                <div className="bg-white border border-gray-200 rounded-lg py-2 px-5 inline-block hover:border-dynamic-blue hover:text-dynamic-blue hover:shadow-sm cursor-pointer transition-all group">
                  <div className="flex items-center">
                    <div className="mr-2 transition-all group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dynamic-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Press Record
                  </div>
                </div>
                <div className="flex items-center ml-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full h-12 w-12 flex items-center justify-center text-dynamic-blue border-2 border-white shadow-sm">
                    <span className="font-medium">You</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all flex items-center">
                  <div className="bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center mr-3 hover:bg-gray-200 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="bg-gradient-to-r from-dynamic-blue to-blue-600 rounded-full h-16 w-16 flex items-center justify-center text-white shadow-md transform hover:scale-105 transition-transform cursor-pointer relative">
                    <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-96 p-6 overflow-y-auto bg-white border-l border-gray-200 shadow-sm">
          <div className="bg-white rounded-xl p-6 mb-4 relative border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-3 right-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-dynamic-blue transition-colors cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex items-center mb-5">
              <div className="h-8 w-2 bg-dynamic-blue rounded-full mr-3"></div>
              <h3 className="text-xl font-bold text-gray-800">Exchange <span className="text-dynamic-blue">1/9</span></h3>
            </div>
            <p className="text-gray-700 mb-8 text-lg">
              Introduce yourself including your name, job position, company and reason for calling
            </p>
            
            <div className="mb-6">
              <p className="font-medium mb-6 text-gray-800">Respond with one of the following:</p>
              
              <div className="mb-8">
                <div className="text-center font-medium text-sm text-dynamic-blue bg-blue-50 py-1 px-3 rounded-full mb-3 inline-block">Option 1</div>
                <div className="border border-gray-200 rounded-lg p-4 mb-2 hover:border-dynamic-blue hover:shadow-md transition-all cursor-pointer bg-white">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-800">Hi John, I'm Amy, the client relations manager</p>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center ml-3 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <button className="flex items-center text-sm text-gray-600 mt-2 hover:text-dynamic-blue transition-all group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Explain it to me
                </button>
              </div>
              
              <div className="mb-8">
                <div className="text-center font-medium text-sm text-dynamic-blue bg-blue-50 py-1 px-3 rounded-full mb-3 inline-block">Option 2</div>
                <div className="border border-gray-200 rounded-lg p-4 mb-2 hover:border-dynamic-blue hover:shadow-md transition-all cursor-pointer bg-white">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-800">Hey John! I'm Amy, I look after client relations</p>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center ml-3 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <button className="flex items-center text-sm text-gray-600 mt-2 hover:text-dynamic-blue transition-all group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Explain it to me
                </button>
              </div>
              
              <div className="mb-4">
                <div className="text-center font-medium text-sm text-dynamic-blue bg-blue-50 py-1 px-3 rounded-full mb-3 inline-block">Option 3</div>
                <div className="border border-gray-200 rounded-lg p-4 mb-2 hover:border-dynamic-blue hover:shadow-md transition-all cursor-pointer bg-white">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-800">Hi, I'm Amy, currently managing Client Relations</p>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center ml-3 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <button className="flex items-center text-sm text-gray-600 mt-2 hover:text-dynamic-blue transition-all group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Explain it to me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-4 px-8 flex justify-center space-x-12 bg-white shadow-sm">
        <button className="flex items-center text-gray-700 hover:text-dynamic-blue transition-all group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          Like
        </button>
        <button className="flex items-center text-gray-700 hover:text-dynamic-blue transition-all group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2" />
          </svg>
          Dislike
        </button>
        <button className="flex items-center text-gray-700 hover:text-dynamic-blue transition-all group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
          Report an issue
        </button>
      </footer>
    </div>
  );
};

export default RolePlay;