import { useState } from "react";
import { Search, Menu, X, ShoppingBag, Phone } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { getWhatsAppUrl } from "../utils/whatsapp";

const navigation = [
  { label: "Categories", href: "#categories" },
  { label: "Shop", href: "#products" },
  { label: "Bulk Orders", href: "#bulk" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ searchQuery = "", onSearchChange = () => {} }) {
  const [open, setOpen] = useState(false);

  const handleSearch = (event) => {
    onSearchChange(event.target.value);
  };

  const searchInput = (mobile = false) => (
    <form
      className={`flex ${mobile ? "md:hidden px-4 pb-3" : "hidden md:flex flex-1 max-w-xl"}`}
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder={mobile ? "Search products..." : "Search for t-shirts, shirts..."}
        aria-label="Search products"
        className="w-full min-w-0 px-4 py-2 rounded-l-md text-black outline-none focus:ring-2 focus:ring-gray-400"
      />
      <button type="submit" aria-label="Go to search results" className="bg-white text-black px-4 rounded-r-md hover:bg-gray-200">
        <Search size={20} />
      </button>
    </form>
  );

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="text-xs text-center bg-white text-black py-1 px-2">
        {siteConfig.announcement} <span className="font-semibold">{siteConfig.phoneDisplay}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <button type="button" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          <a href="#top" className="text-xl md:text-2xl font-bold tracking-wide" aria-label="Arknetic Infra home">
            {siteConfig.brandName} <span className="font-light">{siteConfig.brandSuffix}</span>
          </a>
        </div>

        {searchInput()}

        <div className="flex items-center gap-4 sm:gap-5 shrink-0">
          <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-1 text-sm hover:underline">
            <Phone size={18} /> WhatsApp
          </a>
          <a href="#products" aria-label="Browse product collection" className="hover:opacity-75">
            <ShoppingBag size={22} />
          </a>
        </div>
      </div>

      {searchInput(true)}

      {open && (
        <nav className="md:hidden bg-brand-gray px-4 py-3 flex flex-col gap-3 text-sm" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-1 hover:underline">
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
