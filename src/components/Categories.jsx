const categories = [
  { name: "T-Shirts", img: "https://placehold.co/300x300/111111/ffffff?text=T-Shirts" },
  { name: "Shirts", img: "https://placehold.co/300x300/111111/ffffff?text=Shirts" },
  { name: "Custom Design", img: "https://placehold.co/300x300/111111/ffffff?text=Custom+Design" },
  { name: "Bulk Orders", img: "https://placehold.co/300x300/111111/ffffff?text=Bulk+Orders" },
];

export default function Categories() {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((c) => (
          <div key={c.name} className="text-center cursor-pointer group">
            <img
              src={c.img}
              alt={c.name}
              className="rounded-lg w-full aspect-square object-cover mb-2 group-hover:opacity-80 transition"
            />
            <p className="font-medium">{c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
