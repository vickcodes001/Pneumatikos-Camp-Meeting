import { useState } from "react";
import Hero from "./component/Hero";
import Countdown from "./component/Countdown";
import About from "./component/About";
import Gallery from "./component/Gallery";
import Registration from "./component/Registration";
import Footer from "./component/Footer";
import AccommodationModal from "./component/AccommodationModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Hero onRegisterClick={() => setIsModalOpen(true)} />
      <Countdown />
      <About />
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
