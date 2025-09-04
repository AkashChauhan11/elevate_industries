# Natural Palette Color System

## Overview

The Elevate Industries website now uses a comprehensive, centralized color system based on a natural, earthy palette. This system ensures consistency across all components and makes it easy to maintain and update colors throughout the website.

## Color Palette

### Primary Colors

| Color Name | Hex Code | Usage | Tailwind Class |
|------------|----------|-------|----------------|
| **Warm Yellow** | `#FFD775` | Primary accent, buttons, highlights | `warm-yellow-200` |
| **Earth Brown** | `#A28E65` | Text, borders, secondary elements | `earth-brown-500` |
| **Cream White** | `#FFF8EA` | Backgrounds, cards | `cream-white-100` |
| **Light Grey** | `#DFE0DF` | Surfaces, subtle backgrounds | `light-grey-400` |

### Color Variations

Each color has 10 shades (50-900) for flexibility:
- **50**: Lightest (almost white)
- **100-200**: Very light
- **300-400**: Light
- **500**: Base color
- **600-700**: Darker
- **800-900**: Darkest

## File Structure

```
src/
├── styles/
│   ├── colors.css          # CSS custom properties
│   └── color-reference.md  # Detailed color documentation
├── components/
│   └── ColorShowcase.jsx   # Color demonstration component
├── index.css               # Main CSS with color imports
└── tailwind.config.js      # Tailwind color configuration
```

## How to Use

### 1. Tailwind Classes

Use these predefined Tailwind classes for consistent styling:

```jsx
// Backgrounds
<div className="bg-warm-yellow-200">Primary background</div>
<div className="bg-earth-brown-500">Secondary background</div>
<div className="bg-cream-white-100">Light background</div>

// Text
<h1 className="text-earth-brown-800">Heading</h1>
<p className="text-earth-brown-600">Body text</p>
<span className="text-warm-yellow-200">Accent text</span>

// Borders
<div className="border-warm-yellow-200">Primary border</div>
<div className="border-earth-brown-500">Secondary border</div>
```

### 2. CSS Custom Properties

Use CSS variables for direct styling:

```css
.element {
  background-color: var(--color-warm-yellow);
  color: var(--color-earth-brown);
  border-color: var(--color-light-grey);
}
```

### 3. Predefined Component Classes

Use these utility classes for common patterns:

```css
.btn-primary          /* Primary button styling */
.btn-secondary       /* Secondary button styling */
.text-warm-yellow    /* Warm yellow text */
.bg-earth-brown      /* Earth brown background */
.border-warm-yellow  /* Warm yellow border */
```

## Making Changes

### To Change Colors Across the Website:

1. **Update CSS Variables** in `src/styles/colors.css`
2. **Update Tailwind Config** in `tailwind.config.js` (if adding new colors)
3. **All changes automatically propagate** throughout the website

### Example: Changing Primary Color

```css
/* In src/styles/colors.css */
:root {
  --color-warm-yellow: #NEW_COLOR_HERE;
  --color-primary: var(--color-warm-yellow);
}
```

## Best Practices

### Color Combinations

- **Primary Text**: Use `earth-brown-500` to `earth-brown-800` on light backgrounds
- **Secondary Text**: Use `warm-yellow-200` for accents and highlights
- **Backgrounds**: Use `cream-white-100` for main content areas
- **Surfaces**: Use `light-grey-400` for cards and sections

### Accessibility

- All color combinations meet WCAG AA contrast standards
- Colors are distinguishable for users with color vision deficiencies
- High contrast options available for important elements

### Consistency

- Always use the predefined color classes
- Avoid hardcoding hex values
- Use semantic color names (e.g., `text-primary` instead of `text-warm-yellow-200`)

## Component Examples

### Navigation

```jsx
<nav className="bg-earth-brown-800 text-cream-white-100 border-b border-warm-yellow-200">
  {/* Navigation content */}
</nav>
```

### Buttons

```jsx
<button className="btn-primary">
  Primary Action
</button>

<button className="btn-secondary">
  Secondary Action
</button>
```

### Cards

```jsx
<div className="bg-cream-white-50 border border-warm-yellow-200 rounded-2xl p-6">
  <h3 className="text-earth-brown-800">Card Title</h3>
  <p className="text-earth-brown-600">Card content</p>
</div>
```

## Migration Guide

### From Old Color System

If you're updating existing components:

1. Replace `bg-black` → `bg-earth-brown-800`
2. Replace `text-white` → `text-cream-white-100`
3. Replace `bg-elevate-gold` → `bg-warm-yellow-200`
4. Replace `text-elevate-gold` → `text-warm-yellow-200`
5. Replace `border-elevate-gold` → `border-warm-yellow-200`

### Search and Replace Patterns

```bash
# Find all old color references
grep -r "elevate-gold\|bg-black\|text-white" src/

# Replace with new colors
sed -i 's/bg-black/bg-earth-brown-800/g' src/**/*.jsx
sed -i 's/text-white/text-cream-white-100/g' src/**/*.jsx
sed -i 's/elevate-gold/warm-yellow-200/g' src/**/*.jsx
```

## Testing

### Color Showcase Component

Use the `ColorShowcase` component to visualize all colors:

```jsx
import ColorShowcase from './components/ColorShowcase';

// Add to your routes or pages
<ColorShowcase />
```

### Browser DevTools

1. Inspect elements to verify color classes
2. Check CSS custom properties in the computed styles
3. Verify contrast ratios using browser accessibility tools

## Support

For questions about the color system:

1. Check `src/styles/color-reference.md` for detailed documentation
2. Review the `ColorShowcase` component for examples
3. Consult the Tailwind config for available color variations
4. Use browser dev tools to inspect applied colors

## Future Enhancements

- Dark mode support (already prepared in CSS variables)
- Additional color variations for specific use cases
- Automated color accessibility testing
- Color scheme presets for different contexts 