import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import { useEffect } from "react";

function adjustFontSizeForChrome() {
  const isChrome =
    /Chrome/.test(navigator.userAgent) &&
    /Google Inc/.test(navigator.vendor) &&
    !/Edg/.test(navigator.userAgent) && // Edge ausschließen
    !/OPR/.test(navigator.userAgent);
  if (isChrome) {
    console.log("Chrome erkannt - Schrift Größe angepasst.");
    document.documentElement.style.fontSize = "130%";
  }
}

function App() {
  useEffect(() => {
    adjustFontSizeForChrome();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <section id="about" className="min-h-[50vh] scroll-mt-20">
        <About />
      </section>
      <section id="projects" className="min-h-screen scroll-mt-20">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen scroll-mt-20">
        <Contacts />
      </section>
    </>
  );
}

export default App;
