import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/Components/LandingPage';
import MapDemo from '../src/Components/MapDemo';
import Navbar from './NavBar';

function App() {
  return (
    <Router>
     <div className="min-h-screen bg-white">
      <Navbar></Navbar>
        <div className="flex overflow-auto justify-center items-center">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/demo" element={<MapDemo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}



export default App;
