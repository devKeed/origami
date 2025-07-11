
import { Box } from '@mui/material'
import React from 'react'

export const HeroLines = () => {
  return (
    <div>
      <Box
        sx={{
          position: 'relative',
          height: { xs: 200, md: 300 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Minimal data visualization */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Data bars */}
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Box
              key={index}
              sx={{
                width: `${60 + Math.random() * 120}px`,
                height: '3px',
                bgcolor: '#374151',
                borderRadius: '1px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  bgcolor: '#9CA3AF',
                  borderRadius: '1px',
                  animation: `pulse-${index} 2s ease-in-out infinite`,
                  '@keyframes pulse-0': {
                    '0%': { width: '0%' },
                    '50%': { width: '70%' },
                    '100%': { width: '0%' },
                  },
                  '@keyframes pulse-1': {
                    '0%': { width: '0%' },
                    '50%': { width: '45%' },
                    '100%': { width: '0%' },
                  },
                  '@keyframes pulse-2': {
                    '0%': { width: '0%' },
                    '50%': { width: '85%' },
                    '100%': { width: '0%' },
                  },
                  '@keyframes pulse-3': {
                    '0%': { width: '0%' },
                    '50%': { width: '30%' },
                    '100%': { width: '0%' },
                  },
                  '@keyframes pulse-4': {
                    '0%': { width: '0%' },
                    '50%': { width: '60%' },
                    '100%': { width: '0%' },
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  )
}
