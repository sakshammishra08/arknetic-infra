const points = [
  { title: "Premium Fabric", desc: "High-quality material for comfort and durability." },
  { title: "Custom Designs", desc: "Get unique designs made for you or your brand." },
  { title: "Bulk Pricing", desc: "Special rates for businesses and large orders." },
];

export default function WhyUs() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {points.map((p) => (
          <div key={p.title} className="text-center">
            <h3 className="font-bold text-lg mb-2">{p.title}</h3>
            <p className="text-gray-600 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
