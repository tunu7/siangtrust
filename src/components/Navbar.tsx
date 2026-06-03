import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/siangtrustlogo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3"
            >
             <img
  src={logo}
  alt="Siang Trust Yoga Studio"
  className="h-12 w-12 object-contain"
/>

              <div>
                <h1 className="font-bold text-lg text-[#111]">
                  Siang Trust
                </h1>

                <p className="text-xs text-zinc-500">
                  Yoga Studio
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">

              <Link
                to="/"
                className="font-medium text-zinc-700 hover:text-[#6B4F3B] transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="font-medium text-zinc-700 hover:text-[#6B4F3B] transition"
              >
                About
              </Link>

              <Link
                to="/programs"
                className="font-medium text-zinc-700 hover:text-[#6B4F3B] transition"
              >
                Programs
              </Link>

              <Link
                to="/gallery"
                className="font-medium text-zinc-700 hover:text-[#6B4F3B] transition"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                className="font-medium text-zinc-700 hover:text-[#6B4F3B] transition"
              >
                Contact
              </Link>

            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">

              <a
                href="tel:+919436056071"
                className="text-sm text-zinc-500"
              >
                +91 94360 56071
              </a>

              <Link
                to="/contact"
                className="
                bg-gradient-to-r
                from-[#6B4F3B]
                to-[#8B6A50]
                text-white
                px-6
                py-3
                rounded-full
                shadow-lg
                hover:scale-105
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
              className="md:hidden"
            >
              {isOpen ? (
                <X size={26} />
              ) : (
                <Menu size={26} />
              )}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
          fixed
          top-24
          left-4
          right-4
          bg-white
          rounded-3xl
          shadow-2xl
          border
          z-40
          md:hidden
          "
        >
          <div className="flex flex-col p-6 gap-5">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              to="/programs"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>

            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="
              bg-[#6B4F3B]
              text-white
              text-center
              py-3
              rounded-full
              "
            >
              Book Class
            </Link>

          </div>
        </div>
      )}
    </>
  );
}