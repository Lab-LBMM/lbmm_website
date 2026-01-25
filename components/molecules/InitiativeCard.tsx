import { Card, CardContent, Typography, Box, Button, Link as MuiLink } from '@mui/material'
import { Instagram, Launch } from '@mui/icons-material'
import { Initiative } from '@/models/DataModels'

interface InitiativeCardProps {
  initiative: Initiative
}

export function InitiativeCard({ initiative }: InitiativeCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #1299b1 0%, #0e7a8a 100%)',
        color: 'white',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 24px rgba(18, 153, 177, 0.4)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
          {initiative.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
          {initiative.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {initiative.links?.instagram && (
            <Button
              variant="contained"
              startIcon={<Instagram />}
              component={MuiLink}
              href={initiative.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              Instagram
            </Button>
          )}
          {initiative.links?.website && (
            <Button
              variant="contained"
              startIcon={<Launch />}
              component={MuiLink}
              href={initiative.links.website}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              Website
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  )
}

