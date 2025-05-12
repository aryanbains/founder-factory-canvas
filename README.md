
# The Founder Factory

A modern, high-performance website for The Founder Factory, built with React, Vite, and cutting-edge web technologies.

## Tech Stack

- **Core**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, React Spring
- **Smooth Scrolling**: Lenis
- **3D Effects**: Three.js with React Three Fiber
- **State Management**: Zustand
- **UI Components**: Headless UI + Tailwind-Merge
- **Icons**: Lucide React
- **Analytics**: React GA4

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd founder-factory
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Navbar, Footer)
│   └── ui/              # Reusable UI components
├── lib/                 # Utility functions and helpers
├── pages/               # Page components
├── store/               # Global state management
└── styles/              # Global CSS and style utilities
```

## Development Guidelines

### Code Formatting

This project uses ESLint for code quality and formatting. Run linting with:

```bash
npm run lint
```

### Commit Guidelines

Please follow conventional commits for commit messages:
- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code changes that neither fix bugs nor add features
- `perf:` - Performance improvements
- `test:` - Adding or correcting tests
- `build:` - Changes to build system or dependencies
- `ci:` - Changes to CI configuration files and scripts

### Performance Optimization

- Use React.memo for components that render frequently but rarely change
- Optimize images: Use WebP format where possible and appropriate sizes
- Lazy load non-critical components using React.lazy and Suspense
- Use windowing for long lists with react-window

## Deployment

Instructions for deploying to staging and production environments will go here.

## License

All rights reserved. This codebase is proprietary and confidential.
