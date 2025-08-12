import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Globe, CheckCircle, AlertTriangle } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import StatsCard from '../components/StatsCard';

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: 'Blockchain Verification',
      description: 'Every analysis is recorded on an immutable blockchain ledger for complete transparency and trust.'
    },
    {
      icon: Globe,
      title: 'Multi-Source Cross-Reference',
      description: 'Compare against dozens of verified news sources and fact-checking organizations worldwide.'
    },
    {
      icon: CheckCircle,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze content patterns, metadata, and linguistic markers.'
    },
    {
      icon: AlertTriangle,
      title: 'Real-Time Detection',
      description: 'Get instant results with detailed explanations and confidence scores for every analysis.'
    }
  ];

  const stats = [
    { label: 'News Articles Verified', value: '2.4M+', color: 'from-blue-500 to-cyan-400' },
    { label: 'Accuracy Rate', value: '94.7%', color: 'from-green-500 to-emerald-400' },
    { label: 'Blockchain Transactions', value: '1.8M+', color: 'from-purple-500 to-pink-400' },
    { label: 'Trusted Sources', value: '150+', color: 'from-orange-500 to-red-400' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Powered by Blockchain Technology
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Combat Fake News
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                With Truth
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leverage cutting-edge AI and blockchain technology to verify news articles, images, videos, 
              and social media content. Get instant, transparent, and immutable verification results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/analysis"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center"
            >
              Start Analysis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Verification Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines multiple cutting-edge technologies to provide the most accurate and trustworthy news verification available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How TruthChain Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our three-step verification process ensures maximum accuracy and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Submit Content</h3>
              <p className="text-gray-300">
                Upload images, paste news links, or share video URLs for comprehensive analysis.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Analysis</h3>
              <p className="text-gray-300">
                Our AI cross-references multiple sources and analyzes content authenticity.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Blockchain Record</h3>
              <p className="text-gray-300">
                Results are permanently recorded on the blockchain for transparency and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Verifying News Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who trust TruthChain for accurate news verification.
          </p>
          <Link
            to="/analysis"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}