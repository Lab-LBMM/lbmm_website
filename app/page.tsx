'use client'

import { Box } from '@mui/material'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { HomeSection } from '@/components/templates/HomeSection'
import { AboutSection } from '@/components/templates/AboutSection'
import { ActiveInitiativesSection } from '@/components/templates/ActiveInitiativesSection'
import { CurriculumSection } from '@/components/templates/CurriculumSection'
import { CollaborationsSection } from '@/components/templates/CollaborationsSection'
import { ContactSection } from '@/components/templates/ContactSection'

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <HomeSection />
        <AboutSection />
        <ActiveInitiativesSection />
        <CurriculumSection />
        <CollaborationsSection />
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  )
}

