'use client'

import { Box } from '@mui/material'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { ActiveInitiativesSection } from '@/components/templates/ActiveInitiativesSection'

export default function InitiativesPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <ActiveInitiativesSection />
      </Box>
      <Footer />
    </Box>
  )
}

