import { lazy, Suspense, useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { 
  CssBaseline, 
  LinearProgress, 
  ThemeProvider,
  useMediaQuery,
  Box
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { createTheme } from '@mui/material/styles';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

// Theme configuration
const createAppTheme = (prefersDarkMode) => createTheme({
  palette: {
    mode: prefersDarkMode ? 'dark' : 'light',
    primary: {
      main: '#3f51b5',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: prefersDarkMode ? '#121212' : '#f5f5f5',
      paper: prefersDarkMode ? '#1e1e1e' : '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

// Particle configuration
const getParticlesConfig = (prefersDarkMode) => ({
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: prefersDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(63, 81, 181, 0.5)'
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.3,
      random: true,
    },
    size: {
      value: 2,
      random: true,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      straight: false,
      bounce: false,
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
      }
    }
  }
});

const LoadingIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    style={{ width: '100%', paddingTop: '4rem' }}
  >
    <LinearProgress color="secondary" />
  </motion.div>
);

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme] = useState(createAppTheme(prefersDarkMode));
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={getParticlesConfig(prefersDarkMode)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.5
        }}
      />
      
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          
          <Box
            component="main"
            sx={{
              flex: 1,
              pt: { xs: '64px', md: '72px' },
              pb: 4
            }}
          >
            <ErrorBoundary>
              <Suspense fallback={<LoadingIndicator />}>
                <RoutesWithTransitions />
              </Suspense>
            </ErrorBoundary>
          </Box>
          
          <Footer />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

// Separate component to handle route transitions
function RoutesWithTransitions() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/about" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <About />
            </motion.div>
          } 
        />
        <Route 
          path="/experience" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Experience />
            </motion.div>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Projects />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Contact />
            </motion.div>
          } 
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;