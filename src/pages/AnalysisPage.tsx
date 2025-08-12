import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Link as LinkIcon, Video, Youtube, ArrowRight, Loader } from 'lucide-react';
import { useAnalysis } from '../context/AnalysisContext';
import { analyzeContent } from '../utils/analysisEngine';
import InputCard from '../components/InputCard';
import AnalysisProgress from '../components/AnalysisProgress';

export default function AnalysisPage() {
  const [activeTab, setActiveTab] = useState('image');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { setAnalysisData } = useAnalysis();
  const navigate = useNavigate();

  const tabs = [
    { id: 'image', label: 'Image', icon: Upload, description: 'Upload photos or screenshots' },
    { id: 'news', label: 'News Link', icon: LinkIcon, description: 'Paste news article URLs' },
    { id: 'video', label: 'Video', icon: Video, description: 'Analyze video content' },
    { id: 'youtube', label: 'YouTube', icon: Youtube, description: 'Verify YouTube videos' }
  ];

  const handleAnalyze = async (data: any) => {
    setIsAnalyzing(true);
    
    // Simulate analysis process with realistic timing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate consistent analysis results
    const analysisInput = {
      type: activeTab,
      data: data.data,
      timestamp: data.timestamp
    };
    
    const analysisResult = analyzeContent(analysisInput);
    
    const result = {
      type: activeTab,
      content: data,
      result: analysisResult,
      timestamp: new Date().toISOString()
    };

    setAnalysisData(result);
    setIsAnalyzing(false);
    navigate('/results');
  };

  if (isAnalyzing) {
    return <AnalysisProgress />;
  }

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Content Verification Analysis
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Upload or paste your content to begin comprehensive fact-checking and verification analysis.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              {tabs.find(tab => tab.id === activeTab)?.label} Analysis
            </h3>
            <p className="text-gray-300">
              {tabs.find(tab => tab.id === activeTab)?.description}
            </p>
          </div>

          <InputCard type={activeTab} onAnalyze={handleAnalyze} />
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Upload className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure Upload</h3>
            <p className="text-gray-300 text-sm">
              All uploads are encrypted and processed securely. Your data is never stored permanently.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <LinkIcon className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Cross-Reference</h3>
            <p className="text-gray-300 text-sm">
              Content is verified against 150+ trusted sources and fact-checking organizations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <ArrowRight className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Instant Results</h3>
            <p className="text-gray-300 text-sm">
              Get comprehensive analysis results in seconds with detailed explanations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}