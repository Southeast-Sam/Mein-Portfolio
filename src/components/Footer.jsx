import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-sm text-center text-gray-400 py-4">
      <Link to="/impressum" className="underline mx-2">
        Impressum
      </Link>
      <Link to="/datenschutz" className="underline mx-2">
        Datenschutz
      </Link>
    </footer>
  );
}
