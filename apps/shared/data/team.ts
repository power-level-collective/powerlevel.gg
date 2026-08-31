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
        id: "mara-kestrel",
        name: "Mara Kestrel",
        title: "Studio Director",
        classTag: "Guild Master",
        level: 22,
        bio: "20+ years steering AAA titles from pitch to platinum. Mara runs the Collective like the guild she always wanted to lead.",
        stats: [
            { label: "Leadership", value: 97 },
            { label: "Production", value: 90 },
            { label: "Strategy", value: 94 },
            { label: "Comms", value: 92 },
        ],
        skills: ["Greenlight", "Co-Dev Ops", "Publisher Relations", "Live Ops"],
    },
    {
        id: "devon-ashcroft",
        name: "Devon Ashcroft",
        title: "Lead Engineer",
        classTag: "Battlemage",
        level: 19,
        bio: "Ships engine code that survives contact with a live audience. Devon has shipped titles across three major engines and counting.",
        stats: [
            { label: "Engineering", value: 98 },
            { label: "Architecture", value: 93 },
            { label: "Performance", value: 95 },
            { label: "Tooling", value: 84 },
        ],
        skills: ["C++", "Unreal", "Unity", "Netcode"],
    },
    {
        id: "priya-solano",
        name: "Priya Solano",
        title: "Art Director",
        classTag: "Illusionist",
        level: 17,
        bio: "Built art pipelines for open-world titles shipped on every major platform. Priya makes a small team look like a AAA art department.",
        stats: [
            { label: "Art Direction", value: 96 },
            { label: "Pipeline", value: 88 },
            { label: "Craft", value: 94 },
            { label: "Mentorship", value: 90 },
        ],
        skills: ["Art Direction", "Pipeline", "Substance", "UE5"],
    },
    {
        id: "theo-marsh",
        name: "Theo Marsh",
        title: "Tools & Pipeline Lead",
        classTag: "Artificer",
        level: 20,
        bio: "The person your engineers thank in the credits. Theo has built the invisible infrastructure behind multiple shipped franchises.",
        stats: [
            { label: "Tooling", value: 97 },
            { label: "Automation", value: 95 },
            { label: "DevOps", value: 90 },
            { label: "Editor UX", value: 87 },
        ],
        skills: ["Python", "CI/CD", "Editor Tooling", "Perforce"],
    },
    {
        id: "renn-okafor",
        name: "Renn Okafor",
        title: "Producer",
        classTag: "Tactician",
        level: 15,
        bio: "Keeps a hundred moving parts on schedule without losing the plot. Renn has shipped both live-service and boxed AAA titles.",
        stats: [
            { label: "Scheduling", value: 95 },
            { label: "Risk Mgmt", value: 91 },
            { label: "Cross-Team", value: 93 },
            { label: "Comms", value: 96 },
        ],
        skills: ["Agile", "Live Ops", "Risk Mgmt", "Jira"],
    },
    {
        id: "jules-whitfield",
        name: "Jules Whitfield",
        title: "Gameplay Lead",
        classTag: "Duelist",
        level: 18,
        bio: "Obsessed with the ten seconds of gameplay that make a title feel great. Jules has shipped combat and traversal systems players still talk about.",
        stats: [
            { label: "Gameplay Sys.", value: 96 },
            { label: "Combat Feel", value: 93 },
            { label: "Prototyping", value: 95 },
            { label: "Scripting", value: 89 },
        ],
        skills: ["Gameplay", "Combat Design", "Blueprints", "C#"],
    },
];
