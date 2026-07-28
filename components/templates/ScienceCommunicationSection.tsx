import { Box, Container, Grid } from '@mui/material'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { ScienceCommunicationCard } from '@/components/molecules/ScienceCommunicationCard'
import { DataController } from '@/controllers/DataController'

export function ScienceCommunicationSection() {
  // Assumindo que você criará esse método no seu DataController
  const sciCommData = DataController.getScienceCommunication()

  return (
    <Box
      id="science-communication"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Science Communication"
          subtitle="Making science accessible through podcasts, articles, videos, and public talks."
        />
        
        <Grid container spacing={4}>
          {sciCommData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <ScienceCommunicationCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}