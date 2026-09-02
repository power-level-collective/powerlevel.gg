export interface ValueProp {
    title: string;
    body: string;
}

export const valueProps: ValueProp[] = [
    {
        title: "All-Veteran Roster",
        body: "Every consultant on our roster has shipped multiple AAA titles start to finish. No juniors learning on your budget.",
    },
    {
        title: "Day-One Productivity",
        body: "We embed directly in your existing tools and pipeline, so we're contributing inside your first sprint, not your third.",
    },
    {
        title: "Flexible Engagement",
        body: "Scale the team up for a crunch or down between milestones. You pay for capacity, not a bench.",
    },
    {
        title: "Battle-Tested Process",
        body: "Production discipline forged at studios that shipped at scale, adapted to fit the way your team already works.",
    },
    {
        title: "Transparent Communication",
        body: "Regular builds, honest status, and no surprises at milestone review.",
    },
];

export interface PartyStat {
    label: string;
    /** The real number shown at the end of the bar. */
    value: string;
    /** Decorative bar-fill percentage (0-100) — a stylized brand device, not a literal ratio. */
    fill: number;
}

export const partyStats: PartyStat[] = [
    { label: "Years Experience", value: "50", fill: 95 },
    { label: "Shipped Titles", value: "24", fill: 85 },
    { label: "Game Engines", value: "10", fill: 78 },
    { label: "Platforms", value: "12", fill: 82 },
];
