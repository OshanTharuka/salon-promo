import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Values from "./components/Values";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Values />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
