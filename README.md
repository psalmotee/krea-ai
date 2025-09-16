# Krea Clone UI

A modern Next.js 15 App Router project styled with Tailwind CSS v4 + DaisyUI v5 and Lucide Icons.
This project replicates a sleek UI experience with modular components such as Header, Theme Toggle, Hero, Generate Tools, Gallery, and Footer.

## Tech Stack

Next.js 15 (App Router)
 – React framework

Tailwind CSS v4
 – Utility-first CSS

DaisyUI v5
 – Tailwind component library

Lucide Icons
 – Beautiful SVG icons

TypeScript – Strict typing support

Responsive & Dark Mode Ready

## Project Structure
public/
 └── image/
     ├── img1.jpg
     ├── img2.jpg
     ├── img3.jpg
     ├── img4.jpg
     ├── img5.png
     ├── img6.jpg
     ├── Krea-logo-black.png
     ├── Krea-logo-white.png
     └── mobbin-logo.png

src/
 ├── app/
 │   ├── globals.css       # Global styles
 │   ├── layout.tsx        # Root layout
 │   └── page.tsx          # Homepage
 │
 ├── components/
 │   ├── ui/
 │   │   ├── Button.tsx    # Reusable button variants
 │   │   └── MobileDrawer.tsx # Mobile navigation drawer
 │   │
 │   ├── Footer.tsx        # Footer section
 │   ├── Gallery.tsx       # Gallery card grid
 │   ├── Generate.tsx      # Generate tools grid
 │   ├── Header.tsx        # Navbar + Branding
 │   ├── Hero.tsx          # Hero section
 │   └── theme-toggle.tsx  # Dark/Light mode toggle

## Getting Started
1️⃣ Install dependencies
npm install
# or
yarn install
# or
pnpm install

2️⃣ Run development server
npm run dev


Now open http://localhost:3000
 🚀

3️⃣ Build for production
npm run build
npm start

## Features

Header with Drawer (mobile) + Theme Toggle

Responsive Hero section

Generate tools grid with customizable content

Gallery cards with hover animation

Reusable Button component with multiple variants

Dark/Light mode (DaisyUI theme system)

## Assets

Logos and demo images are located in:

public/image/

## Notes

Fonts can be customized via next/font or Tailwind fontFamily in tailwind.config.js.

You can replace public/image/* with your own assets.

The reusable Button component supports multiple variants, so use it across the project for consistency.

## License

This project is for learning/demo purposes. Replace branding and assets before using in production.