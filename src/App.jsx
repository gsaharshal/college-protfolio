import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import VisionMission from "./components/VisionMission/VisionMission";
import Highlights from "./components/Highlights/Highlights";
import Departments from "./components/Departments/Departments";
import Facilities from "./components/Facilities/Facilities";
import Placements from "./components/Placements/Placements";
import Gallery from "./components/Gallery/Gallery";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Highlights />
      <Departments />
      <Facilities />
      <Placements />
      <Gallery />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default App;