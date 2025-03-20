import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import Spline from '@splinetool/react-spline';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: 16, // Rounded corners for modern look
  border: '1px solid',
  borderColor: theme.palette.divider,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  backgroundSize: 'cover',
  transition: 'transform 0.3s ease',

  '&:hover': {
    transform: 'scale(1.02)', // Smooth hover effect
  },

  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 600,
  },
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 100% 50% at 50% -20%, hsl(210, 80%, 96%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 100% 50% at 50% -20%, hsl(210, 40%, 20%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        {/* Heading */}
        <Stack
          spacing={3}
          useFlexGap
          sx={{
            alignItems: 'center',
            width: { xs: '100%', sm: '70%' },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'text.primary',
            }}
          >
            Our&nbsp;latest&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                ...theme.applyStyles('dark', {
                  color: theme.palette.primary.light,
                }),
              })}
            >
              Super Exchange
            </Typography>
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}
          >
            We are a transparent cryptocurrency exchange offering lightning-fast crypto buying and selling services, enhanced by seamless chain abstraction capabilities, ensuring smooth transactions across multiple blockchains for a superior user experience.
          </Typography>

          {/* Email Input and Button */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '400px' } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="medium"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              fullWidth
              InputProps={{
                sx: {
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="medium"
              sx={{
                minWidth: 'fit-content',
                borderRadius: '8px',
                fontWeight: 'bold',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              Start Now
            </Button>
          </Stack>

          {/* Caption */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: 'center', mt: 1 }}
          >
            Register now to get <strong>$50 worth of rewards</strong>.
          </Typography>
        </Stack>

        {/* Spline Animation */}
        <StyledBox id="image">
          <Spline scene="https://prod.spline.design/uqQX7OKE6JBelAcD/scene.splinecode" />
        </StyledBox>
      </Container>
    </Box>
  );
}
