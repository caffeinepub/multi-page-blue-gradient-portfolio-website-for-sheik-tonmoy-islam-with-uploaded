# Deployment Verification Checklist

This document outlines the verification steps required before and after deploying the Sheik Tonmoy Islam portfolio site.

## Pre-Deployment Checks

### 1. Build Verification
- [ ] Run `npm run build` successfully without errors
- [ ] Verify no TypeScript compilation errors
- [ ] Check console for any warnings that need addressing

### 2. Static Waterfall Background
- [ ] Verify waterfall background image loads correctly on all pages
- [ ] Confirm background is fixed and covers full viewport
- [ ] Check that overlay scrim provides adequate readability
- [ ] Ensure background has `pointer-events: none` and stays behind content

### 3. Logo-Themed Global Typography
- [ ] Verify all text across routes uses blue→cyan themed colors (not yellow)
- [ ] Check `text-foreground` renders with logo-themed palette in light mode
- [ ] Check `text-foreground` renders with logo-themed palette in dark mode
- [ ] Confirm `text-muted-foreground` is readable on all pages
- [ ] Verify hero section no longer uses `text-white` + `drop-shadow` for readability
- [ ] Confirm header navigation text inherits theme tokens correctly
- [ ] Verify footer text uses theme tokens and remains readable
- [ ] Check that intentional white brand elements (logo badge "STI") are preserved

### 4. Blog Features
- [ ] Verify all 5 blog article preview images load on `/blog` landing page
- [ ] Test navigation to each of the 5 blog article sub-pages
- [ ] Confirm article images load correctly on sub-pages with proper error handling
- [ ] Check side-by-side layout (image left/right alternation) on desktop
- [ ] Verify stacked layout on mobile devices
- [ ] Test image loading states and fallback behavior

### 5. Footer Attribution
- [ ] Confirm Caffeine.ai attribution has been removed from footer
- [ ] Verify copyright notice shows current year dynamically
- [ ] Check footer styling and backdrop blur effect

### 6. Routing & Navigation
- [ ] Test all navigation links in header (Home, About, Services, Skills, Portfolio, Blog, Contact)
- [ ] Verify mobile navigation drawer works correctly
- [ ] Confirm active route highlighting works on all pages
- [ ] Test footer quick links navigation

### 7. Content & Assets
- [ ] Verify all portrait images load correctly
- [ ] Check skill category images on Skills and Portfolio pages
- [ ] Confirm blog article images load with proper dimensions
- [ ] Test contact form submission and validation

## Post-Deployment Checks

### 1. Production Build
- [ ] Verify production build deploys successfully
- [ ] Check that all assets are accessible via CDN/hosting
- [ ] Confirm no 404 errors for images or resources

### 2. Cross-Browser Testing
- [ ] Test in Chrome/Edge (Chromium)
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Verify mobile responsiveness on actual devices

### 3. Performance
- [ ] Check page load times
- [ ] Verify images are optimized and loading efficiently
- [ ] Confirm no console errors in production

### 4. SEO & Metadata
- [ ] Verify page titles are set correctly
- [ ] Check Open Graph tags for social sharing
- [ ] Confirm meta descriptions are present

### 5. Production Identifier
- [ ] Verify deployment uses identifier: `sheik-tonmoy-islam`
- [ ] Confirm URL structure matches expected format

## Known Issues & Notes

- Static waterfall background replaces previous motion-graphic animated background
- Blog article images use v2 versions with verified dimensions (1600x900)
- Contact form integrates with backend actor for submission storage
- All typography now uses logo-themed blue→cyan palette with automatic readability adjustments

## Deployment Commands

