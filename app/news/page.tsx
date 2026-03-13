'use client'

import { Box, Container, Grid } from '@mui/material'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { NewsCard } from '@/components/molecules/NewsCard'
import { DataController } from '@/controllers/DataController'

export default function NewsPage() {
  const news = DataController.getNews()

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
              title="News"
              subtitle="Latest updates and announcements from our laboratory"
            />
            <Grid container spacing={4}>
              {news.map((item) => (
                <Grid item xs={12} md={4} key={item.id}>
                  <NewsCard news={item} />
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


