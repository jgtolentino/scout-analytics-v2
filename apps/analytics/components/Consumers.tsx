export default function Consumers() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Consumer Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Demographics</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>18-24</span>
              <span>15.2%</span>
            </div>
            <div className="flex justify-between">
              <span>25-34</span>
              <span>32.8%</span>
            </div>
            <div className="flex justify-between">
              <span>35-44</span>
              <span>28.4%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Purchase Behavior</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Average Order</span>
              <span>₱1,250</span>
            </div>
            <div className="flex justify-between">
              <span>Frequency</span>
              <span>2.3x/month</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Online</span>
              <span>67%</span>
            </div>
            <div className="flex justify-between">
              <span>In-store</span>
              <span>33%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}