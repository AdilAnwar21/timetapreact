// App.tsx
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginForm from './pages/Login';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/login" element={<ShopPage />} /> */}
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
