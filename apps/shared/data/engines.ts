export interface Engine {
    name: string;
    icon?: string;
    logo?: string;
    url?: string;
    showcase?: boolean;
}

export const ENGINES: Record<string, Engine> = {
    unreal: { name: "Unreal Engine", icon: "/img/engines/unreal.svg", logo: "/img/engines/unreal.svg", url: "https://www.unrealengine.com", showcase: true },
    ue3: { name: "Unreal Engine 3", icon: "/img/engines/unreal.svg", logo: "/img/engines/unreal.svg", url: "https://www.unrealengine.com" },
    ue4: { name: "Unreal Engine 4", icon: "/img/engines/unreal.svg", logo: "/img/engines/unreal.svg", url: "https://www.unrealengine.com" },
    unity: { name: "Unity", icon: "/img/engines/unity.svg", logo: "/img/engines/unity.svg", url: "https://unity.com", showcase: true },
    godot: { name: "Godot", icon: "/img/engines/godot.svg", logo: "/img/engines/godot.svg", url: "https://godotengine.org", showcase: true },
    cryengine: { name: "CryEngine", icon: "/img/engines/cryengine.svg", logo: "/img/engines/cryengine.svg", url: "https://www.cryengine.com", showcase: true },
    // Adapted from id Software's real id Tech 8 press logo with the "8" edited to a "5" to match
    // the actual engine version — no official id Tech 5-specific mark exists to source instead.
    idtech5: { name: "id Tech 5", icon: "/img/engines/idtech.svg", logo: "/img/engines/idtech.svg", url: "https://www.idsoftware.com", showcase: true },
    source: { name: "Source", icon: "/img/engines/source.svg", logo: "/img/engines/source.svg", url: "https://valvesoftware.com" },
    // Trilogy Studios' in-house engine — no public official site to link to.
    firefly: { name: "Firefly Engine", icon: "/img/engines/firefly.png", logo: "/img/engines/firefly.png" },
    proprietary: { name: "Proprietary Engine", icon: "/img/engines/proprietary.svg", logo: "/img/engines/proprietary.svg" },
};