export interface ServiceOffering {
    id: string;
    title: string;
    classTag: string;
    icon: "shield" | "sword" | "wrench" | "cloud";
    blurb: string;
    bullets: string[];
    /** Optional external link rendered as a bullet-list citation (e.g. proof-of-work). */
    link?: { href: string; label: string };
}

export const services: ServiceOffering[] = [
    {
        id: "backend",
        title: "Custom Backend & Infrastructure",
        classTag: "Cloud Mage",
        icon: "cloud",
        blurb: "We've built backend platforms again and again, across studios, publishers, and engines. Our founders have shipped a combined 10 backend platforms and has expertise with all major Game-Backend-as-a-Service (GBaaS) providers.",
        bullets: [
            "Built by veterans of a dozen+ shipped backend platforms",
            "Accounts, matchmaking, live-ops & infrastructure that scales",
            "Integrated with GBaaS providers so time and capital aren't wasted",
        ],
        // link: { href: "https://acceleratxr.com", label: "acceleratxr.com" },
    },
    {
        id: "tools",
        title: "Tools & Pipeline Engineering",
        classTag: "Party Buffs",
        icon: "wrench",
        blurb: "Custom editor tooling, build pipelines, and workflow automation that make every other developer on your team faster. We provide the force multiplier most studios never get around to building.",
        bullets: ["Editor & DCC tooling", "Build, asset & CI pipelines", "Workflow automation that pays for itself"],
    },
    {
        id: "co-dev",
        title: "Co-Development",
        classTag: "Squad Support",
        icon: "shield",
        blurb: "Embed veteran developers directly into your existing team and pipeline to clear a milestone, ship a feature, or absorb overflow work. Without the overhead of a new hire.",
        bullets: [
            "Drops into your existing engine & tools",
            "Scales up or down with your roadmap",
            "Senior engineers, artists & producers on demand",
        ],
    },
    {
        id: "full-dev",
        title: "Full-Cycle Development",
        classTag: "Full Party",
        icon: "sword",
        blurb: "Hand us the GDD and we'll run production start to finish. From prototype to production and ship. Led by people who have carried AAA titles across the finish line before.",
        bullets: [
            "End-to-end production ownership",
            "Vertical slice through certification & launch",
            "Battle-tested pipeline & production discipline",
        ],
    },
];
