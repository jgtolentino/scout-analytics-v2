export default function Trends() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Market Trends</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Sales Trends</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>This Month</span>
              <span className="text-green-600 font-semibold">+15.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Last Month</span>
              <span className="text-green-600 font-semibold">+12.7%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Quarter</span>
              <span className="text-green-600 font-semibold">+18.2%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Growth Metrics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Revenue Growth</span>
              <span className="font-semibold">₱2.5M</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Customer Growth</span>
              <span className="font-semibold">+234 new</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Product Launches</span>
              <span className="font-semibold">12 this month</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Seasonal Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Q1</div>
              <div className="text-sm text-gray-600">Strong Start</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">Q2</div>
              <div className="text-sm text-gray-600">Peak Season</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">Q3</div>
              <div className="text-sm text-gray-600">Moderate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Q4</div>
              <div className="text-sm text-gray-600">Holiday Boost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}