'use client';

import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name: 'Remy Sharp',
    occupation: 'Senior Engineer',
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
    name: 'Travis Howard',
    occupation: 'Lead Product Designer',
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
    name: 'Cindy Baker',
    occupation: 'CTO',
    testimonial:
      'The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.',
  },
];

const logoStyle = {
  width: '40px',
  opacity: 0.7,
  transition: 'opacity 0.3s ease',
};

export default function Testimonials() {
  const theme = useTheme();

  const logos =
    theme.palette.mode === 'light'
      ? [
          '/static/images/logo1-dark.svg',
          '/static/images/logo2-dark.svg',
          '/static/images/logo3-dark.svg',
        ]
      : [
          '/static/images/logo1-light.svg',
          '/static/images/logo2-light.svg',
          '/static/images/logo3-light.svg',
        ];

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
        backgroundColor: theme.palette.mode === 'light' ? '#f9f9f9' : '#121212',
      }}
    >
      {/* Header Section */}
      <Box sx={{ width: '100%', textAlign: 'center', mb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: theme.palette.mode === 'light' ? '#333' : '#fff',
              letterSpacing: '0.5px',
            }}
          >
            Testimonials
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            See what our customers love about our products. Discover how we excel in
            efficiency, durability, and satisfaction.
          </Typography>
        </motion.div>
      </Box>

      {/* Testimonials Cards */}
      <Grid container spacing={3} alignItems="stretch">
  {userTestimonials.map((testimonial, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.2 }}
      >
        <Card
          variant="outlined"
          sx={{
            height: '100%', // Ensures all cards have equal height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: theme.palette.mode === 'light'
              ? 'linear-gradient(145deg, #ffffff, #f1f1f1)'
              : 'linear-gradient(145deg, #1e1e1e, #2c2c2c)',
            borderRadius: '20px',
            boxShadow: theme.palette.mode === 'light'
              ? '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff'
              : '6px 6px 12px #0f0f0f, -6px -6px 12px #2c2c2c',
            padding: '24px',
            '&:hover': {
              boxShadow: theme.palette.mode === 'light'
                ? '10px 10px 20px #d1d1d1, -10px -10px 20px #ffffff'
                : '10px 10px 20px #0f0f0f, -10px -10px 20px #2c2c2c',
            },
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontStyle: 'italic',
                fontSize: '16px',
                lineHeight: '1.5',
              }}
            >
              "{testimonial.testimonial}"
            </Typography>
          </CardContent>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 4
            }}
          >
            <CardHeader
              avatar={testimonial.avatar}
              title={
                <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>
                  {testimonial.name}
                </Typography>
              }
              subheader={
                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: '16px',
                  }}
                >
                  {testimonial.occupation}
                </Typography>
              }
            />
            <motion.img
              src={logos[index]}
              alt={`Logo ${index + 1}`}
              style={logoStyle}
              whileHover={{ opacity: 1 }}
            />
          </Box>
        </Card>
      </motion.div>
    </Grid>
  ))}
</Grid>


    </Container>
  );
}