import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Dark Mode Zustand beim Laden prüfen
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Über mich", href: "#about" },
    { name: "Projekte", href: "#projects" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav className="fixed top-2 left-0 w-full z-50">
      <div className=" bg-white/40 dark:bg-gray-500/60 backdrop-blur-sm rounded-full max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl ml-4 font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Nam
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative group text-transparent bg-clip-text bg-blue-400 dark:bg-gray-300 hover:text-blue-400"
              >
                <span>{link.name}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle + Burger Wrapper */}
        <div className="flex items-center gap-4">
          {/* Toggle ab md */}
          <button
            onClick={toggleTheme}
            className="hidden md:block w-12 h-6 items-center px-1 bg-gray-200 dark:bg-gray-700 rounded-full relative transition-colors duration-300"
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
                isDark ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {isDark ? (
                <FaMoon className="text-black text-sm" />
              ) : (
                <FaSun className="text-amber-500 text-sm" />
              )}
            </span>
          </button>

          {/* Burger Button (nur auf Mobile sichtbar) */}
          <button
            className="md:hidden text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900/80 shadow-xl backdrop-blur-md px-6 py-6 space-y-6 rounded-b-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-medium text-black dark:text-white hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Toggle unten im mobilen Menü */}
          <div className="pt-4 border-t border-gray-600">
            <button
              onClick={toggleTheme}
              className="mt-4 w-14 h-8 flex items-center px-1 bg-gray-200 dark:bg-gray-700 rounded-full relative transition-colors duration-300"
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
                  isDark ? "translate-x-6" : "translate-x-0"
                }`}
              >
                {isDark ? (
                  <FaMoon className="text-yellow-300 text-sm" />
                ) : (
                  <FaSun className="text-yellow-500 text-sm" />
                )}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
