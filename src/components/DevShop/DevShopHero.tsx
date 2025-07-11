import { Box, Container, Typography, Button, Grid } from '@mui/material'
import ParticlesBackground from './devshop_elements/HeroParticlesBackground'

const DevShopHero = () => {

  return (
    <Box sx={{ 
      py: { xs: 12, md: 16 }, 
      background: '#000000',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <ParticlesBackground />
      {/* Subtle background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px',
          zIndex: 0
        }}
      />

      {/* Large background SVG */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '150%', md: '120%' },
          height: { xs: '150%', md: '120%' },
          opacity: 0.1,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="bg-gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="bg-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6B7280" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Large animated circles */}
          <circle cx="400" cy="400" r="300" fill="none" stroke="url(#bg-gradient1)" strokeWidth="3" opacity="0.5">
            <animate attributeName="r" values="300;320;300" dur="6s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="360 400 400" dur="30s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="400" cy="400" r="240" fill="none" stroke="url(#bg-gradient2)" strokeWidth="3" opacity="0.4">
            <animate attributeName="r" values="240;220;240" dur="5s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="360 400 400" to="0 400 400" dur="25s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="400" cy="400" r="180" fill="none" stroke="url(#bg-gradient1)" strokeWidth="3" opacity="0.3">
            <animate attributeName="r" values="180;200;180" dur="5.5s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="360 400 400" dur="20s" repeatCount="indefinite" />
          </circle>
          
          {/* Large code brackets */}
          <g transform="translate(400, 400)">
            <text x="-120" y="40" fontSize="160" fill="#E5E7EB" fontFamily="monospace" fontWeight="300" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
              &lt;
            </text>
            <text x="0" y="40" fontSize="160" fill="#9CA3AF" fontFamily="monospace" fontWeight="300" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
              /
            </text>
            <text x="60" y="40" fontSize="160" fill="#E5E7EB" fontFamily="monospace" fontWeight="300" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
              &gt;
            </text>
          </g>
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#9CA3AF',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  mb: 2
                }}
              >
                Nitoons Development Lab
              </Typography>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  mb: 4,
                  color: '#FFFFFF',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                We Build Digital Products That Matter
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 6, 
                  color: '#9CA3AF',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: '600px'
                }}
              >
                From concept to launch, we craft exceptional web and mobile applications that drive business growth. Your vision, our expertise.
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => window.location.href = 'mailto:business@nitoons.com'}
                sx={{ 
                  borderRadius: 1,
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  bgcolor: '#E5E7EB',
                  color: '#000000',
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: '#D1D5DB'
                  }
                }}
              >
                Contact Us
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                href="#portfolio"
                sx={{ 
                  borderRadius: 1,
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  borderColor: '#374151',
                  color: '#9CA3AF',
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#9CA3AF',
                    bgcolor: 'transparent'
                  }
                }}
              >
                View Our Work
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default DevShopHero