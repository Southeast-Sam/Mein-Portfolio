export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">Kontakt</h2>

        <p className="text-lg max-w-xl mx-auto">
          Du hast ein Projekt im Kopf oder möchtest einfach connecten? Schreib
          mir gern eine Nachricht oder folge mir auf GitHub!
        </p>

        {/* Kontakt-Infos */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-left">
          <div className="space-y-4">
            <p>
              <span className="font-semibold">📧 E-Mail:</span>{" "}
              <a
                href="mailto:dein.email@example.com"
                className="text-blue-600 hover:underline"
              >
                dein.email@example.com
              </a>
            </p>
            <p>
              <span className="font-semibold">🌐 GitHub:</span>{" "}
              <a
                href="https://github.com/deinName"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                github.com/deinName
              </a>
            </p>
            <p>
              <span className="font-semibold">📍 Standort:</span> Löffingen,
              Deutschland
            </p>
          </div>
        </div>

        {/* Optional: Kontaktformular (vorerst auskommentiert) */}
        {/* <form className="max-w-xl mx-auto space-y-4">
            <input type="text" placeholder="Dein Name" className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800" />
            <input type="email" placeholder="Deine E-Mail" className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800" />
            <textarea placeholder="Deine Nachricht..." className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 h-32" />
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Nachricht senden
            </button>
          </form> */}
      </div>
    </section>
  );
}
