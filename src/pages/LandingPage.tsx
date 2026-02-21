import { useState } from "react";
import Hero from "./component/Hero";
import Countdown from "./component/Countdown";
import About from "./component/About";
import Gallery from "./component/Gallery";
import Registration from "./component/Registration";
import Footer from "./component/Footer";
import AccommodationModal from "./component/AccommodationModal";
import NavBar from "./component/NavBar";
import FAQ from "./component/FAQ";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <NavBar onRegisterClick={() => setIsModalOpen(true)} />
      <Hero />
      <Countdown />
      <About />
      <FAQ />
      <Gallery />
      <Registration onBookClick={() => setIsModalOpen(true)} />
      <Footer />

      <AccommodationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
