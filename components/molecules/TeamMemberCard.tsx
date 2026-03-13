import { Card, CardContent, Typography, Box, Avatar, Link, Chip } from '@mui/material'
import { Person, Email } from '@mui/icons-material'
import { TeamMember } from '@/models/DataModels'

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
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
          <Avatar
            src={member.image}
            sx={{
              width: 80,
              height: 80,
              bgcolor: 'primary.main',
            }}
          >
            {!member.image && <Person sx={{ fontSize: 40 }} />}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
              {member.name}
            </Typography>
            <Chip
              label={member.role}
              size="small"
              color="primary"
              variant="outlined"
              sx={{ mb: 1 }}
            />
            {member.email && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                <Email fontSize="small" color="action" />
                <Link href={`mailto:${member.email}`} color="inherit" sx={{ fontSize: '0.875rem' }}>
                  {member.email}
                </Link>
              </Box>
            )}
          </Box>
        </Box>
        {member.description && (
          <Typography variant="body2" color="text.secondary">
            {member.description}
          </Typography>
        )}
        {member.link && (
          <Box sx={{ mt: 2 }}>
            <Link href={member.link} target="_blank" rel="noopener noreferrer">
              Learn more
            </Link>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}


