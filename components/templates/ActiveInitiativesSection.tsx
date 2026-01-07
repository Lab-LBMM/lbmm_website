import { Box, Container, Grid } from '@mui/material'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { InitiativeCard } from '@/components/molecules/InitiativeCard'
import { DataController } from '@/controllers/DataController'

export function ActiveInitiativesSection() {
  const initiatives = DataController.getInitiatives()

  return (
    <Box
      id="initiatives"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Active Initiatives"
          subtitle="Ongoing projects and initiatives to promote science"
        />
        <Grid container spacing={4}>
          {initiatives.map((initiative) => (
            <Grid item xs={12} md={6} key={initiative.id}>
              <InitiativeCard initiative={initiative} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

