'use client'

import { Box, Container, Grid } from '@mui/material'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { ToolCard } from '@/components/molecules/ToolCard'
import { DataController } from '@/controllers/DataController'

export default function ToolsPage() {
  const tools = DataController.getTools()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: 'background.paper',
          }}
        >
          <Container maxWidth="lg">
            <SectionTitle
              title="Tools"
              subtitle="Tools and platforms developed by the group"
            />
            <Grid container spacing={4}>
              {tools.map((tool) => (
                <Grid item xs={12} md={6} key={tool.id}>
                  <ToolCard tool={tool} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

