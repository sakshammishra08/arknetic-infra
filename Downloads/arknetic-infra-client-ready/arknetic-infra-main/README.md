# Arknetic Infra

React 18 + Vite + Tailwind CSS storefront. The current visual style is preserved; this refactor makes routine content updates easier and prepares components for a future CMS connection.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Update common content

Edit `src/data/siteConfig.js`:
- `siteConfig`: brand name, announcement strip, WhatsApp number, hero copy, bulk-order banner, and footer/contact details.
- `categories`: category cards and their image URLs.
- `products`: sample product cards, prices, categories, descriptions, images, and active visibility.
- `benefits`: the Why Us section cards.

Product entries should have a unique `id`, `name`, `price`, `category`, `description`, `img`, and `active` field. Set `active: false` to hide a product.

## Current features

- Search filters product name, category, and description.
- Category cards filter the product collection.
- Product cards open WhatsApp with a prefilled product enquiry.
- The shopping bag icon scrolls to the product collection; cart and checkout are not implemented.
- Image URLs are still placeholders and should be replaced with approved product photography.

## Architecture notes

- Components accept props and have local default content where useful.
- Data is separated from presentation in `src/data/siteConfig.js`.
- WhatsApp link creation is centralized in `src/utils/whatsapp.js`.
- No CMS, database, payment integration, or backend has been added yet.
