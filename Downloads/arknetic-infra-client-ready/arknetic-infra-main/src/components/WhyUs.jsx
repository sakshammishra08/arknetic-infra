import { benefits as defaultBenefits } from "../data/siteConfig";

export default function WhyUs({ items = defaultBenefits }) {
  return (
    <section id="benefits" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {items.map((point) => (
          <article key={point.id ?? point.title} className="text-center">
            <h3 className="font-bold text-lg mb-2">{point.title}</h3>
            <p className="text-gray-600 text-sm">{point.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
