export interface TeamStat {
    label: string;
    value: number;
}

export interface Platform {
    name: string;
    icon?: string;
    logo?: string;
    url?: string;
    showcase?: boolean;
}

export interface Engine {
    name: string;
    icon?: string;
    logo?: string;
    url?: string;
    showcase?: boolean;
}

export interface GameCredit {
    title: string;
    /** Path to a real logo image. Omit to fall back to a stylized text badge. */
    logo?: string;
    platforms: Platform[];
    /** The engine the title was built on. Omit if unknown rather than guessing. */
    engine?: Engine;
    studio: Studio;
    role: string;
    year: number;
    /** Link to the title/studio's site. */
    url?: string;
    /** Set to `true` to display this credit on the home page showcase. */
    showcase?: boolean;
}

export interface Studio {
    name: string;
    /** Path to a real logo image. Omit to fall back to a stylized text badge. */
    logo?: string;
    /** Link to the title/studio's site. */
    url?: string;
    /** Set to `true` to display this credit on the home page showcase. */
    showcase?: boolean;
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

export const PLATFORMS: Record<string, Platform> = {
    android: { name: "Android", icon: "/img/platforms/android.svg", logo: "/img/platforms/android.svg", showcase: true },
    ios: { name: "iOS", icon: "/img/platforms/ios.svg", logo: "/img/platforms/ios.svg", showcase: true },
    linux: { name: "Linux", icon: "/img/platforms/linux.svg", logo: "/img/platforms/linux.svg" },
    mac: { name: "MacOS", icon: "/img/platforms/mac.svg", logo: "/img/platforms/mac.svg" },
    oculus: { name: "Oculus", icon: "/img/platforms/oculus.svg", logo: "/img/platforms/oculus.svg", showcase: true },
    ps3: { name: "PlayStation 3", icon: "/img/platforms/ps3.svg", logo: "/img/platforms/ps3.svg", showcase: true },
    ps4: { name: "PlayStation 4", icon: "/img/platforms/ps4.svg", logo: "/img/platforms/ps4.svg", showcase: true },
    ps5: { name: "PlayStation 5", icon: "/img/platforms/ps5.svg", logo: "/img/platforms/ps5.svg" },
    psvr: { name: "PlayStation VR", icon: "/img/platforms/psvr.svg", logo: "/img/platforms/psvr.svg", showcase: true },
    xbox: { name: "Xbox", icon: "/img/platforms/xb360.svg", logo: "/img/platforms/xbone.svg", showcase: true },
    xb360: { name: "Xbox 360", icon: "/img/platforms/xb360.svg", logo: "/img/platforms/xb360.svg" },
    xbone: { name: "Xbox One", icon: "/img/platforms/xbone.svg", logo: "/img/platforms/xbone.svg" },
    xbx: { name: "Xbox Series X", icon: "/img/platforms/xbx.svg", logo: "/img/platforms/xbx.svg" },
    steam: { name: "SteamOS", icon: "/img/platforms/steam.svg", logo: "/img/platforms/steam.svg" },
    steamvr: { name: "Steam VR", icon: "/img/platforms/steamvr.svg", logo: "/img/platforms/steamvr.svg", showcase: true },
    switch: { name: "Switch", icon: "/img/platforms/switch.svg", logo: "/img/platforms/switch.svg" },
    switch2: { name: "Switch 2", icon: "/img/platforms/switch2.svg", logo: "/img/platforms/switch2.svg" },
    web: { name: "Web", icon: "/img/platforms/web.svg", logo: "/img/platforms/web.svg", showcase: true },
    windows: { name: "Windows", icon: "/img/platforms/windows.svg", logo: "/img/platforms/windows.svg", showcase: true }
};

export const ENGINES: Record<string, Engine> = {
    unreal: { name: "Unreal Engine", icon: "/img/engines/unreal.svg", logo: "/img/engines/unreal.svg", url: "https://www.unrealengine.com", showcase: true },
    ue3: { name: "Unreal Engine 3", icon: "/img/engines/unreal.svg", logo: "/img/engines/unreal.svg", url: "https://www.unrealengine.com" },
    ue4: { name: "Unreal Engine 4", icon: "/img/engines/unreal.svg", logo: "/img/engines/unreal.svg", url: "https://www.unrealengine.com" },
    unity: { name: "Unity", icon: "/img/engines/unity.svg", logo: "/img/engines/unity.svg", url: "https://unity.com", showcase: true },
    godot: { name: "Godot", icon: "/img/engines/godot.svg", logo: "/img/engines/godot.svg", url: "https://godotengine.org" },
    cryengine: { name: "CryEngine", icon: "/img/engines/cryengine.svg", logo: "/img/engines/cryengine.svg", url: "https://www.cryengine.com", showcase: true },
    // Adapted from id Software's real id Tech 8 press logo with the "8" edited to a "5" to match
    // the actual engine version — no official id Tech 5-specific mark exists to source instead.
    idtech5: { name: "id Tech 5", icon: "/img/engines/idtech.svg", logo: "/img/engines/idtech.svg", url: "https://www.idsoftware.com", showcase: true },
    source: { name: "Source", icon: "/img/engines/source.svg", logo: "/img/engines/source.svg", url: "https://valvesoftware.com" },
    // Trilogy Studios' in-house engine — no public official site to link to.
    firefly: { name: "Firefly Engine", icon: "/img/engines/firefly.png", logo: "/img/engines/firefly.png" },
    proprietary: { name: "Proprietary Engine", icon: "/img/engines/proprietary.svg", logo: "/img/engines/proprietary.svg" },
};

export const STUDIOS = {
    adhesive: { name: "Adhesive Games" },
    ember_lab: { name: "Ember Lab", url: "https://emberlab.com", showcase: true },
    riot: { name: "Riot Games", url: "https://www.riotgames.com/", showcase: true },
    spark: { name: "Spark Unlimited", showcase: true },
    skydance: { name: "Skydance Interactive", url: "https://skydance.com/interactive", showcase: true },
    superbit: { name: "Superbit Machine", showcase: true },
    trilogy: { name: "Trilogy Studios", showcase: true },
    workshop: { name: "The Workshop Entertainment" }
};

export const TITLES = {
    apb_reloaded: { title: "APB: Reloaded", logo: "/img/logos/apb_reloaded.jfif", platforms: [PLATFORMS.ps4, PLATFORMS.xbone], engine: ENGINES.ue3, studio: STUDIOS.workshop, year: 2015, url: "https://store.steampowered.com/app/113400/APB_Reloaded/", showcase: true },
    armajet: { title: "Armajet", logo: "/img/logos/armajet.jpg", platforms: [PLATFORMS.android, PLATFORMS.ios, PLATFORMS.windows], engine: ENGINES.unity, studio: STUDIOS.superbit, year: 2019, url: "https://store.steampowered.com/app/895670/Armajet/", showcase: true },
    archangel: { title: "Archangel", logo: "/img/logos/archangel.jpg", platforms: [PLATFORMS.oculus, PLATFORMS.psvr, PLATFORMS.steamvr], engine: ENGINES.ue4, studio: STUDIOS.skydance, year: 2018, url: "https://skydance-media.fandom.com/wiki/Archangel", showcase: true },
    crabs_and_penguins: { title: "Crabs & Penguins", platforms: [PLATFORMS.android, PLATFORMS.ios], engine: ENGINES.unity, studio: STUDIOS.ember_lab, year: 2012 },
    day_at_the_beach: { title: "A Day at the Beach", platforms: [PLATFORMS.android, PLATFORMS.ios], engine: ENGINES.firefly, studio: STUDIOS.trilogy, year: 2011 },
    despicable_me: { title: "Despicable Me", platforms: [PLATFORMS.android, PLATFORMS.ios], engine: ENGINES.firefly, studio: STUDIOS.trilogy, year: 2011 },
    evil_within: { title: "The Evil Within", logo: "/img/logos/the_evil_within.jfif", platforms: [PLATFORMS.ps4, PLATFORMS.xbone, PLATFORMS.windows], engine: ENGINES.idtech5, studio: STUDIOS.workshop, year: 2014, url: "https://store.steampowered.com/app/268050/The_Evil_Within/", showcase: true },
    harold: { title: "Harold and the Purple Crayon", platforms: [PLATFORMS.android, PLATFORMS.ios], engine: ENGINES.firefly, studio: STUDIOS.trilogy, year: 2011 },
    hawken: { title: "Hawken", logo: "/img/logos/hawken.jfif", platforms: [PLATFORMS.windows], engine: ENGINES.ue3, studio: STUDIOS.adhesive, year: 2013, url: "https://www.playhawken.com", showcase: true },
    kung_fu_panda_world: { title: "Kung Fu Panda World", logo: "/img/logos/kung_fu_panda_world.webp", platforms: [PLATFORMS.web], engine: ENGINES.proprietary, studio: STUDIOS.trilogy, year: 2010, url: "https://kungfupanda.fandom.com/wiki/Kung_Fu_Panda_World", showcase: true },
    ladybug_girl: { title: "Ladybug Girl", platforms: [PLATFORMS.android, PLATFORMS.ios], engine: ENGINES.firefly, studio: STUDIOS.trilogy, year: 2011 },
    league_of_legends: { title: "League of Legends", logo: "/img/logos/league_of_legends.avif", platforms: [PLATFORMS.windows], engine: ENGINES.proprietary, studio: STUDIOS.riot, year: 2017, url: "https://www.leagueoflegends.com/", showcase: true },
    lost_planet_3: { title: "Lost Planet 3", logo: "/img/logos/lost_planet_3.png", platforms: [PLATFORMS.ps3, PLATFORMS.xb360, PLATFORMS.windows], engine: ENGINES.ue3, studio: STUDIOS.spark, role: "Senior Network Engineer", year: 2013, url: "https://store.steampowered.com/app/226720/LOST_PLANET_3/", showcase: true },
    pwnd: { title: "PWND", logo: "/img/logos/pwnd.png", platforms: [PLATFORMS.windows], engine: ENGINES.ue4, studio: STUDIOS.skydance, role: "Lead Engineer", year: 2017, url: "https://skydance-media.fandom.com/wiki/PWND", showcase: true },
    xcom2: { title: "XCOM 2", logo: "/img/logos/xcom_2.jpg", platforms: [PLATFORMS.ps4, PLATFORMS.xbone], engine: ENGINES.ue3, studio: STUDIOS.workshop, year: 2016, url: "https://store.steampowered.com/app/268500/XCOM_2/", showcase: true }
};

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
