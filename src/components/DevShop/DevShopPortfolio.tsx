import { Box, Container, Typography, Grid } from '@mui/material'

const portfolioItems = [
  {
    title: 'Heyfood',
    description: 'Seamless food delivery platform connecting restaurants with hungry customers through real-time tracking and intelligent order management.',
    image: '/assets/heyfood-preview.png',
    tags: ['Food Delivery', 'Mobile App', 'Marketplace'],
    color: '#FF5722',
    link: 'https://heyfood.africa'
  },
  {
    title: 'Pledre',
    description: 'Modern learning management system empowering educators to create and deliver engaging online courses with advanced analytics.',
    image: '/assets/pledre-preview.png',
    tags: ['EdTech', 'LMS', 'SaaS'],
    color: '#00BCD4',
    link: 'https://pledre.com'
  },
  {
    title: 'OneTake.pro',
    description: 'AI-powered video editing platform that transforms raw footage into polished content with intelligent automation and one-click processing.',
    image: '/assets/onetake-preview.png',
    tags: ['AI/ML', 'Video Processing', 'SaaS'],
    color: '#4A90E2',
    link: 'https://onetake.pro'
  },
  {
    title: 'Scriptwriter',
    description: 'Professional screenplay writing tool with real-time collaboration, industry-standard formatting, and advanced revision tracking.',
    image: '/assets/scriptwriter-preview.png',
    tags: ['Creative Tools', 'Collaboration', 'Web App'],
    color: '#E91E63',
    link: 'https://scriptwriter.nitoons.com'
  },
  {
    title: 'Storyteller',
    description: 'Interactive storytelling platform that brings narratives to life with multimedia integration and immersive user experiences.',
    image: '/assets/storyteller-preview.png',
    tags: ['Content Creation', 'Interactive Media', 'Platform'],
    color: '#9C27B0',
    link: 'https://storyteller.nitoons.com'
  }
]

const DevShopPortfolio = () => {
  return (
    <Box id="portfolio" sx={{ py: { xs: 12, md: 16 }, bgcolor: '#000000' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 12 }}>
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
            Our Work
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '2.5rem', md: '3rem' },
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            Our Portfolio
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#9CA3AF',
              fontSize: '1.125rem',
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: 700,
              mx: 'auto'
            }}
          >
            Innovative products we've built from the ground up.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {portfolioItems.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box 
                onClick={() => window.open(item.link, '_blank')}
                sx={{ 
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  bgcolor: 'transparent',
                  border: '1px solid #1F2937',
                  borderRadius: 2,
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: '#374151'
                  }
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    bgcolor: '#0A0A0A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    borderBottom: '1px solid #1F2937'
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#E5E7EB',
                      fontWeight: 600,
                      fontSize: '1.5rem'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: '#10B981'
                    }}
                  />
                </Box>
                <Box sx={{ p: 6 }}>
                  <Typography 
                    variant="body1" 
                    sx={{ mb: 4, color: '#9CA3AF', lineHeight: 1.6, fontSize: '0.875rem' }}
                  >
                    {item.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {item.tags.map((tag, tagIndex) => (
                      <Typography
                        key={tagIndex}
                        variant="caption"
                        sx={{ 
                          color: '#6B7280',
                          fontSize: '0.75rem',
                          fontWeight: 400,
                          px: 0,
                          py: 0
                        }}
                      >
                        {tag}{tagIndex < item.tags.length - 1 ? ' • ' : ''}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default DevShopPortfolio