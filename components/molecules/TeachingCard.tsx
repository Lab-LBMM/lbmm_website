import { Card, CardContent, Typography, Box, Link, Chip } from '@mui/material'
import { School, CalendarToday } from '@mui/icons-material'
import { Teaching } from '@/models/DataModels'

interface TeachingCardProps {
  teaching: Teaching
}

export function TeachingCard({ teaching }: TeachingCardProps) {
  const getTypeColor = (type?: string) => {
    switch (type) {
      case 'course':
        return 'primary'
      case 'workshop':
        return 'secondary'
      case 'seminar':
        return 'success'
      case 'discipline':
        return 'info'
      default:
        return 'default'
    }
  }

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'start', gap: 2, mb: 2 }}>
          <School color="primary" sx={{ fontSize: 40 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
              {teaching.title}
            </Typography>
            {teaching.type && (
              <Chip
                label={teaching.type}
                size="small"
                color={getTypeColor(teaching.type) as any}
                variant="outlined"
                sx={{ mb: 1 }}
              />
            )}
            {teaching.period && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                <CalendarToday fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {teaching.period}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {teaching.description}
        </Typography>
        {teaching.link && (
          <Box sx={{ mt: 'auto', pt: 2 }}>
            <Link href={teaching.link} target="_blank" rel="noopener noreferrer">
              Learn more
            </Link>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}


