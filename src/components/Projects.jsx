import WetterKit from "../assets/Images/WetterKit.png";
import OptiCut from "../assets/Images/opticut.png";

export default function Projects() {
  const projects = [
    {
      title: "OptiCut",
      description: "Zeigt aktuelle Wetterdaten mithilfe einer externen API.",
      image: OptiCut,
      demoLink: "https://stunning-paletas-4aefea.netlify.app",
      codeLink:
        "https://github.com/Southeast-Sam/OptiCut-Zuschnittplaner?tab=readme-ov-file",
    },
    {
      title: "WetterKit",
      description: "Zeigt aktuelle Wetterdaten mithilfe einer externen API.",
      image: WetterKit,
      demoLink: "https://glittery-rabanadas-8efc0c.netlify.app",
      codeLink: "https://github.com/Southeast-Sam/Wetterkit/tree/main/src",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projekte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150} // 150ms Verzögerung pro Block
              className="bg-white/40 dark:bg-gray-500/60 backdrop-blur-sm p-6 rounded-xl shadow-md overflow-hidden transition-all hover:scale-102"
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
      </div>
    </section>
  );
}
