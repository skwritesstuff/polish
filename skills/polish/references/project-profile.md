# Optional project profile

A project can place a `POLISH.md` file in its root to keep approved design decisions easy to find. The skill works without one. Use existing project documentation when it already covers these details; avoid duplicating rules that will drift.

The profile describes the project. It does not grant permission to publish, contact people, or perform unrelated work. Direct user instructions and the host's instruction hierarchy still apply.

Copy the following structure and fill it with facts from your own project. Omit sections that are not useful. Do not put credentials or private operational details in a public profile.

```markdown
# Project polish profile

## Purpose
What this product does, who uses it, and the main action this screen supports.

## Source of truth
Paths or accessible links to the current design system, product specification,
content guide, and asset library. Identify the authoritative version.

## Approved identity
- Logo assets and variants:
- Typeface roles and existing font tokens:
- Color roles and existing color tokens:
- Intended tone and recognizable details:
- Deliberate effects or treatments to retain:

## Layout and media
- Shared components, spacing scale, and breakpoints:
- Media aspect ratios and permissible crops:
- Important alignment or content-growth rules:
- Motion purpose, event timing, and reduced-motion behavior:

## Content and behavior to preserve
Product claims, pricing qualifiers, legal copy, section order, routes,
tracking parameters, and interaction behavior relevant to this project.

## Verification
How to run the project and its existing checks. Name important pages,
states, viewports, and accessibility requirements.

## Delivery
Where changes are implemented and how authorized publication is verified.
Keep access secrets elsewhere.
```

Examples of useful constraints:

- “The blue-to-violet logo is approved artwork. Keep it intact.”
- “Product previews use supplied square assets; the video on the detail page is portrait.”
- “Cards may grow with text. Align their actions through the layout rather than truncating descriptions.”
- “The reveal begins when the illustrated cursor clicks. Reduced-motion mode shows the final frame.”

These are examples of project decisions, not universal design rules.
