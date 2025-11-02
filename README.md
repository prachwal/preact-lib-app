# Preact Lib App

A simple Preact application built with Vite and TypeScript, featuring a counter component and configured for testing and deployment.

## Features

- Counter component with Preact hooks
- Hot module replacement (HMR) for development
- Testing with Vitest and JUnit reporting
- CI/CD pipeline with GitHub Actions
- Automatic deployment to GitHub Pages

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

Tests use Vitest with jsdom environment and generate JUnit XML report in `junit.xml`.

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
├── docs
│   └── (TypeDoc generated files)
├── index.html
└── vite.svg

2 directories, 5+ files
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

## Project Structure

```text
.
├── public
│   └── vite.svg
├── src
│   ├── __tests__
│   │   └── App.test.tsx
│   ├── assets
│   │   └── preact.svg
│   ├── app.css
│   ├── app.tsx
│   ├── index.css
│   └── main.tsx
├── LICENSE
├── README.md
├── index.html
├── junit.xml
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── typedoc.json
├── vite.config.ts
└── vitest.config.ts

4 directories, 19 files
```

- `src/app.tsx`: Main App component with counter logic
- `src/main.tsx`: Application entry point
- `src/__tests__/`: Test files (e.g., `App.test.tsx`)
- `vite.config.ts`: Vite configuration with dynamic base for Pages
- `vitest.config.ts`: Vitest configuration for testing
- `.github/workflows/build.yml`: GitHub Actions pipeline

## Documentation

Generate TSDoc documentation using TypeDoc:

```bash
npm run docs
```

Documentation is generated in the `docs/` directory and copied to `dist/docs/` for inclusion in build artifacts. Open `dist/docs/index.html` locally to view the API documentation.
