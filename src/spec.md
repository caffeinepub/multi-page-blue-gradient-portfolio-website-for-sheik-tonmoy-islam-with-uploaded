# Specification

## Summary
**Goal:** Remove all images from the portfolio website UI (no portraits, logos, or background images) while keeping the layout clean and responsive, then republish the updated site.

**Planned changes:**
- Remove/replace any rendered `<img>` usage across all pages/sections (Home, About, Services, Skills, Portfolio, Contact, Header, Footer) so no images render anywhere.
- Replace image-based hero/background visuals with CSS-only styling (e.g., gradients/shapes) and ensure no broken-image placeholders remain.
- Replace the header/footer logo image with a text-only brand mark.
- Remove or disable portrait-related components/usages so they are not imported or rendered anywhere (e.g., RightSidePortrait, ProfilePortrait, SectionCornerPortrait, SectionMediumPortrait), and ensure the layout remains visually balanced after removing portrait columns/space.
- Republish the site so the no-images version is live under the existing production identifier: "sheik-tonmoy-islam".

**User-visible outcome:** The live site at https://sheik-tonmoy-islam.caffeine.xyz/ shows the full portfolio with text/CSS-only styling (no portraits, logos, or decorative images) across all routes, with a clean responsive layout and no broken image frames.
