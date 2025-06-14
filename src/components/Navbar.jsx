export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl ml-4 font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Nam.dev
        </div>
        <ul className="flex space-x-9 mr-4">
          {[
            { name: "Home", href: "#hero" },
            { name: "Über mich", href: "#about" },
            { name: "Projekte", href: "#projects" },
            { name: "Kontakt", href: "#contact" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative group text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
              >
                <span>{link.name}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
