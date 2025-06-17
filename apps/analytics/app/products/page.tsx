'use client';
import ProductMix from "../../components/ProductMix";
import { ProductTreemap } from '@/components/charts/Treemap';

const treemapData = {
  name: 'Products',
  size: 100,
  children: [
    { name: 'Beverages', size: 32.4 },
    { name: 'Snacks', size: 23.2 },
    { name: 'Personal Care', size: 16.8 },
    { name: 'Household', size: 13.9 },
    { name: 'Dairy', size: 13.6 }
  ]
};

export default function Page() {
  return (
    <div className="space-y-8">
      <ProductMix />
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Category Distribution</h2>
        <ProductTreemap data={treemapData} />
      </div>
    </div>
  );
}
