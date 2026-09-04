import { Engine, ENGINES } from "./engines";
import { Studio, STUDIOS } from "./studios";
import { GameCredit, TITLES } from "./titles";

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
    /** Longer-form biography for the member's detail page. One entry per paragraph. */
    longBio?: string[];
    stats: TeamStat[];
    skills: string[];
    engines: Engine[];
    studios: Studio[];
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
        bio: "20+ years of industry experience and 14 shipped titles across console, mobile, PC & web. An expert in all things multi-player and online services. JP is a true leader that thrives on pushing the limits of advancing game technology.",
        stats: [
            { label: "Leadership", value: 88 },
            { label: "Engineering", value: 95 },
            { label: "Architecture", value: 90 },
            { label: "Game Backends", value: 99 },
            { label: "Engines", value: 85 },
        ],
        skills: ["AI", "CI/CD", "Databases", "Gameplay", "Game Engines", "Live Ops", "Netcode", "Performance", "Tools", "Unreal", "Unity"],
        engines: [ ENGINES.unreal, ENGINES.unity, ENGINES.godot, ENGINES.cryengine, ENGINES.idtech5, ENGINES.firefly ],
        studios: [STUDIOS.superbit, STUDIOS.skydance, STUDIOS.workshop, STUDIOS.adhesive, STUDIOS.ember_lab, STUDIOS.spark, STUDIOS.trilogy],
        credits: [
            { ...TITLES.armajet, role: "Technical Director" },
            { ...TITLES.archangel, role: "Lead Engineer" },
            { ...TITLES.pwnd, role: "Lead Engineer" },
            { ...TITLES.xcom2, role: "Senior Engineer" },
            { ...TITLES.apb_reloaded, role: "Senior Engineer" },
            { ...TITLES.evil_within, role: "Senior Engineer" },
            { ...TITLES.hawken, role: "Senior Network Engineer" },
            { ...TITLES.lost_planet_3, role: "Senior Network Engineer" },
            { ...TITLES.crabs_and_penguins, role: "Lead Engineer" },
            { ...TITLES.day_at_the_beach, role: "Lead Engineer" },
            { ...TITLES.despicable_me, role: "Lead Engineer" },
            { ...TITLES.ladybug_girl, role: "Lead Engineer" },
            { ...TITLES.harold, role: "Lead Engineer" },
            { ...TITLES.kung_fu_panda_world, role: "Lead Engineer" },
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
        engines: [ ENGINES.unreal ],
        studios: [STUDIOS.skydance],
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
        engines: [ ENGINES.unreal, ENGINES.unity, ENGINES.firefly ],
        studios: [STUDIOS.skydance, STUDIOS.riot, STUDIOS.trilogy],
        credits: [
            { ...TITLES.pwnd, role: "Senior Engineer" },
            { ...TITLES.league_of_legends, role: "Senior Engineer" },
            { ...TITLES.despicable_me, role: "Engineer" },
            { ...TITLES.ladybug_girl, role: "Engineer" },
            { ...TITLES.harold, role: "Engineer" },
            { ...TITLES.kung_fu_panda_world, role: "Engineer" },
        ],
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
        engines: [],
        studios: [STUDIOS.riot],
        credits: [
            { ...TITLES.league_of_legends, role: "Producer" },
        ],
        hobbies: [],
    }
];
