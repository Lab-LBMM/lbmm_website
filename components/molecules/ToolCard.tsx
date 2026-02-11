import { Card, CardContent, Typography, Box, Link, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { Code, Launch, Storage } from '@mui/icons-material'
import { Tool } from '@/models/DataModels'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  const getTypeColor = (type?: string) => {
    switch (type) {
      case 'server':
        return 'primary'
      case 'application':
        return 'secondary'
      case 'software':
        return 'success'
      case 'platform':
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Code color="primary" sx={{ fontSize: 40 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
              {tool.name}
            </Typography>
            {tool.type && (
              <Chip
                label={tool.type}
                size="small"
                color={getTypeColor(tool.type) as any}
                variant="outlined"
              />
            )}
          </Box>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {tool.description}
        </Typography>
        {tool.databases && tool.databases.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Storage fontSize="small" color="action" />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Available Databases
              </Typography>
            </Box>
            <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>DB Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>Sequences</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tool.databases.map((db, index) => (
                    <TableRow key={index}>
                      <TableCell>{db.name}</TableCell>
                      <TableCell>{db.type}</TableCell>
                      <TableCell>{db.description}</TableCell>
                      <TableCell align="right">{db.sequences?.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
        {tool.link && (
          <Box sx={{ mt: 'auto', pt: 2 }}>
            <Link
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <Launch fontSize="small" />
              Access tool
            </Link>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

