import { siteConfig } from "../data/siteConfig";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function BulkOrderBanner({ content = siteConfig.bulkOrder }) {
  return (
    <section id="bulk" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">{content.title}</h3>
          <p className="text-gray-300 max-w-xl">{content.description}</p>
        </div>
        <a href={getWhatsAppUrl("Hi, I would like to discuss a bulk order.")} target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-3 font-semibold rounded-md whitespace-nowrap hover:bg-gray-200 transition">
          {content.cta}
        </a>
      </div>
    </section>
  );
}
