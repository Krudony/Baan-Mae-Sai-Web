import { Link } from 'react-router-dom';
export default function Home() {
  const newsItems = [
    { id: 1, title: 'กิจกรรมวันสถาปนาโรงเรียน', img: 'https://images.unsplash.com/photo-1523050853063-bd80e274096d?q=80&w=800' },
    { id: 2, title: 'พิธีมอบทุนการศึกษา 2569', img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800' },
    { id: 3, title: 'ค่ายวิทยาศาสตร์สร้างสรรค์', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800' }
  ];
  return (
    <div>
      <section className="page-header" style={{ 
        padding: '120px 0', 
        backgroundImage: 'linear-gradient(rgba(11,74,46,0.8), rgba(11,74,46,0.7)), url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>ยินดีต้อนรับสู่โรงเรียนบ้านแม่ทราย</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 40px' }}>
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
          {newsItems.map(item => (
            <div key={item.id} style={{ border: '1px solid var(--light-gray)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ height: '220px', backgroundImage: "url(" + item.img + ")", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ marginBottom: '12px', color: 'var(--primary)' }}>{item.title}</h3>
                <p style={{ color: '#666', marginBottom: '15px' }}>คณะครูและนักเรียนร่วมกันจัดกิจกรรมเพื่อส่งเสริมการเรียนรู้และความสามัคคี...</p>
                <Link to="/news" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>อ่านเพิ่มเติม →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}