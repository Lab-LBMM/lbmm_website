import { Box, Container, Grid, Typography, Button } from '@mui/material'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { NewsCard } from '@/components/molecules/NewsCard'
import { DataController } from '@/controllers/DataController'
import Link from 'next/link'

export function NewsSection() {
  const news = DataController.getNews().slice(0, 3)

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Latest News"
          subtitle="Stay updated with our latest research and activities"
        />
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {news.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <NewsCard news={item} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={Link}
            href="/news"
            variant="outlined"
            size="large"
            sx={{ px: 4 }}
          >
            View All News
          </Button>
        </Box>
      </Container>
    </Box>
  )
}


