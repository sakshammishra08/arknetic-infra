# Arknetic Infra — Website

A simple, premium black & white e-commerce style website for Arknetic Infra
(Premium T-Shirts & Shirts), built with React, Vite, and Tailwind CSS.

## How to Run This Website

You need **Node.js** installed on your computer (download from https://nodejs.org — get the LTS version).

1. Open this folder in a terminal (Command Prompt / Terminal / VS Code terminal).
2. Install dependencies (only needed once):
   ```
   npm install
   ```
3. Start the website:
   ```
   npm run dev
   ```
4. Open the link shown in the terminal (usually `http://localhost:5173`) in your browser.

That's it — the website is now running on your computer.

## How to Build for Hosting (Going Live)

When you're ready to put this website online:
```
npm run build
```
This creates a `dist` folder with the final website files. Upload the contents of
`dist` to any hosting service (Vercel, Netlify, Hostinger, GoDaddy, etc.) — these
are plain static files.

## What's Inside

```
arknetic-infra/
├── index.html              Main HTML file
├── package.json             Project dependencies
├── src/
│   ├── main.jsx              App entry point
│   ├── App.jsx                Combines all sections
│   ├── index.css               Tailwind styles
│   └── components/
│       ├── Navbar.jsx           Header, search bar, menu
│       ├── Hero.jsx              Top banner section
│       ├── Categories.jsx        Shop by category section
│       ├── BulkOrderBanner.jsx   "We accept bulk orders" banner
│       ├── ProductGrid.jsx       Product listing grid
│       ├── WhyUs.jsx              Trust/benefits section
│       └── Footer.jsx             Address, phone, email, contact
```

## To Do Before Going Live

- **Replace placeholder images**: All product/hero images currently use
  `placehold.co` placeholder links. Open `src/components/Hero.jsx`,
  `Categories.jsx`, and `ProductGrid.jsx`, and swap the `src="..."` links with
  your real photos (e.g. put images in the `public` folder and reference them
  as `/your-image.jpg`).
- **Update email**: Currently set to `contact@arkneticinfra.com` in
  `src/components/Footer.jsx` — change this to your real email.
- **Update product names/prices**: Edit the `products` array at the top of
  `src/components/ProductGrid.jsx`.

## Contact Info Used in This Site

- **Phone / WhatsApp:** 8409972021
- **Address:** Akharaghat, Muzaffarpur, Bihar 842001
- **Bulk orders & custom designs:** Mentioned on the homepage banner and footer
