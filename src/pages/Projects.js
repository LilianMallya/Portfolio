import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Chip, 
  Button, 
  useTheme,
  useMediaQuery,
  Divider,
  Skeleton
} from '@mui/material';
import { Code, Web, DataObject, GitHub, Android, Storage, Functions } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:900px)');
  const [loading, setLoading] = React.useState(true);

  // Project data 
  const projects = [
    {
      title: "TensorFlow Shoe Detection",
      description: "Custom object detection model to identify shoe types using TensorFlow's Object Detection API with SSD MobileNetV2.",
      tags: ["TensorFlow", "Python", "Object Detection"],
      icon: <Web fontSize="large" />,
      link: "https://github.com/LilianMallya/Tensorflow_Shoes_detection",
      features: [
        "Transfer learning with pre-trained model",
        "Custom dataset support",
        "TFRecord generation pipeline"
      ]
    },
    {
      title: "Web Task Manager",
      description: "Full-stack productivity application with task management, calendar view, and habit tracking features.",
      tags: ["React", "Node.js", "MongoDB"],
      icon: <Code fontSize="large" />,
      link: "https://github.com/LilianMallya/web-task-manager",
      features: [
        "Secure user authentication",
        "Interactive calendar view",
        "Habit tracking system"
      ]
    },
    {
      title: "Shopping List App",
      description: "Android application for managing grocery lists with advanced quantity control.",
      tags: ["Android", "Java", "Firebase"],
      icon: <Android fontSize="large" />,
      link: "https://github.com/LilianMallya/ShoppingApp",
      features: [
        "CRUD operations for shopping items",
        "Quantity modification controls",
        "Multiple unit types"
      ]
    },
    {
      title: "Module Timetable",
      description: "University course management system with conflict detection.",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      icon: <Storage fontSize="large" />,
      link: "https://github.com/LilianMallya/ModulesTimetable",
      features: [
        "Module creation/updating",
        "Session scheduling",
        "Conflict detection"
      ]
    },
    {
      title: "Order Matching System",
      description: "Financial trading engine implementing price-time priority matching algorithm.",
      tags: ["C++17", "Algorithms", "Multithreading"],
      icon: <Functions fontSize="large" />,
      link: "https://github.com/LilianMallya/Order-Matching-System",
      features: [
        "Limit/Market order support",
        "Price-time priority matching",
        "Partial order fulfillment"
      ]
    },
    {
      title: "Airbnb Price Prediction",
      description: "Machine learning pipeline for predicting London Airbnb prices.",
      tags: ["Python", "Scikit-learn", "Pandas"],
      icon: <Web fontSize="large" />,
      link: "https://github.com/LilianMallya/Airbnb_Price_Prediction",
      features: [
        "Data cleaning pipeline",
        "Exploratory data analysis",
        "Regression modeling"
      ]
    }
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box 
      component="section"
      id="projects"
      sx={{
        px: { xs: 2, md: 4 },
        py: 6,
        maxWidth: '1400px',
        margin: '0 auto',
        backgroundColor: theme.palette.background.default
      }}
    >
      {/* Section Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography 
          variant="h2" 
          component="h1"
          sx={{ 
            fontWeight: 700,
            color: theme.palette.text.primary,
            mb: 1,
            fontSize: { xs: '1.8rem', md: '2.2rem' }
          }}
        >
          My Projects
        </Typography>
        <Typography 
          variant="subtitle1"
          sx={{ 
            color: theme.palette.text.secondary,
            maxWidth: '600px',
            mx: 'auto',
            fontSize: { xs: '0.95rem', md: '1rem' }
          }}
        >
          A collection of my technical work across multiple domains
        </Typography>
        <Divider sx={{ 
          width: '60px', 
          height: '3px', 
          backgroundColor: theme.palette.primary.main, 
          mt: 2,
          mx: 'auto',
          borderRadius: '2px'
        }} />
      </Box>

      {/* Projects Grid */}
      <Grid 
        container 
        spacing={3} 
        sx={{ 
          mt: 2,
          justifyContent: 'center'
        }}
      >
        {projects.map((project, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {loading ? (
              <Skeleton 
                variant="rectangular" 
                width="100%" 
                height={400} 
                sx={{ 
                  borderRadius: '12px',
                  maxWidth: '400px'
                }} 
              />
            ) : (
              <Box
                component={motion.article}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                sx={{
                  width: '100%',
                  maxWidth: '400px',
                  height: '100%',
                  minHeight: '400px',
                  p: 2.5,
                  borderRadius: '10px',
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  boxShadow: theme.shadows[1],
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    boxShadow: theme.shadows[3],
                    transform: 'translateY(-3px)'
                  },
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Project Icon */}
                <Box 
                  sx={{ 
                    color: theme.palette.primary.main,
                    mb: 1.5,
                    fontSize: '2.2rem',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  {project.icon}
                </Box>
                
                {/* Project Title */}
                <Typography 
                  variant="h6" 
                  component="h3"
                  sx={{ 
                    mb: 1.5,
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    textAlign: 'center',
                    fontSize: '1.2rem'
                  }}
                >
                  {project.title}
                </Typography>
                
                {/* Project Description */}
                <Typography 
                  variant="body2"
                  sx={{ 
                    mb: 2,
                    color: theme.palette.text.secondary,
                    flexGrow: 1,
                    fontSize: '0.9rem',
                    lineHeight: 1.5
                  }}
                >
                  {project.description}
                </Typography>
                
                {/* Features List */}
                <Box sx={{ mb: 2 }}>
                  {project.features.map((feature, i) => (
                    <Typography 
                      key={i}
                      variant="body2"
                      component="li"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: '0.8rem',
                        mb: 0.5,
                        display: 'flex',
                        alignItems: 'flex-start',
                        '&:before': {
                          content: '"•"',
                          color: theme.palette.primary.main,
                          mr: 1,
                          fontSize: '1rem',
                          lineHeight: '0.8'
                        }
                      }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
                
                {/* Tags */}
                <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {project.tags.map((tag, i) => (
                    <Chip
                      key={i}
                      label={tag}
                      size="small"
                      sx={{ 
                        backgroundColor: theme.palette.action.selected,
                        color: theme.palette.text.primary,
                        fontSize: '0.65rem',
                        height: '22px'
                      }}
                    />
                  ))}
                </Box>
                
                {/* View Button */}
                <Button
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 'auto',
                    alignSelf: 'center',
                    fontWeight: 600,
                    width: '100%',
                    py: 0.8,
                    borderRadius: '6px',
                    textTransform: 'none',
                    fontSize: '0.85rem'
                  }}
                >
                  View Project
                </Button>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
