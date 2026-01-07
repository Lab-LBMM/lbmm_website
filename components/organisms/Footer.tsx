import { Box, Container, Typography, Link, IconButton, Stack } from '@mui/material'
import { LinkedIn, Instagram, Facebook, Email } from '@mui/icons-material'
import { DataController } from '@/controllers/DataController'

export function Footer() {
  const personalInfo = DataController.getPersonalInfo()
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              {personalInfo.name}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {personalInfo.title}
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            {personalInfo.contact.socialMedia?.linkedin && (
              <IconButton
                component={Link}
                href={personalInfo.contact.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
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
                sx={{ color: 'white' }}
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
                sx={{ color: 'white' }}
              >
                <Facebook />
              </IconButton>
            )}
            <IconButton
              component={Link}
              href={`mailto:${personalInfo.contact.email}`}
              sx={{ color: 'white' }}
            >
              <Email />
            </IconButton>
          </Stack>
        </Box>
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            mt: 3,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

