import React from 'react';
import { Shield, Clock, Hash } from 'lucide-react';

interface BlockchainInfoProps {
  blockchain: {
    hash: string;
    timestamp: string;
    block: number;
  };
}

export default function BlockchainInfo({ blockchain }: BlockchainInfoProps) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Blockchain Verification</h3>
          <p className="text-sm text-gray-400">Immutable proof of analysis</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-3 bg-white/5 rounded-lg">
          <div className="flex items-center mb-2">
            <Hash className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-300">Transaction Hash</span>
          </div>
          <p className="text-xs font-mono text-gray-300 break-all">{blockchain.hash}</p>
        </div>

        <div className="p-3 bg-white/5 rounded-lg">
          <div className="flex items-center mb-2">
            <Clock className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-300">Timestamp</span>
          </div>
          <p className="text-sm text-gray-300">
            {new Date(blockchain.timestamp).toLocaleString()}
          </p>
        </div>

        <div className="p-3 bg-white/5 rounded-lg">
          <div className="flex items-center mb-2">
            <Shield className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-sm font-medium text-green-300">Block Number</span>
          </div>
          <p className="text-sm font-mono text-gray-300">#{blockchain.block.toLocaleString()}</p>
        </div>
      </div>

      <div className="mt-6 p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-lg">
        <p className="text-xs text-purple-200">
          This analysis result has been permanently recorded on the blockchain and cannot be altered or tampered with.
        </p>
      </div>
    </div>
  );
}