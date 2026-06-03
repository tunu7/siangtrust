import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-black text-white mt-24">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Decorative Line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent mb-14" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Studio Info */}
          <div>

            <h3 className="text-3xl font-bold">
              Siang Trust Yoga Studio
            </h3>

            <p className="mt-5 text-zinc-400 leading-relaxed">
              Traditional Hatha Yoga,
              Ashtanga Vinyasa,
              Pranayama and Meditation
              taught in the heart of Aalo,
              Arunachal Pradesh.
            </p>

          </div>

          {/* Links */}
          <div>

            <h4 className="font-semibold text-lg mb-5">
              Explore
            </h4>

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all"
              >
                About
              </Link>

              <Link
                to="/programs"
                className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all"
              >
                Programs
              </Link>

              <Link
                to="/gallery"
                className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h4 className="font-semibold text-lg mb-5">
              Contact
            </h4>

            <div className="space-y-5 text-zinc-400">

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>
                  KGB Complex,
                  Nehru Chowk,
                  Aalo,
                  Arunachal Pradesh
                </span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} />
                <span>
                  +91 94360 56071
                </span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>
                  gedamgamlin1@gmail.com
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 mt-14 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-zinc-500">

          <p>
            © 2026 Siang Trust Yoga Studio.
            All rights reserved.
          </p>

          <p>
            Crafted with mindfulness in Aalo.
          </p>

        </div>

      </div>
    </footer>
  );
}