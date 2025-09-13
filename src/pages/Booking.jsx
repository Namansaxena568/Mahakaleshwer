import { useState } from "react";
import "../App.css";

export default function Booking() {
  const [formData, setFormData] = useState({
    user: 1,
    name: "",
    email: "",
    phone: "",
    booking_type: "darshan",
    darshan_type: "priority",
    time_slot: "",
    seats: 1,
    poojan_type: "",
    accommodation_type: "",
    rooms: 1,
    date: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [confirmedName, setConfirmedName] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let payload = {
      user: formData.user,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      booking_type: formData.booking_type,
      date: formData.date,
      amount: formData.amount,
    };

    if (formData.booking_type === "darshan") {
      payload.time_slot = formData.time_slot;
      payload.darshan_type = formData.darshan_type;
    } else if (formData.booking_type === "bhasm_aarti") {
      payload.time_slot = formData.time_slot;
      payload.seats = formData.seats;
    } else if (formData.booking_type === "poojan") {
      payload.time_slot = formData.time_slot;
      payload.poojan_type = formData.poojan_type;
    } else if (formData.booking_type === "accommodation") {
      payload.accommodation_type = formData.accommodation_type;
      payload.rooms = formData.rooms;
    }

    try {
      const response = await fetch(
        "http://142.93.221.230/api/bookings/bookings/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json().catch(() => ({}));
      console.log("📩 Server Response:", response.status, data);

      if (response.ok) {
        setConfirmedName(formData.name);
        setShowPopup(true);

        setFormData({
          user: 1,
          name: "",
          email: "",
          phone: "",
          booking_type: "darshan",
          darshan_type: "priority",
          time_slot: "",
          seats: 1,
          poojan_type: "",
          accommodation_type: "",
          rooms: 1,
          date: "",
          amount: "",
        });
      } else {
        alert("❌ Error " + response.status + ": " + JSON.stringify(data));
      }
    } catch (error) {
      alert("❌ Network Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

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

      {/* Main Booking Container */}
      <div className="booking-page" style={{ display: "flex", gap: "40px", padding: "20px" }}>
        
        {/* Booking Form */}
        <div className="booking-card" style={{ flex: 2, minWidth: "300px", maxWidth: "600px" }}>
          <h2>🙏 Online Booking 🙏</h2>
          <form className="booking-form" onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Phone:
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <label>
              Booking Type:
              <select name="booking_type" value={formData.booking_type} onChange={handleChange}>
                <option value="darshan">Darshan</option>
                <option value="bhasm_aarti">Bhasm Aarti</option>
                <option value="poojan">Poojan</option>
                <option value="accommodation">Accommodation</option>
              </select>
            </label>

            {/* Conditional Fields */}
            {formData.booking_type === "darshan" && (
              <>
                <label>
                  Darshan Type:
                  <select name="darshan_type" value={formData.darshan_type} onChange={handleChange}>
                    <option value="free">Free Darshan</option>
                    <option value="priority">Priority Darshan</option>
                  </select>
                </label>
                <label>
                  Time Slot:
                  <input type="text" name="time_slot" value={formData.time_slot} onChange={handleChange} required />
                </label>
              </>
            )}

            {formData.booking_type === "bhasm_aarti" && (
              <>
                <label>
                  Time Slot:
                  <input type="text" name="time_slot" value={formData.time_slot} onChange={handleChange} required />
                </label>
                <label>
                  Seats:
                  <input type="number" name="seats" value={formData.seats} onChange={handleChange} min={1} required />
                </label>
              </>
            )}

            {formData.booking_type === "poojan" && (
              <>
                <label>
                  Time Slot:
                  <input type="text" name="time_slot" value={formData.time_slot} onChange={handleChange} required />
                </label>
                <label>
                  Poojan Type:
                  <select name="poojan_type" value={formData.poojan_type} onChange={handleChange} required>
                    <option value="">--Select--</option>
                    <option value="rudrabhishek">Rudrabhishek</option>
                    <option value="laghu_rudra">Laghu Rudra</option>
                    <option value="mahamrityunjaya">Mahamrityunjaya Jaap</option>
                    <option value="abhishek">Abhishek</option>
                  </select>
                </label>
              </>
            )}

            {formData.booking_type === "accommodation" && (
              <>
                <label>
                  Accommodation Type:
                  <select name="accommodation_type" value={formData.accommodation_type} onChange={handleChange} required>
                    <option value="">--Select--</option>
                    <option value="dharmshala">Dharmshala</option>
                    <option value="guest_house">Guest House</option>
                    <option value="cottage">Cottage</option>
                  </select>
                </label>
                <label>
                  Rooms:
                  <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} min={1} required />
                </label>
              </>
            )}

            <label>
              Date:
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </label>
            <label>
              Amount (₹):
              <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
            </label>

            <button type="submit" disabled={loading}>
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
          </form>
        </div>

   <div className="info-card">
  <h2>📌 बुकिंग और मंदिर जानकारी</h2>

  <ul>
    <li>🕒 <b>दर्शन समय:</b> सुबह 6:00 बजे - रात 8:00 बजे (हर दिन)</li>
    <li>🔥 <b>भस्म आरती:</b> रोज़ाना सुबह 4:00 बजे, सोमवार और त्योहारों पर विशेष पूजा</li>
    <li>🏠 <b>आवास:</b> धर्मशाला, गेस्ट हाउस, कॉटेज। कमरे पहले से बुक किए जा सकते हैं।</li>
    <li>💰 <b>भुगतान विकल्प:</b> यूपीआई, नेट बैंकिंग, डेबिट/क्रेडिट कार्ड, अंतर्राष्ट्रीय कार्ड</li>
    <li>⚠️ <b>महत्वपूर्ण:</b> सही दिनांक, समय और सेवा प्रकार चुनें।</li>
    <li>📞 <b>हेल्पलाइन:</b> +91 98765 43210 (बुकिंग सहायता और प्रश्न)</li>
    <li>🎫 <b>सीटें:</b> भस्म आरती में सीमित सीटें हैं, जल्दी बुक करें।</li>
    <li>🙏 <b>भक्ति:</b> अपने समय से 15-20 मिनट पहले पहुंचें ताकि दर्शन सुचारू हों।</li>
    <li>📜 <b>निर्देश:</b> शांति बनाए रखें, मंदिर नियमों का पालन करें, पूजा का सम्मान करें।</li>
    <li>🌿 <b>विशेष पूजन:</b> रुद्राभिषेक, लघु रुद्र, महामृत्युंजय जाप, अभिषेक पूर्व बुकिंग पर उपलब्ध।</li>
    <li>👕 <b>ड्रेस कोड:</b> भस्म आरती के दौरान पुरुषों को धोती-साड़ी या पारंपरिक पोशाक पहननी चाहिए। पश्चिमी कपड़े गर्भगृह में अनुमति नहीं।</li>
    <li>🧴 <b>सुरक्षा:</b> मंदिर परिसर में बैग, मोबाइल, कैमरा और चमड़े की चीज़ें नहीं ले जाएं।</li>
    <li>🅿️ <b>पार्किंग:</b> मुख्य गेट के पास पर्याप्त पार्किंग उपलब्ध। पार्किंग से मंदिर तक शटल सेवा।</li>
    <li>💧 <b>सुविधाएं:</b> मंदिर परिसर में पानी, शौचालय, क्लॉक रूम और प्रसाद काउंटर उपलब्ध।</li>
    <li>🌐 <b>ऑनलाइन बुकिंग:</b> स्लॉट समय से 24 घंटे पहले बुकिंग बंद। 8:00 बजे के बाद उसी दिन की बुकिंग स्वीकार नहीं।</li>
    <li>📩 <b>पुष्टिकरण:</b> सफल बुकिंग के बाद ईमेल/एसएमएस पुष्टिकरण। दर्शन के समय पहचान पत्र साथ लाएं।</li>
    <li>🪔 <b>मंदिर शिष्टाचार:</b> मूर्ति को न छुएं। कतार में अनुशासन बनाए रखें। गर्भगृह के अंदर फोटो खींचना मना है।</li>
    <li>🧘 <b>आध्यात्मिक टिप:</b> दर्शन के बाद कुछ मिनट ध्यान करें, शांति और आशीर्वाद के लिए।</li>
  </ul>

  <p>
    कृपया बुकिंग फॉर्म ध्यान से भरें। एक बार जमा करने के बाद, आपका स्लॉट सुनिश्चित होगा और पुष्टिकरण पॉपअप दिखाई देगा। 
    अपनी बुकिंग की जानकारी की एक प्रति अपने पास रखें। किसी भी प्रश्न या रद्द करने के लिए हमारी बुकिंग हेल्पलाइन से संपर्क करें।
  </p>

  <p style={{ marginTop: "10px", fontWeight: "600", color: "#444" }}>
    📍 स्थान: श्री महाकालेश्वर ज्योतिर्लिंग मंदिर, उज्जैन, मध्य प्रदेश, भारत
  </p>
</div>

      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>🎉 Thank You, {confirmedName || "Devotee"}!</h2>
            <p>Your booking is successfully confirmed.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
