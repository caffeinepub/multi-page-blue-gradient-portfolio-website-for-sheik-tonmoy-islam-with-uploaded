# Specification

## Summary
**Goal:** Improve site-wide typography readability by using a more saturated text color and a subtler, lower-contrast text shadow consistently across all pages (including About).

**Planned changes:**
- Adjust global typography styles in `frontend/src/index.css` to reduce the current heavy/multi-layer text-shadow to a lighter, subtler shadow.
- Update the primary global text color to a more saturated value that remains readable over the existing static waterfall background.
- Ensure headings and body text share the same visibility treatment (no separate/stronger heading-specific shadow or readability rules).
- Verify the About page remains clearly readable using the same global typography styling (no About-only readability CSS).

**User-visible outcome:** Text across the entire site (headings and body, including the About page) appears clearer and more vibrant, with a softer shadow that improves readability without the current strong/high-contrast shadowing.
