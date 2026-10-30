# Example requests and expected behavior

These examples explain the intended workflow. They are illustrative cases, not reports of tests performed on real products.

## A colorful brand with a spacing defect

**Request**

> Polish the signup section. The gaps feel inconsistent. Keep our approved gradient logo and display type.

**Expected behavior**

Inspect the section and existing spacing tokens. Correct the inconsistent grouping and alignment, check the input and action states, and compare the same viewports. Keep the logo, typography, copy, and unrelated sections intact.

**Completion evidence**

A narrow diff, rendered before/after comparisons, and a check that the form still works. A new palette or a rewritten hero would exceed this request.

## Cards with different amounts of text

**Request**

> Align the preview images and action links in this card row. One description is longer than the others.

**Expected behavior**

Find the shared card layout and use its grid or flex structure to align equivalent rows at the appropriate breakpoint. Allow content to grow on small screens and at increased text size. Tighten copy only if authorized and its full meaning survives.

**Completion evidence**

Matching alignment in the wide layout, no clipped content in the narrow layout, and unchanged destination URLs. Arbitrary blank paragraphs and hidden overflow do not resolve the underlying layout problem.

## Square artwork in a portrait wrapper

**Request**

> These are square previews. Fill the square space and keep each image clickable.

**Expected behavior**

Verify the asset dimensions and the wrapper. Preserve the 1:1 presentation, remove accidental gutters, keep artwork and badges whole, and retain the links and accessible names. Use the existing media component if it already supports the intended ratio.

**Completion evidence**

The actual loaded images fill their intended presentation area at the tested widths, retain the correct proportions, and navigate correctly.

## A click that precedes the reveal

**Request**

> Make the illustrated click happen when the blur clears and the title appears.

**Expected behavior**

Inspect the actual interaction or exported sequence. Tie the click, reveal, and blur transition to the same intended event. Check a complete loop and the reduced-motion or static alternative. Do not claim success from animation duration values alone.

**Completion evidence**

Rendered playback demonstrates the timing, and the final title remains available without the animation. If exported media changed, inspect the final export.

## A live CMS page

**Request**

> Fix this page's button spacing and publish the correction.

**Expected behavior**

Use the authorized CMS tools, fetch the current editable section, apply the scoped change with available concurrency protection, and read it back. Verify the canonical public page after publication.

**Completion evidence**

The saved source and public rendering both show the fix. The report names any cache or access limitation rather than presenting a local mockup as the live page.

## An audit or a screen that is already working

**Request**

> Audit this settings page. Tell me what you would polish before we change anything.

**Expected behavior**

Inspect the screen and report concrete findings, severity, and proposed changes. If the design already works, say so. Leave files unchanged because this request is review-only.

**Completion evidence**

A short review tied to visible or tested behavior, with uncertainties stated. It does not invent a new visual direction to justify making changes.
