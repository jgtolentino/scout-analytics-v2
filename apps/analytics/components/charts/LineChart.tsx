"use client";

interface LineChartProps {
  labels: string[];
  values: number[];
  title?: string;
}

export function LineChart({ labels, values, title = "Revenue Trends" }: LineChartProps) {
  const maxValue = Math.max(...values);
  
  return (
    <div className="w-full h-64 bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-48 flex items-end justify-between">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-blue-500 flex-1 mx-1 rounded-t"
            style={{ height: `${(value / maxValue) * 100}%` }}
            title={`${labels[index]}: ₱${value.toLocaleString()}`}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        {labels.map((label, index) => (
          <span key={index}>{label}</span>
        ))}
      </div>
    </div>
  );
}

export default LineChart;