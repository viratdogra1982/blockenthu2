import React, { useState } from "react";
import { 
  Box, Typography, Grid, Card, CardContent, CardActions, Button, 
  Container, Dialog, DialogTitle, DialogContent, DialogActions 
} from "@mui/material";

const blogPosts = [
  {
    title: "The Future of Web Development",
    date: "August 25, 2024",
    summary: "Explore the latest trends in web development and how they are shaping the future.",
  },
  {
    title: "Why React is Dominating Frontend",
    date: "July 12, 2024",
    summary: "A deep dive into why React continues to be the most popular frontend framework.",
  },
  {
    title: "Building Scalable Applications",
    date: "June 30, 2024",
    summary: "Learn best practices for creating scalable and efficient web applications.",
  },
];

const Blog: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleReadMore = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      id="blog"
      sx={{
        pt: 12,
        mt: 12, 
        backgroundColor: "#000",                // Solid black background
        borderTop: "4px solid #1e1e1e",         // Thin top border
        color: "#ffffff",
        py: 10,
        px: 2,
        minHeight: "100vh",
      }}
    >
      <Box textAlign="center" mb={5}>
        <Typography variant="h3" fontWeight="bold" color="#e2e8f0">
          Blog
        </Typography>
        <Typography variant="subtitle1" color="#94a3b8">
          Stay updated with the latest articles and insights.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#1e293b",
                  color: "#e2e8f0",
                  boxShadow: "none",
                  borderRadius: 3,
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    backgroundColor: "#334155",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="caption" color="#94a3b8">
                    {post.date}
                  </Typography>
                  <Typography variant="body2" color="#cbd5e1" mt={1}>
                    {post.summary}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: "bold",
                      backgroundColor: "#2563eb",
                      "&:hover": { backgroundColor: "#1d4ed8" },
                    }}
                    onClick={handleReadMore}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog 
        open={open} 
        onClose={handleClose} 
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#1e293b", 
            color: "#e2e8f0",
            borderRadius: 2,
          },
        }}
      >
        <DialogTitle fontWeight="bold" color="#e2e8f0">
          Sign Up Required
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" color="#cbd5e1">
            To read the full article, please sign up for an account.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              color: "#94a3b8",
              "&:hover": { backgroundColor: "#334155" },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert("Redirecting to Sign Up Page...")}
            sx={{
              backgroundColor: "#2563eb",
              "&:hover": { backgroundColor: "#1d4ed8" },
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Blog;