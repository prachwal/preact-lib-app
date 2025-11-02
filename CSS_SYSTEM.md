# Modern CSS System Documentation

## Overview

This project implements a modern, scalable CSS architecture using SCSS with design tokens, utility classes, mixins, and animations. The system follows industry best practices and modern CSS patterns.

## Architecture

### Directory Structure

```text
src/styles/
├── tokens/           # Design tokens (CSS custom properties)
│   ├── _colors.scss
│   ├── _spacing.scss
│   ├── _typography.scss
│   ├── _shadows.scss
│   ├── _transitions.scss
│   ├── _breakpoints.scss
│   ├── _borders.scss
│   └── _index.scss
├── mixins/           # Reusable SCSS mixins
│   ├── _responsive.scss
│   ├── _accessibility.scss
│   ├── _layout.scss
│   ├── _typography.scss
│   ├── _buttons.scss
│   ├── _animations.scss
│   ├── _utilities.scss
│   └── _index.scss
├── utilities/        # Utility classes
│   ├── _spacing.scss
│   ├── _flexbox.scss
│   ├── _grid.scss
│   ├── _text.scss
│   ├── _display.scss
│   ├── _accessibility.scss
│   └── _index.scss
├── animations/       # Keyframe animations
│   ├── _keyframes.scss
│   └── _index.scss
├── themes/           # Theme configuration
│   ├── _variables.scss
│   └── _themes.scss
├── base/             # Base styles
│   ├── _mixins.scss
│   └── _typography.scss
└── components/       # Component styles
    ├── _app.scss
    ├── _buttons.scss
    ├── _card.scss
    ├── _logo.scss
    └── _read-the-docs.scss
```

## Design Tokens

Design tokens are defined as CSS custom properties and provide a single source of truth for design decisions.

### Colors

```scss
// Primary colors
--color-primary: #646cff;
--color-primary-hover: #535bf2;
--color-primary-light: #8087ff;
--color-primary-dark: #4148c7;

// Semantic colors
--color-success: #22c55e;
--color-warning: #f59e0b;
--color-error: #ef4444;
--color-info: #3b82f6;

// Neutral colors (gray scale)
--color-gray-50 through --color-gray-900
```

### Spacing

```scss
// Base unit (4px)
--space-unit: 0.25rem;

// Scale
--space-0 through --space-24

// Semantic sizes
--space-xs, --space-sm, --space-md, --space-lg, --space-xl, --space-2xl, --space-3xl
```

### Typography

```scss
// Font families
--font-family-base: system-ui, Avenir, Helvetica, Arial, sans-serif;
--font-family-mono: 'Fira Code', 'Courier New', monospace;

// Font sizes
--font-size-xs through --font-size-6xl

// Font weights
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

// Line heights
--line-height-none, --line-height-tight, --line-height-normal, etc.
```

### Shadows

```scss
--shadow-xs, --shadow-sm, --shadow-md, --shadow-lg, --shadow-xl, --shadow-2xl
--shadow-focus  // For focus states
```

### Transitions

```scss
// Durations
--transition-duration-fast: 150ms;
--transition-duration-base: 250ms;
--transition-duration-slow: 350ms;

// Easing
--transition-ease-in, --transition-ease-out, --transition-ease-in-out

// Common transitions
--transition-all
--transition-colors
--transition-transform
--transition-opacity
```

## Mixins

### Responsive Design

```scss
@use 'styles/mixins' as *;

.my-component {
  // Mobile-first approach
  font-size: 1rem;
  
  @include sm {
    font-size: 1.125rem;
  }
  
  @include md {
    font-size: 1.25rem;
  }
  
  @include lg {
    font-size: 1.5rem;
  }
}

// Custom breakpoints
.custom {
  @include respond-above(900px) {
    // styles for screens wider than 900px
  }
}
```

**Available breakpoints:**

- `xs`: 480px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `xxl`: 1536px

### Layout Mixins

```scss
@use 'styles/mixins' as *;

// Flexbox
.flex-center {
  @include flex-center;  // Centers content
}

.flex-between {
  @include flex-between;  // Space between
}

// Grid
.grid-layout {
  @include grid-auto-fit(250px);  // Auto-fit grid
}

// Container
.container {
  @include container(var(--container-7xl));
}
```

### Typography Mixins

```scss
@use 'styles/mixins' as *;

// Truncate text
.truncated {
  @include truncate;
}

// Multiline truncate
.clamped {
  @include line-clamp(3);  // Show 3 lines
}

// Fluid typography
.fluid-heading {
  @include fluid-type(1.5rem, 3rem);
}
```

### Button Mixins

```scss
@use 'styles/mixins' as *;

.btn-primary {
  @include button-base;
  @include button-primary;
}

.btn-outline {
  @include button-base;
  @include button-outline;
}

.btn-sm {
  @include button-base;
  @include button-sm;
}
```

### Accessibility Mixins

```scss
@use 'styles/mixins' as *;

// Screen reader only
.visually-hidden {
  @include sr-only;
}

// Focus visible
.focusable {
  @include focus-visible;
}

// Enhanced focus ring
.button {
  @include focus-ring(var(--color-primary), 3px);
}
```

## Utility Classes

### Spacing desc

```html
<!-- Margin -->
<div class="m-4">Margin all sides</div>
<div class="mt-2 mb-4">Margin top and bottom</div>
<div class="mx-auto">Centered horizontally</div>

<!-- Padding -->
<div class="p-6">Padding all sides</div>
<div class="px-4 py-2">Padding horizontal and vertical</div>
```

Available sizes: `0, 1, 2, 3, 4, 6, 8, 12, 16`

### Flexbox

```html
<div class="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>

<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Grid

```html
<div class="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<div class="grid grid-cols-12">
  <div class="col-span-6">Half width</div>
  <div class="col-span-6">Half width</div>
</div>
```

### Typography desc

```html
<h1 class="text-4xl font-bold">Large heading</h1>
<p class="text-base leading-relaxed">Body text</p>
<p class="text-sm text-center">Small centered text</p>
<p class="truncate">This text will be truncated...</p>
<p class="line-clamp-3">This text will show 3 lines max...</p>
```

### Display & Visibility

```html
<div class="block">Block element</div>
<div class="hidden">Hidden element</div>
<div class="opacity-50">50% opacity</div>
<div class="relative">
  <div class="absolute">Positioned absolutely</div>
</div>
```

## Animations

### Using Keyframe Animations

```scss
.fade-in-element {
  animation: fadeIn 0.3s ease-in-out;
}

.slide-up-element {
  animation: slideInUp 0.5s ease-out;
}
```

Available animations:

- `fadeIn`, `fadeOut`
- `slideInUp`, `slideInDown`, `slideInLeft`, `slideInRight`
- `scaleIn`, `scaleOut`
- `spin`, `pulse`, `bounce`
- `shake`, `wiggle`, `ping`

### Using Animation Mixins

```scss
@use 'styles/mixins' as *;

.animated-box {
  @include fade-in;
}

.loading-spinner {
  @include spin(1s);
}
```

### Reduced Motion

The system automatically respects user's motion preferences:

```scss
@media (prefers-reduced-motion: reduce) {
  // All animations are reduced to 0.01ms
}
```

## Theming

### Dark/Light Mode

The system supports both automatic (system preference) and manual theme switching.

```html
<!-- Auto (respects system preference) -->
<html>...</html>

<!-- Manual dark mode -->
<html data-theme="dark">...</html>

<!-- Manual light mode -->
<html data-theme="light">...</html>
```

### Using Theme Colors

```scss
.my-component {
  background-color: var(--color-bg);
  color: var(--color-text);
  border-color: var(--color-border);
}
```

## Best Practices

### 1. Use Design Tokens

✅ **Good:**

```scss
.button {
  padding: var(--space-4);
  border-radius: var(--border-radius-lg);
  transition: var(--transition-colors);
}
```

❌ **Avoid:**

```scss
.button {
  padding: 16px;
  border-radius: 8px;
  transition: color 0.25s;
}
```

### 2. Mobile-First Responsive

✅ **Good:**

```scss
.component {
  width: 100%;
  
  @include md {
    width: 50%;
  }
  
  @include lg {
    width: 33.333%;
  }
}
```

### 3. Use Utility Classes for Simple Styles

✅ **Good:**

```html
<div class="flex items-center gap-4 p-6">
```

❌ **Avoid creating CSS for simple layouts:**

```html
<div class="custom-flex-container">
```

### 4. Accessibility First

Always include:

- Focus states for interactive elements
- Sufficient color contrast
- Screen reader text where needed
- Touch target sizes (min 44x44px)

```scss
.button {
  @include focus-visible;
  @include touch-target(44px);
}
```

### 5. Respect User Preferences

```scss
.animated {
  animation: slideIn 0.3s;
  
  @include reduced-motion {
    animation: none;
  }
}
```

## Migration Guide

### From Old @import to New @use

**Before:**

```scss
@import "styles/themes/variables";
@import "styles/base/mixins";
```

**After:**

```scss
@use 'styles/tokens' as *;
@use 'styles/mixins' as *;
```

### From Hardcoded Values to Tokens

**Before:**

```scss
.component {
  margin: 16px;
  color: #646cff;
  font-size: 16px;
}
```

**After:**

```scss
.component {
  margin: var(--space-4);
  color: var(--color-primary);
  font-size: var(--font-size-base);
}
```

## Examples

### Creating a Card Component

```scss
@use 'styles/mixins' as *;

.card {
  padding: var(--space-6);
  background-color: var(--color-bg-secondary);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition-all);
  
  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
  
  @include reduced-motion {
    transform: none;
  }
}
```

### Creating a Responsive Navigation

```scss
@use 'styles/mixins' as *;

.nav {
  @include flex-between;
  padding: var(--space-4);
  
  &__menu {
    @include list-reset;
    display: none;
    
    @include md {
      @include flex-center;
      gap: var(--space-6);
    }
  }
  
  &__link {
    @include focus-visible;
    padding: var(--space-2) var(--space-4);
    transition: var(--transition-colors);
    
    &:hover {
      color: var(--color-primary);
    }
  }
}
```

## Performance Tips

1. **Use CSS custom properties** for runtime theming instead of generating separate CSS files
2. **Minimize nesting** - keep specificity low (max 3 levels)
3. **Use utility classes** for common patterns to reduce CSS size
4. **Leverage will-change** sparingly for animations
5. **Use @forward instead of @use** when re-exporting modules

## Resources

- [SCSS Documentation](https://sass-lang.com/documentation)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Modern CSS](https://moderncss.dev/)
- [Every Layout](https://every-layout.dev/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
