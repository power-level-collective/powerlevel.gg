// Swap in real headshots/art in place of MonogramAvatar before launch. `hobbies` is intentionally
// empty below where unfilled — fill in real details per person rather than leaving placeholder
// entries; the detail page renders a graceful "coming soon" note for any section that's still
// empty. `credits` entries below only have `title` filled in as a starting scaffold — `platforms`,
// `studio` and `role` are deliberately blank rather than guessed, since which studio/role/platform
// goes with which specific title isn't something to invent for a real person.

export interface TeamStat {
    label: string;
    value: number;
}

export interface Credit {
    name: string;
    /** Path to a real logo image. Omit to fall back to a stylized text badge. */
    logo?: string;
    /** Link to the title/studio's site. */
    url?: string;
    /** Set to `true` to display this credit on the home page showcase. */
    showcase?: boolean;
}

export interface GameCredit {
    title: Credit;
    platforms: string[];
    studio: Credit;
    role: string;
    year: number;
}

export interface TeamMember {
    id: string;
    name: string;
    title: string;
    classTag: string;
    level: number;
    bio: string;
    /** Longer-form biography for the member's detail page. One entry per paragraph. */
    longBio?: string[];
    stats: TeamStat[];
    skills: string[];
    credits: GameCredit[];
    hobbies: string[];
}

export const team: TeamMember[] = [
    {
        id: "jp-steinmetz",
        name: "Jean-Philippe Steinmetz",
        title: "Director of Engineering",
        classTag: "Code Warrior",
        level: 20,
        bio: "20+ years of industry experience and over 13 shipped titles across console, mobile, PC & web. An expert in all things multi-player and online services. JP is a true leader that thrives on pushing the limits of advancing game technology.",
        stats: [
            { label: "Leadership", value: 88 },
            { label: "Engineering", value: 95 },
            { label: "Architecture", value: 90 },
            { label: "Game Backends", value: 99 },
            { label: "Engines", value: 85 },
        ],
        skills: ["AI", "CI/CD", "Databases", "Gameplay", "Game Engines", "Live Ops", "Netcode", "Performance", "Tools", "Unreal", "Unity"],
        credits: [
            { title: { name: "Armajet", url: "https://store.steampowered.com/app/895670/Armajet/", logo: "/img/logos/armajet.jpg", showcase: true }, platforms: ["Android", "iOS", "Windows"], studio: { name: "Superbit Machine", showcase: true }, role: "Technical Director", year: 2019 },
            { title: { name: "Archangel", url: "https://skydance-media.fandom.com/wiki/Archangel", logo: "/img/logos/archangel.jpg", showcase: true }, platforms: ["Oculus", "PSVR"], studio: { name: "Skydance Interactive", url: "https://skydance.com/interactive", showcase: true }, role: "Lead Backend Engineer", year: 2018 },
            { title: { name: "PWND", url: "https://skydance-media.fandom.com/wiki/PWND", logo: "/img/logos/pwnd.png", showcase: true }, platforms: ["Windows"], studio: { name: "Skydance Interactive", url: "https://skydance.com/interactive" }, role: "Lead Engineer", year: 2017 },
            { title: { name: "XCOM 2", url: "https://store.steampowered.com/app/268500/XCOM_2/", logo: "/img/logos/xcom_2.jpg", showcase: true }, platforms: ["PlayStation 4", "Xbox One"], studio: { name: "The Workshop Entertainment" }, role: "Senior Engineer", year: 2016 },
            { title: { name: "APB: Reloaded", url: "https://store.steampowered.com/app/113400/APB_Reloaded/", logo: "/img/logos/apb_reloaded.jfif", showcase: true }, platforms: ["PlayStation 4", "Xbox One"], studio: { name: "The Workshop Entertainment" }, role: "Senior Engineer", year: 2015 },
            { title: { name: "The Evil Within", url: "https://store.steampowered.com/app/268050/The_Evil_Within/", logo: "/img/logos/the_evil_within.jfif", showcase: true }, platforms: ["PlayStation 4", "Xbox One", "Windows"], studio: { name: "The Workshop Entertainment" }, role: "Senior Engineer", year: 2014 },
            { title: { name: "Hawken", url: "https://www.playhawken.com", logo: "/img/logos/hawken.jfif", showcase: true }, platforms: ["Windows"], studio: { name: "Adhesive Games" }, role: "Senior Network Engineer", year: 2013 },
            { title: { name: "Lost Planet 3", url: "https://store.steampowered.com/app/226720/LOST_PLANET_3/", logo: "/img/logos/lost_planet_3.png", showcase: true }, platforms: ["PlayStation 3", "Xbox 360", "Windows"], studio: { name: "Spark Unlimited", showcase: true }, role: "Senior Network Engineer", year: 2013 },
            { title: { name: "Crabs & Penguins" }, platforms: ["Android", "iOS"], studio: { name: "Ember Lab", url: "https://emberlab.com", showcase: true }, role: "Lead Engineer", year: 2012 },
            { title: { name: "A Day at the Beach" }, platforms: ["Android", "iOS"], studio: { name: "Trilogy Studios" }, role: "Lead Engineer", year: 2011 },
            { title: { name: "Despicable Me" }, platforms: ["Android", "iOS"], studio: { name: "Trilogy Studios" }, role: "Lead Engineer", year: 2011 },
            { title: { name: "Ladybug Girl" }, platforms: ["Android", "iOS"], studio: { name: "Trilogy Studios" }, role: "Lead Engineer", year: 2011 },
            { title: { name: "Harold and the Purple Crayon" }, platforms: ["Android", "iOS"], studio: { name: "Trilogy Studios" }, role: "Lead Engineer", year: 2011 },
            { title: { name: "Kung Fu Panda World", url: "https://kungfupanda.fandom.com/wiki/Kung_Fu_Panda_World", logo: "/img/logos/kung_fu_panda_world.webp", showcase: true }, platforms: ["Web"], studio: { name: "Trilogy Studios", showcase: true }, role: "Lead Engineer", year: 2010 },
        ],
        hobbies: ["carpentry", "music", "racing", "robotics", "skateboarding", "snowboarding", "surfing"],
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
        credits: [],
        hobbies: [],
    },
    {
        id: "ryan-dumouchelle",
        name: "Ryan Dumouchelle",
        title: "Lead Engineer",
        classTag: "UX Sorcerer",
        level: 17,
        bio: "Blah blah blah.",
        stats: [
            { label: "Art Direction", value: 96 },
            { label: "Pipeline", value: 88 },
            { label: "Craft", value: 94 },
            { label: "Mentorship", value: 90 },
        ],
        skills: ["Art Direction", "Pipeline", "Substance", "UE5"],
        credits: [],
        hobbies: [],
    },
    {
        id: "terry-teng",
        name: "Terry Teng",
        title: "Lead Producer",
        classTag: "Code Warrior",
        level: 13,
        bio: "13+ years in tech/gaming experience, working as a program/product manager as well as a producer. Worked at some of the largest tech companies in the country including Google, Meta, and Riot Games. Has thrived in multiple leadership roles and completed multiple end-to-end projects.",
        stats: [
            { label: "Project Management", value: 96 },
            { label: "Product Management", value: 85 },
            { label: "Process Documentation", value: 92 },
            { label: "Roadmapping", value: 88 },
            { label: "Agile / SCRUM", value: 86 },
        ],
        skills: [],
        credits: [],
        hobbies: [],
    }
];
