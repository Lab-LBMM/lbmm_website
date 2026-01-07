import { Card, CardContent, Typography, Box, Avatar, Link } from '@mui/material'
import { Business, Person } from '@mui/icons-material'
import { Collaboration } from '@/models/DataModels'

interface CollaborationCardProps {
  collaboration: Collaboration
}

export function CollaborationCard({ collaboration }: CollaborationCardProps) {
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
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
            <Person />
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
              {collaboration.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
              <Business fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {collaboration.institution}
              </Typography>
            </Box>
            {collaboration.lab && (
              <Typography variant="body2" color="primary" sx={{ mt: 0.5, fontWeight: 500 }}>
                {collaboration.lab}
              </Typography>
            )}
          </Box>
        </Box>
        {collaboration.description && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {collaboration.description}
          </Typography>
        )}
        {collaboration.link && (
          <Box sx={{ mt: 'auto', pt: 2 }}>
            <Link href={collaboration.link} target="_blank" rel="noopener noreferrer">
              Learn more
            </Link>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

