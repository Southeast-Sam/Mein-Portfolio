import { FaCode, FaFigma } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Entwicklung",
      description:
        "Moderne, responsive Webseiten mit Fokus auf Performance, Design und Benutzerfreundlichkeit.",
      icon: <FaCode size={36} />,
    },
    {
      title: "UI/UX Design",
      description:
        "Klares, nutzerzentriertes Design mit Liebe zum Detail. Vom Wireframe bis zur interaktiven Oberfläche.",
      icon: <FaFigma size={36} />,
    },
  ];

  return (
    <div className="p-4">
      <section
        id="services"
        className="px-4 py-20 min-h-[50vh] flex flex-col justify-center"
      >
        <h2 className="text-4xl font-extrabold mb-20 md:mb-60">
          Meine Services
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 150}
              key={index}
              className="group bg-white/10 dark:bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-lg hover:shadow-xl hover:scale-110 hover:bg-blue-500 transition-all duration-300"
            >
              <div className="mb-4 text-blue-500 group-hover:text-white transition duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm dark:text-white mb-4">
                {service.description}
              </p>
              <a
                href="#"
                className="text-sm font-medium text-blue-500 group-hover:text-white underline underline-offset-2 transition duration-300"
              >
                Mehr erfahren
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
