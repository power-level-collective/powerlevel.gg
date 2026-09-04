export interface Platform {
    name: string;
    icon?: string;
    logo?: string;
    url?: string;
    showcase?: boolean;
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