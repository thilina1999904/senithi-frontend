import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/home", label: "HOME" },
    { to: "/shop", label: "SHOP" },
    { to: "/gallery", label: "GALLERY" },
    { to: "/reviews", label: "REVIEWS" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="w-[95%] mx-auto mt-4 rounded-2xl backdrop-blur-xl bg-white/70 border border-emerald-100 sticky top-4 z-50 transition-all duration-300">
      
      <div className="px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/home" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo.jpeg"
            alt="logo"
            className="w-11 h-11 object-cover rounded-full border-2 border-emerald-600 shadow-sm"
          />
          <span className="text-xl font-bold text-emerald-800 hidden sm:block tracking-wide">
            Senithi Saree Collection
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-emerald-800"
                    : "text-gray-600 hover:text-emerald-700"
                }`}
              >
                {link.label}

                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Auth Buttons Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm font-semibold text-emerald-700 border border-emerald-700 px-4 py-1.5 rounded-full hover:bg-emerald-50 transition-all duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="text-sm font-semibold text-white bg-emerald-700 px-4 py-1.5 rounded-full hover:bg-emerald-800 transition-all duration-300 shadow-md"
          >
            Register
          </Link>
        </div>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-emerald-50 transition"
        >
          <span className={`block w-6 h-0.5 bg-emerald-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-emerald-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-emerald-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-4 pt-2 gap-2 border-t border-emerald-100 bg-white/80 backdrop-blur-md rounded-b-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium py-2 px-3 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Auth */}
          <div className="flex gap-3 mt-3 pt-3 border-t border-emerald-100">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center text-sm font-semibold text-emerald-700 border border-emerald-700 px-4 py-2 rounded-full hover:bg-emerald-50 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center text-sm font-semibold text-white bg-emerald-700 px-4 py-2 rounded-full hover:bg-emerald-800 transition"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}