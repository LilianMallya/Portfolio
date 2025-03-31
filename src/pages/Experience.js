import React from 'react';
import {
  Box,
  Typography,
  Chip,
  useTheme,
  Avatar,
  useMediaQuery,
  Stack,
  Paper
} from '@mui/material';
import { 
  Code,
  School,
  Work,
  Groups,
  EmojiEvents,
  TrendingUp,
  Lightbulb,
  People,
  MonetizationOn,
  Star
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:900px)');

  const experiences = [
    {
      id: 1,
      date: "Jul 2023 - Jul 2024",
      title: "Software Engineer Intern",
      company: "SLB",
      icon: <Code />,
      highlights: [
        "Deployed optimized Python algorithms for field operations, reducing processing time by 30% for engineers analyzing drilling site data",
        "Implemented production scheduling system now used daily by 15+ field teams, improving equipment utilization by 7%",
        "Delivered Flask API adopted by operations teams for real-time data sharing between rig sites and headquarters",
        "Prototyped quantum-inspired optimization solutions tested with field data from active drilling projects",
        "Authored technical documentation used to train field engineers on implementing optimized scheduling algorithms"
      ],
      color: theme.palette.primary.main,
      metrics: ["30% perfomance gain", "7% efficiency improvement"]
    },
    {
      id: 2,
      date: "Apr 2023",
      title: "Spring Week Intern",
      company: "National Grid",
      icon: <Lightbulb />,
      highlights: [
        "Led team project modeling EV adoption impact on renewable energy infrastructure",
        "Improved financial forecasting accuracy by 25% through cost-efficiency simulations",
        "Won 1st place in strategy challenge by pitching energy investment solutions to executives",
        "Gained exposure to energy infrastructure and sustainability innovation"
      ],
      color: theme.palette.secondary.main,
      metrics: ["25% accuracy", "1st place"]
    },
    {
      id: 3,
      date: "2022-Present",
      title: "Generating Genius Scholar",
      icon: <Star />,
      highlights: [
        "Selected for competitive STEM program supporting underrepresented students in tech",
        "Completed 100+ hours of technical training in programming and data science",
        "Presented fintech prototype to HSBC engineering leadership",
        "Developed skills in R programming, data analysis, and professional networking"
      ],
      color: theme.palette.success.main,
      metrics: ["100+ hours"]
    },
    {
      id: 4,
      date: "2022-2023",
      title: "CS Society Treasurer",
      icon: <MonetizationOn />,
      highlights: [
        "Managed £3,000 budget for 100+ member computer science society",
        "Implemented digital tools reducing reimbursement processing time by 40%",
        "Organized events and workshops including hackathon with 75 participants",
        "Collaborated with university staff and sponsors to secure funding"
      ],
      color: theme.palette.warning.main,
      metrics: ["40% faster", "75 participants"]
    },
    {
      id: 5,
      date: "Sep 2022 - May 2023",
      title: "Student Mentor",
      icon: <People />,
      highlights: [
        "Mentored first-year students in Algorithms, OOP, and Operating Systems",
        "Provided academic guidance through group sessions and 1-on-1 check-ins",
        "Helped 5 mentees secure internships through targeted support",
        "Promoted inclusive learning environments with pastoral support"
      ],
      color: theme.palette.info.main,
      metrics: ["5 internships", "15 mentees"]
    }
  ];

  const ExperienceCard = ({ experience, index }) => {
    const isOdd = index % 2 !== 0;
    
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: isOdd ? 'row-reverse' : 'row' },
        alignItems: 'center',
        mb: 10,
        position: 'relative'
      }}>
        {/* Date */}
        <Box sx={{
          width: { xs: '100%', md: '200px' },
          textAlign: { xs: 'left', md: isOdd ? 'right' : 'left' },
          mb: { xs: 1, md: 0 },
          px: 2
        }}>
          <Typography variant="subtitle1" sx={{ 
            fontWeight: 600,
            color: theme.palette.text.secondary
          }}>
            {experience.date}
          </Typography>
        </Box>

        {/* Icon */}
        <Box sx={{
          position: 'relative',
          zIndex: 2,
          mx: { xs: 0, md: 2 }
        }}>
          <Avatar sx={{ 
            width: 60, 
            height: 60,
            bgcolor: `${experience.color}20`,
            color: experience.color,
            border: `2px solid ${experience.color}`
          }}>
            {experience.icon}
          </Avatar>
        </Box>

        {/* Content */}
        <Box sx={{
          flex: 1,
          ml: { xs: 0, md: isOdd ? 0 : 2 },
          mr: { xs: 0, md: isOdd ? 2 : 0 },
          mt: { xs: 2, md: 0 }
        }}>
          <motion.div
            initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{
              p: 3,
              borderRadius: '16px',
              background: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
              borderLeft: `4px solid ${experience.color}`,
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: `0 10px 20px ${theme.palette.primary.light}30`
              },
              transition: 'all 0.3s ease'
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {experience.title} {experience.company && `• ${experience.company}`}
              </Typography>
              
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                {experience.metrics.map((metric, i) => (
                  <Chip
                    key={i}
                    label={metric}
                    size="small"
                    sx={{
                      bgcolor: `${experience.color}20`,
                      color: experience.color,
                      fontWeight: 600
                    }}
                  />
                ))}
              </Stack>

              <Box component="ul" sx={{ 
                pl: 2,
                '& li': {
                  position: 'relative',
                  pl: '28px',
                  mb: 1,
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '10px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    bgcolor: experience.color
                  }
                }
              }}>
                {experience.highlights.map((highlight, i) => (
                  <Typography key={i} component="li" variant="body1">
                    {highlight}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{
      px: { xs: 2, md: 6 },
      py: 8,
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative'
    }}>
      <Typography variant="h2" sx={{ 
        fontWeight: 800,
        mb: 2,
        textAlign: 'center',
        color: theme.palette.text.primary,
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: -10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '4px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          borderRadius: '2px'
        }
      }}>
        Professional Journey
      </Typography>

      <Typography variant="subtitle1" sx={{ 
        mb: 6,
        textAlign: 'center',
        maxWidth: '800px',
        mx: 'auto',
        color: theme.palette.text.secondary
      }}>
        My path through education and professional development
      </Typography>

      <Box sx={{ 
        position: 'relative',
        mt: 8,
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: { xs: '50%', md: '50%' },
          transform: 'translateX(-50%)',
          width: '2px',
          bgcolor: theme.palette.primary.light,
          zIndex: 0
        }
      }}>
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.id} experience={experience} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
