'use client'

import { Box } from '@mui/material'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { AboutSection } from '@/components/templates/AboutSection'

export default function AboutPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <AboutSection />
      </Box>
      <Footer />
    </Box>
  )
}

