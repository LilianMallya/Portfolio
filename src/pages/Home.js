import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TerminalIcon from '@mui/icons-material/Terminal';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ScienceIcon from '@mui/icons-material/Science';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const coreStrengths = [
    {
      icon: <TerminalIcon fontSize="large" />,
      title: "Technical Problem-Solving",
      description: "Breaking down complex challenges systematically"
    },
    {
      icon: <ArchitectureIcon fontSize="large" />,
      title: "Clean Code Philosophy",
      description: "Writing maintainable, well-structured solutions"
    },
    {
      icon: <ScienceIcon fontSize="large" />,
      title: "Continuous Learning",
      description: "Always expanding my technical toolkit"
    }
  ];

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 3,
        pt: { xs: 6, md: 10 },
        pb: 10,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Value Proposition */}
      <Box sx={{ 
        width: '100%',
        maxWidth: '900px',
        textAlign: 'center',
        mb: { xs: 6, md: 10 }
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant={isMobile ? 'h3' : 'h2'}
            sx={{
              fontWeight: 800,
              mb: 3,
              lineHeight: 1.2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.5px'
            }}
          >
            Engineering Solutions That Matter
          </Typography>
          
          <Typography 
            variant={isMobile ? 'h6' : 'h5'}
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            I build software with purpose, precision, and performance in mind
          </Typography>
        </motion.div>

        {/* Development Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: theme.shadows[4]
          }}
          style={{
            width: '100%',
            maxWidth: '600px',
            background: theme.palette.background.paper,
            borderRadius: '16px',
            margin: '0 auto',
            padding: '2.5rem',
            textAlign: 'center',
            boxShadow: theme.shadows[2],
            borderLeft: `6px solid ${theme.palette.primary.main}`,
            transition: 'all 0.3s ease'
          }}
        >
          <Typography variant="h5" sx={{ 
            mb: 3, 
            fontWeight: 600,
            color: theme.palette.primary.main
          }}>
            My Development Approach
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            alignItems: 'center'
          }}>
            {[
              "Quality > Quantity", 
              "Understanding > Memorization", 
              "Simplicity > Complexity"
            ].map((principle, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Typography variant="h6" sx={{ 
                  fontWeight: 500,
                  display: 'inline-block',
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  background: theme.palette.mode === 'dark' ? 
                    'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'
                }}>
                  {principle}
                </Typography>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>

      {/* Core Strengths */}
      <Box sx={{ 
        width: '100%',
        maxWidth: '1200px',
        mb: { xs: 8, md: 12 }
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Typography variant="h4" sx={{ 
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            letterSpacing: '-0.5px'
          }}>
            Technical Strengths
          </Typography>
        </motion.div>
        
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 4
        }}>
          {coreStrengths.map((strength, index) => (
            <Box 
              key={strength.title}
              sx={{
                width: { xs: '100%', sm: '350px' },
                flex: { xs: '0 0 auto', sm: '0 0 350px' }
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: theme.palette.background.paper,
                    borderRadius: '16px',
                    boxShadow: theme.shadows[1],
                    transition: 'all 0.3s ease',
                    border: `1px solid ${theme.palette.divider}`,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[4],
                      borderColor: theme.palette.primary.light
                    }
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Box sx={{ 
                      color: theme.palette.primary.main,
                      fontSize: '3rem',
                      mb: 2
                    }}>
                      {strength.icon}
                    </Box>
                  </motion.div>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 700, 
                    mb: 2,
                    letterSpacing: '-0.5px'
                  }}>
                    {strength.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}>
                    {strength.description}
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Navigation CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Box sx={{ 
          textAlign: 'center',
          mt: 4
        }}>
          <Typography variant="h6" sx={{ 
            mb: 3,
            fontWeight: 500
          }}>
            Ready to see my work in action?
          </Typography>
          <Button
            component={Link}
            to="/projects"
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '1rem',
              textTransform: 'none',
              boxShadow: theme.shadows[2],
              '&:hover': {
                boxShadow: theme.shadows[4],
                transform: 'translateY(-2px)'
              }
            }}
          >
            View Projects
          </Button>
        </Box>
      </motion.div>

      {/* Background Elements */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ delay: 1, duration: 1.5 }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: theme.palette.primary.main,
          filter: 'blur(80px)',
          zIndex: -1
        }}
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: theme.palette.secondary.main,
          filter: 'blur(80px)',
          zIndex: -1
        }}
      />
    </Box>
  );
};

export default Home;