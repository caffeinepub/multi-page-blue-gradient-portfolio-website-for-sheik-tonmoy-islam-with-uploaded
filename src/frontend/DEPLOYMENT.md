# Deployment Documentation

## Production Identifier
**sheik-tonmoy-islam**

## Pre-Deployment Checklist
- [ ] All TypeScript compilation errors resolved
- [ ] No console errors in development mode
- [ ] All routes tested and functional
- [ ] Contact form submission tested
- [ ] Waterfall background image present at `frontend/public/assets/generated/waterfall-bg.dim_1920x1080.png`

## Build Process
1. Run `dfx generate backend` to update backend bindings
2. Run `npm run build` in frontend directory
3. Deploy backend canister: `dfx deploy backend`
4. Deploy frontend canister with assets: `dfx deploy frontend`

## Post-Deployment Verification

### Critical Functionality
- [ ] Site loads without errors at production URL
- [ ] Waterfall background image displays on all pages
- [ ] Navigation works across all pages (Home, About, Services, Skills, Portfolio, Contact)
- [ ] Header navigation highlights active route correctly
- [ ] Mobile navigation drawer opens and closes properly
- [ ] Footer displays with correct year and Caffeine.ai attribution with UTM tracking

### Page-Specific Checks
- [ ] **Home**: Hero section displays with waterfall background, CTAs navigate correctly
- [ ] **About**: Bio portrait renders, highlights grid displays, values section visible
- [ ] **Services**: All six service cards display correctly, CTA button navigates to Contact
- [ ] **Skills**: All skill categories render with progress bars
- [ ] **Portfolio**: Category filter works, project cards display, external links open in new tabs
- [ ] **Contact**: Form fields accept input, validation works, submission succeeds, share link card displays current URL

### Visual & UX Checks
- [ ] Waterfall background image visible behind all content on every page
- [ ] Background remains fixed while content scrolls (full-viewport cover behavior)
- [ ] Content remains readable over background (overlay/scrim working)
- [ ] **Typography visibility**: All headings and body text are clearly readable with strong text-shadow across all routes
- [ ] **Muted/secondary text**: Text using muted-foreground and secondary-foreground tokens remains readable over waterfall background
- [ ] Cards and surfaces have appropriate backdrop blur and opacity
- [ ] All interactive elements (buttons, links, form fields) are clickable and not blocked by background layers
- [ ] Responsive layout works on mobile, tablet, and desktop
- [ ] No horizontal scroll on any viewport size
- [ ] Dark mode toggle works (if implemented)

### Performance & Accessibility
- [ ] Background image loads efficiently
- [ ] Page load time acceptable
- [ ] No console errors or warnings
- [ ] Keyboard navigation works throughout site
- [ ] Focus indicators visible on interactive elements

## Known Issues
- None at this time

## Rollback Plan
If critical issues are discovered:
1. Revert to previous canister version using `dfx canister install --mode=reinstall`
2. Restore previous frontend build from backup
3. Document issue for future fix

## Contact Form Backend
- Backend stores submissions in memory (Map data structure)
- Submissions persist until canister upgrade/reinstall
- Query `getAllSubmissions()` to view all submissions
- Query `getSubmission(name)` to retrieve specific submission

## Notes
- Production identifier must remain exactly **sheik-tonmoy-islam** for consistency
- Waterfall background image must be present at `frontend/public/assets/generated/waterfall-bg.dim_1920x1080.png` before build
- Overlay tint ensures content readability across all pages
- Background uses fixed positioning with full viewport coverage for consistent appearance across all routes
- Global typography treatment applies strong text-shadow and high-contrast colors to all text elements for consistent readability over waterfall background
