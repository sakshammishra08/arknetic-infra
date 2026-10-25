import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import BulkOrderBanner from "./components/BulkOrderBanner";
import ProductGrid from "./components/ProductGrid";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <BulkOrderBanner />
      <ProductGrid />
      <WhyUs />
      <Footer />
    </div>
  );
}
