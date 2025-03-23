"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { motion } from "framer-motion";

const faqs = [
  {
    id: "faq1",
    question: "How do I contact customer support if I have a question or issue?",
    answer:
      "You can reach our customer support team by emailing support@email.com...",
  },
  {
    id: "faq2",
    question: "Can I return the product if it doesn't meet my expectations?",
    answer:
      "Absolutely! We offer a hassle-free return policy. If you're not completely satisfied...",
  },
  {
    id: "faq3",
    question: "What makes your product stand out from others in the market?",
    answer:
      "Our product distinguishes itself through its adaptability, durability, and innovative features...",
  },
  {
    id: "faq4",
    question: "Is there a warranty on the product, and what does it cover?",
    answer:
      "Yes, our product comes with a [length of warranty] warranty. It covers defects in materials...",
  },
];

export default function FAQCards() {
  // Removed unused variable 'selectedFAQId'
  const [openDialog, setOpenDialog] = React.useState(false);
  const navigate=useNavigate();

  // Renamed parameter from 'id' to '_id' to indicate it's unused.
  const handleOpenDialog = (_id: string) => {
    alert("Please sign up to see the full answer.");
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box
        component="section"
        sx={{
          width: "100%",
          backgroundColor: "#000", // Black background
          borderTop: "4px solid #1e1e1e", // Thin horizontal line at the top
          color: "#fff",
        }}
      >
        <Container
          id="faq"
          sx={{
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {/* Header Section */}
          <Typography
            component="h2"
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              mb: 4,
            }}
          >
            Frequently Asked Questions
          </Typography>

          {/* FAQ Cards */}
          <Grid container spacing={3}>
            {faqs.map((faq) => (
              <Grid item xs={12} sm={6} md={3} key={faq.id}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      p: 3,
                      backgroundColor: "#1e1e1e", // Dark grey card background
                      borderRadius: "16px",
                      border: "1px solid #2c2c2c",
                      boxShadow: 3,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        boxShadow:
                          "10px 10px 20px rgba(0,0,0,0.7), -10px -10px 20px rgba(0,0,0,0.7)",
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: "medium", color: "#fff" }}
                      >
                        {faq.question}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#ccc", // Light grey for the answer text
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </CardContent>
                    <Button
                      onClick={() => handleOpenDialog(faq.id)}
                      size="small"
                      sx={{
                        mt: 1,
                        textTransform: "none",
                        color: "#3b82f6", // Accent color for button text
                        "&:hover": {
                          color: "#06b6d4",
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Dialog for Sign Up */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Sign Up Required</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            To see the full answer, please sign up for an account.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={() => navigate('/signup')}>
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}