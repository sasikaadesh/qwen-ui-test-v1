import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardView from './components/Dashboard/DashboardView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardView />} />
      </Routes>
    </Router>
  );
}

export default App;