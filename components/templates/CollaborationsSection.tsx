import { Box, Container, Grid, Typography, Divider } from '@mui/material'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { CollaborationCard } from '@/components/molecules/CollaborationCard'
import { DataController } from '@/controllers/DataController'

export function CollaborationsSection() {
  const allCollaborations = DataController.getCollaborations()
  const workedWith = allCollaborations.filter((c) => c.type === 'worked_with')

  return (
    <Box
      id="collaborations"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Collaborations"
          subtitle="External partners and collaborators in research projects"
        />
        
        <Box>
          <Typography variant="h5" component="h3" sx={{ mb: 4, fontWeight: 600 }}>
            People We've Worked With (last 3-4 years)
          </Typography>
          <Grid container spacing={4}>
            {workedWith.map((collaboration) => (
              <Grid item xs={12} md={6} key={collaboration.id}>
                <CollaborationCard collaboration={collaboration} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
