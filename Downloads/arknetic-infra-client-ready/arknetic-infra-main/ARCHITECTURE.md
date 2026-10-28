# Arknetic Infra — Frontend Architecture

## Goal
Preserve the current black-and-white storefront design while making routine content changes easier and preparing the frontend for a future CMS. No backend or CMS is connected in this phase.

## Structure
- `src/data/siteConfig.js`: central editable site copy, contact information, categories, sample products, and benefits.
- `src/utils/whatsapp.js`: one shared WhatsApp URL helper.
- `src/components/`: presentational, reusable page sections that accept props with local defaults.
- `src/App.jsx`: page composition and shared search/category filter state.

## Routine modifications
- Update brand/contact/hero/banner/footer text in `src/data/siteConfig.js`.
- Update categories in the `categories` array in the same file.
- Update products in the `products` array; each product supports `id`, `name`, `price`, `category`, `description`, `img`, and `active`.
- Update benefit cards in the `benefits` array.

## Current behavior
- Product search filters by name, category, and description.
- Category cards filter the product collection.
- Product enquiry buttons open WhatsApp with a prefilled product-specific message.
- The bag icon links to the product collection; there is no cart or checkout.
- Product and category images are still placeholders and should be replaced with approved brand/product photography before launch.

## Future CMS integration
The component props and data shape are intentionally separated so data can later come from a CMS. Keep component styling separate from data fetching. Add loading/error/empty states when connecting a remote API. Never expose CMS write tokens in frontend environment variables.
