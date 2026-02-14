# Deployment Guide

## Production Identifier
This application is deployed under the identifier: **sheik-tonmoy-islam**

## Pre-Deployment Checklist

### Ocean Background Theme Verification
- [ ] Static ocean background image loads correctly (`/assets/generated/blue-ocean-bg.dim_1920x1080.png`)
- [ ] Three animated wave layers render with subtle drift animations
- [ ] Readability overlay is present (dark gradient)
- [ ] Reduced-motion preference disables animations while preserving static background
- [ ] All content remains above background (z-index layering correct)

### Yellow Typography Theme Verification
- [ ] All headings render in yellow across Home, About, Services, Skills, Portfolio, and Contact pages
- [ ] Body text renders in yellow across all pages
- [ ] Muted text (e.g., descriptions, secondary labels) renders in a dimmer yellow that remains readable over the ocean background
- [ ] Navigation labels inherit yellow theme color where appropriate
- [ ] Footer text and links use yellow theme tokens
- [ ] No new text-shadow has been introduced
- [ ] Explicitly styled elements (e.g., white text on gradient buttons) remain unchanged and readable

### General Verification
- [ ] All routes are accessible (Home, About, Services, Skills, Portfolio, Contact)
- [ ] Navigation highlights active page correctly
- [ ] Contact form submits successfully
- [ ] Mobile responsive design works correctly
- [ ] All images and assets load properly
- [ ] Footer attribution link includes correct UTM parameters

## Build Commands

