# powerlevel.gg — Design Decisions & Session Notes

This file exists so that Claude sessions working in this repo don't re-litigate settled
decisions or re-discover the same issues from scratch. It is local to this repo (not tied to
any one machine's global Claude memory), so it travels with the code.

**Maintenance rule:** when a standing decision changes, update the section below in place
(don't just append a contradiction lower down). When a new investigation/session produces a
decision, finding, or reverted approach worth remembering, add a dated entry under Session Log.
Keep entries terse — this is a reference, not a transcript.

## Standing design decisions & constraints

- **Commit discipline.** Don't `git commit` unless explicitly asked, even after a full
  review-and-fix cycle with passing tests. Leave changes staged/unstaged and say so.
- **Static site, no server in production.** `powerlevel.gg` deploys as a fully static export
  to GitHub Pages on every push to `main` (`.github/workflows/deploy-pages.yml`, custom domain
  via `public/CNAME`). There is no running backend behind the live site. A RapidREST server
  route under `src/routes/` only runs during local `yarn dev` and during the `yarn export`
  crawl — never for a real visitor. Anything interactive (forms, third-party integrations)
  must work entirely client-side, or call a third-party service's own public API directly, not
  a route on this app. (`ContactRoute.ts` existed briefly for a Klaviyo integration and was
  deleted once this was caught — see Session Log.)
- **Tailwind build is manual, not watched by Vite.** `yarn css:build` compiles
  `apps/www/_styles/globals.css` → `public/styles/globals.css`. Vite's `publicDir` copy into
  `dist/public/` only happens once, on a fresh `yarn dev` process start — not on individual
  file edits. After any change to Tailwind source, `public/` assets, or fonts: run
  `yarn css:build` (if CSS changed) and `cp` the affected file(s) into the matching
  `dist/public/...` path, or fully restart the dev server, before an already-running instance
  will reflect it. New Tailwind utility classes silently do nothing until this step runs —
  this has caused at least two real, confusing bugs this session.
- **No fabricated team data.** Never invent shipped titles, studios, roles, platforms,
  engines, or hobbies for real, named team members (`apps/shared/data/team.ts`,
  `titles.ts`). Leave a field unset rather than guess — the UI already renders graceful
  "coming soon" states for empty sections. Only add a fact when the user states it directly.
- **Real assets only, sourced honestly.** Platform/engine/studio marks are one of: (a) a real
  mark from a CC0 icon library (`simple-icons`) or Font Awesome Free's brand icons (CC BY 4.0
  — credited in `Footer.tsx`), (b) a real local asset file the user already had, or (c) a
  plainly hand-authored placeholder badge (colored tile + short text) when no real mark is
  available (e.g. PSVR/SteamVR/Switch under `platforms.ts`, Proprietary/Custom under
  `engines.ts`). Never a fabricated lookalike of a real trademark. The one exception where
  editing a real logo was appropriate: id Tech's version number was hand-corrected from "8" to
  "5" (see Session Log) because the underlying mark and company are real and the edit made it
  *more* accurate, not less.
- **nconf env vars must be lowercased.** `src/config.ts`'s `.env({...})` call needs
  `lowerCase: true`. Without it, nconf stores `SOME__VAR` under the literal uppercase key
  `SOME:VAR`, while every `config.get()` call in this codebase reads lowercase keys — so env
  var overrides (`AUTH__SECRET`, `KLAVIYO__...`, etc.) silently no-op instead of erroring. This
  was a real bug found and fixed this session; don't remove the option.
- **Data model layout.** `apps/shared/data/` splits by concern: `platforms.ts` (`Platform` +
  `PLATFORMS` catalog), `engines.ts` (`Engine` + `ENGINES` catalog), `studios.ts` (`Studio` +
  `STUDIOS`), `titles.ts` (`GameCredit` + `TITLES`, composed from the three catalogs above),
  `team.ts` (`TeamMember` + the `team` array). `rosterSummary.ts` derives all public,
  anonymized homepage aggregates from `team` — roles/skills/shipped-titles/studios (deduped
  across members) plus `rosterPlatforms`/`rosterEngines`, which are instead curated directly
  from their catalogs' own `showcase: true` flags (single source of truth, not re-derived from
  credits) — and `partyStats`, computed live from `team` (years experience = sum of `level`;
  shipped titles / platforms / engines = deduped counts across every credit, not just the
  showcase subset). "Proprietary Engine" is deliberately *not* deduped by name in the engines
  count — each such credit is a different, unrelated in-house engine that happens to share a
  label, so it's keyed per-title instead.
- **Marquee seamless-loop technique.** `CreditMarquee` (`CreditBadge.tsx`) repeats its credit
  list `copies` times (more than 2 when the list is short — targets ~12 tiles total) and the
  CSS keyframe shifts by exactly `100% / copies` via a `--marquee-copies` custom property,
  rather than a hardcoded `-50%` assuming exactly two copies. A short list duplicated only
  once produces a track narrower than the viewport, so the loop seam sits visibly inside the
  viewport instead of off-screen — this was a real bug, fixed once the Engines marquee (few
  items) exposed it.
- **`IconBadge`/`CreditBadge` size variants.** Both (`CreditBadge.tsx`) take an optional
  `size: "sm" | "lg"` (`IconBadge` defaults `"sm"`, used inline on credit rows; `"lg"` is for
  standalone use like the homepage capabilities panel or the shipped-titles mosaic). Extend
  with more sizes here rather than duplicating the component.
- **Lead capture is 100% client-side.** The hero and footer forms (`HeroLeadForm.tsx`,
  `ContactForm.tsx`, shared submit logic in `leadFormScript.ts`) POST straight from the
  browser to Klaviyo's public Client API (`a.klaviyo.com/client/subscriptions`), authenticated
  by the account's public Company ID (`apps/shared/data/klaviyo.ts`) — not a private API key,
  which must never be shipped to the client. This is a deliberate consequence of the
  static-site constraint above, not an oversight. No-JS submission is not supported (accepted
  trade-off). Success/error state is plain DOM toggling (`hidden` attribute) after the fetch
  resolves — there is no server-rendered status prop anymore.
- **Verify against an isolated dev server.** Never touch the user's own running `yarn dev`
  (commonly port 3000, sometimes stray ports from earlier sessions). Start a separate
  instance, read its actual bound port from the "Listening on 0.0.0.0:PORT" log line (it falls
  back to another port if 3000 is busy), and before `taskkill`-ing anything, confirm the
  target PID's `CreationDate` (`Get-CimInstance Win32_Process -Filter 'ProcessId=...'`) matches
  when *you* started it — Windows recycles PIDs, and a stale/reused PID killed the wrong
  process once this session.

## Session Log

### 2026-09-03/04 — Platforms/engines showcase, lead capture rework, static-site fix, legal pages

- **Platform & engine catalogs + homepage marquees.** Built out `PLATFORMS`/`ENGINES` with
  real icons sourced from `simple-icons` (CC0) and Font Awesome Free (CC BY 4.0, for
  Windows/Xbox — the only real marks in neither being id Tech, Frostbite, Open 3D Engine,
  Firefly/Proprietary/Custom, which got hand-authored placeholders instead). Firefly Engine's
  icon is a real crop of Trilogy Studios' logo gear mark (pixel-located and chroma-keyed from
  the source JPG, not redrawn). id Tech's icon is the real id Tech 8 press logo with the "8"
  precisely located and replaced with a vector "5" (matching the actual engine version used).
  Added `partyStats`' "Game Engines" as a real computed count (was a hardcoded placeholder).
- **Homepage marquee variety pass.** Four back-to-back scrolling marquees (Shipped
  Titles/Studios/Platforms/Engines) felt redundant. Reworked into three distinct
  presentations: Shipped Titles as a static large-logo mosaic grid, a boxed "capabilities"
  panel combining Platforms + Engines as icon-badge rows, and Studio Pedigree back to a
  marquee (after a text-only-wordmark version was tried and reverted) once real studio logos
  (Riot Games via `simple-icons`, plus existing local Spark/Trilogy assets) were wired in.
  Also fixed the marquee's seamless-loop math for short lists (see standing decision above).
- **Team detail page redesign.** Credits (and Studios/Hobbies below) now span the full page
  width instead of being squeezed into the two-column grid next to Stats. Each credit shows
  its title logo (large, no bounding box) plus separate labeled rows for Engine (inline with
  its icon) and Platforms (label above a wrapped icon row) — both using `IconBadge` with a
  hover tooltip for the name, replacing a plain text list.
- **Lead capture: found the site had no working backend, then a Klaviyo integration path
  that couldn't work either.** Built a full server-side Klaviyo integration (`ContactRoute.ts`
  + a private-API-key helper) before realizing the site is a static GitHub Pages export with
  no server in production — `/api/contact` never actually worked, before *or* after adding
  Klaviyo. Correct fix (confirmed with the user): call Klaviyo's public Client API directly
  from the browser instead, drop the no-JS form fallback, and treat Klaviyo as the only lead
  record (no independent server log). Removed `ContactRoute.ts` and the server-side Klaviyo
  helper entirely; rewrote `leadFormScript.ts` to validate/format (email vs. phone, E.164) and
  call Klaviyo client-side, with success/error shown via plain DOM toggling. Verified the
  actual generated script (not just the source) by extracting it from rendered HTML and
  running it against a mocked DOM/fetch — email, phone E.164 conversion, invalid input,
  honeypot, and Klaviyo-rejects-the-request all confirmed working before calling it done.
  Along the way, found and fixed the unrelated `nconf` lowercasing bug (see standing decision)
  that would have silently broken the env-var config even for the abandoned server approach.
- **`/privacy` and `/terms` pages.** Both are plain routed pages (`apps/www/privacy/`,
  `apps/www/terms/`) linked from the footer. Privacy policy was adapted from a user-provided
  reference with industry-standard language, explicitly not claiming cookie-consent-requiring
  tracking (the site only collects anonymized aggregate stats + form submissions). Terms page
  is the user's provided Mobile Terms of Service content verbatim, formatted to match the
  privacy page's layout.
- **Dedicated `/team` roster page.** Moved the real-names team card grid out of the unused
  `_home.tsx` backup into a proper routed `/team` page; nav/back-links updated to point there
  instead of the homepage's `#team` anchor (which only worked when already on the homepage —
  same class of bug as the header logo link, fixed earlier the same way: use `/#anchor` or a
  real route, not a bare `#anchor`, in anything rendered on more than one page).
