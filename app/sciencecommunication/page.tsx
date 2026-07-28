'use client'

import { Box } from '@mui/material'
import { Header } from '@/components/organisms/Header' 
import { Footer } from '@/components/organisms/Footer' 
import { ScienceCommunicationSection } from '@/components/templates/ScienceCommunicationSection' 

export default function ScienceCommunicationPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <ScienceCommunicationSection />
      </Box>
      <Footer />
    </Box>
  )
}