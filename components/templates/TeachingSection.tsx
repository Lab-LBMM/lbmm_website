import { Box, Typography, Grid, Divider } from '@mui/material'
// IMPORTANTE: Ajuste o caminho do TeachingCard conforme a sua estrutura. 
// Como este arquivo está em 'templates', talvez o card esteja em '../components/TeachingCard'
import { TeachingCard } from '@/components/molecules/TeachingCard' 
import { Graduation, Course } from '@/models/DataModels'

interface TeachingSectionProps {
  graduations: Graduation[]
  courses: Course[]
}

// CORREÇÃO: O nome da função agora é exatamente TeachingSection
export function TeachingSection({ graduations, courses }: TeachingSectionProps) {
  return (
    <Box sx={{ width: '100%' }}>
      
      {/* Seção de Graduação (Graduations & Degrees) */}
      {graduations && graduations.length > 0 && (
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
            Graduations & Degrees
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Academic degrees and university-level education.
          </Typography>
          
          <Grid container spacing={3}>
            {graduations.map((graduation, index) => (
              <Grid item xs={12} sm={6} md={4} key={`grad-${index}`}>
                <TeachingCard item={graduation} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Divisor condicional entre seções */}
      {graduations && courses && graduations.length > 0 && courses.length > 0 && (
         <Divider sx={{ my: 6 }} />
      )}

      {/* Seção de Cursos (Courses & Workshops) */}
      {courses && courses.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
            Courses & Workshops
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Extracurricular courses, seminars, and technical workshops.
          </Typography>

          <Grid container spacing={3}>
            {courses.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={`course-${index}`}>
                <TeachingCard item={course} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      
    </Box>
  )
}