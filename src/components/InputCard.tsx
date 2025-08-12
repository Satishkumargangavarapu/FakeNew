import React, { useState } from 'react';
import { Upload, Link as LinkIcon, Video, Youtube, ArrowRight } from 'lucide-react';

interface InputCardProps {
  type: string;
  onAnalyze: (data: any) => void;
}

export default function InputCard({ type, onAnalyze }: InputCardProps) {
  const [input, setInput] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    onAnalyze({
      type,
      data: input,
      timestamp: new Date().toISOString()
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setInput(file.name);
    }
  };

  const renderInput = () => {
    switch (type) {
      case 'image':
        return (
          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
              dragActive
                ? 'border-blue-400 bg-blue-500/10'
                : 'border-white/20 hover:border-white/40 hover:bg-white/5'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Upload Image</h3>
            <p className="text-gray-300 mb-6">
              Drag and drop an image file or click to browse
            </p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="image-upload"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setInput(file.name);
              }}
            />
            <label
              htmlFor="image-upload"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              Choose File
            </label>
            {input && (
              <div className="mt-4 p-3 bg-white/10 rounded-lg">
                <p className="text-white text-sm">Selected: {input}</p>
              </div>
            )}
          </div>
        );

      case 'news':
        return (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <LinkIcon className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">News Article URL</h3>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste the URL of the news article you want to verify..."
              className="w-full h-32 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
            />
          </div>
        );

      case 'video':
        return (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <Video className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">Video URL</h3>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste the URL of the video you want to verify..."
              className="w-full h-32 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300"
            />
          </div>
        );

      case 'youtube':
        return (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <Youtube className="w-6 h-6 text-red-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">YouTube URL</h3>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste the YouTube URL you want to verify..."
              className="w-full h-32 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all duration-300"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {renderInput()}
      
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={!input.trim()}
          className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 flex items-center"
        >
          Start Analysis
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </form>
  );
}