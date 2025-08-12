import React from 'react';
import { Calendar, User, Tag, FileText } from 'lucide-react';
import { NewsDescription as NewsDescriptionType } from '../utils/analysisEngine';

interface NewsDescriptionProps {
  description: NewsDescriptionType;
}

export default function NewsDescription({ description }: NewsDescriptionProps) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-8">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <FileText className="w-7 h-7 text-blue-400 mr-3" />
        Content Analysis
      </h3>

      <div className="space-y-6">
        {/* Headline */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-3">{description.headline}</h4>
          <p className="text-gray-300 leading-relaxed">{description.summary}</p>
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center p-3 bg-white/5 rounded-lg">
            <User className="w-5 h-5 text-blue-400 mr-3" />
            <div>
              <div className="text-sm text-gray-400">Publisher</div>
              <div className="text-white font-medium">{description.publisher}</div>
            </div>
          </div>

          <div className="flex items-center p-3 bg-white/5 rounded-lg">
            <Calendar className="w-5 h-5 text-green-400 mr-3" />
            <div>
              <div className="text-sm text-gray-400">Published</div>
              <div className="text-white font-medium">{description.publishDate}</div>
            </div>
          </div>

          <div className="flex items-center p-3 bg-white/5 rounded-lg">
            <Tag className="w-5 h-5 text-purple-400 mr-3" />
            <div>
              <div className="text-sm text-gray-400">Category</div>
              <div className="text-white font-medium">{description.category}</div>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-3">Verification Points</h5>
          <div className="space-y-2">
            {description.keyPoints.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}