import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
  {
    title: 'Professional',
    subheader: 'Recommended',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
      'Dedicated team',
      'Best deals',
    ],
    buttonText: 'Start now',
    buttonVariant: 'contained',
    buttonColor: 'secondary',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 6, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
          width: { sm: '100%', md: '60%' },
        }}
      >
        <Typography
          component="h2"
          variant="h3"
          fontWeight={700}
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Flexible Pricing Plans
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Choose the plan that fits your needs and upgrade anytime to unlock premium features.
        </Typography>
      </Box>

      {/* Pricing Cards */}
      <Grid container spacing={4} justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            xs={12}
            sm={tier.title === 'Enterprise' ? 12 : 6}
            md={4}
            key={tier.title}
          >
            <Card
              sx={{
                p: 4,
                borderRadius: 4,
                boxShadow: tier.title === 'Professional' ? '0px 8px 24px rgba(0,0,0,0.12)' : '0px 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                backgroundColor:
                  tier.title === 'Professional' ? 'linear-gradient(135deg, #1d3557 0%, #457b9d 100%)' : 'background.paper',
                color: tier.title === 'Professional' ? '#fff' : 'inherit',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0px 12px 36px rgba(0,0,0,0.2)',
                },
              }}
            >
              <CardContent>
                {/* Title + Badge */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Typography component="h3" variant="h5" fontWeight={600}>
                    {tier.title}
                  </Typography>
                  {tier.title === 'Professional' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        color: '#fff',
                        backgroundColor: '#e63946',
                      }}
                    />
                  )}
                </Box>

                {/* Price */}
                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                  <Typography component="h2" variant="h3" fontWeight={700}>
                    ${tier.price}
                  </Typography>
                  <Typography
                    component="h3"
                    variant="h6"
                    sx={{
                      ml: 0.5,
                      color: tier.title === 'Professional' ? 'grey.200' : 'text.secondary',
                    }}
                  >
                    / month
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Features */}
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      py: 0.5,
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        fontSize: 20,
                        color: tier.title === 'Professional' ? 'success.light' : 'primary.main',
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: tier.title === 'Professional' ? 'grey.300' : 'text.primary',
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>

              {/* Button */}
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant as 'outlined' | 'contained'}
                  color={tier.buttonColor as 'primary' | 'secondary'}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: tier.buttonVariant === 'contained' ? '0px 8px 16px rgba(0,0,0,0.3)' : '0px 4px 12px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
