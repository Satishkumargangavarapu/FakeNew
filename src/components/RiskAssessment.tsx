import React from 'react';
import { AlertTriangle, Shield, CheckCircle, Info } from 'lucide-react';

interface RiskAssessmentProps {
  riskFactors: string[];
  recommendations: string[];
  verdict: 'authentic' | 'fake';
}

export default function RiskAssessment({ riskFactors, recommendations, verdict }: RiskAssessmentProps) {
  const isAuthentic = verdict === 'authentic';

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Shield className="w-7 h-7 text-yellow-400 mr-3" />
        Risk Assessment
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Risk Factors */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className={`w-5 h-5 mr-2 ${isAuthentic ? 'text-yellow-400' : 'text-red-400'}`} />
            {isAuthentic ? 'Minor Concerns' : 'Risk Factors'}
          </h4>
          <div className="space-y-3">
            {riskFactors.map((factor, index) => (
              <div key={index} className={`p-3 rounded-lg border-l-4 ${
                isAuthentic 
                  ? 'bg-yellow-500/10 border-yellow-500 text-yellow-100' 
                  : 'bg-red-500/10 border-red-500 text-red-100'
              }`}>
                <div className="flex items-start">
                  <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                    isAuthentic ? 'bg-yellow-400' : 'bg-red-400'
                  }`}></div>
                  <span className="text-sm">{factor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Info className="w-5 h-5 text-blue-400 mr-2" />
            Recommendations
          </h4>
          <div className="space-y-3">
            {recommendations.map((recommendation, index) => (
              <div key={index} className="p-3 bg-blue-500/10 border-l-4 border-blue-500 rounded-lg">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-blue-100">{recommendation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overall Assessment */}
      <div className={`mt-8 p-6 rounded-xl border-2 ${
        isAuthentic 
          ? 'bg-green-500/10 border-green-500/30' 
          : 'bg-red-500/10 border-red-500/30'
      }`}>
        <h5 className={`text-lg font-semibold mb-3 ${
          isAuthentic ? 'text-green-300' : 'text-red-300'
        }`}>
          Overall Assessment
        </h5>
        <p className={`${isAuthentic ? 'text-green-100' : 'text-red-100'}`}>
          {isAuthentic 
            ? 'This content shows strong indicators of authenticity. While minor concerns exist, the overall verification process supports the credibility of this information.'
            : 'This content exhibits multiple risk factors that suggest potential misinformation. Exercise extreme caution and seek additional verification before accepting or sharing this information.'
          }
        </p>
      </div>
    </div>
  );
}