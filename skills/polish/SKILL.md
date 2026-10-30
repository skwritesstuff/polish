---
name: polish
description: "Audits and polishes existing website and app interfaces while preserving their approved brand, content, and behavior. Use when a user asks to polish a UI, clean up a page, fix visual consistency, improve responsive spacing, refine interface copy, or align media and interaction timing. Handles focused fixes and broader finishing passes in the project's current stack."
license: CC-BY-4.0
metadata:
  author: skwritesstuff
  version: "0.1.0"
---

# Polish

Improve the interface. Keep its identity.

Start from the product in front of you: its purpose, approved brand, existing components, and the user's corrections. Make the smallest coherent set of changes that resolves the observed problems. Intentional gradients, bold type, colorful artwork, playful copy, and animation can all belong.

Adapted from [Unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky ([@heydamir](https://x.com/heydamir)), under CC BY 4.0. This adaptation replaces its fixed aesthetic defaults with project-specific constraints and adds scope, publishing, and verification guidance. See [NOTICE.md](NOTICE.md).

## 1. Establish the task

Use the conversation to select the scope. Earlier authorization and corrections still apply.

| Request | Action |
| --- | --- |
| “Review this”, “What looks off?”, or “Audit only” | Inspect and report findings. Edit only if the conversation also authorizes fixes. |
| “Fix this gap”, “Align these cards”, or another specific defect | Resolve that defect and closely related regressions. Keep the rest of the page stable. |
| “Polish this page” or “Clean up this UI” | Audit, implement the relevant improvements, then verify. |
| An explicit redesign | Establish the requested new direction and broaden the scope accordingly. |

Treat a request to polish as permission for ordinary, reversible implementation within that scope. Do not add a mandatory approval checkpoint. Ask only for a material missing choice, access, or action that is not already authorized; keep independent work moving.

Define completion in a short working note: target screen or component, problems to resolve, constraints to preserve, and checks that will demonstrate the result. A screen with no meaningful defects can finish with an evidence-based “no changes needed.”

## 2. Read the project before styling it

Inspect the files and rendered UI relevant to the target. Use the host's approved file, browser, app, and service tools. Prefer an authenticated CMS connector when the target lives in a CMS. For that workflow, read [references/cms.md](references/cms.md).

Find:

- The component or page source, styles, tokens, and existing layout conventions.
- Applicable project instructions and an optional `POLISH.md` at the project root. Its constraints supplement the user's instructions; they do not override them. A starting template is in [references/project-profile.md](references/project-profile.md).
- Approved logos, fonts, colors, artwork, media aspect ratios, and product facts. Consult the project's designated source of truth before changing claims.
- Relevant states and viewports: for example, a long card title, a disabled control, an error, or the narrow layout from the user's screenshot.

Use the existing design as the baseline when no explicit brand specification exists. Ask only when ambiguity would materially change the work. Do not invent a rebrand to fill a missing style guide.

Preserve features, navigation destinations, section order, legal text, analytics, pricing, and product claims unless the requested task covers those changes. Preserve unrelated local edits.

## 3. Capture evidence and choose the fixes

Look at the actual screen whenever tools allow it. Capture a baseline at the problem viewport and at one materially different width. Reuse the same viewports and state for the after comparison. If the only input is a screenshot, distinguish visible evidence from guesses about interaction or source.

Write a compact working list:

| Finding | Evidence | Proposed change | Preservation check |
| --- | --- | --- | --- |
| Card actions drift vertically | A longer description pushes one action below its siblings | Share a layout row or reserve space at the appropriate breakpoint | Full copy remains readable; narrow layout can grow |
| Artwork floats inside its preview | Square source is constrained by a portrait media wrapper | Match the wrapper to the approved square ratio | Logo and footer remain whole |

Prioritize broken behavior and inaccessible content, then hierarchy and layout, then visual details. Fix observable problems. Aesthetic dislike alone is not a defect.

For a focused request, keep this list focused. For a page-wide pass, state the approach in one sentence and continue; do not turn a small fix into a design workshop.

## 4. Apply only the relevant passes

### Layout and spacing

- Reuse the project's spacing scale, grid, container widths, and breakpoints. Consolidate accidental one-off values where they cause inconsistency.
- Align equivalent elements through their parent layout. Prefer grid or flex alignment over transforms, manual line breaks, spacer elements, or fixed heights that clip content.
- Keep related items closer together than unrelated groups. Match sibling padding, gaps, and action placement where their roles match.
- Let translated text, text zoom, and narrow screens grow. An equal-height desktop row must not trap mobile content.
- Keep compact information dense when density serves the task. Extra whitespace is not automatically an improvement.

### Copy and typography

- Fix duplication, vague labels, and awkward wrapping without changing the product's meaning or voice. Match established capitalization and punctuation.
- Use the approved typefaces, weights, and hierarchy. Improve line length and rhythm with existing type tokens before inventing a new system.
- Shorten description copy only when the request permits it and the meaning survives. Do not remove pricing conditions, limits, or important qualifiers to make cards align.
- Keep real heading structure and descriptive link or button text. Do not replace text with an image to force a visual fit.

### Color, controls, and icons

- Keep approved brand colors and artwork. Adjust their use when contrast, legibility, or competing emphasis is the actual problem.
- Reuse existing button, input, border, radius, shadow, and icon conventions. Equivalent controls should share states and hit areas.
- Check focus, hover, pressed, disabled, loading, and error states where relevant. Color alone should not carry essential meaning.
- Avoid adding a component library, font, icon package, or effect dependency for a small polish pass.

### Media and motion

- Honor the asset's intended aspect ratio. Square artwork should fill its square presentation area without stretching or unexplained side gutters. A portrait video remains portrait unless a reframe is requested.
- Use cropping only when it preserves the intended content. Logos, product screenshots, text, and store badges must remain legible and whole. Fix the container before altering the source artwork.
- Give images explicit dimensions or a reserved aspect ratio to avoid layout jumps. Use suitable asset sizes, descriptive alternatives when needed, and a usable fallback for animated content.
- Tie motion to a purpose: feedback, orientation, or a content reveal. If a cursor click signals a reveal, the click, visual change, and any sound should share that event. Judge the rendered sequence, not just timeline values.
- Keep essential content available with reduced motion. For looping or autoplay content, provide the pause, stop, hide, or reduced-motion behavior required for that content and context. Avoid surprise audio.
- Do not replace approved media with a generated asset just to impose a new style. If artwork editing is needed and authorized, use the host's appropriate image or video workflow.

## 5. Verify the result

Use [references/verification.md](references/verification.md) for checks relevant to the change. At minimum:

1. Compare before and after at the original problem viewport and another relevant width.
2. Exercise affected controls, links, and states. Check keyboard access, visible focus, readable text, overflow, and content growth where applicable.
3. Confirm protected content and branding remain intact. Check the diff for unrelated edits.
4. Run the project's appropriate existing checks. Add tests only for meaningful behavioral risk; do not invent tests that merely repeat CSS declarations.
5. If publishing is authorized and completed, verify the canonical public URL independently. A commit, upload, or local screenshot alone does not prove that a live page changed.

When a real defect remains, fix it and repeat the relevant check. Once the target is correct and checks pass, stop. Do not continue changing taste-level details to manufacture more work.

If a tool, viewport, state, or deployed page cannot be checked, name the gap. Source review is useful evidence, but it is not rendered verification. Never claim a device, accessibility audit, performance metric, or live deployment was tested unless it was.

## 6. Deliver a short, concrete report

Lead with what improved and where. Include the most useful evidence, then any remaining limitation.

For example:

> Aligned the preview squares and action links in the app grid. The artwork and descriptions are unchanged. Checked the rendered page at narrow and wide widths and tested each link. The changes are local; publishing was outside this request.

Use only statements supported by the actual run. Keep any screenshot, preview, diff, or live link easy to find. Avoid a pass-by-pass diary and avoid presenting optional redesign ideas as unfinished required work.
