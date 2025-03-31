import { Box, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub, ArrowRight } from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();

  const contactMethods = [
    {
      icon: <Email sx={{ fontSize: 30 }} />,
      name: "Email",
      value: "lilybmallya@gmail.com",
      action: "mailto:lilybmallya@gmail.com",
      color: theme.palette.primary.main
    },
    {
      icon: <LinkedIn sx={{ fontSize: 30 }} />,
      name: "LinkedIn",
      value: "in/lilianmallya",
      action: "https://linkedin.com/in/lilianmallya",
      color: "#0A66C2"
    },
    {
      icon: <GitHub sx={{ fontSize: 30 }} />,
      name: "GitHub",
      value: "@LilianMallya",
      action: "https://github.com/LilianMallya",
      color: theme.palette.mode === 'dark' ? '#f5f5f5' : '#333'
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        px: { xs: 3, md: 6 },
        py: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      {/* Visual Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '3rem' }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Reach Out
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'text.secondary',
            maxWidth: '500px'
          }}
        >
          Here's how you can get in touch with me directly
        </Typography>
      </motion.div>

      {/* Contact Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: 3,
          width: '100%',
          maxWidth: '800px'
        }}
      >
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Button
              component="a"
              href={method.action}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                textTransform: 'none',
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                  transform: 'translateY(-5px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  backgroundColor: `${method.color}20`,
                  color: method.color
                }}
              >
                {method.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                {method.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                {method.value}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: method.color,
                  mt: 1
                }}
              >
                <Typography variant="caption" sx={{ mr: 0.5 }}>
                  Open
                </Typography>
                <ArrowRight sx={{ fontSize: 16 }} />
              </Box>
            </Button>
          </motion.div>
        ))}
      </Box>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ marginTop: '4rem' }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'text.disabled',
            display: 'block',
            maxWidth: '500px'
          }}
        >
          I make an effort to respond to all messages within 24 hours.
          Looking forward to connecting with you!
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Contact;
