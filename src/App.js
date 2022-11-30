import Home from './pages/home/home';
import { Route, Routes } from 'react-router-dom';
import Resume from './pages/resume/resume';
import React from 'react';
import { Container } from '@mui/system';

function App() {
  return (
    <Container>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        {/* <Route 
          path='/projects'
          element={<p>Projects works!</p>}
        /> */}
        {/* <Route 
          path='/blog'
          element={<p>Blog works!</p>}
        /> */}
        <Route 
          path='/resume'
          element={<Resume />}
        />
        <Route 
          path='*'
          element={<p>Not Found.</p>}
        />
      </Routes>
    </Container>
  );
}

export default App;
