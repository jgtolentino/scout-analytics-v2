'use client';

import { AIAssistant } from '@/components/ai/AIAssistant';

export default function AIAssistPage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold">Scout AI Assistant</h1>
        <p className="text-gray-600">Ask questions about your retail analytics</p>
      </div>
      <div className="flex-1">
        <AIAssistant />
      </div>
    </div>
  );
}