export default function Projects() {
  const projects = [
    {
      title: "Wetter App",
      description: "Zeigt aktuelle Wetterdaten mithilfe einer externen API.",
      image: "https://source.unsplash.com/featured/?weather",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "To-do Liste",
      description: "Ein einfacher Aufgabenplaner mit localStorage.",
      image: "https://source.unsplash.com/featured/?todo",
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projekte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left space-y-3">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Live-Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
