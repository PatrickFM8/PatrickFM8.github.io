import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './LandingPage';
import MapDemo from './MapDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<MapDemo />} />
      </Routes>
    </Router>
  );
}


export default App;
