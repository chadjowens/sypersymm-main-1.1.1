# Advisor Components

This directory contains components specific to the AdvisorAccessPage and related advisor functionality.

## Directory Structure

```
src/components/advisor/
├── sections/           # Page section components
│   ├── AdvisorHeroSection.tsx
│   ├── AdvisorOverviewSection.tsx
│   ├── AdvisorReasonsSection.tsx
│   ├── AdvisorAboutSection.tsx
│   └── AdvisorSignupForm.tsx
├── ui/                # Shared UI components for advisor pages
│   ├── GradientIcon.tsx
│   ├── IconCard.tsx
│   └── ReasonCard.tsx
└── README.md          # This file
```

## UI Components

### GradientIcon
A standardized Material Symbol icon component with gradient styling (`hero-header` class).

**Props:**
- `iconName: string` - Material Symbol icon name
- `size?: string` - Size class (default: 'text-6xl')
- `className?: string` - Additional CSS classes

### IconCard
A reusable card component for benefit/feature cards with icon, title, description, and optional list items.

**Props:**
- `icon: string` - Material Symbol icon name
- `title: string` - Card title
- `description?: string` - Card description
- `listItems?: string[]` - Array of feature/benefit items
- `className?: string` - Additional CSS classes

### ReasonCard
A specialized card component for the "Why Forward-Thinking Advisors Participate" section.

**Props:**
- `icon: string` - Material Symbol icon name
- `title: string` - Card title
- `description: string` - Card description
- `className?: string` - Additional CSS classes

## Section Components

Section components are extracted from the main AdvisorAccessPage to improve maintainability and comply with the 500-line file size limit.

Each section component:
- Uses the theme store directly for dark/light mode
- Maintains the same styling and functionality as the original
- Is fully self-contained with no external dependencies beyond shared UI components

## Usage

```typescript
import { GradientIcon, IconCard, ReasonCard } from '../components/advisor/ui';
import { AdvisorHeroSection } from '../components/advisor/sections';

// Use in your components
<GradientIcon iconName="groups" size="text-4xl" />
<IconCard 
  icon="bar_chart" 
  title="Transform Conversations" 
  listItems={["Feature 1", "Feature 2"]} 
/>
```

## Design Principles

1. **Theme Awareness**: All components support dark/light mode
2. **Consistency**: Standardized styling and hover effects
3. **Accessibility**: Proper semantic HTML and ARIA attributes
4. **Performance**: Optimized for React rendering
5. **Maintainability**: Clear prop interfaces and documentation
