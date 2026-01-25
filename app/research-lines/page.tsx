'use client'

import { Box } from '@mui/material'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { CurriculumSection } from '@/components/templates/CurriculumSection'

export default function ResearchLinesPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <CurriculumSection />
      </Box>
      <Footer />
    </Box>
  )
}

