import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-500 shadow-md z-50 px-4 md:px-44">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo (Left Side) */}
        <Link to="/" className="text-2xl font-extrabold text-gray-900">
  <img
    src="/assets/images/logo.svg"
    alt="Pfolio home"
    className="w-40"
  />
</Link>

<nav className="hidden md:flex space-x-6 text-white font-medium">
  {/* Manual Navigation Items */}
  <Link to="/" className="hover:text-blue-600 transition">
    Home
  </Link>
  
  <Link to="/resume" className="hover:text-blue-600 transition">
    Resume
  </Link>

  <Link to="/projects" className="hover:text-blue-600 transition">
    Projects
  </Link>

  <Link to="/skill" className="hover:text-blue-600 transition">
    Skills
  </Link>

  <Link to="/contact" className="hover:text-blue-600 transition">
    Contact
  </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="w-8 h-8 flex flex-col justify-between items-center md:hidden"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-transform ${
              navOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-900 ${navOpen ? "hidden" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-transform ${
              navOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navbar */}
      <nav
        className={`md:hidden absolute top-16 left-0 w-full bg-white border-t shadow-lg transition-all ${
          navOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 text-gray-800 font-medium">
          {["Home", "Resume", "Services", "Portfolio", "Blog", "Contact"].map(
            (item) => (
              <li key={item}>
                <a href="#home" className="hover:text-blue-600 transition">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
