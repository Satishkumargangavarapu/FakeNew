import React from 'react';
import { Shield, Globe, Brain, Users, CheckCircle, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Technology',
      description: 'Our cutting-edge machine learning algorithms analyze content patterns, linguistic markers, and metadata to detect manipulated or fabricated content with industry-leading accuracy.'
    },
    {
      icon: Shield,
      title: 'Blockchain Transparency',
      description: 'Every verification result is immutably recorded on the blockchain, ensuring complete transparency and preventing tampering with analysis results.'
    },
    {
      icon: Globe,
      title: 'Global Source Network',
      description: 'We cross-reference content against a comprehensive network of 150+ verified news sources, fact-checkers, and authoritative databases worldwide.'
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Our platform leverages collective intelligence, allowing verified users to contribute to the accuracy and reliability of our detection systems.'
    }
  ];

  const stats = [
    { icon: CheckCircle, value: '94.7%', label: 'Accuracy Rate' },
    { icon: TrendingUp, value: '2.4M+', label: 'Content Analyzed' },
    { icon: Shield, value: '1.8M+', label: 'Blockchain Records' },
    { icon: Globe, value: '150+', label: 'Trusted Sources' }
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">TruthChain</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            TruthChain is a revolutionary platform that combines artificial intelligence, blockchain technology, 
            and crowdsourced verification to combat the spread of misinformation and fake news across digital media.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              In an era where misinformation spreads faster than truth, TruthChain serves as a digital guardian of factual integrity. 
              We empower individuals, journalists, and organizations with the tools they need to verify content authenticity 
              and make informed decisions based on reliable information.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How We Combat Fake News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Impact & Performance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technology & Innovation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Artificial Intelligence</h3>
              <p className="text-gray-300">
                Advanced neural networks trained on millions of verified content samples to identify manipulation patterns, 
                deepfakes, and linguistic inconsistencies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Blockchain Security</h3>
              <p className="text-gray-300">
                Immutable ledger technology ensures verification results cannot be altered, providing permanent 
                proof of content authenticity checks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Global Verification</h3>
              <p className="text-gray-300">
                Real-time cross-referencing with international fact-checking organizations, news agencies, 
                and verified information repositories.
              </p>
            </div>
          </div>
        </div>

        {/* Contact/CTA Section */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Fight Against Misinformation
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you're a journalist, researcher, educator, or concerned citizen, TruthChain provides 
            the tools you need to verify information and promote truth in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300">
              Start Verifying Now
            </button>
            <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}