import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const timeframe = searchParams.get('timeframe') || '30d';
    const metric = searchParams.get('metric') || 'all';

    // Mock analytics data for clean v2.1
    const analyticsData = {
      timeframe,
      metrics: {
        impressions: {
          current: 2450000,
          previous: 2100000,
          change: 16.7,
          trend: 'up'
        },
        clicks: {
          current: 134000,
          previous: 98000,
          change: 36.7,
          trend: 'up'
        },
        conversions: {
          current: 8900,
          previous: 7200,
          change: 23.6,
          trend: 'up'
        },
        revenue: {
          current: 450000,
          previous: 380000,
          change: 18.4,
          trend: 'up'
        }
      },
      lastUpdated: new Date().toISOString()
    };

    // Filter by specific metric if requested
    if (metric !== 'all' && analyticsData.metrics[metric as keyof typeof analyticsData.metrics]) {
      return NextResponse.json({
        metric,
        data: analyticsData.metrics[metric as keyof typeof analyticsData.metrics],
        lastUpdated: analyticsData.lastUpdated
      });
    }

    return NextResponse.json(analyticsData);

  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}