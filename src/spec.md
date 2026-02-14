# Specification

## Summary
**Goal:** Remove the global site-wide typography text-shadow so all headings and body text render without shadows across every page for clearer readability.

**Planned changes:**
- Update `frontend/src/index.css` to remove or modify the global typography selector(s) that apply `text-shadow` (e.g., headings, paragraphs, links, list items, labels, and any text utility selectors) so no text-shadow is applied.
- Verify typography remains readable without shadows across all routes (Home, About, Services, Skills, Portfolio, Contact); if needed, adjust only global color tokens (e.g., `--foreground`, `--muted-foreground`) to maintain contrast.

**User-visible outcome:** Text throughout the site (all pages) appears cleaner and sharper with no text-shadow, while the waterfall background and overlay remain unchanged behind the content.
