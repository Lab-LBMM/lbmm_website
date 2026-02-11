'use client'

import { Box, Container, Grid, Typography, Divider } from '@mui/material'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { TeamMemberCard } from '@/components/molecules/TeamMemberCard'
import { CollaborationCard } from '@/components/molecules/CollaborationCard'
import { DataController } from '@/controllers/DataController'

export default function TeamPage() {
  const teamMembers = DataController.getTeamMembers()
  const allCollaborations = DataController.getCollaborations()
  const activeCollaborations = allCollaborations.filter((c) => c.type === 'active')

  const principalInvestigator = teamMembers.find((m) => m.category === 'principal_investigator')
  const postdocs = teamMembers.filter((m) => m.category === 'postdoc' && m.type === 'current')
  const phdStudents = teamMembers.filter((m) => m.category === 'phd' && m.type === 'current')
  const mastersStudents = teamMembers.filter((m) => m.category === 'masters' && m.type === 'current')
  const undergraduates = teamMembers.filter((m) => m.category === 'undergraduate' && m.type === 'current')
  const alumni = teamMembers.filter((m) => m.type === 'alumni')

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

            {principalInvestigator && (
              <Box sx={{ mb: 6 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 4, fontWeight: 600 }}>
                  Principal Investigator
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <TeamMemberCard member={principalInvestigator} />
                  </Grid>
                </Grid>
              </Box>
            )}

            {postdocs.length > 0 && (
              <>
                {principalInvestigator && <Divider sx={{ my: 6 }} />}
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 4, fontWeight: 600 }}>
                    Post-doctoral Researchers
                  </Typography>
                  <Grid container spacing={4}>
                    {postdocs.map((member) => (
                      <Grid item xs={12} md={6} key={member.id}>
                        <TeamMemberCard member={member} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </>
            )}

            {phdStudents.length > 0 && (
              <>
                {(principalInvestigator || postdocs.length > 0) && <Divider sx={{ my: 6 }} />}
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 4, fontWeight: 600 }}>
                    PhD Students
                  </Typography>
                  <Grid container spacing={4}>
                    {phdStudents.map((member) => (
                      <Grid item xs={12} md={6} key={member.id}>
                        <TeamMemberCard member={member} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </>
            )}

            {mastersStudents.length > 0 && (
              <>
                {(principalInvestigator || postdocs.length > 0 || phdStudents.length > 0) && <Divider sx={{ my: 6 }} />}
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 4, fontWeight: 600 }}>
                    Master Students
                  </Typography>
                  <Grid container spacing={4}>
                    {mastersStudents.map((member) => (
                      <Grid item xs={12} md={6} key={member.id}>
                        <TeamMemberCard member={member} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </>
            )}

            {undergraduates.length > 0 && (
              <>
                {(principalInvestigator || postdocs.length > 0 || phdStudents.length > 0 || mastersStudents.length > 0) && <Divider sx={{ my: 6 }} />}
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 4, fontWeight: 600 }}>
                    Undergraduate Students
                  </Typography>
                  <Grid container spacing={4}>
                    {undergraduates.map((member) => (
                      <Grid item xs={12} md={6} key={member.id}>
                        <TeamMemberCard member={member} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </>
            )}

            {alumni.length > 0 && (
              <>
                <Divider sx={{ my: 6 }} />
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 4, fontWeight: 600 }}>
                    Alumni
                  </Typography>
                  <Grid container spacing={4}>
                    {alumni.map((member) => (
                      <Grid item xs={12} md={6} key={member.id}>
                        <TeamMemberCard member={member} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </>
            )}

            {activeCollaborations.length > 0 && (
              <>
                <Divider sx={{ my: 6 }} />
                <Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 4, fontWeight: 600 }}>
                    Active Collaborations
                  </Typography>
                  <Grid container spacing={4}>
                    {activeCollaborations.map((collaboration) => (
                      <Grid item xs={12} md={6} key={collaboration.id}>
                        <CollaborationCard collaboration={collaboration} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </>
            )}
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
