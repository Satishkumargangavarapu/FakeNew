import React from 'react';
import { CheckCircle, AlertTriangle, Image, Link as LinkIcon, Video, Youtube } from 'lucide-react';

interface ResultCardProps {
  verdict: 'authentic' | 'fake';
  confidence: number;
  type: string;
  content: any;
}

export default function ResultCard({ verdict, confidence, type, content }: ResultCardProps) {
  const isAuthentic = verdict === 'authentic';
  
  const getTypeIcon = () => {
    switch (type) {
      case 'image': return Image;
      case 'news': return LinkIcon;
      case 'video': return Video;
      case 'youtube': return Youtube;
      default: return Image;
    }
  };

  const TypeIcon = getTypeIcon();

  return (
    <div className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
      isAuthentic 
        ? 'bg-green-500/10 border-green-500/30 shadow-green-500/20' 
        : 'bg-red-500/10 border-red-500/30 shadow-red-500/20'
    } shadow-2xl`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${
            isAuthentic ? 'bg-green-500' : 'bg-red-500'
          }`}>
            {isAuthentic ? (
              <CheckCircle className="w-8 h-8 text-white" />
            ) : (
              <AlertTriangle className="w-8 h-8 text-white" />
            )}
          </div>
          <div>
            <h2 className={`text-2xl font-bold ${isAuthentic ? 'text-green-300' : 'text-red-300'}`}>
              {isAuthentic ? 'Content Verified' : 'Potential Fake News'}
            </h2>
            <div className="flex items-center mt-1">
              <TypeIcon className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-gray-300 text-sm capitalize">{type} Analysis</span>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className={`text-3xl font-bold ${isAuthentic ? 'text-green-300' : 'text-red-300'}`}>
            {confidence}%
          </div>
          <div className="text-sm text-gray-400">Confidence</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className={`p-4 rounded-lg border-l-4 ${
          isAuthentic 
            ? 'bg-green-500/5 border-green-500' 
            : 'bg-red-500/5 border-red-500'
        }`}>
          <h3 className="font-semibold text-white mb-2">Verdict</h3>
          <p className={`${isAuthentic ? 'text-green-200' : 'text-red-200'}`}>
            {isAuthentic 
              ? 'This content appears to be authentic based on our comprehensive analysis.' 
              : 'This content shows indicators of potential misinformation or manipulation.'}
          </p>
        </div>

        {/* Confidence Bar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">Confidence Level</span>
            <span className={`font-semibold ${isAuthentic ? 'text-green-300' : 'text-red-300'}`}>
              {confidence}%
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ease-out ${
                isAuthentic 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-400' 
                  : 'bg-gradient-to-r from-red-500 to-orange-400'
              }`}
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}