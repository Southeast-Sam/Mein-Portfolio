export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col mt-28 md:flex-row md:mt-0 justify-center items-center text-center md:text-left px-8 "
    >
      {/* Textbereich */}
      <div className="flex-1 space-y-6">
        <h1 className="text-2xl md:text-4xl font-extrabold">
          <span className="text-blue-600 dark:text-blue-400">Nam Doan</span>
          <br />
          Webentwickler & Designer
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Ich entwickle moderne Webapps mit{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            React
          </span>
          ,{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Tailwind CSS
          </span>{" "}
          &{" "}
          <span className="font-semibold text-yellow-500 dark:text-yellow-400">
            Vite
          </span>
          .
        </p>

        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow transition"
          >
            Projekte ansehen
          </a>
          <a
            href="#contact"
            className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700 px-6 py-3 rounded-full transition"
          >
            Kontakt
          </a>
        </div>
      </div>

      {/* Bildbereich */}
      <div className="flex-1 mb-60 md:mb-0">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
          alt="Profilbild"
          className="w-64 h-64 mx-auto mr-10 rounded-full shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
