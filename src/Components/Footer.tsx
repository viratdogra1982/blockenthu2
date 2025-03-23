import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

function Copyright() {
  
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://mui.com/">
        Sitemark
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        // Move the entire section up by 40px
        mt: "-40px",
        // Add 40px top padding so your content doesn't get cut off
        pt: "80px",
    
        backgroundColor: "#000",
        color: "#ffffff",
        minHeight: "100vh",
    
        // The horizontal line
        borderTop: "4px solid #1e1e1e",
      }}
    >
      <Container>
        {/* Top Section */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* Newsletter Section */}
          <Box sx={{ width: { xs: '100%', sm: '40%' } }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Join the newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Subscribe for weekly updates. No spams ever!
            </Typography>
            <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
              <TextField
                id="email-newsletter"
                size="small"
                fullWidth
                placeholder="Your email address"
                inputProps={{
                  'aria-label': 'Enter your email address',
                  autoComplete: 'off',
                }}
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>

          {/* Navigation Section */}
          <Stack
            direction="row"
            spacing={6}
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            {/* Product Links */}
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Product
              </Typography>
              <Link href="#" color="text.secondary" variant="body2">
                Features
              </Link>
              <Link href="#" color="text.secondary" variant="body2">
                Testimonials
              </Link>
              <Link href="#" color="text.secondary" variant="body2">
                Pricing
              </Link>
              <Link href="#" color="text.secondary" variant="body2">
                FAQs
              </Link>
            </Stack>

            {/* Company Links */}
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Company
              </Typography>
              <Link href="#" color="text.secondary" variant="body2">
                About us
              </Link>
              <Link href="#" color="text.secondary" variant="body2">
                Careers
              </Link>
              <Link href="#" color="text.secondary" variant="body2">
                Press
              </Link>
            </Stack>

            {/* Legal Links */}
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Legal
              </Typography>
              <Link href="#" color="text.secondary" variant="body2">
                Terms
              </Link>
              <Link href="#" color="text.secondary" variant="body2">
                Privacy
              </Link>
              <Link href="#" color="text.secondary" variant="body2">
                Contact
              </Link>
            </Stack>
          </Stack>
        </Stack>

        {/* Divider */}
        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: 'divider',
            mt: 6,
            pt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Copyright */}
          <Box>
            <Link href="#" color="text.secondary" variant="body2">
              Privacy Policy
            </Link>
            <Typography sx={{ display: 'inline', mx: 1, opacity: 0.5 }}>
              •
            </Typography>
            <Link href="#" color="text.secondary" variant="body2">
              Terms of Service
            </Link>
            <Copyright />
          </Box>

          {/* Social Media Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton
              color="inherit"
              size="small"
              href="https://github.com/mui"
              aria-label="GitHub"
              sx={{
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  color: 'primary.main',
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://x.com/MaterialUI"
              aria-label="Twitter"
              sx={{
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  color: 'primary.main',
                },
              }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://www.linkedin.com/company/mui/"
              aria-label="LinkedIn"
              sx={{
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  color: 'primary.main',
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

