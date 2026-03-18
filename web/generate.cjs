const fs = require('fs');
const path = require('path');

const files = {
  'src/index.css': `@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');
:root { --primary: #0b4a2e; --secondary: #d4af37; --bg: #f9fafb; --text: #333; --white: #fff; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Sarabun', sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.btn { display: inline-block; background: var(--secondary); color: var(--primary); padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-weight: 600; }
.btn-primary { background: var(--primary); color: var(--white); }
.page-header { background: var(--primary); color: var(--white); padding: 60px 0; text-align: center; }
.page-header h1 { color: var(--secondary); margin-bottom: 10px; }
.page-content { padding: 60px 0; min-height: 50vh; }
`,
  'src/components/Navbar.css': `
.navbar { background: var(--white); box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 15px 0; position: sticky; top: 0; z-index: 100; }
.nav-container { display: flex; justify-content: space-between; align-items: center; }
.logo { display: flex; align-items: center; gap: 10px; }
.logo-text { display: flex; flex-direction: column; }
.logo-title { font-weight: 700; font-size: 1.2rem; color: var(--primary); line-height: 1.2; }
.logo-subtitle { font-size: 0.8rem; color: #666; }
.nav-links { display: flex; gap: 20px; align-items: center; }
.nav-links a { font-weight: 500; transition: color 0.3s; }
.nav-links a:hover { color: var(--primary); }
.btn-nav { background: var(--primary); color: var(--white) !important; padding: 8px 15px; border-radius: 5px; }
`,
  'src/components/Footer.css': `
.footer { background: var(--primary); color: var(--white); padding: 40px 0 0; margin-top: auto; }
.footer-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-bottom: 30px; }
.footer-section h3 { color: var(--secondary); margin-bottom: 15px; }
.contact-info li { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.footer-bottom { background: #083823; text-align: center; padding: 15px 0; font-size: 0.9rem; }
`,
  'src/App.tsx': `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path=\"/\" element={<Home />} />
            <Route path=\"*\" element={<div className=\"page-header\"><h1>กำลังพัฒนา</h1><p>หน้านี้กำลังอยู่ระหว่างการจัดทำ</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;`,
  'src/components/Navbar.tsx': `import { Link } from 'react-router-dom';
import { School } from 'lucide-react';
import './Navbar.css';
export default function Navbar() {
  return (
    <header className=\"navbar\">
      <div className=\"container nav-container\">
        <Link to=\"/\" className=\"logo\">
          <School size={32} color=\"var(--secondary)\" />
          <div className=\"logo-text\">
            <span className=\"logo-title\">โรงเรียนบ้านแม่ทราย</span>
            <span className=\"logo-subtitle\">Baan Mae Sai School</span>
          </div>
        </Link>
        <nav className=\"nav-links\">
          <Link to=\"/\">หน้าแรก</Link>
          <Link to=\"/news\">ข่าวสาร</Link>
          <Link to=\"/teachers\">ทำเนียบครู</Link>
          <Link to=\"/register\" className=\"btn-nav\">สมัครเรียน</Link>
        </nav>
      </div>
    </header>
  );
}`,
  'src/components/Footer.tsx': `import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';
export default function Footer() {
  return (
    <footer className=\"footer\">
      <div className=\"container footer-container\">
        <div className=\"footer-section\">
          <h3>โรงเรียนบ้านแม่ทราย</h3>
          <p>มุ่งมั่นพัฒนาวิชาการ สืบสานวัฒนธรรม ก้าวล้ำเทคโนโลยี</p>
        </div>
        <div className=\"footer-section\">
          <h3>ติดต่อเรา</h3>
          <ul className=\"contact-info\">
            <li><MapPin size={18} /> 123 ม.1 ต.แม่ทราย อ.ร้องกวาง จ.แพร่</li>
            <li><Phone size={18} /> 054-123-4567</li>
          </ul>
        </div>
      </div>
      <div className=\"footer-bottom\"><p>&copy; 2026 Baan Mae Sai School.</p></div>
    </footer>
  );
}`,
  'src/pages/Home.tsx': `import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <section className=\"page-header\" style={{ padding: '100px 0', background: 'linear-gradient(rgba(11,74,46,0.9), rgba(11,74,46,0.8))' }}>
        <div className=\"container\">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>ยินดีต้อนรับสู่โรงเรียนบ้านแม่ทราย</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            สถาบันแห่งการเรียนรู้ที่ปลูกฝังคุณธรรมและความเป็นเลิศทางวิชาการ ภายใต้ร่มเงาโพธิ์ทอง
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <Link to=\"/register\" className=\"btn\">สมัครเรียนออนไลน์</Link>
            <Link to=\"/news\" className=\"btn btn-primary\" style={{ border: '1px solid var(--secondary)' }}>ข่าวสารล่าสุด</Link>
          </div>
        </div>
      </section>
      <section className=\"page-content container\">
        <h2 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '40px' }}>ข่าวสารและกิจกรรมเด่น</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ border: '1px solid var(--light-gray)', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#e5e7eb' }}></div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ marginBottom: '10px' }}>กิจกรรมวันสำคัญ {i}</h3>
                <p style={{ color: '#666', marginBottom: '15px' }}>รายละเอียดกิจกรรมเบื้องต้น เพื่อให้นักเรียนและผู้ปกครองทราบ...</p>
                <Link to=\"/news\" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>อ่านเพิ่มเติม →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}`,
  'src/main.tsx': `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`
};

Object.entries(files).forEach(([filepath, content]) => {
  const fullPath = path.join('C:/Baan-Mae-Sai-Web/web', filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
});
console.log('Files generated successfully.');
