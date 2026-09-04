import { Engine, ENGINES } from "./engines.js";
import { Platform, PLATFORMS } from "./platforms.js";
import { Studio } from "./studios.js";
import { team } from "./team.js";

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
// Same approach as platforms — curated directly from ENGINES' own `showcase` flags rather than
// derived from title data, so there's exactly one place to update when an engine goes in or out of
// use.
export const rosterEngines: Engine[] = Object.values(ENGINES)
    .filter((e) => e.showcase)
    .sort((a, b) => a.name.localeCompare(b.name));

export interface PartyStat {
    label: string;
    /** The real number shown at the end of the bar. */
    value: string;
    /** Decorative bar-fill percentage (0-100) — a stylized brand device, not a literal ratio. */
    fill: number;
}

// `level` doubles as each member's years of industry experience (see their bios). Shipped titles,
// engines and platforms are deduped across every member's full credit list — not just the
// showcase:true subset used by the homepage marquees — since this is meant to reflect the roster's
// real, complete track record rather than the curated public highlight reel. Engines only count
// credits that actually have `engine` set, so this stays accurate as that field gets filled in
// over time rather than showing a guessed number.
// "Proprietary Engine" is a placeholder label for "some in-house engine specific to that title" —
// not literally the same engine across different titles/studios (e.g. League of Legends' engine
// and Kung Fu Panda World's engine share a label but share no code). So unlike every other named
// engine, each proprietary-engine credit counts as its own distinct engine rather than deduping
// down to a single "Proprietary Engine" bucket.
const PROPRIETARY_ENGINE_NAME = "Proprietary Engine";

const totalYearsExperience = team.reduce((sum, member) => sum + member.level, 0);
const uniqueShippedTitles = new Set(team.flatMap((member) => member.credits.map((credit) => credit.title)));
const uniqueEngines = new Set(
    team
        .flatMap((member) => member.credits)
        .filter((credit) => credit.engine)
        .map((credit) =>
            credit.engine!.name === PROPRIETARY_ENGINE_NAME
                ? `${PROPRIETARY_ENGINE_NAME}:${credit.title}`
                : credit.engine!.name
        )
);
const uniquePlatforms = new Set(
    team.flatMap((member) => member.credits.flatMap((credit) => credit.platforms.map((platform) => platform.name)))
);

export const partyStats: PartyStat[] = [
    { label: "Years Experience", value: String(totalYearsExperience), fill: 92 },
    { label: "Shipped Titles", value: String(uniqueShippedTitles.size), fill: 88 },
    { label: "Game Engines", value: String(uniqueEngines.size), fill: 78 },
    { label: "Platforms", value: String(uniquePlatforms.size), fill: 85 },
];
