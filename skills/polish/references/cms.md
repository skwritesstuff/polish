# Working on a CMS page

Use this reference when the target is managed by WordPress or another CMS rather than deployed directly from the local repository.

## Find the real editable surface

Identify the site, page, canonical URL, and layer responsible for the defect: page block, reusable component, template, theme style, or source media. Check the authenticated connector's capabilities before using browser controls. Follow the host's tool permissions and any applicable CMS editing skill.

Treat a public page and its markup as evidence. They are not proof of access to the original editable source. If only read access is available, produce the audit or a clearly labeled proposed patch. Create a local recreation only when it is useful and in scope; label it as a recreation.

## Make a narrow, recoverable change

1. Fetch fresh editable content and metadata immediately before the edit. Keep a local before copy when permitted.
2. Use the CMS's revision, version, hash, or other concurrency guard if available. If the source changed, re-read and rebase the patch; do not overwrite someone else's work with a stale snapshot.
3. Change the smallest meaningful section. Preserve block attributes, IDs, classes, shortcodes, embeds, links, and tracking parameters unrelated to the fix.
4. For serialized WordPress blocks, keep the block delimiters and attributes valid and synchronized with the markup. Use the appropriate block-editing workflow rather than replacing the entire page with an unrelated template.
5. Keep a page-specific correction scoped to that page. Change shared templates or global styles only when the issue and authorization actually cover their other consumers.
6. Use supported CMS style and media mechanisms. Do not assume pasted scripts, inline styles, or media attributes will survive sanitization.

Preserve canonical URLs, metadata, structured data, sitemap inclusion, and crawl directives unless the task explicitly includes changing them. A visual polish request does not justify an SEO migration.

## Verify what was saved and what is live

- Read back the saved editable content and inspect the affected section.
- Open the canonical public URL in the host's approved browser tools and check the rendered result at relevant widths.
- Check the visible links, media, and neighboring content after the change. A successful HTTP response alone does not prove the layout is right.
- Distinguish an editor preview, saved draft, published page, and cached public response. If a CDN or cache prevents live verification, state that precisely and use the platform's supported refresh mechanism when authorized.
- Keep the verification tied to the target site. Publishing a copy on a separate preview service or pushing a repository does not update the CMS automatically.

Report only the state demonstrated by the evidence: prepared, saved, published, or publicly verified.
