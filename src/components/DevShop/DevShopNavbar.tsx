import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import DevShopMenuDialog from './DevShopMenuDialog'

const DevShopNavbar = () => {
  const router = useRouter()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ backgroundColor: '#000000', borderBottom: '1px solid #1F2937' }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
         <img src="/nitoons_logo.svg" width='180px' alt="Nitoons logo" />
          
          {isMobile ? (
            <IconButton onClick={() => setMenuOpen(true)} sx={{ color: '#FFFFFF' }}>
              <MenuOpenIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <Button sx={{ 
                color: '#9CA3AF', 
                textTransform: 'none',
                fontWeight: 400,
                '&:hover': { color: '#FFFFFF' } 
              }} href="#portfolio">
                Portfolio
              </Button>
              <Button sx={{ 
                color: '#9CA3AF', 
                textTransform: 'none',
                fontWeight: 400,
                '&:hover': { color: '#FFFFFF' } 
              }} href="#services">
                Services
              </Button>
              <Button 
                variant="outlined" 
                onClick={() => window.location.href = 'mailto:business@nitoons.com'}
                sx={{ 
                  borderRadius: 1,
                  borderColor: '#374151',
                  color: '#9CA3AF',
                  fontWeight: 400,
                  textTransform: 'none',
                  px: 3,
                  '&:hover': {
                    borderColor: '#9CA3AF',
                    bgcolor: 'transparent'
                  }
                }}
              >
                Contact Us
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <DevShopMenuDialog open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default DevShopNavbar