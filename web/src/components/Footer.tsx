import { MapPin, Phone } from 'lucide-react';
import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>โรงเรียนบ้านแม่ทราย</h3>
          <p>มุ่งมั่นพัฒนาวิชาการ สืบสานวัฒนธรรม ก้าวล้ำเทคโนโลยี</p>
        </div>
        <div className="footer-section">
          <h3>ติดต่อเรา</h3>
          <ul className="contact-info">
            <li><MapPin size={18} /> 123 ม.1 ต.แม่ทราย อ.ร้องกวาง จ.แพร่</li>
            <li><Phone size={18} /> 054-123-4567</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom"><p>&copy; 2026 Baan Mae Sai School.</p></div>
    </footer>
  );
}
