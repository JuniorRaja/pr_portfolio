import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

type LanguageStatsProps = {
  languages: { [key: string]: number };
};

const LanguageStats: React.FC<LanguageStatsProps> = ({ languages }) => {
  
  const data = {
    labels: Object.keys(languages),
    datasets: [
      {
        data: Object.values(languages),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#8A2BE2"],
      },
    ],
  };

  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold text-indigo-400 mb-4">Languages Used</h3>
      <div className="w-full h-64">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default LanguageStats;
