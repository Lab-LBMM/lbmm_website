import { Card, CardContent, CardMedia, Typography, Box, Link, Chip } from '@mui/material'
import { CalendarToday, Person } from '@mui/icons-material'
import { News } from '@/models/DataModels'

interface NewsCardProps {
  news: News
}

export function NewsCard({ news }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
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
      {news.image && (
        <CardMedia
          component="img"
          height="200"
          image={news.image}
          alt={news.title}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <CalendarToday fontSize="small" color="action" />
          <Typography variant="caption" color="text.secondary">
            {formatDate(news.date)}
          </Typography>
          {news.author && (
            <>
              <Typography variant="caption" color="text.secondary" sx={{ mx: 1 }}>
                •
              </Typography>
              <Person fontSize="small" color="action" />
              <Typography variant="caption" color="text.secondary">
                {news.author}
              </Typography>
            </>
          )}
        </Box>
        <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
          {news.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {news.description}
        </Typography>
        {news.link && (
          <Link href={news.link} target="_blank" rel="noopener noreferrer">
            Read more
          </Link>
        )}
      </CardContent>
    </Card>
  )
}

