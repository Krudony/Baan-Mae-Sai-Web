export default function Teachers() {
  return (
    <div className="page-content container">
      <div className="page-header" style={{ borderRadius: '8px', marginBottom: '40px' }}>
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
}