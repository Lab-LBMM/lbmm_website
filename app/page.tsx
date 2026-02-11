'use client'

import { Box } from '@mui/material'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { HomeSection } from '@/components/templates/HomeSection'
import { NewsSection } from '@/components/templates/NewsSection'

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <HomeSection />
        <NewsSection />
      </Box>
      <Footer />
    </Box>
  )
}
