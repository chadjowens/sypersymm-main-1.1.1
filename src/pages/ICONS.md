# AdvisorAccessPage Icon Reference

This document serves as a central repository for icons used in the AdvisorAccessPage. Each section contains icon code for icons used in specific sections of the page, making it easy to update and maintain consistent icon styling across the page.

## Icon Sources

### SVG Icons
SVG icons are directly embedded in the components. The SVG code is stored in this document for reference.

### Lucide React Icons
For Lucide React icons, we import them directly:

```jsx
import { IconName } from 'lucide-react';

// Usage example
<IconName className="w-6 h-6" />
```

### Google Material Symbols
For Google Material Symbols, we use the CDN approach:

```html
<!-- Add to index.html or component that needs icons -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> 

<!-- Add styling for the icons -->
<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>

<!-- Usage example -->
<span class="material-symbols-outlined">icon_name</span>
```

## How to Use

1. Find the section and icon you want to update
2. Copy the icon code from this document
3. Replace the existing icon in the AdvisorAccessPage component
4. Update the import statements at the top of the file if using Lucide React icons

## Content Package Section Icons

### Marketing Content Icon (Currently: 📊)
**Location**: Line ~188 in AdvisorAccessPage.tsx
**Current**: Emoji 📊
**CDN Link**: 
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=bar_chart" />
```
**Replacement**: 
```jsx
// Usage in component
<div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
  <span 
    className="material-symbols-outlined hero-header" 
    style={{ 
      fontSize: '32px'
    }}
  >
    bar_chart
  </span>
</div>
```

## Strategic Intelligence Section Icons

### Strategic Analysis Icon (Currently: 🎯)
**Location**: Line ~321 in AdvisorAccessPage.tsx
**Current**: Emoji 🎯
**Replacement**:
```jsx
// Import at top of file
import { Target } from 'lucide-react';

// Usage in component
<div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
  <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>
    <Target className="w-8 h-8" />
  </div>
</div>
```

## Industry Connections Section Icons

### Industry Connections Icon (Currently: 🤝)
**Location**: Line ~258 in AdvisorAccessPage.tsx
**Current**: Emoji 🤝
**CDN Link**: 
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=hive" />
```
**Replacement**:
```jsx
// Usage in component
<div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
  <span 
    className="material-symbols-outlined hero-header" 
    style={{ 
      fontSize: '32px'
    }}
  >
    hive
  </span>
</div>
```

## Why Forward-Thinking Advisors Participate Section Icons

### Stay Ahead Without Research Overhead Icon (Currently: 🔍)
**Location**: Line ~376 in AdvisorAccessPage.tsx
**Current**: Emoji 🔍
**CDN Link**: 
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=search_insights" />
```
**Replacement**:
```jsx
// Usage in component
<div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
  <span 
    className="material-symbols-outlined hero-header" 
    style={{ 
      fontSize: '32px'
    }}
  >
    search_insights
  </span>
</div>
```

### Content That Positions You as Industry Leader Icon (Currently: 👑)
**Location**: Line ~414 in AdvisorAccessPage.tsx
**Current**: Emoji 👑
**CDN Link**: 
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=crown" />
```
**Replacement**:
```jsx
// Usage in component
<div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
  <span 
    className="material-symbols-outlined hero-header" 
    style={{ 
      fontSize: '32px'
    }}
  >
    crown
  </span>
</div>
```

### Connect with Like-Minded Professionals Icon (Currently: 🤝)
**Location**: Line ~452 in AdvisorAccessPage.tsx
**Current**: Emoji 🤝
**CDN Link**: 
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=handshake" />
```
**Replacement**:
```jsx
// Usage in component
<div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
  <span 
    className="material-symbols-outlined hero-header" 
    style={{ 
      fontSize: '32px'
    }}
  >
    handshake
  </span>
</div>
```

### Actionable Intelligence Icon (Currently: ⚡)
**Location**: Line ~490 in AdvisorAccessPage.tsx
**Current**: Emoji ⚡
**CDN Link**: 
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=bolt" />
```
**Replacement**:
```jsx
// Usage in component
<div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
  <span 
    className="material-symbols-outlined hero-header" 
    style={{ 
      fontSize: '32px'
    }}
  >
    bolt
  </span>
</div>
```

### Comprehensive Analysis Icon (Currently: 📈)
**Location**: Line ~528 in AdvisorAccessPage.tsx
**Current**: Emoji 📈
**CDN Link**: 
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chart_data" />
```
**Replacement**:
```jsx
// Usage in component
<div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
  <span 
    className="material-symbols-outlined hero-header" 
    style={{ 
      fontSize: '32px'
    }}
  >
    chart_data
  </span>
</div>
```

### Early Access Icon (Currently: 🚀)
**Location**: Line ~566 in AdvisorAccessPage.tsx
**Current**: Emoji 🚀
**CDN Link**: 
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=rocket_launch" />
```
**Replacement**:
```jsx
// Usage in component
<div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
  <span 
    className="material-symbols-outlined hero-header" 
    style={{ 
      fontSize: '32px'
    }}
  >
    rocket_launch
  </span>
</div>
```

## Checkmark Icons

### List Item Checkmarks (Currently: ✓)
**Location**: Multiple locations throughout the page
**Current**: Unicode checkmark ✓
**Replacement**:
```jsx
// Import at top of file
import { Check } from 'lucide-react';

// Usage in component
<span className={`mr-2 mt-1 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`}>
  <Check className="w-4 h-4" />
</span>
```

## Icon Styling Guidelines

### Standard Icon Container
Use this consistent container structure for all section icons:

```jsx
<div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
  <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>
    {/* Icon component here */}
  </div>
</div>
```

### Icon Sizes
- **Section Icons**: `w-8 h-8` (32px)
- **List Checkmarks**: `w-4 h-4` (16px)
- **Small Icons**: `w-6 h-6` (24px)

### Color Scheme
- **Dark Mode**: `text-gray-200`
- **Light Mode**: `text-gray-600`
- **Checkmarks Dark**: `text-green-400`
- **Checkmarks Light**: `text-green-500`

## Import Statement Template

When updating the AdvisorAccessPage.tsx file, add the required imports at the top:

```jsx
import React, { useState } from 'react';
import { useThemeStore } from '../store/themeStore';
import { SimpleNavbar } from '../layouts/core/SimpleNavbar';
import { Background } from '../layouts/core/Background';
// Add icon imports here
import { 
  BarChart3, 
  Target, 
  Zap, 
  TrendingUp, 
  Rocket, 
  Check 
} from 'lucide-react';
```

## Notes

- All icons follow the same styling pattern as the main site service cards
- Icons use neutral colors that work with both light and dark themes
- Container sizes are consistent across all sections
- Checkmarks use green colors to indicate positive/completed items
- Icons are sized appropriately for their context (larger for section headers, smaller for list items)
