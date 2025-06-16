import { FaEnvelope, FaPhone, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="p-4">
      <section id="contact" className="px-4 py-20">
        <h2 className="text-4xl font-extrabold mb-16 text-left">
          Contact <span className="text-blue-500">Me</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Linke Seite */}
          <div className="space-y-8">
            {/* Kontaktinfos */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <span className="text-sm">nam.nhat2003@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-500" />
                <span className="text-sm">+49 1623247902</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl text-black dark:text-blue-500">
              <a
                href="https://instagram.com/deinProfil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 hover:animate-bounce transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/Southeast-Sam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 hover:animate-bounce transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Rechte Seite: Formular */}
          <form
            action="https://formspree.io/f/mvgrrngg"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Dein Name"
              required
              className="w-full p-3 bg-white/50 dark:bg-gray-500/60 backdrop-blur-md rounded-3xl text-black dark:text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Deine E-mail"
              required
              className="w-full p-3 bg-white/50 dark:bg-gray-500/60 backdrop-blur-md rounded-3xl text-black dark:text-white placeholder-gray-400 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Deine Nachricht"
              rows="5"
              required
              className="w-full p-3 bg-white/50 dark:bg-gray-500/60 backdrop-blur-md rounded-3xl text-black dark:text-white placeholder-gray-400 focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold px-6 py-3 rounded-md shadow hover:scale-105 transition"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
