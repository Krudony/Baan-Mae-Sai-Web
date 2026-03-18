import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <section className="page-header" style={{ padding: '100px 0', background: 'linear-gradient(rgba(11,74,46,0.9), rgba(11,74,46,0.8))' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>ยินดีต้อนรับสู่โรงเรียนบ้านแม่ทราย</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            สถาบันแห่งการเรียนรู้ที่ปลูกฝังคุณธรรมและความเป็นเลิศทางวิชาการ ภายใต้ร่มเงาโพธิ์ทอง
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <Link to="/register" className="btn">สมัครเรียนออนไลน์</Link>
            <Link to="/news" className="btn btn-primary" style={{ border: '1px solid var(--secondary)' }}>ข่าวสารล่าสุด</Link>
          </div>
        </div>
      </section>
      <section className="page-content container">
        <h2 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '40px' }}>ข่าวสารและกิจกรรมเด่น</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ border: '1px solid var(--light-gray)', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#e5e7eb' }}></div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ marginBottom: '10px' }}>กิจกรรมวันสำคัญ {i}</h3>
                <p style={{ color: '#666', marginBottom: '15px' }}>รายละเอียดกิจกรรมเบื้องต้น เพื่อให้นักเรียนและผู้ปกครองทราบ...</p>
                <Link to="/news" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>อ่านเพิ่มเติม →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}