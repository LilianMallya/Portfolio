import { Box, Typography, IconButton, Divider, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { LinkedIn, GitHub, Email, ArrowUpward } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const Footer = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/LilianMallya' },
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/lilianmallya' },
    { icon: <Email />, url: 'mailto:lilybmallya@gmail.com' }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        position: 'relative',
        py: 4,
        px: { xs: 2, md: 4 },
        mt: 'auto',
        backgroundColor: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: -28,
            right: 24,
            zIndex: 1
          }}
        >
          <IconButton
            onClick={scrollToTop}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark
              }
            }}
          >
            <ArrowUpward />
          </IconButton>
        </motion.div>
      )}

      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 3
        }}
      >
        {/* Social links */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          sx={{
            display: 'flex',
            gap: 2
          }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }
                }}
              >
                {link.icon}
              </IconButton>
            </motion.a>
          ))}
        </Box>

        {/* Copyright text */}
        <Typography
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.8rem', md: '0.9rem' }
          }}
        >
          © {currentYear} Lilian Mallya. All rights reserved.
        </Typography>

        {/* Quick contact link */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Typography
            component="a"
            href="/contact"
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 600,
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Get in touch →
          </Typography>
        </motion.div>
      </Box>

      {/* Subtle divider */}
      <Divider
        sx={{
          my: 3,
          mx: 'auto',
          width: '80%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }}
      />

      {/* Technology stack */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2,
          mt: 2
        }}
      >
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          Built with: React · Material-UI · Framer Motion
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
