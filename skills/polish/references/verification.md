# Verification menu

Select checks based on the changed component and its risks. This is a menu, not a demand to perform every check for a one-line adjustment. Use the project's established tools and the host's approved browser or app controls.

## Layout, copy, and type

- Compare the original problem state before and after at the same viewport and zoom.
- Check a narrow layout and a wide layout. If the bug occurs near a breakpoint, check both sides of that breakpoint.
- Look for horizontal overflow, clipped text, overlapping controls, detached captions, and unexpected layout shifts while fonts or media load.
- Use a realistic long title or description where variable text matters. Check text zoom or increased text size when a fixed dimension could clip content.
- Confirm shortened copy retains every material condition and product claim. Inspect related cards for consistent hierarchy without forcing unrelated content into identical shapes.

## Interaction and accessibility

- Activate affected links and buttons. Confirm their destinations and outcomes, including any tracking parameters that must be preserved.
- Use the keyboard through affected controls; check visible focus, order, and focus return where a dialog or disclosure is involved.
- Verify that controls have accessible names and that meaningful images have suitable alternatives. Decorative imagery should not create redundant announcements.
- Check actual foreground and background colors using the project's accessibility target. An automated result is one source of evidence; it is not a claim of complete accessibility conformance.
- Inspect the affected loading, empty, error, disabled, selected, or expanded states. Keep the scope tied to states the change could affect.

## Images and moving media

- Confirm the loaded asset, intended aspect ratio, reserved layout size, and fit. Inspect edges and embedded text or badges for accidental cropping.
- Check that clickable previews have a meaningful destination and an accessible name. Ensure overlays do not block the intended interaction.
- For event-driven motion, activate the real control and observe the response. For pre-rendered motion, inspect the exported file around the click, reveal, and blur transition; timeline configuration alone is insufficient.
- Watch at least one complete loop where looping is in scope. Inspect the ending and restart for flashes, jumps, or broken resting frames.
- Check the reduced-motion presentation and any required playback controls. A GIF cannot be paused with a CSS animation rule; use a real static alternative, controlled playback, or the appropriate media format.
- If an export changed, decode or play the final file rather than trusting only the editing timeline or an intermediate preview.

## Source and delivery

- Review the diff for unrelated changes, removed content, broken component reuse, and new dependencies.
- Run existing checks that cover the change. Repeat broader testing only if new changes or failures justify it.
- Verify the saved source after a CMS edit and the canonical public page after an authorized publication.
- Record the exact verification boundary: source inspected, browser rendered, emulator checked, physical device checked, or public page verified. One does not imply the others.

## A useful result record

Keep this small and specific:

```text
Target: product grid on the catalog page
Changed: preview wrappers now preserve the approved 1:1 assets
Preserved: source artwork, product copy, destination URLs
Checked: before/after at the reported width and the wide layout; all preview links
Unchecked: physical-device rendering
Delivery: local working tree, with preview attached
```

Replace every line with evidence from the actual run. Do not copy the example as if it were a completed test.
