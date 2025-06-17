'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function VibeTestBot() {
  const [testResults, setTestResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const runTests = async () => {
    setLoading(true);
    // Simulate test execution
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setTestResults({
      passed: 47,
      failed: 3,
      skipped: 5,
      duration: '2.34s',
      coverage: 85
    });
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Vibe TestBot - AI Code QA</h1>
      
      <button
        onClick={runTests}
        disabled={loading}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Running Tests...' : 'Run Test Suite'}
      </button>

      {testResults && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-6 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold">{testResults.passed}</p>
            <p className="text-gray-600">Tests Passed</p>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg">
            <XCircle className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-2xl font-bold">{testResults.failed}</p>
            <p className="text-gray-600">Tests Failed</p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <AlertCircle className="w-8 h-8 text-yellow-600 mb-2" />
            <p className="text-2xl font-bold">{testResults.coverage}%</p>
            <p className="text-gray-600">Code Coverage</p>
          </div>
        </div>
      )}
    </div>
  );
}