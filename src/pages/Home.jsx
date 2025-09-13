import MahakalGallery from "./MahakalGallery";
import "../App.css";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section (No Parallax Now) */}
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-subtitle">Shri</p>
          <h1 className="hero-title">Mahakaleshwar</h1>
          <p className="hero-location">Mandir, Ujjain</p>

          <div className="hero-divider"></div>
          <p className="hero-tagline">DARSHAN BOOKING</p>

          <div className="hero-buttons">
            <a href="/booking" className="btn primary">
              BOOK FOR MYSELF
            </a>
            <a href="/booking" className="btn primary">
              BOOK FOR OTHERS
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <div className="quick-links-grid">
          <div className="quick-card">
            <div className="icon">🕉️</div>
            <h3>🕉️ Bhasm Aarti</h3>
            <p>Book online for the sacred early morning ritual.</p>
          </div>
          <div className="quick-card">
            <div className="icon">📖</div>
            <h3>📖 Temple Info</h3>
            <p>Know history, rituals, and darshan timings.</p>
          </div>
          <div className="quick-card">
            <div className="icon">🗺️</div>
            <h3>🗺️ How to Reach</h3>
            <p>Travel routes and nearby facilities.</p>
          </div>
          <div className="quick-card">
            <div className="icon">📞</div>
            <h3>📞 Contact</h3>
            <p>Get in touch for temple services and queries.</p>
          </div>
        </div>
      </section>

      {/* Mahakal Gallery Section */}
      <section className="container py-16">
        <MahakalGallery />
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-text">
          <h2>About Mahakaleshwar</h2>
          <p>
            Shree Mahakaleshwar Jyotirlinga, situated in Ujjain, Madhya Pradesh,
            is one of the twelve sacred Jyotirlingas of Lord Shiva. It is unique
            because the lingam here is believed to be Swayambhu (self-manifested),
            deriving power (Shakti) from within, unlike other Jyotirlingas which
            are ritually established.
          </p>
          <p>
            The temple is especially famous for its <b>Bhasm Aarti</b> ritual,
            performed every morning before sunrise, where the lingam is adorned
            with sacred ash. This Aarti is considered one of the most spiritual
            experiences in Hindu tradition.
          </p>
          <p>
            The temple architecture reflects Maratha, Bhumija, and Chalukya
            styles, standing majestically on the banks of the holy Kshipra River.
            Thousands of devotees from across India and the world visit daily to
            seek blessings and experience the divine aura of Mahakal.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <h3>12</h3>
            <p>Jyotirlingas</p>
          </div>
          <div className="stat">
            <h3>1000+</h3>
            <p>Daily Visitors</p>
          </div>
          <div className="stat">
            <h3>4 AM</h3>
            <p>Bhasm Aarti</p>
          </div>
          <div className="stat">
            <h3>24x7</h3>
            <p>Devotion</p>
          </div>
        </div>
      </section>

      {/* Live Feed */}
      <section className="live-feed">
        <div className="live-feed-container">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/5ym00BVsGrY?autoplay=1"
              title="Live Darshan of Shree Mahakaleshwar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <a
              href="https://www.youtube.com/live/5ym00BVsGrY?feature=shared"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-btn"
            >
              Watch on <span>YouTube</span>
            </a>
          </div>
          <div className="content-container">
            <h2>Live Darshan Of Shree Mahakaleshwar</h2>
            <p>
              Mahakal Darshan Presents Live Darshan. From Mahakaleshwar Temple.
              Mahakal Temple - Official Channel.
            </p>
            <a
              href="https://www.youtube.com/live/5ym00BVsGrY?feature=shared"
              className="btn btn-aarti"
            >
              Aarti Videos
            </a>
          </div>
        </div>
      </section>

      {/* Why Visit */}
      <section className="why">
        <h2>✨ Why Visit Mahakaleshwar?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>⛩️ Sacred Jyotirlinga</h3>
            <p>One of the twelve holiest shrines of Lord Shiva.</p>
          </div>
          <div className="why-card">
            <h3>🔥 Bhasm Aarti</h3>
            <p>The only Jyotirlinga where Aarti is performed with sacred ash.</p>
          </div>
          <div className="why-card">
            <h3>🌊 Kshipra River</h3>
            <p>Situated on the banks of the holy river, enhancing the spiritual aura.</p>
          </div>
          <div className="why-card">
            <h3>🙏 Moksha & Peace</h3>
            <p>Believed to liberate devotees from the cycle of life and death.</p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history">
        <h2>📜 इतिहास और महत्त्व</h2>
        <p>
          महाकालेश्वर मंदिर का उल्लेख कई प्राचीन ग्रंथों में मिलता है, जिनमें <b>पुराण</b> प्रमुख हैं। ऐसा माना जाता है कि भगवान शिव यहाँ अपने भक्तों को दुष्ट राक्षस दुषाना से बचाने के लिए प्रकट हुए थे। इसी कारण इस ज्योतिर्लिंग को महाकाल (काल और मृत्यु के स्वामी) कहा जाता है।
        </p>
        <p>
          18वीं शताब्दी में मराठा काल के दौरान रानी अहिल्याबाई होल्कर ने इस मंदिर का पुनर्निर्माण कराया। तब से यह श्रद्धा और भक्ति का एक प्रमुख केंद्र बनकर खड़ा है। यहाँ के ज्योतिर्लिंग की उपस्थिति भक्तों के आध्यात्मिक कल्याण और मोक्ष की प्राप्ति का प्रतीक मानी जाती है।
        </p>
      </section>

      {/* Rituals Section */}
      <section className="rituals">
        <h2>🪔 Rituals & Festivals</h2>
        <ul>
          <li>
            <b>Bhasm Aarti:</b> Performed daily at 4 AM with sacred ash, a rare ritual unique to this temple.
          </li>
          <li>
            <b>Maha Shivratri:</b> Celebrated with grand processions and lakhs of devotees thronging the temple.
          </li>
          <li>
            <b>Sawan Month:</b> Special significance for Lord Shiva’s worship, with devotees offering Jalabhishek.
          </li>
          <li>
            <b>Nitya Pooja:</b> Daily rituals including Rudrabhishek, Aarti, and recitation of Shiv Mantras.
          </li>
        </ul>
      </section>
    </div>
  );
}
