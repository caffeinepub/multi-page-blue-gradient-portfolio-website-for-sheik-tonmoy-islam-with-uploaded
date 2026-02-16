# Specification

## Summary
**Goal:** Update the Portfolio page to use exactly 10 completed professional service projects, each with a valid live link, while keeping existing filtering and link behavior.

**Planned changes:**
- Replace `frontend/src/data/projects.ts` with a static array of exactly 10 project entries containing: title, description, category (legal/business/marketing/design/video/web), tools/technologies (non-empty array), and a non-empty `https://` live link.
- Ensure the Portfolio page renders all 10 projects in the grid when “All Projects” is selected and preserves category filtering for Legal/Business/Marketing/Design/Video/Web.
- Ensure each project card displays a clickable external link icon that opens the live link in a new tab with `rel="noopener noreferrer"`.

**User-visible outcome:** On the Portfolio page, visitors can browse 10 professional service projects, filter them by category, and open each project’s live link in a new tab from an external-link icon on the project card.
