import { Box, Container, Typography } from '@mui/material';


const Contacts = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact me
        </Typography>
        <Typography variant="body1">
          You can reach me through the following methods:
        </Typography>
        <hr/>
        <Typography variant="body1">
          <strong>Email:</strong> example@email.com
        </Typography>
        <Typography variant="body1">
          <strong>Phone:</strong> +1 123 456-789
        </Typography>
        <Typography variant="body1">
          <strong>Address:</strong> 123 street, BL 12345
        </Typography>
      </Box>
    </Container>
  );
};

export default Contacts;