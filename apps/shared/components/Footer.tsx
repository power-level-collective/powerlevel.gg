import React from "react";
import { MailIcon } from "../icons/Icons.js";

const NAV_LINKS = [
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#team", label: "Roster" },
    { href: "#contact", label: "Contact" },
];

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-border bg-bg-elevated">
            <div className="container-plc flex flex-col gap-10 py-14">
                <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                    <div className="flex flex-col gap-3">
                        <img src="/img/wordmark_logo.svg" alt="Power Level Collective" className="h-10 w-auto" />
                        <p className="max-w-sm text-sm text-ink-muted">
                            A strike team of veteran AAA developers offering custom backend, tools and infrastructure, co-development, and full production for game studios.
                        </p>
                    </div>

                    <nav className="flex flex-wrap gap-x-8 gap-y-3">
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href} className="nav-link">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <a href="mailto:hello@powerlevel.gg" className="flex items-center gap-2 nav-link">
                        <MailIcon width={16} height={16} />
                        hello@powerlevel.gg
                    </a>
                </div>

                <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
                    <span>© {year} Power Level Collective. All rights reserved.</span>
                    <div className="flex items-center gap-4">
                        <a href="/privacy" className="hover:text-gold hover:underline">
                            Privacy Policy
                        </a>
                        <span>Power leveling the game industry, one milestone at a time.</span>
                    </div>
                </div>

                {/* Windows/Xbox platform icons are Font Awesome Free brand icons, CC BY 4.0 licensed. */}
                <p className="text-xs text-ink-faint">
                    Platform icons by{" "}
                    <a
                        href="https://fontawesome.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold hover:underline"
                    >
                        Font Awesome
                    </a>
                    , licensed under{" "}
                    <a
                        href="https://creativecommons.org/licenses/by/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold hover:underline"
                    >
                        CC BY 4.0
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
}
