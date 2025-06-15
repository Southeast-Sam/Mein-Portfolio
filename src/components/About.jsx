import { useState } from "react";
import { FaDownload, FaGraduationCap } from "react-icons/fa";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    { name: "HTML", percent: 90, color: "bg-[#00f5a0]" },
    { name: "CSS", percent: 75, color: "bg-[#00f5a0]" },
    { name: "JavaScript", percent: 80, color: "bg-[#00f5a0]" },
    { name: "React", percent: 70, color: "bg-[#00f5a0]" },
    { name: "Tailwind", percent: 80, color: "bg-[#00f5a0]" },
    { name: "Python", percent: 40, color: "bg-[#00f5a0]" },
  ];

  const education = [
    {
      year: "2000 – 2000",
      title: "Academic Degree",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
      year: "2000 – 2000",
      title: "Academic Degree",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
      year: "2000 – 2000",
      title: "Academic Degree",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
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
            src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
            alt="Profilbild"
            className="w-36 h-36 md:w-48 md:h-48 rounded-full shadow-lg object-cover"
          />
          <div className="w-full bg-white/40 dark:bg-gray-500/60 backdrop-blur-md rounded-3xl p-4 md:p-6">
            <p className="text-base md:text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget risus vitae massa semper aliquam quis mattis quam.
              Suspendisse potenti.
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
      <div className="max-w-4xl mx-auto mb-20 ml-4 flex gap-6 text-xl">
        {["skills", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium capitalize transition ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-gray-800"
                : "text-gray-400 hover:text-white"
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
