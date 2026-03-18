const fs = require('fs');
const path = require('path');

const files = {
  'src/pages/News.tsx': `export default function News() {
  return (
    <div className=\"page-content container\">
      <div className=\"page-header\" style={{ borderRadius: '8px', marginBottom: '40px' }}>
        <h1>ข่าวสารและกิจกรรม</h1>
        <p>อัปเดตความเคลื่อนไหวล่าสุดจากโรงเรียนบ้านแม่ทราย</p>
      </div>
      <div style={{ display: 'grid', gap: '20px' }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{ display: 'flex', gap: '20px', border: '1px solid var(--light-gray)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ width: '150px', height: '100px', background: '#e5e7eb', flexShrink: 0 }}></div>
            <div>
              <h3 style={{ color: 'var(--primary)' }}>ข่าวประชาสัมพันธ์ที่ {i}</h3>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>ประกาศเมื่อ: 19 มีนาคม 2026</p>
              <p>รายละเอียดข่าวสารเบื้องต้น เพื่อแจ้งให้ทราบถึงกิจกรรมที่จะเกิดขึ้นในเร็วๆ นี้...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
  'src/pages/Teachers.tsx': `export default function Teachers() {
  return (
    <div className=\"page-content container\">
      <div className=\"page-header\" style={{ borderRadius: '8px', marginBottom: '40px' }}>
        <h1>ทำเนียบครูและบุคลากร</h1>
        <p>คณะครูผู้ทรงคุณวุฒิ โรงเรียนบ้านแม่ทราย</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {[1,2,3,4,5,6].map(i => (
          <div key={i} style={{ textAlign: 'center', padding: '20px', border: '1px solid var(--light-gray)', borderRadius: '8px' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#e5e7eb', margin: '0 auto 15px' }}></div>
            <h3 style={{ color: 'var(--primary)' }}>คุณครู ตัวอย่างที่ {i}</h3>
            <p style={{ color: '#666' }}>กลุ่มสาระการเรียนรู้</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
  'src/pages/Registration.tsx': `export default function Registration() {
  return (
    <div className=\"page-content container\">
      <div className=\"page-header\" style={{ borderRadius: '8px', marginBottom: '40px' }}>
        <h1>สมัครเรียนออนไลน์</h1>
        <p>เปิดรับสมัครนักเรียนใหม่ ปีการศึกษา 2569</p>
      </div>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--white)', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>ชื่อ-นามสกุล นักเรียน</label>
            <input type=\"text\" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder=\"ด.ช. / ด.ญ.\" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>ระดับชั้นที่ต้องการสมัคร</label>
            <select style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
              <option>อนุบาล 1</option><option>อนุบาล 2</option><option>อนุบาล 3</option>
              <option>ประถมศึกษาปีที่ 1</option><option>ประถมศึกษาปีที่ 4</option>
              <option>มัธยมศึกษาปีที่ 1</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>ชื่อ-นามสกุล ผู้ปกครอง</label>
            <input type=\"text\" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>เบอร์โทรศัพท์ติดต่อ</label>
            <input type=\"tel\" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <button type=\"submit\" className=\"btn btn-primary\" style={{ marginTop: '10px', width: '100%' }}>ส่งใบสมัคร</button>
        </form>
      </div>
    </div>
  );
}`,
  'src/App.tsx': `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            <Route path=\"/\" element={<Home />} />
            <Route path=\"/news\" element={<News />} />
            <Route path=\"/teachers\" element={<Teachers />} />
            <Route path=\"/register\" element={<Registration />} />
            <Route path=\"*\" element={<div className=\"page-header\"><h1>404</h1><p>ไม่พบหน้าที่ต้องการ</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}`
};

Object.entries(files).forEach(([filepath, content]) => {
  const fullPath = path.join('C:/Baan-Mae-Sai-Web/web', filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
});
console.log('Extra pages generated successfully.');
