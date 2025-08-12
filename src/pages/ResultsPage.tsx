import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { useAnalysis } from '../context/AnalysisContext';
import ResultCard from '../components/ResultCard';
import BlockchainInfo from '../components/BlockchainInfo';
import AnalysisMetrics from '../components/AnalysisMetrics';
import SourceList from '../components/SourceList';
import NewsDescription from '../components/NewsDescription';
import RiskAssessment from '../components/RiskAssessment';

export default function ResultsPage() {
  const { analysisData } = useAnalysis();

  if (!analysisData) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">No Analysis Data</h2>
          <p className="text-gray-300 mb-6">Please run an analysis first to see results.</p>
          <Link
            to="/analysis"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Analysis
          </Link>
        </div>
      </div>
    );
  }

  const { result } = analysisData;
  const isAuthentic = result.verdict === 'authentic';

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/analysis"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Analysis
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">
            Verification Results
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive analysis completed with blockchain verification
          </p>
        </div>

        {/* Main Result */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <ResultCard
              verdict={result.verdict}
              confidence={result.confidence}
              type={analysisData.type}
              content={analysisData.content}
            />
          </div>
          <div>
            <BlockchainInfo blockchain={result.blockchain} />
          </div>
        </div>

        {/* News Description (for news articles) */}
        {analysisData.type === 'news' && result.description && (
          <NewsDescription description={result.description} />
        )}

        {/* Analysis Metrics */}
        <div className="mb-8">
          <AnalysisMetrics analysis={result.analysis} />
        </div>

        {/* Sources */}
        <div className="mb-8">
          <SourceList sources={result.sources} />
        </div>

        {/* Risk Assessment */}
        <div className="mb-8">
          <RiskAssessment 
            riskFactors={result.riskFactors}
            recommendations={result.recommendations}
            verdict={result.verdict}
          />
        </div>

        {/* Detailed Explanation */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            {isAuthentic ? (
              <CheckCircle className="w-7 h-7 text-green-400 mr-3" />
            ) : (
              <AlertTriangle className="w-7 h-7 text-red-400 mr-3" />
            )}
            Detailed Analysis
          </h3>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Content Analysis</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Textual Consistency</span>
                    <span className={`font-medium ${result.analysis.textualConsistency > 80 ? 'text-green-400' : result.analysis.textualConsistency > 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {result.analysis.textualConsistency}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Metadata Verification</span>
                    <span className={`font-medium ${result.analysis.metadataVerification > 80 ? 'text-green-400' : result.analysis.metadataVerification > 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {result.analysis.metadataVerification}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Source Verification</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Source Credibility</span>
                    <span className={`font-medium ${result.analysis.sourceCredibility > 80 ? 'text-green-400' : result.analysis.sourceCredibility > 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {result.analysis.sourceCredibility}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cross-Reference Check</span>
                    <span className={`font-medium ${result.analysis.crossReferenceCheck > 80 ? 'text-green-400' : result.analysis.crossReferenceCheck > 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {result.analysis.crossReferenceCheck}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Verification Summary</h4>
              <div className={`p-4 rounded-lg border-l-4 ${
                isAuthentic 
                  ? 'bg-green-500/10 border-green-500 text-green-100' 
                  : 'bg-red-500/10 border-red-500 text-red-100'
              }`}>
                <p className="leading-relaxed">
                  {isAuthentic ? (
                    `This content has been verified as authentic with ${result.confidence}% confidence. Our AI analysis, combined with cross-referencing against ${result.sources.length} trusted sources, indicates that the information is reliable and from credible origins.`
                  ) : (
                    `This content has been flagged as potentially fake with ${result.confidence}% confidence. Our analysis detected inconsistencies in the content patterns, metadata, or source verification that suggest this information may be misleading or fabricated.`
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                to="/analysis"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Analyze Another
              </Link>
              <button
                onClick={() => window.print()}
                className="px-8 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Save Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}