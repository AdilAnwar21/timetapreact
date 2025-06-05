// App.tsx
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginForm from './pages/Login';
import ShopPage from './pages/ShopPage';
import ServiceDetails from './pages/Service';
import RegisterForm from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/shop/:id" element={<ShopPage />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
