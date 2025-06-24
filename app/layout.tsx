import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Career Discovery - Kariyer Keşfi',
  description: 'Discover your career path with AI-powered assessments and simulations',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body>{children}</body>
    </html>
  )
}
