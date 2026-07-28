'use client'

import { Box, Typography, Paper, Button, Chip, Stack } from '@mui/material'
import { Article, Mic, Videocam, Campaign, OpenInNew } from '@mui/icons-material'
import Link from 'next/link'

// Tipagem baseada no que costuma compor um card de divulgação (ajuste conforme seu DataController)
interface SciCommItemProps {
  item: {
    id: string | number
    title: string
    description: string
    type: 'podcast' | 'article' | 'video' | 'talk'
    date: string
    url: string
    platform: string
  }
}

export function ScienceCommunicationCard({ item }: SciCommItemProps) {
  // Função para retornar o ícone correto baseado no tipo de mídia
  const getIcon = (type: string) => {
    switch (type) {
      case 'podcast':
        return <Mic color="primary" />
      case 'video':
        return <Videocam color="primary" />
      case 'article':
        return <Article color="primary" />
      case 'talk':
        return <Campaign color="primary" />
      default:
        return <Article color="primary" />
    }
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 2,
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        {getIcon(item.type)}
        <Chip 
          label={item.platform} 
          size="small" 
          variant="outlined" 
          color="secondary" 
        />
      </Box>

      <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600, lineHeight: 1.3 }}>
        {item.title}
      </Typography>

      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
        {item.date}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
        {item.description}
      </Typography>

      <Button
        component={Link}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        variant="text"
        color="primary"
        endIcon={<OpenInNew sx={{ fontSize: 16 }} />}
        sx={{ width: 'fit-content', p: 0, textTransform: 'none', fontWeight: 600 }}
      >
        Access Content
      </Button>
    </Paper>
  )
}