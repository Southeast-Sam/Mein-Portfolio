import Profilbild from "../assets/Images/Profilbild.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col mt-28 md:flex-row md:mt-0 justify-center items-center text-center md:text-left px-8 "
    >
      {/* Textbereich */}
      <div className="flex-1 space-y-4 w-full max-w-screen px-4">
        <h3 className="font-bold text-center">Hallo, ich bin</h3>
        <h1 className="text-lg md:text-2xl font-extrabold text-center">
          <span className="text-blue-600 dark:text-blue-400">Nhat Nam</span>
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300">
          Ich bin auf dem Weg zum Frontend-Entwickler und lerne aktuell React,
          Tailwind CSS & Vite.
        </p>

        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-103 active:scale-100 text-white px-6 py-3 rounded-full shadow transition"
          >
            Projekte ansehen
          </a>
          <a
            href="#contact"
            className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-100 hover:scale-103 active:scale-100 dark:hover:bg-gray-700 px-6 py-3 rounded-full transition"
          >
            Kontakt
          </a>
        </div>
      </div>

      {/* Profilbild*/}
      <div className="flex-1 mb-60">
        <img
          src={Profilbild}
          alt="Profilbild"
          className="w-68 h-68 mx-auto md:mt-60 rounded-full shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
