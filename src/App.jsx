import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Impressum from "./pages/Impressum.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import Footer from "./components/Footer.jsx";

function adjustFontSize() {
  const userAgent = navigator.userAgent;
  const vendor = navigator.vendor;
  const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
  const isChrome =
    /Chrome/.test(userAgent) &&
    /Google Inc/.test(vendor) &&
    !/Edg/.test(userAgent) &&
    !/OPR/.test(userAgent);

  if (isSafari) {
    console.log("Safari erkannt – Schriftgröße auf 18px gesetzt.");
    document.documentElement.style.fontSize = "20px";
  } else if (isChrome) {
    console.log("Chrome erkannt – Schriftgröße auf 130% gesetzt.");
    document.documentElement.style.fontSize = "130%";
  }
}

function App() {
  useEffect(() => {
    adjustFontSize();
  }, []);

  return (
    <Routes>
      {/* Startseite (One Page) */}
      <Route
        path="/"
        element={
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
            <Footer />
          </>
        }
      />
      {/* Impressum + Datenschutz */}
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
    </Routes>
  );
}

export default App;
