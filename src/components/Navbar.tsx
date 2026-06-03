import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/siangtrustlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header
        className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2
        w-[95%]
        max-w-7xl
        z-50
        bg-white/75
        backdrop-blur-2xl
        border
        border-white/40
        rounded-3xl
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
  src={logo}
  alt="Siang Trust Yoga Studio"
  className="h-16 w-16 md:h-20 md:w-20 object-contain"
/>

              <div className="leading-tight">
                <h1 className="font-bold text-lg tracking-wide text-zinc-900">
                  Siang Trust
                </h1>

                <p className="text-[11px] uppercase tracking-[3px] text-[#8B6A50]">
                  Yoga Studio
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="
                  relative
                  font-medium
                  text-zinc-700
                  hover:text-[#6B4F3B]
                  transition-all
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[2px]
                  after:bg-[#6B4F3B]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                  "
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:+919436056071"
                className="
                text-sm
                text-zinc-500
                hover:text-[#6B4F3B]
                transition
                "
              >
                +91 94360 56071
              </a>

              <Link
                to="/contact"
                className="
                relative
                overflow-hidden
                bg-gradient-to-r
                from-[#6B4F3B]
                to-[#8B6A50]
                text-white
                px-7
                py-3
                rounded-full
                font-medium
                shadow-lg
                hover:shadow-xl
                hover:-translate-y-0.5
                transition-all
                duration-300
                "
              >
                Book Class
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
              md:hidden
              p-2.5
              rounded-xl
              bg-zinc-100
              hover:bg-zinc-200
              transition
              "
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="
          fixed
          inset-0
          bg-black/20
          backdrop-blur-sm
          z-30
          md:hidden
          "
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
          fixed
          top-24
          left-4
          right-4
          z-40
          md:hidden
          transition-all
          duration-300
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <div
          className="
          bg-white/95
          backdrop-blur-xl
          rounded-3xl
          border
          border-zinc-200
          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          overflow-hidden
          "
        >
          <div className="flex flex-col p-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="
                py-3.5
                px-4
                rounded-xl
                font-medium
                text-zinc-700
                hover:bg-[#F5F0EA]
                hover:text-[#6B4F3B]
                transition-all
                duration-200
                "
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-5 border-t pt-5">
              <a
                href="tel:+919436056071"
                className="
                block
                text-center
                text-sm
                text-zinc-500
                mb-4
                "
              >
                +91 94360 56071
              </a>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="
                block
                text-center
                bg-gradient-to-r
                from-[#6B4F3B]
                to-[#8B6A50]
                text-white
                py-3.5
                rounded-full
                font-medium
                shadow-lg
                "
              >
                Book Class
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}