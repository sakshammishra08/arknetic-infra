import defaultProducts from "../data/products";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function ProductGrid({ items = defaultProducts, searchQuery = "", activeCategory = "All" }) {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleProducts = items.filter((product) => {
    const matchesQuery = !normalizedQuery || `${product.name} ${product.category ?? ""} ${product.description ?? ""}`.toLowerCase().includes(normalizedQuery);
    const matchesCategory = activeCategory === "All" || activeCategory === "Custom Design" || activeCategory === "Bulk Orders" || product.category === activeCategory;
    return product.active !== false && matchesQuery && matchesCategory;
  });

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 py-12 scroll-mt-32">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
        <div>
          <h2 className="text-2xl font-bold">Our Collection</h2>
          {activeCategory !== "All" && <p className="text-sm text-gray-600 mt-1">Category: {activeCategory}</p>}
        </div>
        <p className="text-sm text-gray-500">{visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}</p>
      </div>

      {visibleProducts.length ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {visibleProducts.map((product) => (
            <article key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
              <img src={product.image} alt={product.name} className="w-full aspect-[4/5] object-cover bg-gray-100" loading="lazy" />
              <div className="p-3 flex flex-col flex-1">
                <p className="font-medium text-sm">{product.name}</p>
                {product.description && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</p>}
                <p className="font-bold mt-2">₹{Number(product.price).toLocaleString("en-IN")}</p>
                <a href={getWhatsAppUrl(`Hi, I am interested in ${product.name} (₹${product.price}). Please share more details.`)} target="_blank" rel="noreferrer" className="mt-auto pt-3">
                  <span className="block w-full text-center bg-black text-white text-sm py-2 rounded-md hover:bg-gray-800 transition">Enquire on WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed p-8 text-center text-gray-600">
          No products found. Try another search or category.
          {(searchQuery || activeCategory !== "All") && <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("arknetic:clear-filters"))} className="block mx-auto mt-3 underline text-black">Clear filters</button>}
        </div>
      )}
    </section>
  );
}
