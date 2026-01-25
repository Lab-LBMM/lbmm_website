import { Box, Container, Typography } from '@mui/material'
import { DataController } from '@/controllers/DataController'

export function HomeSection() {
  const labInfo = DataController.getLabInfo()

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #6fb8c9 0%, #a1b9c0 30%, #828486 65%, #e2dbdc 100%)',
        color: '#242c2d',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 3,
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            }}
          >
            {labInfo.fullName}
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 4,
              fontWeight: 300,
              opacity: 0.95,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            {labInfo.name}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 6,
              maxWidth: 700,
              mx: 'auto',
              opacity: 0.9,
              lineHeight: 1.8,
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            {labInfo.description}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

