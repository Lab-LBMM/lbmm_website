import { Box, Container, Typography } from '@mui/material'
import { TeachingSection } from '@/components/templates/TeachingSection'
import { DataController } from '@/controllers/DataController'
import { Header } from '@/components/organisms/Header' 
import { Footer } from '@/components/organisms/Footer'

export default function TeachingPage() {
  const graduations = DataController.getGraduations()
  const courses = DataController.getCourses()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <Header />

      <Box component="main" sx={{ flexGrow: 1, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              component="h1" 
              sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}
            >
              Teaching
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Courses and disciplines offered by the laboratory
            </Typography>
          </Box>

          <TeachingSection 
            graduations={graduations} 
            courses={courses} 
          />

        </Container>
      </Box>

      <Footer />

    </Box>
  )
}