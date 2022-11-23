import Home from './pages/home/home';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Resume from './pages/resume/resume';
import React from 'react';

function App() {
  return (
    <div style={{'display':'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh'}}>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route 
          path='/projects'
          element={<p>Projects works!</p>}
        />
        <Route 
          path='/blog'
          element={<p>Blog works!</p>}
        />
        <Route 
          path='/resume'
          element={<Resume />}
        />
        <Route 
          path='*'
          element={<p>Not Found.</p>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
