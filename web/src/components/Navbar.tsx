import { Link } from 'react-router-dom';
import { School } from 'lucide-react';
import './Navbar.css';
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <School size={32} color="var(--secondary)" />
          <div className="logo-text">
            <span className="logo-title">โรงเรียนบ้านแม่ทราย</span>
            <span className="logo-subtitle">Baan Mae Sai School</span>
          </div>
        </Link>
        <nav className="nav-links">
          <Link to="/">หน้าแรก</Link>
          <Link to="/news">ข่าวสาร</Link>
          <Link to="/teachers">ทำเนียบครู</Link>
          <Link to="/register" className="btn-nav">สมัครเรียน</Link>
        </nav>
      </div>
    </header>
  );
}