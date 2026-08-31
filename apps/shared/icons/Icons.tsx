import React, { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const base = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

export function ShieldIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    );
}

export function SwordIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M14.5 3.5 20.5 9.5 12 18l-3-3 8.5-8.5Z" />
            <path d="M9 15l-5.5 5.5" />
            <path d="M3.5 20.5 3 21l.5-.5Z" />
            <path d="M6 12l-2.5-1L3 8l3 .5L7 11l-1 1Z" />
        </svg>
    );
}

export function WrenchIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
        </svg>
    );
}

export function CloudIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M7 18h10.5a3.5 3.5 0 0 0 .5-6.96 5 5 0 0 0-9.71-1.94A4 4 0 0 0 7 18Z" />
        </svg>
    );
}

export function ChevronIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M9 6l6 6-6 6" />
        </svg>
    );
}

export function MailIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
        </svg>
    );
}

export function StarIcon(props: IconProps) {
    return (
        <svg {...{ ...base, strokeWidth: 1.5 }} fill="currentColor" stroke="none" {...props}>
            <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.7l1.2-6.6-4.8-4.6 6.6-.9L12 2.5Z" />
        </svg>
    );
}

export function SunIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
        </svg>
    );
}

export function MoonIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
        </svg>
    );
}

export function MenuIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M4 6.5h16M4 12h16M4 17.5h16" />
        </svg>
    );
}

export function CloseIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M5 5l14 14M19 5 5 19" />
        </svg>
    );
}

export function CheckIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M5 12.5l4.5 4.5L19 7" />
        </svg>
    );
}

export function AlertIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M12 3.5 21 19.5H3L12 3.5Z" />
            <path d="M12 10v4.2M12 17.2v.1" />
        </svg>
    );
}
