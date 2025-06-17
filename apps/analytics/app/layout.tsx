import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '../components/Navigation'

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
          <Navigation />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}