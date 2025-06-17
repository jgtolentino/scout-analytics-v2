'use client';
import Trends from "../../components/Trends";
import { RevenueHeatmap } from '@/components/charts/Heatmap';

const heatmapData = [
  { region: 'NCR', day: 'Mon', revenue: 890000 },
  { region: 'NCR', day: 'Tue', revenue: 920000 },
  { region: 'NCR', day: 'Wed', revenue: 850000 },
  { region: 'NCR', day: 'Thu', revenue: 780000 },
  { region: 'NCR', day: 'Fri', revenue: 900000 },
  { region: 'NCR', day: 'Sat', revenue: 1200000 },
  { region: 'NCR', day: 'Sun', revenue: 1100000 },
  { region: 'Cebu', day: 'Mon', revenue: 456000 },
  { region: 'Cebu', day: 'Tue', revenue: 478000 },
  { region: 'Cebu', day: 'Wed', revenue: 445000 },
  { region: 'Cebu', day: 'Thu', revenue: 402000 },
  { region: 'Cebu', day: 'Fri', revenue: 467000 },
  { region: 'Cebu', day: 'Sat', revenue: 623000 },
  { region: 'Cebu', day: 'Sun', revenue: 589000 },
  { region: 'Davao', day: 'Mon', revenue: 234000 },
  { region: 'Davao', day: 'Tue', revenue: 245000 },
  { region: 'Davao', day: 'Wed', revenue: 228000 },
  { region: 'Davao', day: 'Thu', revenue: 210000 },
  { region: 'Davao', day: 'Fri', revenue: 239000 },
  { region: 'Davao', day: 'Sat', revenue: 312000 },
  { region: 'Davao', day: 'Sun', revenue: 289000 },
];

export default function Page() {
  return (
    <div className="space-y-8">
      <Trends />
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Revenue Heatmap</h2>
        <RevenueHeatmap data={heatmapData} />
      </div>
    </div>
  );
}
