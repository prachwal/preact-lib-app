# Modern Responsive Layout Implementation Plan

## Overview
Build a modern responsive mobile-first layout with routing, state management, and internationalization.

## Implementation Checklist

### Phase 1: Setup and Dependencies
- [x] Install Preact ISO Router (`preact-iso`)
- [x] Install Zustand state management
- [x] Install i18next and react-i18next for internationalization
- [x] Update vite.config.ts to inject version from package.json

### Phase 2: Project Structure
- [x] Create `/src/pages` folder for page components
- [x] Create `/src/layouts` folder for layout components
- [x] Create `/src/store` folder for Zustand stores
- [x] Create `/src/i18n` folder for internationalization setup
- [x] Create `/src/router` folder for routing configuration

### Phase 3: Core Layout Components
- [x] Create responsive Sidebar component with:
  - Mobile: sliding sidebar with hamburger menu
  - Tablet: collapsed to icons only
  - Desktop: full expanded sidebar
- [x] Create Header component with:
  - Application title
  - 3-state theme toggle SVG icon (right side)
  - Hamburger menu button (mobile)
- [x] Create Main content wrapper
- [x] Create Footer component
- [x] Create MainLayout component combining all layout parts

### Phase 4: State Management (Zustand)
- [x] Create theme store (light/dark/auto modes)
- [x] Create sidebar store (open/closed state)
- [x] Create navigation store (menu items configuration)

### Phase 5: Routing Setup
- [x] Configure Preact ISO Router
- [x] Create route configuration (centrally managed)
- [x] Implement two-level navigation structure
- [ ] Add route guards if needed

### Phase 6: Pages
- [x] Create Home page
- [x] Create Dashboard page with component demos
- [x] Create About page
- [x] Create Settings page
- [x] Create Privacy page
- [x] Create 404 Error page
- [x] Create 500 Error page

### Phase 7: Navigation System
- [x] Create centralized navigation configuration
- [x] Implement two-level navigation menu
- [ ] Add active route highlighting
- [x] Add navigation icons (using existing Icon component)

### Phase 8: Theme System
- [x] Create 3-state theme toggle (light/dark/system)
- [x] Design SVG icon for theme toggle
- [x] Implement theme switching logic
- [x] Persist theme preference to localStorage

### Phase 9: Internationalization (i18next)
- [x] Configure i18next with initial languages (en, pl)
- [x] Create translation files
- [x] Add language switcher component
- [x] Translate key UI elements
- [x] Add demo page showing i18n usage

### Phase 10: Component Demo Pages
- [x] Create demo page for Form components
- [x] Create demo page for UI components (Buttons, Cards, etc.)
- [ ] Create demo page for Layout components
- [ ] Create demo page for Navigation components
- [ ] Add visual verification for all demos

### Phase 11: Visual Verification & Polish
- [ ] Test responsive behavior on mobile viewport
- [ ] Test responsive behavior on tablet viewport
- [ ] Test responsive behavior on desktop viewport
- [ ] Verify hamburger menu functionality
- [ ] Verify sidebar transitions
- [ ] Verify theme switching
- [ ] Verify navigation flow
- [ ] Take screenshots of all pages and states

### Phase 12: Error Handling
- [x] Implement 404 error page routing
- [ ] Implement 500 error boundary
- [x] Add error page navigation
- [ ] Test error scenarios

## Technical Decisions

### Mobile-First Approach
- Base styles for mobile (< 768px)
- Tablet styles (768px - 1024px): sidebar collapsed to icons
- Desktop styles (> 1024px): full sidebar expanded

### Sidebar Behavior
- **Mobile (< 768px)**: Hidden by default, slides in from left with hamburger trigger
- **Tablet (768px - 1024px)**: Fixed, collapsed to icons only, tooltips on hover
- **Desktop (> 1024px)**: Fixed, fully expanded with labels

### Theme Toggle States
1. Light mode (sun icon)
2. Dark mode (moon icon)
3. System/Auto mode (auto icon)

### Navigation Structure
Two-level navigation:
- Level 1: Main sections (Home, Dashboard, etc.)
- Level 2: Sub-sections within main sections (if applicable)

### Version Injection
Read version from package.json and inject into vite.config.ts to make available at build time via import.meta.env

## Notes
- Leverage existing components from `/src/components`
- Use existing SCSS system and styles
- Maintain consistency with existing design patterns
- Ensure all changes are minimal and focused
