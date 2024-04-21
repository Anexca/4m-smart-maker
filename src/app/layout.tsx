import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import PrelineScript from '@/components/molecules/preline'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'House Detan',
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>

      <PrelineScript />
    </html>
  )
}
