const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: i % 2 === 0 ? "Premium T-Shirt" : "Premium Shirt",
  price: i % 2 === 0 ? 599 : 899,
  img: `https://placehold.co/400x500/f2f2f2/0a0a0a?text=Product+${i + 1}`,
}));

export default function ProductGrid() {
  return (
    <section id="products" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Our Collection</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src={p.img} alt={p.name} className="w-full aspect-[4/5] object-cover" />
            <div className="p-3">
              <p className="font-medium text-sm">{p.name}</p>
              <p className="font-bold mt-1">₹{p.price}</p>
              <button className="mt-2 w-full bg-black text-white text-sm py-2 rounded-md hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
