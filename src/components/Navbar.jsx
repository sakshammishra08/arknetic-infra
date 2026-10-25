import { useState } from "react";
import { Search, Menu, X, ShoppingBag, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      {/* Top strip */}
      <div className="text-xs text-center bg-white text-black py-1 px-2">
        Bulk orders welcome — WhatsApp <span className="font-semibold">8409972021</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          <span className="text-xl md:text-2xl font-bold tracking-wide">
            ARKNETIC <span className="font-light">INFRA</span>
          </span>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search for t-shirts, shirts..."
            className="w-full px-4 py-2 rounded-l-md text-black outline-none"
          />
          <button className="bg-white text-black px-4 rounded-r-md">
            <Search size={20} />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://wa.me/918409972021"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1 text-sm hover:underline"
          >
            <Phone size={18} /> WhatsApp
          </a>
          <ShoppingBag size={22} />
        </div>
      </div>

      {/* Mobile search */}
      <div className="md:hidden px-4 pb-3 flex">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded-l-md text-black outline-none"
        />
        <button className="bg-white text-black px-4 rounded-r-md">
          <Search size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-brand-gray px-4 py-3 flex flex-col gap-3 text-sm">
          <a href="#categories" onClick={() => setOpen(false)}>Categories</a>
          <a href="#products" onClick={() => setOpen(false)}>Shop</a>
          <a href="#bulk" onClick={() => setOpen(false)}>Bulk Orders</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}
