import { Box, Container, Typography, Grid } from '@mui/material'
import DevicesIcon from '@mui/icons-material/Devices'
import PeopleIcon from '@mui/icons-material/People'
import ConsultationIcon from '@mui/icons-material/Psychology'

const primaryServices = [
  {
    icon: <PeopleIcon sx={{ fontSize: 24 }} />,
    title: 'Talent Outsourcing',
    subtitle: 'Scale Your Team Instantly',
    description: 'Access our pool of pre-vetted, highly skilled developers ready to integrate seamlessly with your team. From React experts to full-stack engineers, we provide the talent you need, when you need it.',
    benefits: [
      'Pre-screened top 3% developers',
      'Flexible engagement models',
      'Time zone alignment',
      'Dedicated project managers'
    ],
    highlight: 'Most Popular'
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 24 }} />,
    title: 'App Development',
    subtitle: 'From Concept to Launch',
    description: 'Transform your vision into reality with our end-to-end application development services. We build scalable, modern applications using cutting-edge technologies and industry best practices.',
    benefits: [
      'Full-stack development',
      'Mobile & web applications',
      'Agile methodology',
      'Post-launch support'
    ],
    highlight: 'End-to-End'
  },
  {
    icon: <ConsultationIcon sx={{ fontSize: 24 }} />,
    title: 'Technical Consultations',
    subtitle: 'Expert Guidance On-Demand',
    description: 'Navigate complex technical decisions with confidence. Our senior consultants provide strategic guidance on architecture, technology selection, and implementation roadmaps.',
    benefits: [
      'Architecture reviews',
      'Technology roadmaps',
      'Performance optimization',
      'Security assessments'
    ],
    highlight: 'Strategic'
  }
]


const DevShopServices = () => {
  return (
    <Box id="services" sx={{ py: { xs: 12, md: 16 }, bgcolor: '#000000' }}>
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
            What We Offer
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
            Our Services
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
            Empowering businesses with expert talent, cutting-edge development, and strategic technical guidance.
          </Typography>
        </Box>

        {/* Primary Services */}
        <Grid container spacing={6}>
          {primaryServices.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  p: 6,
                  height: '100%',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  bgcolor: 'transparent',
                  border: '1px solid #1F2937',
                  borderRadius: 2,
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: '#374151',
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                {service.highlight && (
                  <Typography 
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      top: 24,
                      right: 24,
                      color: '#9CA3AF',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}
                  >
                    {service.highlight}
                  </Typography>
                )}
                
                <Box sx={{ mb: 4 }}>
                  <Box 
                    sx={{ 
                      color: '#E5E7EB',
                      mb: 4,
                      display: 'flex',
                      justifyContent: 'flex-start'
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography 
                    variant="h4" 
                    sx={{ mb: 2, fontWeight: 600, color: '#FFFFFF', fontSize: '1.5rem' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ color: '#9CA3AF', fontWeight: 400, mb: 3, fontSize: '1rem' }}
                  >
                    {service.subtitle}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ color: '#9CA3AF', lineHeight: 1.6, mb: 4, fontSize: '0.875rem' }}
                  >
                    {service.description}
                  </Typography>
                </Box>

                <Box sx={{ mt: 'auto' }}>
                  {service.benefits.map((benefit, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <Box sx={{ 
                        width: 4, 
                        height: 4, 
                        borderRadius: '50%', 
                        bgcolor: '#9CA3AF', 
                        mt: 1,
                        mr: 2,
                        flexShrink: 0
                      }} />
                      <Typography variant="body2" sx={{ color: '#9CA3AF', fontSize: '0.875rem' }}>
                        {benefit}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default DevShopServices