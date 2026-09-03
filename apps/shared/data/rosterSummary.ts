import { team, type Credit } from "./team.js";

// Anonymized, aggregated view of the roster for public-facing display — no names, bios, avatars,
// or links back to any individual. Dedupes across every member while preserving first-occurrence
// order (not alphabetized), so the list reads as deliberately curated rather than auto-sorted.

function uniqueStrings(values: string[]): string[] {
    return [...new Set(values.filter(Boolean))];
}

function uniqueCredits(credits: Credit[]): Credit[] {
    const seen = new Map<string, Credit>();
    for (const credit of credits) {
        if (!seen.has(credit.name)) seen.set(credit.name, credit);
    }
    return [...seen.values()];
}

export const rosterRoles: string[] = uniqueStrings(team.map((m) => m.title));
export const rosterSkills: string[] = uniqueStrings(team.flatMap((m) => m.skills));
export const rosterShippedTitles: Credit[] = uniqueCredits(
    team.flatMap((m) => m.credits.filter((c) => c.title.showcase).map((c) => c.title))
);
export const rosterStudios: Credit[] = uniqueCredits(
    team.flatMap((m) => m.credits.filter((c) => c.studio?.showcase).map((c) => c.studio))
);
