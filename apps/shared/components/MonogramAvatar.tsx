import React from "react";

export interface MonogramAvatarProps {
    name: string;
    className?: string;
}

/** Placeholder avatar until real headshots/art are supplied — a gradient monogram in brand colors. */
export default function MonogramAvatar({ name, className = "" }: MonogramAvatarProps) {
    const initials = name
        .split(" ")
        .map((part) => part[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <div className={`panel-cut-sm avatar-gradient flex aspect-square w-full items-center justify-center ${className}`}>
            <span className="font-display text-3xl font-extrabold text-white drop-shadow-sm">{initials}</span>
        </div>
    );
}
