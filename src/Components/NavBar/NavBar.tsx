import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" variant="h6" to="/" component={NavLink} sx={{ flexGrow: 1, textDecoration: "none" }}>
            My blog
          </Typography>

          <Button color="inherit" to="/" component={NavLink}>Home</Button>
          <Button color="inherit" to="/posts/add-post" component={NavLink}>Add</Button>
          <Button color="inherit" to="/posts/about" component={NavLink}>About</Button>
          <Button color="inherit" to="/posts/contacts" component={NavLink}>Contacts</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;