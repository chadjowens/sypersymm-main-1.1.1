# Advisor Components

This directory contains components specific to the AdvisorAccessPage and related advisor functionality for the Future-Forward Planning community. All components feature comprehensive JSDoc documentation, theme-aware styling, and responsive design.

## Recent Updates

- **Enhanced Documentation**: All components now have comprehensive JSDoc comments and inline documentation
- **Form Improvements**: AdvisorSignupForm updated with detailed validation, Supabase integration docs, and field mapping
- **Content Updates**: References updated from "Agent AI" to "Future-Forward Planning" throughout
- **Feature Management**: Directory listing and community events checkboxes temporarily disabled but preserved in code

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

### AdvisorHeroSection
**Purpose**: Main hero section for the Advisor Access Page

**Features**:
- Primary heading with "Join the Future-Forward Planning Community" call-to-action
- Value proposition description highlighting community benefits
- Benefits highlight box with glassmorphism design
- Action buttons for joining and signing in
- Theme-aware styling and responsive design
- Gradient text styling with hero-header class

**Documentation**: Comprehensive JSDoc with feature descriptions and styling notes

### AdvisorOverviewSection
**Purpose**: "Your Participation Benefits" section showcasing main community advantages

**Features**:
- Two primary benefit cards in responsive grid layout
- Content transformation and analysis report benefits
- Uses shared IconCard components for consistency
- Structured benefit data with clear value propositions
- Theme-aware styling for dark/light mode

**Documentation**: Complete JSDoc with benefit card data structure documentation

### AdvisorReasonsSection
**Purpose**: "Why Forward-Thinking Advisors Participate" section with detailed explanations

**Features**:
- Six reason cards in responsive grid layout (2 columns on medium, 3 on large screens)
- Covers research overhead, thought leadership, content creation, networking, industry insights, and competitive advantage
- Uses shared ReasonCard components for consistency
- Themed background section styling
- Structured reason data with clear value propositions

**Documentation**: Comprehensive JSDoc with reasons data array documentation

### AdvisorAboutSection
**Purpose**: "Meet Your Community Host" section featuring the community host profile

**Features**:
- Professional profile card with avatar and detailed biography
- Glassmorphism design with backdrop blur effects
- Interactive hover effects
- Responsive grid layout for mobile and desktop
- Theme-aware styling and professional presentation

**Documentation**: Complete JSDoc with profile presentation and styling notes

### AdvisorSignupForm
**Purpose**: Comprehensive Future-Forward Planning Community signup form

**Features**:
- Multi-field form with comprehensive validation
- Professional role dropdown with 8 industry-standard options
- Firm size categorization for community segmentation
- Areas of interest textarea for personalized content
- Communication preferences (content packages, analysis reports)
- Supabase integration with proper field mapping
- Real-time validation with specific error messages
- Success/error status messaging
- Theme-aware styling and responsive design
- Form reset on successful submission

**Temporarily Disabled Features**:
- Directory listing checkbox (preserved in code)
- Community events checkbox (preserved in code)

**Documentation**: Extensive JSDoc with:
- Complete function documentation for handleChange and handleSubmit
- Detailed validation process explanation
- Supabase integration and field mapping notes
- Form field descriptions and requirements
- Data structure documentation for roleOptions and firmSizeOptions

## Component Architecture

Section components are extracted from the main AdvisorAccessPage to improve maintainability and comply with the 500-line file size limit.

Each section component:
- Uses the theme store directly for dark/light mode
- Maintains the same styling and functionality as the original
- Is fully self-contained with no external dependencies beyond shared UI components
- Features comprehensive JSDoc documentation
- Follows consistent naming and styling patterns

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
