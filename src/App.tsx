import NavBar from './Components/NavBar/NavBar.tsx';
import { Container, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home.tsx';
import AddPost from './Containers/AddPost/AddPost.tsx';
import About from './Containers/About/About.tsx';
import Contacts from './Containers/Contacts/Contacts.tsx';
import ReadMore from './Containers/ReadMore/ReadMore.tsx';
import EditPost from './Containers/EditPost/EditPost.tsx';

const App = () => (
  <>
    <header>
      <NavBar/>
    </header>
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/posts" element={<Home/>}></Route>
        <Route path="/posts/add-post" element={<AddPost/>}></Route>
        <Route path="/posts/about" element={<About/>}></Route>
        <Route path="/posts/contacts" element={<Contacts/>}></Route>
        <Route path="/posts/:idPost" element={<ReadMore/>}></Route>
        <Route path="/posts/:idPost/edit" element={<EditPost/>}></Route>
        <Route path="*" element={<Typography variant="h6">Not found</Typography>}></Route>
      </Routes>
    </Container>
  </>
);

export default App;
