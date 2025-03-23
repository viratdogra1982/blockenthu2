'use client';

import * as React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { motion } from "framer-motion";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
    buttonColor: "primary",
  },
  {
    title: "Professional",
    subheader: "Recommended",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
      "Dedicated team",
      "Best deals",
    ],
    buttonText: "Start now",
    buttonVariant: "contained",
    buttonColor: "secondary",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
    buttonColor: "primary",
  },
];

export default function Pricing() {
  const [openPricingDialog, setOpenPricingDialog] = React.useState(false);

  const handleStartNow = () => {
    alert("Please sign up to start now");
    setOpenPricingDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenPricingDialog(false);
  };

  return (
    <Box
      id="pricing"
      sx={{
        pt: { xs: 6, sm: 12 },
        pb: { xs: 8, sm: 16 },
        // Dark background to match FAQ boxes
        bgcolor: "#000",
        color: "white",
        borderTop: (theme) =>
          `4px solid ${theme.palette.mode === "light" ? "#e0e0e0" : "#333"}`,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            width: { xs: "90%", md: "60%" },
            textAlign: "center",
            mb: 4,
            mx: "auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              component="h2"
              variant="h4"
              fontWeight={700}
              gutterBottom
              sx={{
                color: "white",
                letterSpacing: "0.5px",
              }}
            >
              Flexible Pricing Plans
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "grey.400",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Choose the plan that fits your needs and upgrade anytime to unlock premium
              features.
            </Typography>
          </motion.div>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={4} justifyContent="center">
          {tiers.map((tier, index) => (
            <Grid
              item
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
              key={tier.title}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // Slightly lighter dark background for the card
                    backgroundColor: "#1e1e1e",
                    borderRadius: "16px",
                    boxShadow:
                      "6px 6px 12px rgba(0,0,0,0.5), -6px -6px 12px rgba(0,0,0,0.5)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      boxShadow:
                        "10px 10px 20px rgba(0,0,0,0.7)",
                    },
                    color: "#fff",
                  }}
                >
                  <CardContent>
                    {/* Title & Optional Badge */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Typography component="h3" variant="h5" fontWeight={600}>
                        {tier.title}
                      </Typography>
                      {tier.title === "Professional" && (
                        <Chip
                          icon={<AutoAwesomeIcon />}
                          label={tier.subheader}
                          size="small"
                          sx={{
                            color: "#fff",
                            backgroundColor: "#e63946",
                          }}
                        />
                      )}
                    </Box>

                    {/* Price */}
                    <Box sx={{ display: "flex", alignItems: "baseline", mb: 2 }}>
                      <Typography component="h2" variant="h3" fontWeight={700}>
                        ${tier.price}
                      </Typography>
                      <Typography
                        component="h3"
                        variant="h6"
                        sx={{
                          ml: 0.5,
                          color: "#ccc",
                        }}
                      >
                        / month
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 2, borderColor: "#444" }} />

                    {/* Features */}
                    {tier.description.map((line) => (
                      <Box key={line} sx={{ display: "flex", gap: 1.5, py: 0.5 }}>
                        <CheckCircleRoundedIcon
                          sx={{
                            fontSize: 20,
                            color: "#4caf50",
                          }}
                        />
                        <Typography variant="body2" sx={{ color: "#ccc" }}>
                          {line}
                        </Typography>
                      </Box>
                    ))}
                  </CardContent>

                  {/* Action Button */}
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant as "outlined" | "contained"}
                      color={tier.buttonColor as "primary" | "secondary"}
                      sx={{
                        borderRadius: 2,
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow:
                            tier.buttonVariant === "contained"
                              ? "0px 8px 16px rgba(0,0,0,0.3)"
                              : "0px 4px 12px rgba(0,0,0,0.2)",
                        },
                      }}
                      onClick={
                        tier.title === "Professional" ? handleStartNow : undefined
                      }
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Pricing Dialog */}
      <Dialog open={openPricingDialog} onClose={handleCloseDialog}>
        <DialogTitle>Sign Up Required</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            To start using our Professional plan, please sign up for an account.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={() => alert("Redirecting to Sign Up Page...")}>
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
