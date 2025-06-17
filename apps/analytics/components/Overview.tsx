import { KpiCard } from './KpiCard';

export default function Overview() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Scout Analytics Dashboard</h1>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-4">Quick Filters</h2>
        <div className="flex flex-wrap gap-4">
          <select className="border border-gray-300 rounded px-3 py-2">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
          <select className="border border-gray-300 rounded px-3 py-2">
            <option>All Regions</option>
            <option>Metro Manila</option>
            <option>Cebu</option>
            <option>Davao</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard 
          title="Revenue" 
          value="₱45.2M" 
          change="+12.3%" 
        />
        <KpiCard 
          title="Orders" 
          value="12,450" 
          change="+15.1%" 
        />
        <KpiCard 
          title="AOV" 
          value="₱3,632" 
          change="+5.3%" 
        />
        <KpiCard 
          title="Growth" 
          value="+8.2%" 
          change="+2.1pp" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Regional Performance</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Metro Manila</span>
              <span className="text-green-600 font-semibold">₱15.8M (+12%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Cebu</span>
              <span className="text-green-600 font-semibold">₱8.2M (+8%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Davao</span>
              <span className="text-green-600 font-semibold">₱6.1M (+6%)</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Active Stores</span>
              <span className="font-semibold">567</span>
            </div>
            <div className="flex justify-between">
              <span>Total Products</span>
              <span className="font-semibold">1,234</span>
            </div>
            <div className="flex justify-between">
              <span>Monthly Revenue</span>
              <span className="font-semibold">₱45.2M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}