import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme/ThemeProvider'

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
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

