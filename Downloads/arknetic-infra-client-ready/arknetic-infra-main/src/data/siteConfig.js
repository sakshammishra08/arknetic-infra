/**
 * Central website content configuration.
 * Update common copy/contact details here instead of editing multiple components.
 * This object can later be replaced with CMS-fetched content without redesigning the UI.
 */

// import tshirtsImage from "../assets/images/category-tshirts.jpg";
// import shirtsImage from "../assets/images/category-shirts.jpg";
// import customImage from "../assets/images/category-custom.jpg";
// import bulkImage from "../assets/images/category-bulk.jpg";


export const siteConfig = {
  brandName: "ARKNETIC",
  brandSuffix: "INFRA",
  announcement: "Bulk orders welcome — WhatsApp",
  phoneDisplay: "8409972021",
  whatsappNumber: "917732822494",
  hero: {
    eyebrow: "Premium Quality",
    title: "T-Shirts & Shirts",
    titleLineTwo: "Built to Last",
    description:
      "Minimal designs. Premium fabric. Available for individuals and bulk/business orders.",
    primaryCta: "Shop Now",
    secondaryCta: "Enquire for Bulk Order",
    image: "https://placehold.co/600x500/0a0a0a/ffffff?text=Hero+Image",
    imageAlt: "Premium T-shirts and Shirts",
  },
  bulkOrder: {
    title: "We Accept Bulk Orders",
    description:
      "Looking for t-shirts or shirts in bulk for your business, event, or team? We offer custom designs and competitive pricing for large quantities.",
    cta: "Contact on WhatsApp",
  },
  footer: {
    description:
      "Premium quality t-shirts and shirts for individuals and bulk/business orders.",
    address: "Akharaghat, Muzaffarpur, Bihar 842001",
    email: "contact@arkneticinfra.com",
    bulkTitle: "Bulk Orders",
    bulkDescription:
      "We accept bulk orders for events, teams, and businesses, along with custom designs.",
    bulkCta: "WhatsApp Us",
  },
};

    export const categories = [
      { id: "t-shirts", name: "T-Shirts", img: "/images/category-tshirts.jpeg" },
  { id: "shirts", name: "Shirts", img: "/images/category-shirts.jpeg" },
  { id: "custom-design", name: "Custom Design", img: "/images/category-custom.jpeg" },
  { id: "bulk-orders", name: "Bulk Orders", img: "/images/category-bulk.jpeg" },
];

export const products = Array.from({ length: 8 }, (_, index) => {
  const isTShirt = index % 2 === 0;
  return {
    id: index + 1,
    name: isTShirt ? "Premium T-Shirt" : "Premium Shirt",
    price: isTShirt ? 599 : 899,
    category: isTShirt ? "T-Shirts" : "Shirts",
    description: "Premium quality apparel for everyday wear.",
    img: `https://placehold.co/400x500/f2f2f2/0a0a0a?text=Product+${index + 1}`,
    active: true,
  };
});

export const benefits = [
  { id: "fabric", title: "Premium Fabric", desc: "High-quality material for comfort and durability." },
  { id: "custom", title: "Custom Designs", desc: "Get unique designs made for you or your brand." },
  { id: "bulk", title: "Bulk Pricing", desc: "Special rates for businesses and large orders." },
];
