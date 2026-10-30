# iOS and SwiftUI reference

Use alongside the main skill when the interface is a native iOS app. These are checks, not a house style: keep the app's approved palette, type and brand marks, and fix only what is inconsistent or broken.

## Spacing and layout
- Use one spacing scale (4/8pt steps); flag stray hardcoded values like 13, 7 or 31pt.
- Rows in one list share one height and gap; sibling cards share one padding.
- Gaps inside a group are smaller than gaps between groups.
- Respect safe areas and system list insets; don't fight inset-grouped layouts.
- Check the smallest supported iPhone and the largest, in portrait.

## Type
- Prefer system text styles so Dynamic Type works; check the largest accessibility sizes for truncation and overlap.
- Keep a few sizes and weights per screen; hierarchy from size first.
- Use monospaced digits where numbers align or update live.

## Color and surfaces
- Use semantic label roles (primary, secondary, tertiary) rather than many near-identical tints.
- Depth from system background levels and separators.
- Verify Dark Mode and Increase Contrast; check contrast of accent-on-surface text.

## Icons and controls
- One SF Symbols weight and scale per context; fixed icon frame width so rows align.
- Hit areas at least 44x44pt, including small toolbar and pill buttons.
- Every action has its states: disabled, in-progress (with a double-tap guard), success and error feedback.

## Copy
- Button labels say the action; no trailing periods; no hype words.
- Empty, error and offline states say what happened and what to do next.
- Changes or stats include their reference (vs last month), and sample data looks plausible.

## Paywall and purchase screens
- The headline states what the user gets.
- One primary purchase action plus Restore; Restore shows progress and a result, including cancel.
- Price comes from the store product, never hardcoded; show a loading and unavailable state.
- Social proof only if real and sourced.

## Media
- Images keep their aspect ratio; reserve space so layout doesn't jump; provide a fallback for missing or failed images.
- No text baked into images when it can be real, localizable text.

## Accessibility and verification
- VoiceOver labels on icon-only buttons; logical reading order.
- Honor Reduce Motion for any non-essential animation.
- Verify on the simulator at the smallest and largest device sizes, in light and dark mode, and at the largest Dynamic Type size before reporting done.
