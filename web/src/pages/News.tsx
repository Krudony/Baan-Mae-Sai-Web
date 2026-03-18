export default function News() {
  return (
    <div className="page-content container">
      <div className="page-header" style={{ borderRadius: '8px', marginBottom: '40px' }}>
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
}