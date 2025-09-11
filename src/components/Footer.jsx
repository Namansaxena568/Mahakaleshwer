import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Temple Info */}
        <div className="footer-section">
          <h3>🕉️ Shree Mahakaleshwar</h3>
          <p>
            One of the 12 Jyotirlingas of Lord Shiva, situated in Ujjain, Madhya Pradesh. 
            A sacred place of devotion, spirituality, and divine blessings.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/booking">Bhasm Aarti Booking</a></li>
            <li><a href="/temple">Temple Info</a></li>
            {/* <li><a href="/gallery">Gallery</a></li> */}
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Ujjain, Madhya Pradesh, India</p>
          <p>📞 +91 12345 67890</p>
          <p>✉️ info@mahakaleshwar.org</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shree Mahakaleshwar Mandir | All Rights Reserved</p>
      </div>
    </footer>
  );
}
