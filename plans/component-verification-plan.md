# Component Verification and Repair Plan

## Status Legend
- [ ] Pending
- [x] Completed
- [!] Failed/Requires attention

## Components to Fix (Not Working)

### Special Components
- [ ] Carousel - nie działa (requires slides array)
- [ ] Stats - nie działa (requires stats array)  
- [ ] Timeline - nie działa (requires items array)

### Social Components
- [ ] Comment - nie działa (requires author and text props - error: "Cannot read properties of undefined (reading 'charAt')")

### Layout Components
- [ ] Container - nie działa (missing proper demo)
- [ ] GridSystem - nie działa (missing proper demo)
- [ ] Section - nie działa (missing proper demo)
- [ ] Spacer - nie działa (missing proper demo)

## Components Needing More Demos

### Special Components
- [ ] CodeBlock - add more demos
- [ ] PricingCard - add more demos
- [ ] Search - add more demos
- [ ] Testimonial - add more demos

### Social Components
- [ ] Rating - add more demos
- [ ] ShareButtons - add more demos

### Layout Components
- [ ] Footer - add more demos
- [ ] Header - add more demos

## Verification Steps

For each component:
1. Fix the story file with proper props/data
2. Start Storybook and verify the component renders correctly
3. Test all story variations
4. Mark as completed in this checklist
5. Document any issues found

## Notes

- Primary issue with broken components: Missing required props in story args
- Comment component specifically fails with "Cannot read properties of undefined (reading 'charAt')" - needs author prop
- All layout components need proper children/content demos
- Components with array props (Carousel, Stats, Timeline) need sample data
