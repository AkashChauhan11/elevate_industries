# Natural Palette Color System

This document outlines the centralized color system for the Elevate Industries website using a natural, earthy color palette.

## Core Colors

### Primary Colors (Natural Palette)
- **Warm Yellow** `#FFD775` - Primary accent color, used for buttons, highlights, and primary actions
- **Earth Brown** `#A28E65` - Secondary color, used for text, borders, and secondary elements
- **Cream White** `#FFF8EA` - Background color, provides warmth and readability
- **Light Grey** `#DFE0DF` - Surface color, used for cards, sections, and subtle backgrounds

## Color Variations

Each core color has 10 shades (50-900) for flexibility:
- **50**: Lightest shade (almost white)
- **100-200**: Very light shades
- **300-400**: Light shades
- **500**: Base color
- **600-700**: Darker shades
- **800-900**: Darkest shades

## Usage Guidelines

### Backgrounds
- **Main Background**: `bg-cream-white-100` or `bg-background`
- **Section Backgrounds**: `bg-light-grey-400` or `bg-surface`
- **Card Backgrounds**: `bg-cream-white-50` or `bg-white`

### Text
- **Primary Text**: `text-earth-brown-500` or `text-text-primary`
- **Secondary Text**: `text-warm-yellow-200` or `text-text-secondary`
- **Headings**: `text-earth-brown-700` or `text-earth-brown-800`

### Buttons
- **Primary Buttons**: `bg-warm-yellow-200 hover:bg-warm-yellow-300 text-earth-brown-800`
- **Secondary Buttons**: `border-warm-yellow-200 text-warm-yellow-200 hover:bg-warm-yellow-200 hover:text-earth-brown-800`

### Borders & Accents
- **Primary Borders**: `border-warm-yellow-200`
- **Secondary Borders**: `border-earth-brown-500`
- **Accent Elements**: `bg-warm-yellow-100` or `bg-warm-yellow-50`

## CSS Custom Properties

All colors are available as CSS custom properties for direct use:

```css
.element {
  background-color: var(--color-warm-yellow);
  color: var(--color-earth-brown);
  border-color: var(--color-light-grey);
}
```

## Tailwind Classes

Use these Tailwind classes for consistent styling:

```jsx
// Backgrounds
<div className="bg-warm-yellow-200">Primary background</div>
<div className="bg-earth-brown-500">Secondary background</div>
<div className="bg-cream-white-100">Light background</div>

// Text
<h1 className="text-earth-brown-800">Heading</h1>
<p className="text-earth-brown-500">Body text</p>
<span className="text-warm-yellow-200">Accent text</span>

// Borders
<div className="border-warm-yellow-200">Primary border</div>
<div className="border-earth-brown-500">Secondary border</div>
```

## Making Changes

To change colors across the entire website:

1. **Update CSS Variables**: Modify `src/styles/colors.css`
2. **Update Tailwind Config**: Modify `tailwind.config.js` if adding new colors
3. **All changes will automatically propagate** throughout the website

## Accessibility

The color combinations have been tested for:
- **Contrast Ratio**: Meets WCAG AA standards
- **Color Blindness**: Distinguishable for users with color vision deficiencies
- **Readability**: Clear text on all background combinations 