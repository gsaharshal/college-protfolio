import "./Gallery.css";

const gallery = [
  {
    title: "Yuvagala 2026",
    image: "/events/event1.jpg",
  },
  {
    title: "Annual Sports Meet",
    image: "/events/event2.jpg",
  },
  {
    title: "Resonance 2026",
    image: "/events/event3.jpg",
  },
  {
    title: "Centralized Hackathon",
    image: "/events/event4.jpg",
  },
  {
    title: "Industry Visit",
    image: "/events/event5.jpg",
  },
  {
    title: "Flash Mob",
    image: "/events/event6.jpg",
  },
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <div className="section-header">
        <span>GALLERY</span>
        <h2>Campus Moments</h2>
      </div>

      <div className="gallery-grid">

        {gallery.map((item, index) => (

          <div className="gallery-card" key={index}>

            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">

              <h3>{item.title}</h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;