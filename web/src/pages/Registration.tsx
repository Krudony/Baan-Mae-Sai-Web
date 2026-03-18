export default function Registration() {
  return (
    <div className="page-content container">
      <div className="page-header" style={{ borderRadius: '8px', marginBottom: '40px' }}>
        <h1>สมัครเรียนออนไลน์</h1>
        <p>เปิดรับสมัครนักเรียนใหม่ ปีการศึกษา 2569</p>
      </div>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--white)', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>ชื่อ-นามสกุล นักเรียน</label>
            <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="ด.ช. / ด.ญ." />
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
            <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>เบอร์โทรศัพท์ติดต่อ</label>
            <input type="tel" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '10px', width: '100%' }}>ส่งใบสมัคร</button>
        </form>
      </div>
    </div>
  );
}