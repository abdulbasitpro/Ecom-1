import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import Dashboard from './pages/Dashboard';
import Watermark from './components/Watermark';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router>
      <div className="min-h-screen bg-white flex flex-col scroll-smooth">
        <Watermark />
        <AnnouncementBar />

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dashbord" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
