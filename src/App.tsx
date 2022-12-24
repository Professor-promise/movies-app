import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Movies from './components/Movies';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <LandingPage />
      <Movies />
    </div>
  );
}

export default App;
