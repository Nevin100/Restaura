import React from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Dishes from "./components/Dishes.jsx";
import About from "./components/About.jsx";
import Mission from "./components/Mission.jsx";
import Expertise from "./components/Expertise.jsx";
import Reviews from "./components/Reviews.jsx";
import ContactUs from "./components/ContactUs.jsx";

const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200 antialiased">
      <Hero />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Reviews />
      <ContactUs />
    </div>
  );
};

export default App;
