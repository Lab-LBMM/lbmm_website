import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LBMM RACS',
  description: 'Laboratory website of LBMM RACS',
  icons: {
    icon: '/logo_lbmm_racs.jpg',
    shortcut: '/logo_lbmm_racs.jpg',
    apple: '/logo_lbmm_racs.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

