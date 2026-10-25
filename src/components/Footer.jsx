import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">ARKNETIC INFRA</h3>
          <p className="text-gray-400 text-sm">
            Premium quality t-shirts and shirts for individuals and bulk/business orders.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="shrink-0 mt-0.5" />
              Akharaghat, Muzaffarpur, Bihar 842001
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              <a href="https://wa.me/918409972021" className="hover:underline">
                8409972021 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              <a href="mailto:contact@arkneticinfra.com" className="hover:underline">
                contact@arkneticinfra.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Bulk Orders</h4>
          <p className="text-gray-300 text-sm mb-3">
            We accept bulk orders for events, teams, and businesses, along with custom designs.
          </p>
          <a
            href="https://wa.me/918409972021"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-200"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} Arknetic Infra. All rights reserved.
      </div>
    </footer>
  );
}
