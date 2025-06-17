export default function ProductMix() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Product Mix Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Top Categories</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Electronics</span>
              <span>35%</span>
            </div>
            <div className="flex justify-between">
              <span>Fashion</span>
              <span>28%</span>
            </div>
            <div className="flex justify-between">
              <span>Home & Garden</span>
              <span>22%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Best Sellers</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Product A</span>
              <span>1,234 sold</span>
            </div>
            <div className="flex justify-between">
              <span>Product B</span>
              <span>987 sold</span>
            </div>
            <div className="flex justify-between">
              <span>Product C</span>
              <span>756 sold</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Inventory Status</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>In Stock</span>
              <span className="text-green-600">892</span>
            </div>
            <div className="flex justify-between">
              <span>Low Stock</span>
              <span className="text-yellow-600">45</span>
            </div>
            <div className="flex justify-between">
              <span>Out of Stock</span>
              <span className="text-red-600">12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}