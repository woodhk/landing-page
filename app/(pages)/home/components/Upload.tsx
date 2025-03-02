import React, { useState } from 'react';
import { Upload, Trash2, AlertCircle, Check } from 'lucide-react';

const AccountSettings = () => {
  // State for tab navigation
  const [activeTab, setActiveTab] = useState('upload');
  // State for upload status
  const [uploadStatus, setUploadStatus] = useState(null); // null, 'hovering', 'selected'
  const [fileName, setFileName] = useState('');
  
  // Simulate document deletion with notification
  const [showNotification, setShowNotification] = useState(false);
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Company Handbook Marketing', role: '' },
    { id: 2, name: 'Product Handbook', role: '' }
  ]);
  
  const handleDelete = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };
  
  // Simulate file selection
  const handleFileSelection = () => {
    setFileName('company_handbook.pdf');
    setUploadStatus('selected');
  };
  
  // Tabs configuration for cleaner rendering
  const tabs = [
    { id: 'details', label: 'My Details' },
    { id: 'password', label: 'Password' },
    { id: 'upload', label: 'Upload Documents' },
    { id: 'support', label: 'Support & Feedback' }
  ];

  return (
    <div className="font-sans max-w-6xl mx-auto p-6 text-dark">
      {/* Page Header with subtle shadow */}
      <h1 className="text-3xl font-bold mb-8 text-dark pb-2">Account Settings</h1>
      
      {/* Enhanced Navigation Tabs with active state animations */}
      <div className="border-b border-light-2 mb-6">
        <nav className="flex space-x-1 md:space-x-8">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-4 text-medium-2 relative transition-all duration-200 hover:text-dynamic-blue
                ${activeTab === tab.id ? 'text-dynamic-blue font-medium' : 'hover:bg-light-3/30'}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-dynamic-blue 
                  transition-all duration-300 transform scale-x-100"></div>
              )}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Success notification */}
      {showNotification && (
        <div className="fixed top-6 right-6 bg-supp-success text-supp-success-text px-4 py-3 rounded-md 
          shadow-lg flex items-center space-x-2 transition-opacity duration-300 z-50">
          <Check size={18} />
          <span>Document successfully deleted</span>
        </div>
      )}
      
      {/* Upload Documents Section - Enhanced with animations and feedback */}
      <div className="border border-light-2 rounded-lg p-6 md:p-8 mb-8 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-dark mb-2">Upload Documents</h2>
            <p className="text-medium-3 text-sm mb-4 md:pr-8">
              Add documents to customize your AI experiences
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-semibold text-dark mb-4">
              Upload Documents to further tailor AI role-play sessions to your company
            </h3>
            <div className="flex justify-end mb-2">
              <span className="text-sm bg-light-3 text-medium rounded-full px-3 py-1">
                Uploads Remaining: <span className="font-medium">1</span>
              </span>
            </div>
            
            {/* Enhanced Upload Area with drag & drop visual feedback */}
            <div 
              className={`border-2 border-dashed rounded-lg p-16 md:p-20 mb-6 flex flex-col items-center justify-center 
                transition-all duration-200 cursor-pointer
                ${uploadStatus === 'hovering' ? 'border-dynamic-blue bg-light-3/30' : 'border-light-2'}
                ${uploadStatus === 'selected' ? 'border-functional-success bg-supp-success/30' : ''}`}
              onMouseEnter={() => !uploadStatus && setUploadStatus('hovering')}
              onMouseLeave={() => !uploadStatus && setUploadStatus(null)}
              onClick={handleFileSelection}
            >
              <div className={`rounded-full p-4 mb-5 transition-all duration-300
                ${uploadStatus === 'selected' ? 'bg-functional-success' : 'bg-dynamic-blue'}
              `}>
                <Upload className="h-10 w-10 text-white" />
              </div>
              
              {!uploadStatus && (
                <>
                  <p className="font-medium text-dark mb-2">Upload Documents</p>
                  <p className="text-sm text-medium mb-1">Supported documents: .pdf, .csv etc</p>
                  <p className="text-sm text-medium">Maximum: 8MB</p>
                </>
              )}
              
              {uploadStatus === 'hovering' && (
                <p className="font-medium text-dynamic-blue mb-1">Click to select a file</p>
              )}
              
              {uploadStatus === 'selected' && (
                <>
                  <p className="font-medium text-functional-success mb-1">File selected</p>
                  <p className="text-sm text-medium flex items-center">
                    <span className="mr-1">{fileName}</span>
                    <button className="text-bright-cherry ml-2 hover:underline text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        setUploadStatus(null);
                        setFileName('');
                      }}>
                      Remove
                    </button>
                  </p>
                </>
              )}
            </div>
            
            {/* Enhanced Save Button */}
            <div className="flex justify-center">
              <button 
                className={`py-2.5 px-8 rounded-md font-medium transition-all duration-200
                  ${uploadStatus === 'selected' 
                    ? 'bg-dynamic-blue text-white hover:bg-deep-dynamic-blue shadow-md hover:shadow-lg' 
                    : 'bg-light-2 text-medium-3 cursor-not-allowed'}`}
              >
                {uploadStatus === 'selected' ? 'Save Document' : 'Select a file'}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Manage Documents Section - Enhanced with better spacing and hover states */}
      <div className="border border-light-2 rounded-lg p-6 md:p-8 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-dark mb-2">Manage Documents</h2>
            <p className="text-medium-3 text-sm mb-4 md:pr-8">
              Control how documents are used in your sessions
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-semibold text-dark mb-4">Manage your uploaded documents below</h3>
            <div className="border border-light-2 rounded-lg p-5 bg-light-3/10">
              <h4 className="text-lg font-medium text-dark mb-5 flex items-center">
                Documents
                <span className="ml-2 text-xs bg-medium px-2 py-0.5 rounded-full text-white">
                  {documents.length}
                </span>
              </h4>
              
              {documents.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-medium">
                  <AlertCircle className="h-10 w-10 text-medium-2 mb-2" />
                  <p>No documents uploaded yet</p>
                </div>
              ) : (
                <>
                  {/* Document Items with improved visual feedback */}
                  {documents.map((doc, index) => (
                    <div 
                      key={doc.id}
                      className={`border border-light-2 rounded-lg p-4 
                        ${index < documents.length - 1 ? 'mb-4' : ''}
                        bg-white hover:border-light hover:shadow-sm transition-all duration-200`}
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-functional-pending mr-2"></div>
                          <p className="text-dark font-medium">{doc.name}</p>
                        </div>
                        <div className="flex items-center space-x-3 w-full sm:w-auto">
                          <select 
                            className="border border-light-2 rounded py-1.5 px-2 text-sm focus:border-dynamic-blue
                              focus:outline-none transition-all duration-200 bg-white flex-grow sm:flex-grow-0"
                            value={doc.role}
                            onChange={(e) => {
                              const newDocs = [...documents];
                              newDocs[index].role = e.target.value;
                              setDocuments(newDocs);
                            }}
                          >
                            <option value="">Select Job Role</option>
                            <option value="sales">Sales</option>
                            <option value="marketing">Marketing</option>
                            <option value="support">Support</option>
                          </select>
                          <button 
                            className="p-1.5 rounded-md hover:bg-supp-error/30 transition-all duration-200 group"
                            onClick={() => handleDelete(doc.id)}
                          >
                            <Trash2 className="h-5 w-5 text-functional-error group-hover:text-functional-error transition-all duration-200" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;