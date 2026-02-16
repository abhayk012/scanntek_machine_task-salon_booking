# Bella Salon - Premium Booking Experience

Bella Salon is a state-of-the-art web application designed for a premium hair and beauty salon experience. Built with performance, aesthetics, and scalability in mind, it provides a seamless booking flow, personal treatment history, and real-time notifications.

## 🚀 Key Features

- **Dynamic Booking Engine**: Multi-step booking flow with service selection, stylist filtering, and real-time availability.
- **User Dashboard**: personalized booking history and appointment management.
- **Intelligent Notifications**: Real-time notification system for appointment reminders and exclusive offers.
- **Modern UI/UX**: High-end aesthetic using glassmorphism, smooth animations, and a responsive mobile-first design.
- **Service Variants**: Flexible pricing based on service complexity and stylist expertise.

## 🏗️ Project Structure

The project follows a modular, feature-based architecture for maximum maintainability:

```text
src/
├── components/          # Shared UI and Layout components
│   ├── ui/              # Transversal UI primitives (Atomic Design)
│   ├── layout/          # Global layout elements (Navbar, Footer, Notifications)
├── data/                # Mock data and global constants
├── lib/                 # Third-party configurations and utilities
├── pages/               # Feature-based page containers
│   ├── home/            # Home page and its local components
│   ├── booking/         # Core booking engine and history
│   ├── services/        # Service catalog
├── schemas/             # Zod validation schemas
├── store/               # Zustand global state (if applicable)
├── types/               # Global TypeScript interfaces
└── utils/               # Business logic helpers (price calculation, etc.)
```

## 📈 Scalability & Maintainability

This project is architected to scale effectively from a small boutique to a large salon chain:

- **Component-Driven Development**: Atomic UI components ensure consistency and reuse across the entire application.
- **Type Safety**: Full TypeScript integration provides robust error checking and better developer experience.
- **Strict Separation of Concerns**: Logic is decoupled from UI, with heavy lifting done in utilities and custom hooks.
- **Optimized Build**: Built with Vite 6 for lightning-fast HMR and production builds.
- **Performance**: Use of modern CSS features and minimized dependencies to ensure sub-second interaction times.
- **Modular Data**: The mock data system is designed to be easily replaced by a REST or GraphQL API without major refactoring.

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Routing**: React Router 7

## 📦 Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```
2. **Run dev server**:
   ```bash
   pnpm run dev
   ```
3. **Build for production**:
   ```bash
   pnpm run build
   ```

---

Developed with ❤️ for Scanntek Machine Task.
