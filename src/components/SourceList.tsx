import React from 'react';
import { ExternalLink, CheckCircle, AlertTriangle } from 'lucide-react';

interface Source {
  name: string;
  credibility: number;
  status: string;
}

interface SourceListProps {
  sources: Source[];
}

export default function SourceList({ sources }: SourceListProps) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Verified Sources</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sources.map((source, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-white">{source.name}</h4>
              {source.status === 'verified' ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              )}
            </div>
            
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-300">Credibility</span>
                <span className={`text-sm font-semibold ${
                  source.credibility > 90 ? 'text-green-400' : 
                  source.credibility > 75 ? 'text-yellow-400' : 
                  'text-red-400'
                }`}>
                  {source.credibility}%
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    source.credibility > 90 ? 'bg-gradient-to-r from-green-500 to-emerald-400' : 
                    source.credibility > 75 ? 'bg-gradient-to-r from-yellow-500 to-orange-400' : 
                    'bg-gradient-to-r from-red-500 to-pink-400'
                  }`}
                  style={{ width: `${source.credibility}%` }}
                />
              </div>
            </div>
            
            <button className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors">
              View Details <ExternalLink className="w-3 h-3 ml-1" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-lg">
        <p className="text-sm text-blue-200">
          <strong>Source Verification:</strong> Our system cross-references content against these trusted sources 
          in real-time to verify claims and detect inconsistencies. Sources are continuously monitored and rated for credibility.
        </p>
      </div>
    </div>
  );
}