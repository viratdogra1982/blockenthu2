import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  Grid,
} from '@mui/material';

const blogPosts = [
  {
    id: 1,
    title: 'Mastering React: Tips and Tricks',
    description:
      'React is a powerful JavaScript library for building user interfaces. In this post, we will explore...',
    content:
      'React is a powerful JavaScript library for building user interfaces. In this post, we will explore some of the best tips and tricks to optimize your React applications, improve performance, and write clean code.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZX5V66Hzf2YxB1yNxrhk1uqXUwj4-ZCsbJ65x-CQa4YYZ8hZOGQxoPac&s',
  },
  {
    id: 2,
    title: 'Understanding TypeScript with React',
    description:
      'TypeScript is becoming the go-to language for React development. Let’s take a deep dive into...',
    content:
      'TypeScript is becoming the go-to language for React development. Let’s take a deep dive into how TypeScript improves type safety, enhances code readability, and helps catch bugs early.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSabVkBm2MtDdp20avKK-DYVlj05J1hDBQ7CAxH6zKrPdJ4MY3ygzsMw&s',
  },
  {
    id: 3,
    title: 'State Management in React with Redux',
    description:
      'Managing state in a large-scale React application can be tricky. Learn how Redux simplifies state...',
    content:
      'Managing state in a large-scale React application can be tricky. Learn how Redux simplifies state management and helps create predictable state transitions in your React apps.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nT_jXPLbbirVvNQCq1uE44PR-pBULk_ZzgcXJPfSW0scjFdxoRFy-MI&s',
  },
];

export default function Blog() {
  const [expandedPost, setExpandedPost] = React.useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <Container
      id="blog"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'text.primary',
          mb: 4,
        }}
      >
        Latest Blogs
      </Typography>

      <Grid container spacing={3}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: 3,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {expandedPost === post.id
                    ? post.content
                    : `${post.description.substring(0, 80)}...`}
                </Typography>
                <Button
                  onClick={() => handleToggle(post.id)}
                  size="small"
                  sx={{
                    mt: 1,
                    color: 'primary.main',
                    textTransform: 'none',
                  }}
                >
                  {expandedPost === post.id ? 'Read Less' : 'Read More'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
