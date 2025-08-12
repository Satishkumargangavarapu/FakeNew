import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnalysisResult {
  verdict: 'authentic' | 'fake';
  confidence: number;
  sources: Array<{
    name: string;
    credibility: number;
    status: string;
  }>;
  blockchain: {
    hash: string;
    timestamp: string;
    block: number;
  };
  analysis: {
    textualConsistency: number;
    sourceCredibility: number;
    metadataVerification: number;
    crossReferenceCheck: number;
  };
}

interface AnalysisData {
  type: string;
  content: any;
  result: AnalysisResult;
  timestamp: string;
}

interface AnalysisContextType {
  analysisData: AnalysisData | null;
  setAnalysisData: (data: AnalysisData | null) => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export function AnalysisProvider({ children }: { children: ReactNode }) {
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);

  return (
    <AnalysisContext.Provider value={{ analysisData, setAnalysisData }}>
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
}