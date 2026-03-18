import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Teachers from './pages/Teachers';
import Registration from './pages/Registration';
import './index.css';

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/register" element={<Registration />} />
            <Route path="*" element={<div className="page-header"><h1>404</h1><p>ไม่พบหน้าที่ต้องการ</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}