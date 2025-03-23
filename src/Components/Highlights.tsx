"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import { useNavigate } from "react-router-dom";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon fontSize="large" />,
    title: "Adaptable performance",
    description:
      "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
  },
  {
    icon: <ConstructionRoundedIcon fontSize="large" />,
    title: "Built to last",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
  },
  {
    icon: <ThumbUpAltRoundedIcon fontSize="large" />,
    title: "Great user experience",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
  },
  {
    icon: <AutoFixHighRoundedIcon fontSize="large" />,
    title: "Innovative functionality",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
  },
  {
    icon: <SupportAgentRoundedIcon fontSize="large" />,
    title: "Reliable support",
    description:
      "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
  },
  {
    icon: <QueryStatsRoundedIcon fontSize="large" />,
    title: "Precision in every detail",
    description:
      "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.",
  },
];

export default function Highlights() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = React.useState(false);

  // Renamed parameter to _title to indicate it's unused.
  const handleCardClick = (_title: string) => {
    alert("Please sign up to continue");
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <Box
        id="highlights"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                width: { xs: "90%", md: "60%" },
                textAlign: "center",
                mb: 4,
                mx: "auto",
              }}
            >
              <Typography
                component="h2"
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Highlights
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "grey.400",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Explore why our product stands out: adaptability, durability, user-friendly
                design, and innovation. Enjoy reliable customer support and precision in every
                detail.
              </Typography>
            </Box>
          </motion.div>

          {/* Highlight Cards */}
          <Grid container spacing={4}>
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleCardClick(item.title)}
                >
                  <Card
                    sx={{
                      height: "100%",
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 2,
                      backgroundColor: "background.paper",
                      color: "#fff",
                      borderRadius: "16px",
                      boxShadow:
                        "6px 6px 12px rgba(0,0,0,0.5), -6px -6px 12px rgba(0,0,0,0.5)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow:
                          "10px 10px 20px rgba(0,0,0,0.7), -10px -10px 20px rgba(0,0,0,0.7)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "#333",
                        borderRadius: "50%",
                        width: 56,
                        height: 56,
                        mx: "auto",
                        opacity: 0.9,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      component="h3"
                      variant="h6"
                      fontWeight={600}
                      align="center"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "grey.400",
                        textAlign: "center",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Dialog for Sign Up */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Sign Up Required</DialogTitle>
          <DialogContent>
            <Typography>To continue, please sign up for an account.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button variant="contained" onClick={handleSignUp}>
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}