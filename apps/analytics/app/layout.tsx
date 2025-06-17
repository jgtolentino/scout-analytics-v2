import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scout Analytics',
  description: 'Retail Analytics Platform v2.1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}