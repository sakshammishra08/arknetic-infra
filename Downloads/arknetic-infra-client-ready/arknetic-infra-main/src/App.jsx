import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import BulkOrderBanner from "./components/BulkOrderBanner";
import ProductGrid from "./components/ProductGrid";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import { categories } from "./data/siteConfig";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const clearFilters = () => {
      setSearchQuery("");
      setActiveCategory("All");
    };
    window.addEventListener("arknetic:clear-filters", clearFilters);
    return () => window.removeEventListener("arknetic:clear-filters", clearFilters);
  }, []);

  const selectCategory = (categoryName) => {
    setActiveCategory(categoryName);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main>
        <Hero />
        <Categories items={categories} onSelectCategory={selectCategory} />
        <BulkOrderBanner />
        <ProductGrid searchQuery={searchQuery} activeCategory={activeCategory} />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
