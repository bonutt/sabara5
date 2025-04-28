import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Index2 from './pages/Index2';
import Index4 from './pages/Index4';
import Index3 from './pages/Index3';
import Index6 from './pages/Index6';
import Index5 from './pages/Index5';
import Menu from './pages/Menu';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index2" element={<Index2 />} />
          <Route path="/index3" element={<Index3 />} />
          <Route path="/index4" element={<Index4 />} />
          <Route path="/index5" element={<Index5 />} />
          <Route path="/index6" element={<Index6 />} />
          <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
