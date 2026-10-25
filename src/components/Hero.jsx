export default function Hero() {
  return (
    <section className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 items-center gap-8">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
            Premium Quality
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            T-Shirts &amp; Shirts <br /> Built to Last
          </h1>
          <p className="text-gray-300 mb-6 max-w-md">
            Minimal designs. Premium fabric. Available for individuals and
            bulk/business orders.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#products"
              className="bg-white text-black px-6 py-3 font-semibold rounded-md hover:bg-gray-200"
            >
              Shop Now
            </a>
            <a
              href="https://wa.me/918409972021"
              target="_blank"
              rel="noreferrer"
              className="border border-white px-6 py-3 font-semibold rounded-md hover:bg-white hover:text-black transition"
            >
              Enquire for Bulk Order
            </a>
          </div>
        </div>
        <img
          src="https://placehold.co/600x500/0a0a0a/ffffff?text=Hero+Image"
          alt="Premium T-shirts and Shirts"
          className="rounded-lg w-full object-cover"
        />
      </div>
    </section>
  );
}
