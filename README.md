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
├── public/ # Static assets
├── src/
│ ├── assets/ # Images, icons, logos
│ ├── components/ # Reusable UI components
│ │ └── Header.tsx
│ ├── context/ # Context API for global state (e.g., theme)
│ │ └── ThemeContext.tsx
│ ├── pages/ # Route-specific components
│ │ ├── MainContent.tsx
│ │ ├── About.tsx
│ │ └── Contact.tsx
│ ├── App.tsx # Root app component with routing
│ ├── main.tsx # Entry point (bootstraps React)
│ └── index.css # Global styles (Tailwind or custom)
├── .eslintrc.js # ESLint configuration
├── tsconfig.json # TypeScript configuration
├── vite.config.ts # Vite configuration
└── README.md # Project guide

```bash
git clone https://github.com/sonalsingh3498/MultiTheme.git
cd  MultiTheme
npm install
npm run dev
