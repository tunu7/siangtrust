import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F3EEE8] border-t border-[#E6DDD3] mt-24">

  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

      {/* Studio Info */}
      <div>

        <h3 className="text-3xl font-bold text-[#2C221B]">
          Siang Trust Yoga Studio
        </h3>

        <p className="mt-5 text-[#6F6257] leading-relaxed">
          Traditional Hatha Yoga,
          Ashtanga Vinyasa,
          Pranayama and Meditation taught
          in the heart of Aalo,
          Arunachal Pradesh.
        </p>

      </div>

      {/* Links */}
      <div>

        <h4 className="font-semibold text-lg mb-5 text-[#2C221B]">
          Explore
        </h4>

        <div className="flex flex-col gap-4">

          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Programs", "/programs"],
            ["Gallery", "/gallery"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <Link
              key={label}
              to={path}
              className="text-[#6F6257] hover:text-[#6B4F3B] transition-colors"
            >
              {label}
            </Link>
          ))}

        </div>

      </div>

      {/* Contact */}
      <div>

        <h4 className="font-semibold text-lg mb-5 text-[#2C221B]">
          Contact
        </h4>

        <div className="space-y-5 text-[#6F6257]">

          <div className="flex gap-3">
            <MapPin
              size={18}
              className="text-[#6B4F3B] mt-1 shrink-0"
            />
            <span>
              KGB Complex,
              Nehru Chowk,
              Aalo,
              Arunachal Pradesh
            </span>
          </div>

          <div className="flex gap-3">
            <Phone
              size={18}
              className="text-[#6B4F3B] shrink-0"
            />
            <span>+91 94360 56071</span>
          </div>

          <div className="flex gap-3">
            <Mail
              size={18}
              className="text-[#6B4F3B] shrink-0"
            />
            <span>
              gedamgamlin1@gmail.com
            </span>
          </div>

        </div>

      </div>

    </div>

    <div className="border-t border-[#E6DDD3] mt-14 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm">

      <p className="text-[#8B7D70]">
        © 2026 Siang Trust Yoga Studio.
        All rights reserved.
      </p>

      <p className="text-[#8B7D70]">
        Crafted with mindfulness in Aalo.
      </p>

    </div>

  </div>

</footer>
  );
}