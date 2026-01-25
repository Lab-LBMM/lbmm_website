'use client'

import { Box } from '@mui/material'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { CollaborationsSection } from '@/components/templates/CollaborationsSection'

export default function CollaborationsPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <CollaborationsSection />
      </Box>
      <Footer />
    </Box>
  )
}

