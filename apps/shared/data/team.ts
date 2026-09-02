// Placeholder roster. Swap in real names, titles, levels, stats, skills and
// bios (and add real headshots/art in place of MonogramAvatar) before launch.

export interface TeamStat {
    label: string;
    value: number;
}

export interface TeamMember {
    id: string;
    name: string;
    title: string;
    classTag: string;
    level: number;
    bio: string;
    stats: TeamStat[];
    skills: string[];
}

export const team: TeamMember[] = [
    {
        id: "jp-steinmetz",
        name: "Jean-Philippe Steinmetz",
        title: "Director of Engineering",
        classTag: "Bard",
        level: 20,
        bio: "",
        stats: [
            { label: "Leadership", value: 93 },
            { label: "Engineering", value: 98 },
            { label: "Architecture", value: 97 },
            { label: "Game Backends", value: 100 },
            { label: "Game Engines", value: 95 },
        ],
        skills: ["AI", "Gameplay", "Live Ops", "Netcode", "Unreal", "Unity"],
    },
    {
        id: "arthur-thompson",
        name: "Arthur Thompson",
        title: "Lead Engineer",
        classTag: "Cloud Mage",
        level: 19,
        bio: "Blah blah blah.",
        stats: [
            { label: "Engineering", value: 98 },
            { label: "Architecture", value: 93 },
            { label: "Performance", value: 95 },
            { label: "Tooling", value: 84 },
        ],
        skills: ["C++", "Unreal", "Unity", "Netcode"],
    },
    {
        id: "ryan-dumouchelle",
        name: "Ryan Dumouchelle",
        title: "Lead Engineer",
        classTag: "UX Warrior",
        level: 17,
        bio: "Blah blah blah.",
        stats: [
            { label: "Art Direction", value: 96 },
            { label: "Pipeline", value: 88 },
            { label: "Craft", value: 94 },
            { label: "Mentorship", value: 90 },
        ],
        skills: ["Art Direction", "Pipeline", "Substance", "UE5"],
    },
];
