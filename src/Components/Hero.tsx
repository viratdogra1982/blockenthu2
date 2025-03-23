import { useState } from "react";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  const [email, setEmail] = useState(""); // State to track email input

  const handleClick = () => {
    if (!email) {
      alert("Please enter your email!"); // Alert if email is empty
      return;
    }
    console.log("User Email:", email);
    alert(`Welcome! We'll contact you at ${email}`);
    // You can also navigate or trigger an API call here
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Black background
        backgroundColor: "#000000",
        // Thin horizontal line at the top
        borderTop: "4px solid #1e1e1e",
      }}
    >
      <Container maxWidth="md">
        <Stack
          spacing={5}
          alignItems="center"
          textAlign="center"
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: "bold",
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            The Future of Crypto Exchange
          </Typography>

          <Typography
            sx={{
              fontSize: "1.2rem",
              color: "#cbd5e1",
              maxWidth: "600px",
            }}
          >
            Fast, Secure, and Limitless Trading. Your gateway to the decentralized future.
          </Typography>

          {/* Email Input & CTA Button */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={2}
            sx={{
              width: "100%",
              maxWidth: "500px",
              alignItems: "center",
              flexGrow: 0,
            }}
          >
            <TextField
              placeholder="Enter your email"
              fullWidth
              size="medium"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                input: { color: "#ffffff", padding: "12px" },
                boxShadow: "none",
                "& fieldset": { border: "none" },
                "& .MuiOutlinedInput-root": {
                  background: "transparent",
                  "&:hover fieldset": { border: "none" },
                  "&.Mui-focused fieldset": { border: "none" },
                },
              }}
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleClick}
                sx={{
                  background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  px: 4,
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}