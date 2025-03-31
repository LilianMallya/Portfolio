import { Box, Typography, useTheme, Stack } from '@mui/material';
import { Code, MenuBook, SportsVolleyball, FitnessCenter, Extension } from '@mui/icons-material';

const About = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      maxWidth: '1000px',
      mx: 'auto',
      px: { xs: 3, md: 6 },
      py: 8
    }}>
      {/* Technology Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ 
          mb: 4,
          fontWeight: 700,
          color: theme.palette.text.primary
        }}>
          Professional Focus
        </Typography>
        
        <Typography paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
          My technical work centers around these key areas:
        </Typography>
        
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 3,
          mb: 4
        }}>
          {[

            'Algorithm Development',
            'System Architecture',
            'Machine Learning', 
            'Embedded Systems Engineering',
            'Distributed Systems',
            'Cloud Infrastructure'
           
            
          ].map((skill, index) => (
            <Typography key={index} sx={{ 
              display: 'flex',
              alignItems: 'center',
              mb: 1.5
            }}>
              <Code sx={{ 
                color: theme.palette.primary.main, 
                mr: 1.5,
                fontSize: '1.2rem'
              }} />
              {skill}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Personal Interests Section */}
      <Box>
        <Typography variant="h4" sx={{ 
          mb: 4,
          fontWeight: 700,
          color: theme.palette.text.primary
        }}>
          Personal Interests
        </Typography>
        
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 4
        }}>
          {/* Reading */}
          <Box sx={{ 
            p: 3,
            borderRadius: '12px',
            border: `1px solid ${theme.palette.divider}`
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <MenuBook sx={{ 
                fontSize: '2rem',
                color: theme.palette.info.main,
                mr: 2
              }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Reading
              </Typography>
            </Box>
            <Typography>
            Literary fiction that moves; nonfiction that challenges.
            </Typography>
          </Box>

          {/* Volleyball */}
          <Box sx={{ 
            p: 3,
            borderRadius: '12px',
            border: `1px solid ${theme.palette.divider}`
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SportsVolleyball sx={{ 
                fontSize: '2rem',
                color: theme.palette.error.main,
                mr: 2
              }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Volleyball
              </Typography>
            </Box>
            <Typography>
            I play recreationally for fun and exercise.
            </Typography>
          </Box>

          {/* Pilates */}
          <Box sx={{ 
            p: 3,
            borderRadius: '12px',
            border: `1px solid ${theme.palette.divider}`
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FitnessCenter sx={{ 
                fontSize: '2rem',
                color: theme.palette.success.main,
                mr: 2
              }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Pilates
              </Typography>
            </Box>
            <Typography>
              Regular practice for physical fitness and mental clarity.
            </Typography>
          </Box>

          {/* Puzzles */}
          <Box sx={{ 
            p: 3,
            borderRadius: '12px',
            border: `1px solid ${theme.palette.divider}`
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Extension sx={{ 
                fontSize: '2rem',
                color: theme.palette.warning.main,
                mr: 2
              }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Mechanical Puzzles
              </Typography>
            </Box>
            <Typography>
              Collection and solving of complex 3D puzzles.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
