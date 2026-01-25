'use client'

import { Box, Container, Typography } from '@mui/material'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { SectionTitle } from '@/components/atoms/SectionTitle'

export default function TeamPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: 'background.default',
          }}
        >
          <Container maxWidth="lg">
            <SectionTitle
              title="Our Team"
              subtitle="Meet the members of our research laboratory"
            />
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
              Team members will be added here.
            </Typography>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

