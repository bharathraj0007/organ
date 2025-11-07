import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Organ Donation Management System',
    template: '%s | Organ Donation',
  },
  description: 'Secure online platform for organ donation registration, matching, and transplant coordination',
  keywords: ['organ donation', 'transplant', 'healthcare', 'medical'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://organ-donation.example.com',
    siteName: 'Organ Donation Management System',
    title: 'Organ Donation Management System',
    description: 'Secure online platform for organ donation registration, matching, and transplant coordination',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
