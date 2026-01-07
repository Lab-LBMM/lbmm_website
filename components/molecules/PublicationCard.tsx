import { Card, CardContent, Typography, Box, Link, Chip } from '@mui/material'
import { Article, CalendarToday, School } from '@mui/icons-material'
import { Publication } from '@/models/DataModels'

interface PublicationCardProps {
  publication: Publication
}

export function PublicationCard({ publication }: PublicationCardProps) {
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
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
          <Article color="primary" />
          <Chip
            label={publication.year}
            size="small"
            icon={<CalendarToday />}
            sx={{ ml: 'auto' }}
          />
        </Box>
        <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
          {publication.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
          <School fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {publication.journal}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {publication.authors.join(', ')}
        </Typography>
        {(publication.doi || publication.link) && (
          <Box sx={{ mt: 'auto', pt: 2 }}>
            {publication.doi && (
              <Link
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 2 }}
              >
                DOI
              </Link>
            )}
            {publication.link && (
              <Link
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View publication
              </Link>
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

