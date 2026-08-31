import React from "react";
import { ChevronIcon, CloseIcon, MenuIcon, MoonIcon, SunIcon } from "../icons/Icons.js";

const NAV_LINKS = [
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
            <div className="container-plc flex h-20 items-center justify-between">
                <a href="#top" className="flex items-center gap-2">
                    <img src="/img/wordmark_logo.svg" alt="Power Level Collective" className="h-10 w-auto sm:h-14" />
                </a>

                <nav className="hidden items-center gap-8 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        id="theme-toggle"
                        type="button"
                        aria-label="Toggle color theme"
                        className="panel-cut-sm flex h-10 w-10 shrink-0 items-center justify-center bg-surface-2 text-ink-muted transition-colors hover:text-gold"
                    >
                        <span className="theme-icon-dark">
                            <SunIcon width={18} height={18} />
                        </span>
                        <span className="theme-icon-light">
                            <MoonIcon width={18} height={18} />
                        </span>
                    </button>

                    <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
                        Get In Touch
                        <ChevronIcon width={16} height={16} />
                    </a>

                    <button
                        id="mobile-nav-toggle"
                        type="button"
                        aria-label="Toggle navigation menu"
                        aria-expanded="false"
                        aria-controls="mobile-nav"
                        className="panel-cut-sm flex h-10 w-10 shrink-0 items-center justify-center bg-surface-2 text-ink lg:hidden"
                    >
                        <span id="mobile-nav-icon-open">
                            <MenuIcon width={20} height={20} />
                        </span>
                        <span id="mobile-nav-icon-close" className="hidden">
                            <CloseIcon width={20} height={20} />
                        </span>
                    </button>
                </div>
            </div>

            <nav id="mobile-nav" className="hidden flex-col gap-1 border-t border-border px-5 py-4 lg:hidden">
                {NAV_LINKS.map((link) => (
                    <a key={link.href} href={link.href} className="nav-link py-2.5">
                        {link.label}
                    </a>
                ))}
                <a href="#contact" className="btn btn-primary mt-2 w-full">
                    Get In Touch
                </a>
            </nav>

            <script
                // Progressive-enhancement only: theme + mobile-nav toggles. No React hydration
                // is used on this route, so this runs as a plain script against the DOM.
                dangerouslySetInnerHTML={{
                    __html: `(function () {
                        var themeBtn = document.getElementById("theme-toggle");
                        if (themeBtn) {
                            themeBtn.addEventListener("click", function () {
                                var root = document.documentElement;
                                var isLight = root.classList.toggle("light");
                                try {
                                    localStorage.setItem("plc-theme", isLight ? "light" : "dark");
                                } catch (e) {}
                            });
                        }

                        var navBtn = document.getElementById("mobile-nav-toggle");
                        var navPanel = document.getElementById("mobile-nav");
                        var iconOpen = document.getElementById("mobile-nav-icon-open");
                        var iconClose = document.getElementById("mobile-nav-icon-close");
                        if (navBtn && navPanel) {
                            navBtn.addEventListener("click", function () {
                                var isOpen = navPanel.classList.toggle("flex");
                                navPanel.classList.toggle("hidden");
                                navBtn.setAttribute("aria-expanded", String(isOpen));
                                if (iconOpen) iconOpen.classList.toggle("hidden", isOpen);
                                if (iconClose) iconClose.classList.toggle("hidden", !isOpen);
                            });
                            navPanel.querySelectorAll("a").forEach(function (link) {
                                link.addEventListener("click", function () {
                                    navPanel.classList.add("hidden");
                                    navPanel.classList.remove("flex");
                                    navBtn.setAttribute("aria-expanded", "false");
                                    if (iconOpen) iconOpen.classList.remove("hidden");
                                    if (iconClose) iconClose.classList.add("hidden");
                                });
                            });
                        }
                    })();`,
                }}
            />
        </header>
    );
}
