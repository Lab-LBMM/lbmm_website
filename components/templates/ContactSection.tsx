import { Box, Container, Grid, Typography, Paper, Link, Stack, IconButton } from '@mui/material'
import { Email, Phone, LocationOn, LinkedIn, Instagram, Facebook } from '@mui/icons-material'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { ContactForm } from '@/components/molecules/ContactForm'
import { DataController } from '@/controllers/DataController'

export function ContactSection() {
  const personalInfo = DataController.getPersonalInfo()

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Contact"
          subtitle="Get in touch for collaborations, questions or more information"
        />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                Contact Information
              </Typography>
              <Stack spacing={3}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Email color="primary" />
                    <Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Personal email
                      </Typography>
                      <Link href={`mailto:${personalInfo.contact.email}`} color="inherit">
                        {personalInfo.contact.email}
                      </Link>
                    </Box>
                  </Box>
                  {personalInfo.contact.institutionalEmail && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                      <Email color="primary" />
                      <Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                          Institutional email
                        </Typography>
                        <Link href={`mailto:${personalInfo.contact.institutionalEmail}`} color="inherit">
                          {personalInfo.contact.institutionalEmail}
                        </Link>
                      </Box>
                    </Box>
                  )}
                </Box>
                {personalInfo.contact.phone && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Phone color="primary" />
                    <Box>
                      <Link href={`tel:${personalInfo.contact.phone.replace(/\s/g, '')}`} color="inherit">
                        {personalInfo.contact.phone}
                      </Link>
                      {personalInfo.contact.address && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                          {personalInfo.contact.address}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                )}
                <Box sx={{ pt: 2 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Social Media
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {personalInfo.contact.socialMedia?.linkedin && (
                      <IconButton
                        component={Link}
                        href={personalInfo.contact.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        <LinkedIn />
                      </IconButton>
                    )}
                    {personalInfo.contact.socialMedia?.instagram && (
                      <IconButton
                        component={Link}
                        href={personalInfo.contact.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        <Instagram />
                      </IconButton>
                    )}
                    {personalInfo.contact.socialMedia?.facebook && (
                      <IconButton
                        component={Link}
                        href={personalInfo.contact.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        <Facebook />
                      </IconButton>
                    )}
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                Send a Message
              </Typography>
              <ContactForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

