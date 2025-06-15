import { FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" data-aos="fade-left">
      <h2 className="text-3xl md:text-2xl font-bold mb-4 ml-4">Über mich</h2>
      <div className="min-h-screen flex px-4 py-20">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
          alt="Profilbild"
          className="w-50 h-50 mx-auto mr-10 rounded-full shadow-lg object-cover"
        />
        <div className="max-w-3xl h-58 bg-white/40 dark:bg-gray-500/60 backdrop-blur-md rounded-3xl flex items-center p-4 space-y-4">
          <div className="space-y-8 w-full h-50 p-6 text-lg bg-gray-100/30 dark:bg-gray-500/60 backdrop-blur-md rounded-3xl ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget risus vitae massa semper aliquam quis mattis quam.
              Suspendisse potenti.
            </p>
            <a
              href="/public/CV_2025.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow transition"
            >
              <FaDownload /> Lebenslauf
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
