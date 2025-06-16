import { useState } from "react";
import { FaDownload, FaGraduationCap } from "react-icons/fa";
import Profilbild2 from "../assets/Images/Profilbild2.jpeg";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    { name: "HTML", percent: 90, color: "bg-[#00f5a0]" },
    { name: "CSS", percent: 75, color: "bg-[#00f5a0]" },
    { name: "JavaScript", percent: 80, color: "bg-[#00f5a0]" },
    { name: "React", percent: 80, color: "bg-[#00f5a0]" },
    { name: "Tailwind", percent: 80, color: "bg-[#00f5a0]" },
    { name: "Python", percent: 40, color: "bg-[#00f5a0]" },
  ];

  const education = [
    {
      year: "05.2016 – 07.2021",
      title: "Realschule",
      desc: "Abschluss: Mittlere Reife",
    },
    {
      year: "09.2021 – 07.2024",
      title: "Technisches Gymnasium (Schwerpunkt Mechatronik)",
      desc: "Abschluss: Schulischer Teil der Fachhochschulreife.",
    },
  ];

  return (
    <div className="p-4">
      {/* Header + Bild + Text + CV */}
      <section id="about" data-aos="fade-left">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 ml-2 md:ml-4">
          Über mich
        </h2>

        <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center gap-6 md:gap-10 px-2 md:px-4 py-6 md:py-12 mb-16">
          <img
            src={Profilbild2}
            alt="Profilbild"
            className="w-44 h-64 mx-auto rounded-full shadow-lg object-cover"
          />
          <div className="w-full bg-white/40 dark:bg-gray-500/60 backdrop-blur-md rounded-3xl p-4 md:p-6">
            <p className="text-base text-justify md:text-lg mb-6">
              Ich bin Nam, ein Junior Frontend-Entwickler aus Löffingen. Ich
              entwickle gerne Webseiten, die nicht nur funktionieren, sondern
              auch gut aussehen - ich nutze dabei am liebsten React und Tailwind
              CSS. Ich habe mir das alles selbst beigebracht. Inzwischen macht's
              mir richtig Spaß, Ideen umzusetzen und Dinge einfach mal
              auszuprobieren. Ich bin noch nicht am Ziel, aber auf dem Weg,
              jeden Tag besser zu werden.
            </p>
            <a
              href="/CV_2025.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow hover:scale-102 active:scale-98 transition"
            >
              <FaDownload /> Lebenslauf
            </a>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto mb-20 ml-4 flex gap-6 text-xl ">
        {["skills", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium capitalize transition ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-gray-800 dark:text-white"
                : "text-gray-400 hover:text-white cursor-pointer"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills */}
      {activeTab === "skills" && (
        <section className="w-full px-2 md:px-4 pb-12" data-aos="zoom-in-up">
          <div className="max-w-4xl mx-auto bg-white/40 dark:bg-gray-500/60 backdrop-blur-md rounded-3xl w-full px-4 py-6 space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    {skill.percent}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                  <div
                    className={`h-3 rounded-full transition-all duration-700 ease-out ${skill.color}`}
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education Timeline */}
      {activeTab === "education" && (
        <section className="max-w-4xl mx-auto pl-4 border-l-5 rounded-sm border-[#00f5a0] space-y-10">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-6"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="absolute -left-6 top-3 bg-blue-400 p-2 rounded-full text-black">
                <FaGraduationCap size={18} />
              </div>
              <div className="bg-white/40 dark:bg-gray-500/60 backdrop-blur-md rounded-3xl w-full p-4 ">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  {item.year}
                </p>
                <h3 className="text-lg font-bold text-gray-700 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
