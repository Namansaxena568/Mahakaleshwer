import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css"; // apna css file import karo

const galleryImages = [
  {
    url: "../Images/Mahakaleshwar.jpg",
    title: "Shree Mahakaleshwar Jyotirlinga",
  },
  {
    url: "../Images/Mahakal-Bhasma-Aarti.jpg",
    title: "Sacred Bhasma Aarti at Mahakal",
  },
  {
    url: "../Images/Coridoor.jpg",
    title: "Mahakal Corridor, Ujjain",
  },
  {
    url: "../Images/891041978Ram_Ghat.jpg",
    title: "Ram Ghat, Ujjain",
  },
  {
    url: "../Images/saavan-savar1.webp",
    title: "Mahakal Sawari Festival",
  },
];

export default function MahakalGallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
  };

  return (
    <section className="gallery-section">
      {/* Heading */}
      <h2 className="gallery-heading">
        <span>📸 Mahakal Gallery</span>
        <span className="heading-underline"></span>
      </h2>

      {/* Slider */}
      <Slider {...settings} className="gallery-slider">
        {galleryImages.map((img, i) => (
          <div key={i} className="slide-item">
            <img src={img.url} alt={img.title} className="slide-image" />
            <div className="slide-caption">{img.title}</div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
