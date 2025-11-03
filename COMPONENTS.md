# Component Library

A comprehensive component library built with Preact, TypeScript, and Storybook following Phase 2 requirements.

## Available Components

### Feedback Components

#### Alert
Displays important messages to users with different severity levels.
- **Variants**: info, success, warning, error
- **Features**: Optional title, dismissible, custom icons
- **Usage**: `<Alert variant="success" title="Success!" onClose={() => {}}>Message</Alert>`

#### Badge
Small status descriptors for UI elements.
- **Variants**: filled, outlined, soft
- **Colors**: default, primary, success, warning, error, info
- **Sizes**: sm, md, lg
- **Features**: Dot variant, counter badges
- **Usage**: `<Badge variant="filled" color="primary">New</Badge>`

#### Spinner
Loading indicators with multiple animation styles.
- **Variants**: circular, dots, pulse
- **Sizes**: xs, sm, md, lg, xl
- **Features**: Screen reader text, customizable label
- **Usage**: `<Spinner variant="circular" size="md" />`

#### Progress
Visual indicators for task completion.
- **Variants**: linear, circular
- **Colors**: primary, success, warning, error, info
- **Sizes**: sm, md, lg
- **Features**: Determinate/indeterminate, optional label, percentage display
- **Usage**: `<Progress value={60} showLabel />`

#### Skeleton
Placeholder loading state for content.
- **Variants**: text, circular, rectangular
- **Animations**: pulse, wave, none
- **Features**: Custom dimensions, composable layouts
- **Usage**: `<Skeleton variant="rectangular" width={200} height={100} />`

#### Modal
Dialog overlay for important content and user interactions.
- **Sizes**: sm, md, lg, xl, full
- **Features**: Header, body, footer sections, backdrop click, escape key, scroll lock
- **Usage**: `<Modal isOpen={true} onClose={() => {}} title="Title">Content</Modal>`

### Data Display Components

#### Avatar
User profile images or initials.
- **Shapes**: circle, square
- **Sizes**: xs, sm, md, lg, xl, 2xl
- **Types**: image, initials, icon, placeholder
- **Features**: Status indicator, fallback states
- **Usage**: `<Avatar src="image.jpg" status="online" />`

#### Divider
Visual separator for content sections.
- **Orientations**: horizontal, vertical
- **Styles**: solid, dashed, dotted
- **Features**: Text content support
- **Usage**: `<Divider orientation="horizontal">OR</Divider>`

#### Chip
Compact element for tags, filters, and selections.
- **Variants**: filled, outlined, soft
- **Colors**: default, primary, success, warning, error, info
- **Sizes**: sm, md, lg
- **Features**: Closeable, clickable, selectable, disabled state
- **Usage**: `<Chip color="primary" onClose={() => {}}>Tag</Chip>`

#### Card
Flexible container for grouping related content.
- **Variants**: elevated, outlined, filled
- **Sections**: CardHeader, CardMedia, CardBody, CardFooter
- **Features**: Hoverable, clickable, composable sections
- **Usage**: 
```tsx
<Card variant="outlined">
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
</Card>
```

#### Accordion
Vertically stacked expandable sections.
- **Features**: Independent item state, default open, disabled items
- **Accessibility**: ARIA attributes, keyboard navigation
- **Usage**:
```tsx
<Accordion>
  <AccordionItem title="Section 1">Content 1</AccordionItem>
  <AccordionItem title="Section 2" defaultOpen>Content 2</AccordionItem>
</Accordion>
```

## Component Structure

Each component follows a consistent pattern:

```
ComponentName/
├── ComponentName.tsx       # Component implementation
├── ComponentName.stories.tsx  # Storybook stories
├── ComponentName.test.tsx   # Vitest tests
└── index.ts                # Barrel exports
```

## Installation & Usage

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Run tests
npm test

# Build
npm run build
```

## Import Examples

```tsx
// Import individual components
import { Alert, Badge, Card } from './components';

// Import with types
import { Alert, type AlertProps } from './components/Alert';

// Import subcomponents
import { Card, CardHeader, CardBody } from './components/Card';
```

## Testing

All components have comprehensive test coverage:
- Unit tests with Vitest
- Component rendering tests
- User interaction tests
- Accessibility tests
- 98%+ code coverage

## Storybook

Interactive component documentation available at `http://localhost:6006` when running Storybook.

Each component includes:
- Default story
- Variant examples
- Size demonstrations
- Interactive controls
- Usage examples

## TypeScript Support

All components are fully typed with TypeScript:
- Component props interfaces
- Variant type unions
- Event handler types
- Subcomponent types

## Accessibility

Components follow WCAG guidelines:
- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Screen reader support
- Focus management
- Color contrast

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Components

Additional components planned for future releases:
- Table (sortable, filterable)
- List (nested, actionable)
- Empty State
- Toast notifications
- Tooltip
- Popover

## Contributing

Follow the established pattern when adding new components:
1. Create component directory
2. Implement component with TypeScript
3. Add Storybook stories
4. Write comprehensive tests
5. Export from index.ts
6. Update main components index
