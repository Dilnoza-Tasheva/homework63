import { Box, Container, Typography } from '@mui/material';


const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          About my blog
        </Typography>
        <Typography variant="body1">
          Welcome to my blog application! Here you can read and share your thoughts.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;