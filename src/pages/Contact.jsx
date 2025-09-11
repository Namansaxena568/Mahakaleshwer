import "../App.css";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
  <section className="hero-section">
    <div className="hero-overlay"></div>

    <div className="hero-content">
      <p className="hero-subtitle">Shri</p>
      <h1 className="hero-title">Mahakaleshwar</h1>
      <p className="hero-location">Mandir, Ujjain</p>

      <div className="hero-divider"></div>
      <p className="hero-tagline">DARSHAN BOOKING</p>
    </div>
  </section>

    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>
        📧 Email: <a href="mailto:info@mahakal.com">info@mahakal.com</a>
      </p>
      <p>
        📞 Phone: <a href="tel:+911234567890">+91 12345 67890</a>
      </p>
      <p>
        🏠 Address: Shree Mahakaleshwar Temple, Ujjain, Madhya Pradesh, India
      </p>

      <form className="contact-form">
        <h3>Send us a Message</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
  );
}
