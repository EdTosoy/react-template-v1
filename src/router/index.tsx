import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login/Login';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Login />} />
        {/* <Route path="/dashboard" element={<MainLayout />}>
          <Route path="index" element={<Dashboard />} />
        </Route> */}

        {/* Fallback Route */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
