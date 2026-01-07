import { Box, Container, Typography, Grid, Paper, Chip, Stack, Link, IconButton } from '@mui/material'
import { School, Science, Public, Instagram, Facebook, LinkedIn } from '@mui/icons-material'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { DataController } from '@/controllers/DataController'

export function AboutSection() {
  const personalInfo = DataController.getPersonalInfo()

  const features = [
    {
      icon: <School sx={{ fontSize: 48 }} />,
      title: 'Education',
      description: 'Strong academic background with focus on biological sciences and computing.',
    },
    {
      icon: <Science sx={{ fontSize: 48 }} />,
      title: 'Research',
      description: 'Dedication to scientific research with emphasis on computational reproducibility.',
    },
    {
      icon: <Public sx={{ fontSize: 48 }} />,
      title: 'Collaboration',
      description: 'Networking with researchers from Brazil and Latin America.',
    },
  ]

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="About"
          subtitle="Learn more about my background and areas of expertise"
        />
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 3,
                height: '100%',
              }}
            >
              <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                Biography
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                {personalInfo.bio}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                height: '100%',
              }}
            >
              <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                Interests
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {personalInfo.interests?.map((interest, index) => (
                    <Chip
                      key={index}
                      label={interest}
                      sx={{
                        mb: 1,
                        bgcolor: 'primary.light',
                        color: 'white',
                        '&:hover': {
                          bgcolor: 'primary.main',
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Social Media
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  You can follow me on my social media, if you wish
                </Typography>
                <Stack direction="row" spacing={2}>
                  {personalInfo.contact.socialMedia?.instagram && (
                    <IconButton
                      component={Link}
                      href={personalInfo.contact.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      sx={{
                        bgcolor: 'primary.light',
                        color: 'white',
                        '&:hover': {
                          bgcolor: 'primary.main',
                        },
                      }}
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
                      sx={{
                        bgcolor: 'primary.light',
                        color: 'white',
                        '&:hover': {
                          bgcolor: 'primary.main',
                        },
                      }}
                    >
                      <Facebook />
                    </IconButton>
                  )}
                  {personalInfo.contact.socialMedia?.linkedin && (
                    <IconButton
                      component={Link}
                      href={personalInfo.contact.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      sx={{
                        bgcolor: 'primary.light',
                        color: 'white',
                        '&:hover': {
                          bgcolor: 'primary.main',
                        },
                      }}
                    >
                      <LinkedIn />
                    </IconButton>
                  )}
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

