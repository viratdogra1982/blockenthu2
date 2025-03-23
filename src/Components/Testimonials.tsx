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

const userTestimonials = [
  {
    avatar: (
      <Avatar
        alt="Remy Sharp"
        src="https://img.freepik.com/free-vector/communication-suggestion-testimonial-chat-bubble-design_1017-51370.jpg"
      />
    ),
    name: 'Remy Sharp',
    occupation: 'Senior Engineer',
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    avatar: (
      <Avatar
        alt="Travis Howard"
        src="https://img.freepik.com/free-psd/clients-feedback-testimonial-web-banner-social-media-post_505751-6114.jpg"
      />
    ),
    name: 'Travis Howard',
    occupation: 'Lead Product Designer',
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    avatar: (
      <Avatar
        alt="Cindy Baker"
        src="https://img.freepik.com/free-vector/bubble-quote-box-template-with-commas-design_1017-44234.jpg"
      />
    ),
    name: 'Cindy Baker',
    occupation: 'CTO',
    testimonial:
      'The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.',
  },
];

const logos = [
  'https://img.freepik.com/free-vector/speech-bubbles-with-smiley-faces_23-2147512509.jpg',
  'https://img.freepik.com/free-vector/speech-bubbles-with-smiley-faces_23-2147512509.jpg',
  'https://img.freepik.com/free-vector/speech-bubbles-with-smiley-faces_23-2147512509.jpg',
];

// Style for the rotating logo
const logoStyle = {
  width: '40px',
  opacity: 0.7,
  transition: 'opacity 0.3s ease',
};

export default function Testimonials() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        // Black background & thin horizontal line at the top
        backgroundColor: '#000',
        borderTop: '4px solid #1e1e1e',
        color: '#fff', // Make text white by default
      }}
    >
      <Container
        id="testimonials"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
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
                letterSpacing: '0.5px',
              }}
            >
              Testimonials
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#ccc', // Light grey for subtitle
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
                    minHeight: 350,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#1e1e1e', // Dark grey background
                    borderRadius: '16px',
                    border: '1px solid #2c2c2c',
                    boxShadow:
                      '6px 6px 12px rgba(0,0,0,0.5), -6px -6px 12px rgba(0,0,0,0.5)',
                    p: 3,
                    transition: 'box-shadow 0.3s ease',
                    '&:hover': {
                      boxShadow:
                        '10px 10px 20px rgba(0,0,0,0.7), -10px -10px 20px rgba(0,0,0,0.7)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#ccc',
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
                      mt: 4,
                    }}
                  >
                    {/* Avatar, Name, Occupation */}
                    <CardHeader
                      avatar={testimonial.avatar}
                      title={
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: '16px',
                            color: '#fff',
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                      }
                      subheader={
                        <Typography
                          sx={{
                            color: '#ccc',
                            fontSize: '14px',
                          }}
                        >
                          {testimonial.occupation}
                        </Typography>
                      }
                    />
                    {/* Rotating Logo */}
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
    </Box>
  );
}