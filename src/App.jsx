import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section
        id="about"
        className="min-h-screen scroll-mt-20 bg-gray-100 dark:bg-gray-800"
      >
        About
      </section>
      <section
        id="projects"
        className="min-h-screen scroll-mt-20 bg-white dark:bg-gray-900"
      >
        Projects
      </section>
      <section
        id="contact"
        className="min-h-screen scroll-mt-20 bg-gray-100 dark:bg-gray-800"
      >
        Contact
      </section>
    </>
  );
}

export default App;
