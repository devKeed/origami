import { ThemeProvider } from '@emotion/react'
import { createTheme, Box, Container, Typography, Button, Grid } from '@mui/material'
import DevShopNavbar from './DevShopNavbar'
import DevShopHero from './DevShopHero'
import DevShopPortfolio from './DevShopPortfolio'
import DevShopServices from './DevShopServices'
import DevShopFooter from './DevShopFooter'

export const DevShopHomePage = () => {
  const THEME = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#E5E7EB',
        light: '#F3F4F6',
        dark: '#9CA3AF',
      },
      secondary: {
        main: '#374151',
        light: '#4B5563',
        dark: '#1F2937',
      },
      background: {
        default: '#000000',
        paper: '#0A0A0A',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#9CA3AF',
      },
    },
    typography: {
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontSize: '4rem',
        fontWeight: 700,
        lineHeight: '1.1',
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: '3rem',
        fontWeight: 700,
        lineHeight: '1.2',
        letterSpacing: '-0.02em',
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: '1.3',
        letterSpacing: '-0.01em',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: '1.4',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#9CA3AF',
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: '1.6',
        color: '#9CA3AF',
      },
      button: {
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: 500,
      },
    },
  })

  return (
    <ThemeProvider theme={THEME}>
      <DevShopNavbar />
      <Box sx={{ bgcolor: 'background.default' }}>
        <DevShopHero />
        <DevShopPortfolio />
        <DevShopServices />
        <DevShopFooter />
      </Box>
    </ThemeProvider>
  )
}