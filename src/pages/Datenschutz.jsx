import React from "react";

export default function Datenschutz() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Datenschutzerklärung</h1>

      <p className="mb-4">
        Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst. Die Nutzung
        meiner Website ist in der Regel ohne Angabe personenbezogener Daten
        möglich. Soweit auf meinen Seiten personenbezogene Daten (beispielsweise
        Name oder E-Mail-Adresse im Kontaktformular) erhoben werden, erfolgt
        dies stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
        ausdrückliche Zustimmung nicht an Dritte weitergegeben.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Verantwortliche Stelle
      </h2>
      <p>
        Die verantwortliche Person für die Datenverarbeitung auf dieser Website
        ist im{" "}
        <a href="/impressum" className="underline text-blue-500">
          Impressum
        </a>{" "}
        angegeben.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Hosting</h2>
      <p>
        Diese Website wird bei Netlify (Netlify Inc., 2325 3rd Street, Suite
        296, San Francisco, California 94107) gehostet. Beim Besuch meiner
        Website werden automatisch Informationen (z. B. IP-Adresse, Datum und
        Uhrzeit) durch Netlify erfasst und in Server-Logfiles gespeichert. Diese
        Daten dienen ausschließlich der technischen Überwachung und Sicherheit
        der Seite.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Kontaktformular</h2>
      <p>
        Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre
        Angaben aus dem Formular inklusive der von Ihnen dort angegebenen
        Kontaktdaten gespeichert, um die Anfrage zu bearbeiten. Die Verarbeitung
        erfolgt über den Dienst Formspree (Formspree Inc., 303 Twin Dolphin Dr.,
        Redwood City, CA 94065, USA). Die Datenübermittlung erfolgt gemäß Art. 6
        Abs. 1 lit. a DSGVO auf Grundlage Ihrer freiwilligen Einwilligung.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
        gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger und den
        Zweck der Datenverarbeitung. Außerdem haben Sie ein Recht auf
        Berichtigung, Sperrung oder Löschung dieser Daten. Bei Fragen oder
        Anliegen kontaktieren Sie mich bitte unter den oben genannten
        Kontaktdaten.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">SSL-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
        Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
        Browsers von "http://" auf "https://" wechselt.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Änderungen</h2>
      <p>
        Ich behalte mir vor, diese Datenschutzerklärung gelegentlich anzupassen,
        damit sie stets den aktuellen rechtlichen Anforderungen entspricht.
      </p>
    </div>
  );
}
