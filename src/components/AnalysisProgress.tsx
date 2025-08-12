import React, { useState, useEffect } from 'react';
import { Loader, Search, Shield, CheckCircle } from 'lucide-react';

const stages = [
  { id: 1, title: 'Content Processing', description: 'Extracting and analyzing content structure', icon: Loader },
  { id: 2, title: 'Source Verification', description: 'Cross-referencing with trusted sources', icon: Search },
  { id: 3, title: 'AI Analysis', description: 'Running advanced detection algorithms', icon: Shield },
  { id: 4, title: 'Blockchain Recording', description: 'Recording results on blockchain', icon: CheckCircle }
];

export default function AnalysisProgress() {
  const [currentStage, setCurrentStage] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        if (newProgress >= 25 && currentStage === 1) setCurrentStage(2);
        if (newProgress >= 50 && currentStage === 2) setCurrentStage(3);
        if (newProgress >= 75 && currentStage === 3) setCurrentStage(4);
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [currentStage]);

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Analyzing Content
          </h2>
          <p className="text-gray-300">
            Our AI systems are thoroughly examining your content for authenticity
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-300">Progress</span>
            <span className="text-sm text-blue-400 font-semibold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Stages */}
        <div className="space-y-6">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = currentStage === stage.id;
            const isCompleted = currentStage > stage.id;
            
            return (
              <div key={stage.id} className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 ${
                isActive ? 'bg-blue-500/10 border border-blue-500/30' : 
                isCompleted ? 'bg-green-500/10 border border-green-500/30' : 
                'bg-white/5 border border-white/10'
              }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isActive ? 'bg-blue-500 animate-pulse' : 
                  isCompleted ? 'bg-green-500' : 
                  'bg-white/10'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    isActive || isCompleted ? 'text-white' : 'text-gray-400'
                  } ${isActive ? 'animate-spin' : ''}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    isActive ? 'text-blue-300' : 
                    isCompleted ? 'text-green-300' : 
                    'text-gray-300'
                  }`}>
                    {stage.title}
                  </h3>
                  <p className="text-sm text-gray-400">{stage.description}</p>
                </div>
                {isCompleted && (
                  <CheckCircle className="w-6 h-6 text-green-400" />
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Analysis typically takes 30-60 seconds depending on content complexity
          </p>
        </div>
      </div>
    </div>
  );
}