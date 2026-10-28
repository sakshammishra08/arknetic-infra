import { MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function Footer({ content = siteConfig.footer }) {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <a href="#top" className="text-xl font-bold mb-3 inline-block">{siteConfig.brandName} {siteConfig.brandSuffix}</a>
          <p className="text-gray-400 text-sm">{content.description}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2"><MapPin size={18} className="shrink-0 mt-0.5" /><span>{content.address}</span></li>
            <li className="flex items-center gap-2"><Phone size={18} /><a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="hover:underline">{siteConfig.phoneDisplay} (WhatsApp)</a></li>
            <li className="flex items-center gap-2"><Mail size={18} /><a href={`mailto:${content.email}`} className="hover:underline">{content.email}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">{content.bulkTitle}</h4>
          <p className="text-gray-300 text-sm mb-3">{content.bulkDescription}</p>
          <a href={getWhatsAppUrl("Hi, I would like to enquire about a bulk order.")} target="_blank" rel="noreferrer" className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition">{content.bulkCta}</a>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} {siteConfig.brandName} {siteConfig.brandSuffix}. All rights reserved.</div>
    </footer>
  );
}
