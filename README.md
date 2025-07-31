# 🚀 React + TypeScript + Vite Starter

This project provides a minimal and scalable setup using **React**, **TypeScript**, and **Vite**.

Includes:
- ⚡️ Fast Refresh via Vite
- 🎨 Theming via Context API
- 🧹 ESLint + Prettier (optional)
- 📦 TypeScript for type-safety
- 🧩 Component-based folder structure

---

## 📁 Folder Structure

project-root/
├── src/
│ ├── components/ # Reusable UI components
│ │ └── Header.tsx
│ │ ├── LoadingSpinner.tsx
│ │ ├── ProductCard.tsx
│ │ ├── ThemeDropdown.tsx
│ ├── context/ # Context API for global state (e.g., theme)
│ │ └── ThemeContext.tsx
├── hooks/ # Hooks to fetch product
│ │ └── useProducts.ts
│ ├── pages/ # Route-specific components
│ │ ├── MainContent.tsx
│ │ ├── About.tsx
│ │ └── Contact.tsx
├── types/ # Hooks to fetch product
│ │ └── types.ts
│ ├── App.tsx # Root app component with routing
│ ├── main.tsx # Entry point (bootstraps React)
│ └── index.css # Global styles (Tailwind or custom)
├── tsconfig.json # TypeScript configuration
├── vite.config.ts # Vite configuration
└── README.md # Project guide

API used to fetch product detail https://api.escuelajs.co/api/v1/products
```bash
git clone https://github.com/sonalsingh3498/MultiTheme.git
cd  MultiTheme
npm install
npm run dev