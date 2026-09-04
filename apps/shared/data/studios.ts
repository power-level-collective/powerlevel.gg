export interface Studio {
    name: string;
    /** Path to a real logo image. Omit to fall back to a stylized text badge. */
    logo?: string;
    /** Link to the title/studio's site. */
    url?: string;
    /** Set to `true` to display this credit on the home page showcase. */
    showcase?: boolean;
}

export const STUDIOS = {
    adhesive: { name: "Adhesive Games" },
    ember_lab: { name: "Ember Lab", logo: "/img/logos/ember_lab.webp", url: "https://emberlab.com", showcase: true },
    riot: { name: "Riot Games", logo: "/img/logos/riot_games.png", url: "https://www.riotgames.com/", showcase: true },
    spark: { name: "Spark Unlimited", logo: "/img/logos/spark_unlimited.png", showcase: true },
    skydance: { name: "Skydance Interactive", logo: "/img/logos/skydance_interactive.jpg", url: "https://skydance.com/interactive", showcase: true },
    superbit: { name: "Superbit Machine", logo: "/img/logos/superbit_machine.jpg", showcase: true },
    trilogy: { name: "Trilogy Studios", logo: "/img/logos/trilogy_studios.jpg", showcase: true },
    workshop: { name: "The Workshop Entertainment", logo: "/img/logos/the_workshop.jfif" }
};