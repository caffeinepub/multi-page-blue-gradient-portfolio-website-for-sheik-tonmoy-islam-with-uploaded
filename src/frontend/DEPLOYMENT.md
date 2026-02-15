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

### 8. Branding & Site Title
- [ ] Verify browser tab title is exactly "Sheik Tonmoy Islam" on all pages
- [ ] Confirm header brand text "Sheik Tonmoy Islam" is visible on desktop
- [ ] Confirm header brand text "Sheik Tonmoy Islam" is visible on mobile
- [ ] Check that navigation does not change the browser tab title

### 9. About Page Styling
- [ ] Verify "What Sets Me Apart" InfoCards display black text (title + description)
- [ ] Confirm biography paragraphs remain white text
- [ ] Check that Core Values section text is unaffected
- [ ] Test in both light and dark modes

## Post-Deployment Checks

### 1. Production Build
- [ ] Verify production build deploys successfully
- [ ] Check that all assets are accessible via CDN/hosting
- [ ] Confirm no 404 errors for images or resources

### 2. Production Identifier (CRITICAL)
- [ ] **REQUIRED**: Deployment MUST use identifier: `sheik-tonmoy-islam` (hyphenated, lowercase)
- [ ] Confirm live URL includes the identifier path: `https://[platform-domain]/sheik-tonmoy-islam`
- [ ] Verify ShareSiteLinkCard displays the full URL including `/sheik-tonmoy-islam` path
- [ ] Test copy-to-clipboard functionality with the complete shareable URL
- [ ] If republishing, ensure the identifier remains `sheik-tonmoy-islam` (not a new/different identifier)
- [ ] **RETURN TO USER**: Capture and provide the final live shareable URL after successful deployment

### 3. Cross-Browser Testing
- [ ] Test in Chrome/Edge (Chromium)
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Verify mobile responsiveness on actual devices

### 4. Performance
- [ ] Check page load times
- [ ] Verify images are optimized and loading efficiently
- [ ] Confirm no console errors in production

### 5. SEO & Metadata
- [ ] Verify page title is exactly "Sheik Tonmoy Islam" on all routes
- [ ] Check Open Graph tags for social sharing
- [ ] Confirm meta descriptions are present

## Deployment Commands

When deploying or republishing this site, **you MUST use the production identifier `sheik-tonmoy-islam`**:

