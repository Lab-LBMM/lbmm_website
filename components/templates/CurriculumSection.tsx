'use client'

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Tabs,
  Tab,
  Link,
  Chip,
  Stack,
  Divider,
  IconButton,
} from '@mui/material'
import { useState } from 'react'
import {
  School,
  Work,
  EmojiEvents,
  Code,
  Link as LinkIcon,
  Description,
  Language,
} from '@mui/icons-material'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { PublicationCard } from '@/components/molecules/PublicationCard'
import { DataController } from '@/controllers/DataController'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`curriculum-tabpanel-${index}`}
      aria-labelledby={`curriculum-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  )
}

export function CurriculumSection() {
  const [value, setValue] = useState(0)
  const publications = DataController.getPublications()
  const professionalExperience = DataController.getProfessionalExperience()
  const education = DataController.getEducation()
  const awards = DataController.getAwards()
  const educationInitiatives = DataController.getEducationInitiatives()
  const programmingSkills = DataController.getProgrammingSkills()
  const curriculumLinks = DataController.getCurriculumLinks()

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'advanced':
        return 'success'
      case 'intermediary':
        return 'primary'
      case 'beginner':
        return 'default'
      default:
        return 'default'
    }
  }

  return (
    <Box
      id="curriculum"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Curriculum"
          subtitle="Professional experience, education and publications"
        />
        <Paper elevation={0} sx={{ p: 3, mb: 4 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="curriculum tabs"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <Tab icon={<Work />} iconPosition="start" label="Experience" />
            <Tab icon={<School />} iconPosition="start" label="Education" />
            <Tab icon={<Description />} iconPosition="start" label="Publications" />
            <Tab icon={<EmojiEvents />} iconPosition="start" label="Awards" />
            <Tab icon={<Code />} iconPosition="start" label="Skills" />
            <Tab icon={<LinkIcon />} iconPosition="start" label="Links" />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Stack spacing={3}>
              {professionalExperience.map((exp) => (
                <Paper
                  key={exp.id}
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {exp.position}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Language fontSize="small" color="action" />
                        {exp.link ? (
                          <Link href={exp.link} target="_blank" rel="noopener noreferrer" color="primary">
                            {exp.institution}
                          </Link>
                        ) : (
                          <Typography variant="body2" color="text.secondary">
                            {exp.institution}
                          </Typography>
                        )}
                      </Box>
                      <Chip label={exp.period} size="small" color="primary" variant="outlined" />
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Stack spacing={3}>
              {education.map((edu) => (
                <Paper
                  key={edu.id}
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {edu.degree}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <School fontSize="small" color="action" />
                        {edu.link ? (
                          <Link href={edu.link} target="_blank" rel="noopener noreferrer" color="primary">
                            {edu.institution}
                          </Link>
                        ) : (
                          <Typography variant="body2" color="text.secondary">
                            {edu.institution}
                          </Typography>
                        )}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center', mt: 1 }}>
                        <Chip label={edu.period} size="small" color="primary" variant="outlined" />
                        {edu.thesisLink && (
                          <Link
                            href={edu.thesisLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                          >
                            <Description fontSize="small" />
                            <Typography variant="body2">
                              Read my {edu.degree.includes('Ph.D') ? 'thesis' : edu.degree.includes('M.Sc') ? 'dissertation' : 'final project'} ({edu.thesisLanguage})
                            </Typography>
                          </Link>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Selected Publications
            </Typography>
            <Grid container spacing={4}>
              {publications.map((publication) => (
                <Grid item xs={12} md={6} key={publication.id}>
                  <PublicationCard publication={publication} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Stack spacing={3}>
              {awards.map((award) => (
                <Paper
                  key={award.id}
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    bgcolor: 'primary.light',
                    color: 'white',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <EmojiEvents />
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {award.title}
                        </Typography>
                      </Box>
                      {award.description && (
                        <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
                          {award.description}
                        </Typography>
                      )}
                      <Chip label={award.year} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={4}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    height: '100%',
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Code />
                    Programming Languages
                  </Typography>
                  <Stack spacing={2}>
                    {programmingSkills.map((skill, index) => (
                      <Box key={index}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                          <Typography variant="body1" sx={{ fontWeight: 600 }}>
                            {skill.language}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            {skill.years && (
                              <Typography variant="caption" color="text.secondary">
                                {skill.years} years
                              </Typography>
                            )}
                            <Chip
                              label={skill.level}
                              size="small"
                              color={getLevelColor(skill.level) as any}
                              variant="outlined"
                            />
                          </Box>
                        </Box>
                        {skill.description && (
                          <Typography variant="body2" color="text.secondary">
                            {skill.description}
                          </Typography>
                        )}
                        {index < programmingSkills.length - 1 && <Divider sx={{ mt: 2 }} />}
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    height: '100%',
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Code />
                    OS and Versioning
                  </Typography>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Git
                      </Typography>
                      <Chip label="intermediary" size="small" color="primary" variant="outlined" />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        on github/gitlab/bitbucket
                      </Typography>
                    </Box>
                    <Divider />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Linux
                      </Typography>
                      <Chip label="intermediary" size="small" color="primary" variant="outlined" />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        10 years
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
            <Box sx={{ mt: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <School />
                  Education Initiatives
                </Typography>
                <Stack spacing={2}>
                  {educationInitiatives.map((initiative) => (
                    <Box key={initiative.id}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 2 }}>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {initiative.title}
                          </Typography>
                          <Chip label={initiative.period} size="small" color="primary" variant="outlined" />
                          {initiative.link && (
                            <Box sx={{ mt: 1 }}>
                              <Link href={initiative.link} target="_blank" rel="noopener noreferrer" color="primary">
                                Learn more
                              </Link>
                            </Box>
                          )}
                        </Box>
                      </Box>
                      {initiative.id !== educationInitiatives[educationInitiatives.length - 1].id && (
                        <Divider sx={{ mt: 2 }} />
                      )}
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Box>
          </TabPanel>

          <TabPanel value={value} index={5}>
            <Grid container spacing={3}>
              {curriculumLinks.googleScholar && (
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    elevation={0}
                    component={Link}
                    href={curriculumLinks.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      p: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <LinkIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'center' }}>
                      Google Scholar
                    </Typography>
                  </Paper>
                </Grid>
              )}
              {curriculumLinks.lattes && (
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    elevation={0}
                    component={Link}
                    href={curriculumLinks.lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      p: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <LinkIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'center' }}>
                      Lattes CV
                    </Typography>
                  </Paper>
                </Grid>
              )}
              {curriculumLinks.orcid && (
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    elevation={0}
                    component={Link}
                    href={curriculumLinks.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      p: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <LinkIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'center' }}>
                      ORCID
                    </Typography>
                  </Paper>
                </Grid>
              )}
              {curriculumLinks.publons && (
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    elevation={0}
                    component={Link}
                    href={curriculumLinks.publons}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      p: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <LinkIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'center' }}>
                      Publons
                    </Typography>
                  </Paper>
                </Grid>
              )}
              {curriculumLinks.fapesp && (
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    elevation={0}
                    component={Link}
                    href={curriculumLinks.fapesp}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      p: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <LinkIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'center' }}>
                      FAPESP
                    </Typography>
                  </Paper>
                </Grid>
              )}
              {curriculumLinks.github && (
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    elevation={0}
                    component={Link}
                    href={curriculumLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      p: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <LinkIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'center' }}>
                      GitHub (@SantosRAC)
                    </Typography>
                  </Paper>
                </Grid>
              )}
              {curriculumLinks.gitlab && (
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    elevation={0}
                    component={Link}
                    href={curriculumLinks.gitlab}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      p: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <LinkIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'center' }}>
                      GitLab (@SantosRAC)
                    </Typography>
                  </Paper>
                </Grid>
              )}
            </Grid>
          </TabPanel>
        </Paper>
      </Container>
    </Box>
  )
}
