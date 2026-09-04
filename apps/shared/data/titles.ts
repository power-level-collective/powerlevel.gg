import { Engine, ENGINES } from "./engines";
import { Platform, PLATFORMS } from "./platforms";
import { Studio, STUDIOS } from "./studios";

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