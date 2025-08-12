import React from 'react';
import { TrendingUp, Target, Shield, Search } from 'lucide-react';

interface AnalysisMetricsProps {
  analysis: {
    textualConsistency: number;
    sourceCredibility: number;
    metadataVerification: number;
    crossReferenceCheck: number;
  };
}

export default function AnalysisMetrics({ analysis }: AnalysisMetricsProps) {
  const metrics = [
    {
      label: 'Textual Consistency',
      value: analysis.textualConsistency,
      icon: TrendingUp,
      color: analysis.textualConsistency > 80 ? 'green' : analysis.textualConsistency > 60 ? 'yellow' : 'red'
    },
    {
      label: 'Source Credibility',
      value: analysis.sourceCredibility,
      icon: Shield,
      color: analysis.sourceCredibility > 80 ? 'green' : analysis.sourceCredibility > 60 ? 'yellow' : 'red'
    },
    {
      label: 'Metadata Verification',
      value: analysis.metadataVerification,
      icon: Target,
      color: analysis.metadataVerification > 80 ? 'green' : analysis.metadataVerification > 60 ? 'yellow' : 'red'
    },
    {
      label: 'Cross-Reference Check',
      value: analysis.crossReferenceCheck,
      icon: Search,
      color: analysis.crossReferenceCheck > 80 ? 'green' : analysis.crossReferenceCheck > 60 ? 'yellow' : 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bg: 'from-green-500/10 to-emerald-600/10',
          border: 'border-green-500/30',
          text: 'text-green-400',
          progress: 'from-green-500 to-emerald-400'
        };
      case 'yellow':
        return {
          bg: 'from-yellow-500/10 to-orange-600/10',
          border: 'border-yellow-500/30',
          text: 'text-yellow-400',
          progress: 'from-yellow-500 to-orange-400'
        };
      case 'red':
        return {
          bg: 'from-red-500/10 to-pink-600/10',
          border: 'border-red-500/30',
          text: 'text-red-400',
          progress: 'from-red-500 to-pink-400'
        };
      default:
        return {
          bg: 'from-gray-500/10 to-slate-600/10',
          border: 'border-gray-500/30',
          text: 'text-gray-400',
          progress: 'from-gray-500 to-slate-400'
        };
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Analysis Metrics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => {
          const colors = getColorClasses(metric.color);
          const Icon = metric.icon;
          
          return (
            <div key={index} className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl p-6`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Icon className={`w-6 h-6 ${colors.text} mr-3`} />
                  <h4 className="font-semibold text-white">{metric.label}</h4>
                </div>
                <span className={`text-xl font-bold ${colors.text}`}>
                  {metric.value}%
                </span>
              </div>
              
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${colors.progress} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <p className="text-sm text-blue-200">
          <strong>Analysis Breakdown:</strong> These metrics represent different aspects of our verification process. 
          Higher scores indicate stronger evidence of authenticity, while lower scores suggest potential issues that require further investigation.
        </p>
      </div>
    </div>
  );
}