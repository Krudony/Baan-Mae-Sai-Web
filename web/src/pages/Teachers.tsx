export default function Teachers() {
  const teachers = [
    { name: 'ผอ. สมศักดิ์ ใจดี', role: 'ผู้อำนวยการโรงเรียน', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400' },
    { name: 'ครูสมศรี มีสุข', role: 'หัวหน้าฝ่ายวิชาการ', img: 'https://images.unsplash.com/photo-1544717305-27a734ef1904?q=80&w=400' },
    { name: 'ครูปัญญา ฉลาดล้ำ', role: 'กลุ่มสาระวิทยาศาสตร์', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400' },
    { name: 'ครูมาลี รักเรียน', role: 'กลุ่มสาระภาษาไทย', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400' }
  ];
  return (
    <div className="page-content container">
      <div className="page-header" style={{ borderRadius: '15px', marginBottom: '50px', backgroundImage: 'linear-gradient(rgba(11,74,46,0.8), rgba(11,74,46,0.8)), url("https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000")', backgroundSize: 'cover' }}>
        <h1 style={{ color: 'var(--secondary)' }}>ทำเนียบครูและบุคลากร</h1>
        <p>คณะครูผู้ทรงคุณวุฒิที่พร้อมจะมอบความรู้และดูแลบุตรหลานของท่าน</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        {teachers.map((t, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundImage: "url(" + t.img + ")", backgroundSize: 'cover', backgroundPosition: 'center', margin: '0 auto 20px', border: '4px solid var(--secondary)' }}></div>
            <h3 style={{ color: 'var(--primary)' }}>{t.name}</h3>
            <p style={{ color: '#666' }}>{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}