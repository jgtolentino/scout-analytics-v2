export function KpiCard({ title, value, change }: { title: string; value: string; change?: string }) {
  return (
    <div className="flex flex-col p-4 bg-white rounded shadow">
      <span className="text-sm text-gray-500">{title}</span>
      <span className="text-2xl font-semibold">{value}</span>
      {change && <span className="text-sm text-green-600">{change}</span>}
    </div>
  );
}
