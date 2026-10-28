
import { categories as defaultCategories } from "../data/siteConfig";

export default function Categories({
  items = defaultCategories,
  onSelectCategory = () => {},
}) {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((category) => (
          <button
            type="button"
            key={category.id ?? category.name}
            onClick={() => onSelectCategory(category.name)}
            className="text-center group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-neutral-900">
              <img
                src={category.img}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/30" />

              <div className="absolute inset-0 flex items-center justify-center p-3">
                <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                  {category.name}
                </span>
              </div>
            </div>

            <span className="block font-medium mt-2">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
