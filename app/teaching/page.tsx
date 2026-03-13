'use client'

import { Box, Container, Grid } from '@mui/material'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { TeachingCard } from '@/components/molecules/TeachingCard'
import { DataController } from '@/controllers/DataController'

export default function TeachingPage() {
  const teaching = DataController.getTeaching()

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
              title="Teaching"
              subtitle="Courses and disciplines offered by the laboratory"
            />
            <Grid container spacing={4}>
              {teaching.map((item) => (
                <Grid item xs={12} md={6} key={item.id}>
                  <TeachingCard teaching={item} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}


