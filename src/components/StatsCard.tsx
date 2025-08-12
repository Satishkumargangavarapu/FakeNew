import React from 'react';

interface StatsCardProps {
  label: string;
  value: string;
  color: string;
}

export default function StatsCard({ label, value, color }: StatsCardProps) {
  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
      <div className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}>
        {value}
      </div>
      <div className="text-gray-300 text-sm font-medium">{label}</div>
    </div>
  );
}