'use client'

import { useState, useEffect } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  GlobalStyles,
  Box,
  Typography,
} from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import CheckIcon from '@mui/icons-material/Check'

export interface Language {
  code: string
  name: string
  flag: string
}

const LANGUAGES: Language[] = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
]

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string
            includedLanguages?: string
            layout?: number
            autoDisplay?: boolean
          },
          elementId: string
        ) => void
      }
    }
    googleTranslateElementInit?: () => void
  }
}

export function LanguageSelector() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [currentLang, setCurrentLang] = useState<string>('en')

  const open = Boolean(anchorEl)

  // Read current active language from googtrans cookie on mount
  useEffect(() => {
    const getCookieLang = () => {
      const match = document.cookie.match(/googtrans=\/([^/]+)\/([^;]+)/)
      if (match && match[2]) {
        return match[2]
      }
      return 'en' // Default original site language is English
    }

    setCurrentLang(getCookieLang())

    // Define global callback for Google Translate API
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en', // Site's base content is in English
            includedLanguages: 'pt,en,es,fr,de,it,zh-CN,ja',
            autoDisplay: false,
          },
          'google_translate_element'
        )
      }
    }

    // Inject Google Translate script if not already present
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script')
      script.id = 'google-translate-script'
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    }

    // MutationObserver to continuously strip top bar and top offsets injected by Google Translate
    const resetBodyStyles = () => {
      if (document.body.style.top !== '0px' && document.body.style.top !== '') {
        document.body.style.top = '0px'
      }
      if (
        document.body.style.marginTop !== '0px' &&
        document.body.style.marginTop !== ''
      ) {
        document.body.style.marginTop = '0px'
      }
    }

    resetBodyStyles()
    const observer = new MutationObserver(resetBodyStyles)
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style'],
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelectLanguage = (langCode: string) => {
    handleClose()
    setCurrentLang(langCode)

    const domain = window.location.hostname
    const host = window.location.host

    // Helper to delete googtrans cookies across paths & domains
    const clearCookie = () => {
      const cookieOptions = [
        'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;',
        `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`,
        `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`,
        `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`,
        `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${host};`,
      ]
      cookieOptions.forEach((opt) => {
        document.cookie = opt
      })
    }

    clearCookie()

    if (langCode !== 'en') {
      // Set translation cookie from English ('en') to selected lang
      const val = `/en/${langCode}`
      document.cookie = `googtrans=${val}; path=/;`
      if (domain) {
        document.cookie = `googtrans=${val}; path=/; domain=${domain};`
        document.cookie = `googtrans=${val}; path=/; domain=.${domain};`
      }
    }

    // Try updating hidden google translate select element if present
    const selectElem = document.querySelector(
      '.goog-te-combo'
    ) as HTMLSelectElement | null

    if (selectElem) {
      selectElem.value = langCode === 'en' ? '' : langCode
      selectElem.dispatchEvent(new Event('change'))
    }

    // Reload page to trigger clean DOM translation
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  const activeLangObj =
    LANGUAGES.find((l) => l.code === currentLang) ||
    LANGUAGES.find((l) => l.code === 'en') ||
    LANGUAGES[1]

  return (
    <>
      {/* Complete CSS overrides to hide Google Translate top bar, tooltips, and frames */}
      <GlobalStyles
        styles={{
          '#google_translate_element': {
            display: 'none !important',
          },
          '.goog-te-banner-frame': {
            display: 'none !important',
            visibility: 'hidden !important',
          },
          'iframe.goog-te-banner-frame': {
            display: 'none !important',
            visibility: 'hidden !important',
          },
          '.goog-te-balloon-frame': {
            display: 'none !important',
            visibility: 'hidden !important',
          },
          '#goog-gt-tt': {
            display: 'none !important',
            visibility: 'hidden !important',
          },
          '.goog-tooltip': {
            display: 'none !important',
          },
          '.goog-tooltip:hover': {
            display: 'none !important',
          },
          'body': {
            top: '0px !important',
            marginTop: '0px !important',
            position: 'static !important',
          },
          'html': {
            top: '0px !important',
            marginTop: '0px !important',
          },
          '.goog-text-highlight': {
            backgroundColor: 'transparent !important',
            boxShadow: 'none !important',
          },
          '.skiptranslate': {
            display: 'none !important',
          },
          'body > .skiptranslate': {
            display: 'none !important',
          },
          '.goog-te-gadget': {
            display: 'none !important',
          },
        }}
      />

      {/* Hidden element required by Google Translate SDK */}
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* Custom MUI Language Selector Button */}
      <Button
        onClick={handleClick}
        color="inherit"
        startIcon={<LanguageIcon fontSize="small" />}
        sx={{
          textTransform: 'none',
          fontWeight: 500,
          px: 1.5,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Box component="span" sx={{ mr: 0.5 }}>
          {activeLangObj.flag}
        </Box>
        <Typography variant="body2" component="span" sx={{ fontWeight: 600 }}>
          {activeLangObj.code.toUpperCase()}
        </Typography>
      </Button>

      {/* Dropdown Menu */}
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
          dense: true,
        }}
        PaperProps={{
          elevation: 3,
          sx: {
            minWidth: 160,
            borderRadius: 2,
            mt: 1,
          },
        }}
      >
        {LANGUAGES.map((lang) => {
          const isSelected = currentLang === lang.code
          return (
            <MenuItem
              key={lang.code}
              selected={isSelected}
              onClick={() => handleSelectLanguage(lang.code)}
              sx={{
                py: 1,
                px: 2,
                '&.Mui-selected': {
                  fontWeight: 600,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: '32px !important', fontSize: '1.2rem' }}>
                {lang.flag}
              </ListItemIcon>
              <ListItemText
                primary={lang.name}
                primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: isSelected ? 600 : 400,
                }}
              />
              {isSelected && (
                <CheckIcon fontSize="small" color="primary" sx={{ ml: 1 }} />
              )}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}
