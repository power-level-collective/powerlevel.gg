import { team, PLATFORMS, type Studio, type Platform } from "./team.js";

// Anonymized, aggregated view of the roster for public-facing display — no names, bios, avatars,
// or links back to any individual. Dedupes across every member. Roles/skills preserve
// first-occurrence order (reads as curated, not auto-sorted); the marquee lists (shipped titles,
// studios) are sorted alphabetically instead, since those are long enough that a visitor scanning
// the loop for one specific title/studio benefits more from a predictable order than a curated one.

function uniqueStrings(values: string[]): string[] {
    return [...new Set(values.filter(Boolean))];
}

function uniqueStudiosAlphabetical(studios: Studio[]): Studio[] {
    const seen = new Map<string, Studio>();
    for (const studio of studios) {
        if (!seen.has(studio.name)) seen.set(studio.name, studio);
    }
    return [...seen.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export const rosterRoles: string[] = uniqueStrings(team.map((m) => m.title));
export const rosterSkills: string[] = uniqueStrings(team.flatMap((m) => m.skills));
export const rosterShippedTitles: Studio[] = uniqueStudiosAlphabetical(
    team.flatMap((m) =>
        m.credits
            .filter((c) => c.showcase)
            .map((c) => ({ name: c.title, logo: c.logo, url: c.url, showcase: c.showcase }))
    )
);
export const rosterStudios: Studio[] = uniqueStudiosAlphabetical(
    team.flatMap((m) => m.studios).filter((s) => s.showcase)
);
// Unlike shipped titles/studios (aggregated from what the roster has actually worked on),
// platforms are curated directly from the PLATFORMS catalog's own `showcase` flags — there's
// only one canonical definition per platform, so there's nothing to dedupe across members.
export const rosterPlatforms: Platform[] = Object.values(PLATFORMS)
    .filter((p) => p.showcase)
    .sort((a, b) => a.name.localeCompare(b.name));
