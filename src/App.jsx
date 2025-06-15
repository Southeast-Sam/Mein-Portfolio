import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about" className="min-h-screen scroll-mt-20">
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
