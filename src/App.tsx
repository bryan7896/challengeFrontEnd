import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Results from './components/results/Results';
import Details from './components/details/Details';
import Search from './components/search/Search';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Search} />
        <Route path="/results" Component={Results} />
        <Route path="/details" Component={Details} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;