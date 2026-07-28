'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  useScrollTrigger,
  Container,
  Divider,
} from '@mui/material'
import { Menu, Close } from '@mui/icons-material'
import { useTheme, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { LanguageSelector } from '@/components/molecules/LanguageSelector'

// Atualizamos a label para 'Education' e o path para refletir a nova estrutura
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Research Lines', path: '/research-lines' },
  { label: 'Our Team', path: '/team' },
  { label: 'News', path: '/news' },
  { label: 'Tools', path: '/tools' },
  { label: 'Teaching', path: '/teaching' },
  { label: 'Collaborations', path: '/collaborations' },
  { label: 'Science', path: '/sciencecommunication' },
  { label: 'Contact', path: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const pathname = usePathname()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ width: 250, pt: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Menu
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      <Box sx={{ px: 2, mb: 2 }}>
        <LanguageSelector />
      </Box>
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              selected={pathname === item.path}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          bgcolor: trigger ? 'background.paper' : 'background.paper',
          color: trigger ? 'text.primary' : 'text.primary',
          transition: 'all 0.3s ease',
          backdropFilter: trigger ? 'blur(10px)' : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Image
                src="/logo_lbmm_racs.jpg"
                alt="LBMM RACS Logo"
                width={40}
                height={40}
                style={{ marginRight: 8, borderRadius: 4 }}
                priority
              />
              <Typography
                variant="h6"
                className="notranslate"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                }}
              >
                LBMM RACS
              </Typography>
            </Box>
            {isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LanguageSelector />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <Menu />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    href={item.path}
                    color="inherit"
                    sx={{
                      textTransform: 'none',
                      fontWeight: pathname === item.path ? 600 : 500,
                      px: 1,
                      fontSize: '0.9rem',
                      '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.05)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Box sx={{ ml: 1 }}>
                  <LanguageSelector />
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}