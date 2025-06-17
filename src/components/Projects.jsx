import WetterKit from "../assets/Images/WetterKit.png";
import OptiCut from "../assets/Images/opticut.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const projects = [
    {
      title: "OptiCut",
      description:
        "Ein Tool zur Zuschnitt-Optimierung für Plattenmaterialien. Nutzereingaben werden automatisch visualisiert, um Verschnitt zu reduzieren. Die Platzierung erfolgt dynamisch - inklusive Rotation, Lückenfüllung und PDF-Export.",
      image: OptiCut,
      demoLink: "https://stunning-paletas-4aefea.netlify.app",
      codeLink:
        "https://github.com/Southeast-Sam/OptiCut-Zuschnittplaner?tab=readme-ov-file",
    },
    {
      title: "WetterKit",
      description:
        "Eine moderne Wetter-App mit Forecast, Hintergrundbild und Live-Daten. Die Daten stammen von einer externen API und werden visuell aufbereitet – inkl. Sonnenzeiten, Temperatur, Wind, Icons und Wochentagen.",
      image: WetterKit,
      demoLink: "https://glittery-rabanadas-8efc0c.netlify.app",
      codeLink: "https://github.com/Southeast-Sam/Wetterkit/tree/main/src",
    },
  ];

  return (
    <div className="w-full px-4 max-w-screen mx-auto">
      <section id="projects" className=" ml-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Projekte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 300} // 150ms Verzögerung pro Block
              className="bg-white/40 dark:bg-gray-500/60 backdrop-blur-sm rounded-xl shadow-md p-6 overflow-hidden transition-all hover:scale-102 text-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-full h-auto object-cover rounded-lg shadow-md"
              />
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
              <div className="flex justify-between space-x-4 mt-8">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live-Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
