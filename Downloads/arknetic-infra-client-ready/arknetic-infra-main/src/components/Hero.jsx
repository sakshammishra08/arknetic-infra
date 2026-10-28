import { siteConfig } from "../data/siteConfig";
import { getWhatsAppUrl } from "../utils/whatsapp";
// import heroImage from "../assets/images/hero.png";

export default function Hero({ content = siteConfig.hero }) {
  return (
    <section id="top" className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:pt-8 pb-12 grid md:grid-cols-2 items-center gap-8">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">{content.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {content.title} <br /> {content.titleLineTwo}
          </h1>
          <p className="text-gray-300 mb-6 max-w-md">{content.description}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#products" className="bg-white text-black px-6 py-3 font-semibold rounded-md hover:bg-gray-200 transition">
              {content.primaryCta}
            </a>
            <a href={getWhatsAppUrl("Hi, I would like to enquire about a bulk order.")} target="_blank" rel="noreferrer" className="border border-white px-6 py-3 font-semibold rounded-md hover:bg-white hover:text-black transition">
              {content.secondaryCta}
            </a>
          </div>
        </div>
        <img src="/images/hero1.jpeg" alt="Arknetic Infra" />
      </div>
    </section>
  );
}
