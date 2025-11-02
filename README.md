# Preact Lib App

A simple Preact application built with Vite and TypeScript, featuring a counter component and configured for testing and deployment. Includes a modern, scalable CSS architecture with design tokens, utility classes, and SCSS best practices.

## Features

- Counter component with Preact hooks
- Hot module replacement (HMR) for development
- Testing with Vitest and JUnit reporting
- CI/CD pipeline with GitHub Actions
- Automatic deployment to GitHub Pages
- **Modern CSS System** with design tokens, mixins, utilities, and animations
- Responsive design with mobile-first approach
- Dark/Light mode theming with system preference support
- Accessibility-first components (WCAG compliant)

## Prerequisites

- Node.js 22
- npm

## Installation

```bash
npm install
```

## Development

Start the development server with hot reload:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Testing

Run tests once (non-watch mode):

```bash
npm test
```

Tests use Vitest with jsdom environment and generate JUnit XML report in `junit.xml`. Code coverage is collected and reports are generated in `coverage/` directory (HTML, JSON, text formats).

## Build

Build the application for production:

```bash
npm run build
```

Output is in the `dist/` directory with the following structure:

```text
dist/
├── assets
│   ├── index-[hash].js
│   └── index-[hash].css
├── coverage
│   └── (coverage report files)
├── docs
│   └── (TypeDoc generated files)
├── index.html
└── vite.svg

3 directories, 6+ files
```

## Preview

Preview the built application locally:

```bash
npm run preview
```

## Deployment

The application is automatically deployed to GitHub Pages when pushing to the `main` branch. The CI/CD pipeline includes:

- Test stage: Runs tests and uploads JUnit results
- Build stage: Builds the app and uploads artifacts
- Deploy stage: Publishes to GitHub Pages with dynamic base path

**Live Demo**: [https://prachwal.github.io/preact-lib-app/](https://prachwal.github.io/preact-lib-app/)

## Modern CSS System

This project uses a modern, scalable CSS architecture. See [CSS_SYSTEM.md](docs/CSS_SYSTEM.md) for complete documentation.

### Key Features

- **Design Tokens**: CSS custom properties for colors, spacing, typography, shadows, transitions
- **Responsive Mixins**: Mobile-first breakpoint system (xs, sm, md, lg, xl, 2xl)
- **Utility Classes**: Spacing, flexbox, grid, typography, display utilities
- **Animations**: Keyframe animations with reduced motion support
- **Theming**: Dark/Light mode with system preference detection
- **Accessibility**: WCAG-compliant focus states, screen reader utilities
- **Modern SCSS**: Uses `@use`/`@forward` instead of deprecated `@import`

### Quick Examples

```html
<!-- Utility classes -->
<div class="flex items-center justify-between p-6 gap-4">
  <h1 class="text-3xl font-bold">Title</h1>
  <button class="px-4 py-2">Action</button>
</div>

<!-- Grid layout -->
<div class="grid grid-cols-3 gap-6">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

```scss
// Using mixins and tokens
@use 'styles/mixins' as *;

.my-component {
  padding: var(--space-6);
  border-radius: var(--border-radius-lg);
  transition: var(--transition-all);
  
  @include md {
    padding: var(--space-8);
  }
  
  @include focus-visible;
}
```

### Build CSS

Compile SCSS to CSS:

```bash
npm run build-css
```

## Project Structure

```text
.
├── docs/
│   └── CSS_SYSTEM.md       # Modern CSS system documentation
├── public/
│   └── vite.svg
├── src/
│   ├── __tests__/
│   │   └── App.test.tsx
│   ├── application/         # Feature components
│   │   ├── footer/
│   │   ├── header/
│   │   └── main/
│   ├── assets/
│   │   └── preact.svg
│   ├── styles/              # Modern CSS architecture
│   │   ├── animations/      # Keyframe animations
│   │   ├── base/            # Base styles
│   │   ├── components/      # Component styles
│   │   ├── mixins/          # SCSS mixins
│   │   ├── themes/          # Theme configuration
│   │   ├── tokens/          # Design tokens
│   │   └── utilities/       # Utility classes
│   ├── app.tsx
│   ├── main.tsx
│   └── index.scss           # CSS entry point
├── LICENSE
├── README.md
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── typedoc.json
├── vite.config.ts
└── vitest.config.ts
```

- `src/app.tsx`: Main App component with counter logic
- `src/main.tsx`: Application entry point
- `src/index.scss`: Main CSS entry point using modern `@use`/`@forward`
- `src/styles/`: Modern CSS architecture (tokens, mixins, utilities, animations)
- `src/application/`: Feature-based components (header, footer, main)
- `src/__tests__/`: Test files (e.g., `App.test.tsx`)
- `docs/CSS_SYSTEM.md`: Complete CSS system documentation
- `vite.config.ts`: Vite configuration with dynamic base for Pages
- `vitest.config.ts`: Vitest configuration for testing
- `.github/workflows/build.yml`: GitHub Actions pipeline

## Documentation

Generate TSDoc documentation using TypeDoc:

```bash
npm run docs
```

Documentation is generated in the `docs/` directory and copied to `dist/docs/` for inclusion in build artifacts. Open `dist/docs/index.html` locally to view the API documentation.
