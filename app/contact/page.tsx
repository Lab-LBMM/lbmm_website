'use client'

import { Box } from '@mui/material'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { ContactSection } from '@/components/templates/ContactSection'

export default function ContactPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  )
}

