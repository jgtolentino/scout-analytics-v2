import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { query } = await request.json();
  
  // Simple response logic (replace with actual AI integration)
  const responses: Record<string, string> = {
    'revenue': 'Total revenue is ₱45.2M, up 12.3% from last month.',
    'products': 'Top products are in Beverages (32.4%) and Snacks (23.2%).',
    'regions': 'NCR leads with ₱15.8M revenue, followed by Cebu at ₱8.2M.',
    'default': 'I can help you analyze revenue, products, regions, and more. What would you like to know?'
  };
  
  const keyword = Object.keys(responses).find(k => 
    query.toLowerCase().includes(k)
  ) || 'default';
  
  return NextResponse.json({
    response: responses[keyword]
  });
}