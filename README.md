# Template Vite React

A modern, production-ready React template built with Vite, TypeScript, and Tailwind CSS. This template provides a solid foundation for building scalable web applications with best practices and essential tools pre-configured.

## ✨ Features

- ⚡️ **Vite** - Lightning-fast build tool and dev server with HMR
- ⚛️ **React 18** - Latest React features with TypeScript support
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- 📘 **TypeScript** - Full type safety and IntelliSense support
- 🔍 **ESLint** - Code linting with React-specific rules
- 🔄 **React Query** - Powerful data fetching and state management
- 🗂️ **React Router** - Client-side routing
- 🐻 **Zustand** - Lightweight state management
- 🌐 **Axios** - Pre-configured HTTP client with interceptors
- 🎯 **Path Aliases** - Clean imports using `@/` prefix
- 🎨 **Sonner** - Beautiful toast notifications
- 🛠️ **Utility Functions** - Pre-built helpers for common tasks

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm/yarn

### Installation

1. **Clone or use this template:**
   ```bash
   git clone <repository-url>
   cd template_vite_react
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy the example env file
   cp .env.example .env
   
   # Edit .env and update the API base URL
   VITE_API_BASE_URL=http://localhost:3000/api
   ```

### Development

Start the development server with hot module replacement:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

Create a production build:

```bash
pnpm build
```

The optimized files will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
pnpm preview
```

### Lint

Run ESLint to check code quality:

```bash
pnpm lint
```

## 📁 Project Structure

```
template_vite_react/
├── public/                  # Static assets (served as-is)
├── src/
│   ├── (root)/             # Route-based pages
│   │   └── home/
│   │       └── page.tsx    # Home page component
│   ├── components/         # Reusable React components
│   │   └── RQuery.tsx      # React Query provider wrapper
│   ├── lib/                # Core libraries and configurations
│   │   ├── axios.ts        # Axios instance with interceptors
│   │   ├── Constants.ts    # App-wide constants
│   │   └── utils.ts        # Utility functions (cn, etc.)
│   ├── store/              # Zustand state management
│   │   └── appStore.ts     # Global app store
│   ├── types/              # TypeScript type definitions
│   │   └── common.ts       # Common types
│   ├── utils/              # Helper functions
│   │   └── helpers.ts      # General helper utilities
│   ├── index.css           # Global styles and Tailwind imports
│   ├── main.tsx            # Application entry point
│   ├── routes.tsx          # Route definitions
│   └── vite-env.d.ts       # Vite environment types
├── .env.example            # Environment variable template
├── .gitignore              # Git ignore rules
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🛠️ Tech Stack

### Core
- **React 18.3** - UI library
- **TypeScript 5.8** - Type safety
- **Vite 6.3** - Build tool

### Styling
- **Tailwind CSS 4.1** - Utility-first CSS
- **class-variance-authority** - Component variants
- **clsx & tailwind-merge** - Conditional class merging

### Data & State
- **TanStack Query 5.76** - Server state management
- **Zustand 5.0** - Client state management
- **Axios 1.9** - HTTP client

### Routing & UI
- **React Router 7.6** - Client-side routing
- **Sonner 2.0** - Toast notifications

### Development
- **ESLint 9** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 🎯 Key Features Explained

### Axios Configuration

The template includes a pre-configured Axios instance (`src/lib/axios.ts`) with:
- **Base URL** from environment variables
- **Request interceptor** - Automatically adds auth tokens
- **Response interceptor** - Handles 401 errors globally
- **10-second timeout** - Prevents hanging requests

### React Query Setup

React Query is configured in `src/components/RQuery.tsx` with:
- **No refetch on window focus** - Prevents unnecessary requests
- **1 retry attempt** - Balances reliability and performance
- **5-minute stale time** - Reduces redundant fetches
- **DevTools** - Available in development mode

### State Management

**Zustand store** (`src/store/appStore.ts`) provides:
- Lightweight global state
- TypeScript support
- DevTools integration

### Path Aliases

Import from `src/` using the `@/` prefix:
```typescript
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
```

## 📝 Usage Guide

### Adding a New Page

1. Create a folder in `src/(root)/`:
   ```bash
   mkdir src/(root)/about
   ```

2. Add a `page.tsx` file:
   ```tsx
   export default function AboutPage() {
     return <div>About Page</div>;
   }
   ```

3. Update `src/routes.tsx` to include the route.

### Making API Calls

Use the pre-configured Axios instance:

```typescript
import axiosInstance from '@/lib/axios';

// GET request
const response = await axiosInstance.get('/users');

// POST request
const response = await axiosInstance.post('/users', { name: 'John' });
```

### Using React Query

```typescript
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axiosInstance.get('/users');
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{/* Render users */}</div>;
}
```

### Using Zustand Store

```typescript
import { useAppStore } from '@/store/appStore';

function MyComponent() {
  const { count, increment } = useAppStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### Showing Toasts

```typescript
import { toast } from 'sonner';

// Success toast
toast.success('Operation completed!');

// Error toast
toast.error('Something went wrong!');

// Info toast
toast.info('Here is some information');
```

## 🔧 Customization

### Changing the API Base URL

Update the `.env` file:
```env
VITE_API_BASE_URL=https://api.yourapp.com
```

### Modifying Tailwind Configuration

Edit `src/index.css` to customize Tailwind's theme, colors, and utilities.

### Adjusting React Query Defaults

Modify settings in `src/components/RQuery.tsx`:
```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,  // Enable refetch on focus
      retry: 3,                     // Increase retry attempts
      staleTime: 10 * 60 * 1000,   // 10 minutes
    },
  },
});
```

## 📦 Building for Production

1. **Build the project:**
   ```bash
   pnpm build
   ```

2. **Test the production build:**
   ```bash
   pnpm preview
   ```

3. **Deploy the `dist/` folder** to your hosting provider (Vercel, Netlify, etc.)

## 🤝 Contributing

Feel free to customize this template for your needs. This is meant to be a starting point for your projects.

## 📄 License

MIT License - feel free to use this template for personal or commercial projects.
