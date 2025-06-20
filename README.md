# Developer Portfolio - Home Page

A modern, fully responsive, and interactive personal developer portfolio built using **React**, **TypeScript**, and **Tailwind CSS**. This project is focused on clean design, accessible interactions, smooth animations, and persistent dark/light theming.

## ✨ Features

* 🎨 **Pixel-perfect UI**: Implements a Figma-provided design with high fidelity
* 💡 **Theme Toggle**: Supports dark and light themes with persistence using `localStorage`
* 📱 **Mobile-First Design**: Optimized for all screen sizes with responsive layouts
* ♿ **Accessibility**: ARIA roles, keyboard navigation, and semantic markup
* 💥 **Animations**: Subtle transitions and motion effects using Framer Motion
* 🧱 **Component Architecture**: Reusable and modular UI components
* ⚙️ **Vite + TypeScript**: Fast, modern build setup with strict type checking
* 🔧 **Radix UI**: Accessible UI primitives
* 🚀 **Optimized**: Lazy loading, memoization, and performance best practices

## 🔧 Tech Stack

* **React 18** with **TypeScript**
* **Vite** for blazing fast builds and dev environment
* **Tailwind CSS** + `tailwindcss-animate` for utility-first styling and transitions
* **Framer Motion** for animation
* **Radix UI** for headless, accessible UI primitives
* **Lucide React** for modern, customizable icons
* **React Router** for future routing support
* **Zod**, **React Hook Form** for scalable form handling and validation
* **React Query** for future data fetching needs
* **Component Libraries**: `cmdk`, `vaul`, `embla-carousel`, `sonner` for rich UI

## 🛠 Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Type check the codebase
npm run typecheck

# Format code using Prettier
npm run format.fix

# Build for production
npm run build

# Run tests (using Vitest)
npm run test
```

## 🌙 Theme Toggle

This project supports light and dark themes via the `next-themes` library and persists the user’s preference in `localStorage`. A `ThemeToggle` component handles user interaction and updates the UI accordingly.

## 🔍 Accessibility Highlights

* Keyboard navigable
* Uses semantic HTML and ARIA roles
* Focus indicators for interactive elements
* Accessible Radix UI components

## 📦 Performance Optimizations

* Tree-shakable modular design
* Tailwind’s JIT compiler for efficient CSS
* Memoization of components where needed
* Responsive images and layout techniques

## 🌐 Browser Support

Supports all modern browsers that comply with ES2020 and CSS Grid/Flexbox standards.
