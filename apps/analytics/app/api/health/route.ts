import { NextRequest, NextResponse } from 'next/server';

interface HealthCheck {
  service: string;
  status: 'healthy' | 'degraded' | 'down';
  responseTime?: number;
  error?: string;
  timestamp: string;
}

interface HealthResponse {
  status: 'healthy' | 'degraded' | 'down';
  timestamp: string;
  version: string;
  checks: HealthCheck[];
  uptime: number;
  system_type: string;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const startTime = Date.now();
  const checks: HealthCheck[] = [];
  
  // Basic system check
  const systemCheck: HealthCheck = {
    service: 'System',
    status: 'healthy',
    responseTime: Date.now() - startTime,
    timestamp: new Date().toISOString()
  };
  checks.push(systemCheck);
  
  const response: HealthResponse = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '2.1.0',
    checks,
    uptime: Math.floor(process.uptime()),
    system_type: "Scout Analytics v2.1.0"
  };
  
  return NextResponse.json(response, { status: 200 });
}