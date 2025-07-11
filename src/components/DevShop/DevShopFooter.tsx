import { Box, Container, Typography, Grid, Button, Link } from '@mui/material'

const DevShopFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box sx={{ bgcolor: '#000000', color: 'white', py: 12, borderTop: '1px solid #1F2937' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12} md={8}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 4,
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: { xs: '1.5rem', md: '2rem' },
                letterSpacing: '-0.01em'
              }}
            >
              Ready to Build Something Amazing?
            </Typography>
            <Typography variant="body1" sx={{ mb: 6, color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.6, maxWidth: '500px' }}>
              Let's discuss how we can help transform your ideas into successful digital products.
            </Typography>
            <Button 
              variant="outlined" 
              onClick={() => window.location.href = 'mailto:business@nitoons.com'}
              sx={{ 
                borderRadius: 1,
                borderColor: '#374151',
                color: '#9CA3AF',
                fontWeight: 400,
                textTransform: 'none',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: '#9CA3AF',
                  bgcolor: 'transparent'
                }
              }}
            >
              Get in touch
            </Button>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 3, color: '#FFFFFF', fontSize: '1rem', fontWeight: 500 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="#portfolio" sx={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#E5E7EB' } }}>
                Portfolio
              </Link>
              <Link href="#services" sx={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#E5E7EB' } }}>
                Services
              </Link>
              <Link href="/privacy-policy" sx={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#E5E7EB' } }}>
                Privacy Policy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 3, color: '#FFFFFF', fontSize: '1rem', fontWeight: 500 }}>
              Connect
            </Typography>
            <Typography variant="body2" sx={{ color: '#9CA3AF', fontSize: '0.875rem', mb: 2 }}>
              business@nitoons.com
            </Typography>
            <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '0.75rem' }}>
              Follow us on social media for updates
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 12, pt: 6, borderTop: '1px solid #1F2937' }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.25rem' }}>
                Nitoons Labs
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '0.75rem' }}>
                © {currentYear}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default DevShopFooter