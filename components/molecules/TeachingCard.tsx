import { Card, CardContent, Typography, Box, Link, Chip } from '@mui/material'
import { School, CalendarToday, AccountBalance } from '@mui/icons-material'
import { Graduation, Course } from '@/models/DataModels'

interface TeachingCardProps {
  item: Graduation | Course
}

export function TeachingCard({ item }: TeachingCardProps) {
  // 1. VERIFICAÇÃO DE SEGURANÇA: Se não houver item, não renderiza nada e evita o erro
  if (!item) return null

  // Identifica se é um Curso (pois Course tem 'type', Graduation não)
  const isCourse = 'type' in item
  
  // Define o tipo interno para buscar a cor correta
  const itemType = isCourse ? item.type : 'graduation'
  
  // Define o que vai estar escrito no Chip (Usa o 'level' se for graduação, ou o 'type' se for curso)
  const chipLabel = isCourse ? item.type : (('level' in item && item.level) ? item.level : 'Graduation')

  // Define o local (Instituição ou Plataforma)
  const location = 'institution' in item ? item.institution : item.platform

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'graduation':
        return 'primary'
      case 'course':
        return 'info'
      case 'workshop':
        return 'secondary'
      case 'seminar':
        return 'success'
      case 'bootcamp':
        return 'warning'
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
      <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
          <School color={getTypeColor(itemType) as any} sx={{ fontSize: 40 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1, lineHeight: 1.2 }}>
              {item.title}
            </Typography>
            
            {/* O texto do Chip agora é o chipLabel */}
            <Chip
              label={chipLabel}
              size="small"
              color={getTypeColor(itemType) as any}
              variant="outlined"
              sx={{ mb: 1.5, textTransform: 'capitalize' }}
            />
            
            {location && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                <AccountBalance fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {location}
                </Typography>
              </Box>
            )}

            {item.period && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarToday fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {item.period}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2, mt: 1 }}>
          {item.description}
        </Typography>
        
        {item.link && (
          <Box sx={{ mt: 'auto', pt: 2 }}>
            <Link 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontWeight: 500 }}
            >
              Learn more
            </Link>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}