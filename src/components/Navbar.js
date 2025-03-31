import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, useScrollTrigger, Slide, Box, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MenuRounded from '@mui/icons-material/MenuRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';

// Hide on scroll
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavButton = ({ to, text, isActive, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
  >
    <Button
      component={Link}
      to={to}
      onClick={onClick}
      sx={{
        color: isActive ? 'primary.main' : 'text.secondary',
        fontWeight: 600,
        fontSize: { xs: '1.1rem', md: '0.9rem' },
        textTransform: 'none',
        letterSpacing: '0.5px',
        minWidth: 'auto',
        px: { xs: 0, md: 2 },
        py: { xs: 1.5, md: 1 },
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }
      }}
    >
      {text}
    </Button>
  </motion.div>
);

const Navbar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:900px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/experience', text: 'Experience' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'rgba(10, 10, 10, 0.7)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease'
        }}
      >
        <Toolbar sx={{ 
          justifyContent: 'space-between',
          px: { xs: 2, md: 4 },
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          height: { xs: '64px', md: '72px' }
        }}>
          
          <Button
            component={Link}
            to="/"
            sx={{
              color: 'text.primary',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              letterSpacing: '1px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'transparent'
              }
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              LILIAN MALLYA
            </motion.span>
          </Button>

          {/* Desktop Navigation */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            gap: 1,
            alignItems: 'center'
          }}>
            {navItems.map((item) => (
              <NavButton 
                key={item.path}
                to={item.path}
                text={item.text}
                isActive={location.pathname === item.path}
              />
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <Button 
            color="inherit"
            onClick={handleToggleMenu}
            sx={{ 
              display: { md: 'none' },
              minWidth: 'auto',
              p: 1
            }}
          >
            {mobileOpen ? (
              <CloseRounded fontSize="medium" />
            ) : (
              <MenuRounded fontSize="medium" />
            )}
          </Button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && isMobile && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'fixed',
                  top: '64px',
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(10, 10, 10, 0.98)',
                  backdropFilter: 'blur(20px)',
                  zIndex: 10,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '1rem 2rem'
                }}
              >
                <Box sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.5
                }}>
                  {navItems.map((item) => (
                    <NavButton 
                      key={item.path}
                      to={item.path}
                      text={item.text}
                      isActive={location.pathname === item.path}
                      onClick={() => setMobileOpen(false)}
                    />
                  ))}
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
