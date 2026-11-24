# Affiliate go-live checklist (Travel Well)

The site ships with **no affiliate links, no product promotion and no affiliate wording**.
`src/custom/siteFlags.ts` has `AFFILIATE_ACTIVE = false`.

## Before you apply to Amazon Associates (amazon.ca)
- Site is public, owned by you, and has robust original content. Amazon's rule of thumb is about 10 posts, recent (within ~60 days).
- Site name and domain must not contain the word "amazon".
- No product links or "buy" buttons yet.

## When you are accepted (or given links)
1. Add the exact required line, clearly and conspicuously (for example in the footer):
   "As an Amazon Associate I earn from qualifying purchases."
   Also keep a plain disclosure near the links themselves.
2. Set `AFFILIATE_ACTIVE = true` in `src/custom/siteFlags.ts`. This shows the footer disclosure and the note at the end of each story.
3. Restore the disclosure page: move `docs/disclosure.astro.txt` to `src/pages/disclosure.astro` and `docs/disclosure-live.md.txt` to `src/content/pages/disclosure.md`.
   Edit that page so it does not announce your participation in any program beyond what the program's rules require.
4. Use only the tagged links the program gives you. Do not hide or disguise them.
5. Do not state or imply prices unless they are accurate and current. Prices and availability change.
6. Check each program's current agreement. Rules are updated (the Amazon Associates policies were last updated April 14, 2026).
