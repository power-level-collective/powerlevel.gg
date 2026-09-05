import React from "react";
import Header from "../../shared/components/Header.js";
import Footer from "../../shared/components/Footer.js";
import StatBar from "../../shared/components/StatBar.js";
import { IconBadge } from "../../shared/components/CreditBadge.js";
import { PLATFORMS } from "../../shared/data/platforms.js";

// Not linked from any nav — reachable only at this direct URL. (RapidREST's router excludes any
// `_`-prefixed file/segment entirely, so a literal "/_style-guide" isn't possible; this is the
// closest equivalent: a real route nothing links to.)

interface Swatch {
    name: string;
    dark: string;
    light: string;
    cssVar: string;
    role: string;
}

const BRAND_SWATCHES: Swatch[] = [
    { name: "Gold", role: "Primary accent", cssVar: "var(--color-gold)", dark: "#F2AF0D", light: "#A3690A" },
    { name: "Gold Soft", role: "Gradient highlight", cssVar: "var(--color-gold-soft)", dark: "#F6CA5F", light: "#C98A1D" },
    { name: "Gold Pale", role: "Subtle fills", cssVar: "var(--color-gold-pale)", dark: "#FCE9BA", light: "#FBE9C2" },
    { name: "Blue", role: "Secondary accent", cssVar: "var(--color-blue)", dark: "#3D93FF", light: "#0C62CC" },
    { name: "Blue Deep", role: "Wordmark / dividers", cssVar: "var(--color-blue-deep)", dark: "#0D79F2", light: "#0D79F2" },
];

const SEMANTIC_SWATCHES: Swatch[] = [
    { name: "Success", role: "Confirmations", cssVar: "var(--color-success)", dark: "#33C48A", light: "#128A5E" },
    { name: "Danger", role: "Errors", cssVar: "var(--color-danger)", dark: "#F2554D", light: "#C9372C" },
];

const NEUTRAL_SWATCHES: Swatch[] = [
    { name: "Background", role: "Page ground", cssVar: "var(--color-bg)", dark: "#0A0D13", light: "#F7F5EE" },
    { name: "Surface", role: "Panels, cards", cssVar: "var(--color-surface)", dark: "#141824", light: "#FFFFFF" },
    { name: "Surface 2", role: "Elevated / hover", cssVar: "var(--color-surface-2)", dark: "#1B2130", light: "#F0ECE0" },
    { name: "Ink", role: "Primary text", cssVar: "var(--color-ink)", dark: "#EEF1F7", light: "#15181F" },
    { name: "Ink Muted", role: "Secondary text", cssVar: "var(--color-ink-muted)", dark: "#9AA3B7", light: "#575F70" },
];

function hexToRgb(hex: string): [number, number, number] {
    const h = hex.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function rgbToCmyk(r: number, g: number, b: number): [number, number, number, number] {
    const rp = r / 255;
    const gp = g / 255;
    const bp = b / 255;
    const k = 1 - Math.max(rp, gp, bp);
    if (k >= 1) return [0, 0, 0, 100];
    const c = (1 - rp - k) / (1 - k);
    const m = (1 - gp - k) / (1 - k);
    const y = (1 - bp - k) / (1 - k);
    return [Math.round(c * 100), Math.round(m * 100), Math.round(y * 100), Math.round(k * 100)];
}

function SwatchCard({ swatch }: { swatch: Swatch }) {
    const darkRgb = hexToRgb(swatch.dark);
    const darkCmyk = rgbToCmyk(...darkRgb);
    return (
        <div className="panel-cut-sm overflow-hidden">
            <div className="h-20" style={{ background: swatch.cssVar }} />
            <div className="flex flex-col gap-2 p-4">
                <div>
                    <p className="font-display text-sm font-bold text-ink">{swatch.name}</p>
                    <p className="text-xs text-ink-faint">{swatch.role}</p>
                </div>
                <div className="flex flex-col gap-1 border-t border-border pt-2 font-mono text-xs text-ink-muted">
                    <div className="flex justify-between gap-2">
                        <span>Dark</span>
                        <span>
                            {swatch.dark} · rgb({darkRgb.join(", ")})
                        </span>
                    </div>
                    <div className="flex justify-between gap-2 text-ink-faint">
                        <span />
                        <span>cmyk({darkCmyk.join(", ")})</span>
                    </div>
                    {swatch.light !== swatch.dark && (
                        <div className="flex justify-between gap-2 border-t border-border pt-1">
                            <span>Light</span>
                            <span>{swatch.light}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
    return (
        <div className="flex max-w-2xl flex-col gap-3">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">{title}</h2>
            {children && <p className="text-sm leading-relaxed text-ink-muted">{children}</p>}
        </div>
    );
}

function KVRow({ k, children }: { k: string; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 gap-1 border-b border-border py-3 last:border-0 sm:grid-cols-[11rem_1fr] sm:gap-4">
            <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-faint">{k}</span>
            <span className="text-sm text-ink-muted">{children}</span>
        </div>
    );
}

const iconExamples = [PLATFORMS.ps5, PLATFORMS.xbx, PLATFORMS.windows, PLATFORMS.ios, PLATFORMS.android, PLATFORMS.steamvr];

export default function StyleGuidePage() {
    return (
        <div id="top" className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                {/* ---------------------------------------------------------------- Cover */}
                <section className="relative overflow-hidden border-b border-border py-16 sm:py-20">
                    <div className="hud-grid pointer-events-none absolute inset-0" aria-hidden="true" />
                    <div className="container-plc relative flex flex-col gap-8">
                        <div className="flex flex-wrap items-center gap-6">
                            <img src="/img/logo.svg" alt="" className="h-20 w-20 shrink-0" />
                            <div className="flex flex-col gap-2">
                                <span className="eyebrow">Brand Guide · v1.0</span>
                                <h1 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                                    Power Level Collective
                                </h1>
                            </div>
                        </div>
                        <p className="max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
                            The visual and verbal identity for Power Level Collective — a strike team of veteran AAA
                            developers offering co-development, full-cycle development, and tools &amp; pipeline
                            engineering. This guide documents the system as built at{" "}
                            <a href="/" className="text-gold hover:underline">
                                powerlevel.gg
                            </a>{" "}
                            — colors, type, logo usage, and the voice behind the copy — so anything made for the
                            brand reads as one Collective.
                        </p>
                        <p className="text-xs text-ink-faint">
                            This page isn't linked from the site nav or footer — bookmark the URL if you need it
                            again.
                        </p>
                        <nav className="flex flex-wrap gap-2" aria-label="Section index">
                            {[
                                ["#tone", "Tone"],
                                ["#type", "Typography"],
                                ["#color", "Color"],
                                ["#logo", "Logo"],
                                ["#wordmark", "Wordmark"],
                                ["#voice", "Voice"],
                                ["#components", "UI & Iconography"],
                                ["#assets", "Assets"],
                            ].map(([href, label]) => (
                                <a key={href} href={href} className="chip transition hover:text-gold">
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </section>

                {/* ---------------------------------------------------------------- Tone */}
                <section id="tone" className="border-b border-border bg-surface py-16">
                    <div className="container-plc flex flex-col gap-10">
                        <SectionHeader eyebrow="01 · Brand Summary" title="Veteran competence, rendered as a HUD.">
                            Power Level Collective sells hard-won AAA experience to studios who already speak the
                            language of the games they ship. The brand borrows its visual grammar directly from that
                            world — character sheets, party stats, level badges, tactical HUD panels — and applies it
                            with a straight face. It's a costume the site wears confidently, not a joke it's making.
                            Everything is legible first, playful second.
                        </SectionHeader>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    n: "Trait 01",
                                    t: "Veteran, not corporate",
                                    d: "Every claim is backed by a shipped credit. Copy states experience plainly (“shipped multiple AAA titles”) instead of reaching for vague superlatives.",
                                },
                                {
                                    n: "Trait 02",
                                    t: "Game-literate, in on the bit",
                                    d: "RPG vocabulary — Character Sheet, Party Stats, LVL, Choose Your Path — is load-bearing UI copy, not a gimmick on top. It should still make sense with the flavor stripped out.",
                                },
                                {
                                    n: "Trait 03",
                                    t: "Dark by default",
                                    d: "The product ships dark-mode-first, like a game menu or an engine editor. Light mode is fully supported, but every decision is made in the dark palette first.",
                                },
                                {
                                    n: "Trait 04",
                                    t: "Cut corners, not rounded ones",
                                    d: "The signature panel shape is an angular clipped corner, never a soft rounded card — the single most recognizable shape in the system (see UI & Iconography).",
                                },
                            ].map((card) => (
                                <div key={card.n} className="panel-cut-sm flex flex-col gap-2 p-6">
                                    <span className="font-display text-xs font-bold tracking-wide text-gold">{card.n}</span>
                                    <h3 className="text-base font-bold text-ink">{card.t}</h3>
                                    <p className="text-sm leading-relaxed text-ink-muted">{card.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------------- Typography */}
                <section id="type" className="border-b border-border py-16">
                    <div className="container-plc flex flex-col gap-10">
                        <SectionHeader eyebrow="02 · Typography" title="Two typefaces, two jobs.">
                            <span className="font-semibold text-ink">Blender Pro</span> carries every heading, label,
                            button, and stat — the condensed, geometric voice of the HUD.{" "}
                            <span className="font-semibold text-ink">Inter</span> carries every sentence a visitor
                            actually reads — bios, descriptions, policy text. Never swap the two: Blender Pro set in
                            long paragraphs reads as shouting; Inter set in a button reads as generic.
                        </SectionHeader>

                        <div className="flex flex-col gap-4">
                            <div className="panel-cut-sm flex flex-col gap-2 p-6">
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-faint">
                                        Blender Pro · Heavy 800 · Display / H1
                                    </span>
                                    <span className="font-mono text-xs text-ink-faint">clamp(2.25rem, 4vw, 3.75rem)</span>
                                </div>
                                <p className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
                                    Power Level Your Studio.
                                </p>
                            </div>
                            <div className="panel-cut-sm flex flex-col gap-2 p-6">
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-faint">
                                        Blender Pro · Bold 700 · H2 / Section title
                                    </span>
                                    <span className="font-mono text-xs text-ink-faint">2.25rem</span>
                                </div>
                                <p className="font-display text-4xl font-bold text-ink">Choose Your Path</p>
                            </div>
                            <div className="panel-cut-sm flex flex-col gap-2 p-6">
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-faint">
                                        Blender Pro · Bold 700 · Eyebrow label
                                    </span>
                                    <span className="font-mono text-xs text-ink-faint">0.75rem · +0.22em tracking</span>
                                </div>
                                <span className="eyebrow text-base">Game Development Consulting</span>
                            </div>
                            <div className="panel-cut-sm flex flex-col gap-2 p-6">
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-faint">
                                        Inter · Regular 400 · Body copy
                                    </span>
                                    <span className="font-mono text-xs text-ink-faint">1rem / 1.6</span>
                                </div>
                                <p className="max-w-[60ch] text-base leading-relaxed text-ink-muted">
                                    Power Level Collective is a strike team of veteran AAA developers offering custom
                                    backend &amp; infrastructure, tools &amp; pipeline engineering, co-development,
                                    and full-cycle development.
                                </p>
                            </div>
                            <div className="panel-cut-sm flex flex-col gap-3 p-6">
                                <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-faint">
                                    UI text — Blender Pro Bold, uppercase
                                </span>
                                <div className="flex flex-wrap items-center gap-3">
                                    <button className="btn btn-primary" type="button">
                                        Book a Call
                                    </button>
                                    <button className="btn btn-secondary" type="button">
                                        See What We Do
                                    </button>
                                    <span className="chip">Live Ops</span>
                                    <span className="badge-level text-sm">
                                        LVL <span className="text-lg">20</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="panel-cut-sm p-6">
                                <h3 className="mb-2 text-sm font-bold text-ink">Blender Pro is for:</h3>
                                <p className="text-sm text-ink-muted">
                                    Headings (h1–h4), eyebrow labels, nav links, buttons, chips, stat labels/values,
                                    badges — always the "system" of the page, and almost always uppercase with wide
                                    tracking below H2 size.
                                </p>
                            </div>
                            <div className="panel-cut-sm p-6">
                                <h3 className="mb-2 text-sm font-bold text-ink">Inter is for:</h3>
                                <p className="text-sm text-ink-muted">
                                    Body paragraphs, bios, legal copy, form labels and inputs — anything a visitor
                                    reads sentence by sentence. Variable weight axis 400–800; body copy stays at
                                    400–500.
                                </p>
                            </div>
                            <div className="panel-cut-sm flex flex-col gap-2 p-6 sm:col-span-2">
                                <p className="text-sm text-success">
                                    ✓ Do set Blender Pro in uppercase for anything under H2 size — it's a condensed
                                    grotesk designed to be read short and wide, not as running text.
                                </p>
                                <p className="text-sm text-danger">
                                    ✕ Don't set Inter body copy below 14px, or Blender Pro in sentence case at small
                                    sizes — both were tuned for their specific jobs above.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------------- Color */}
                <section id="color" className="border-b border-border bg-surface py-16">
                    <div className="container-plc flex flex-col gap-10">
                        <SectionHeader eyebrow="03 · Color" title="Gold leads, blue answers.">
                            Gold is the accent of record — eyebrows, primary buttons, focus rings, the LVL badge.
                            Blue is reserved for the wordmark's second word and secondary UI accents; the two only
                            appear together in the brand mark and the gold-to-blue divider bar. Every swatch below
                            carries a dark-mode and light-mode value — this brand ships both, by design. Toggle the
                            theme button in the header above to see the live tiles react.
                        </SectionHeader>

                        <div>
                            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-ink-faint">
                                Brand accents
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {BRAND_SWATCHES.map((s) => (
                                    <SwatchCard key={s.name} swatch={s} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-ink-faint">Semantic</h3>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {SEMANTIC_SWATCHES.map((s) => (
                                    <SwatchCard key={s.name} swatch={s} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-ink-faint">
                                Neutrals &amp; surfaces
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {NEUTRAL_SWATCHES.map((s) => (
                                    <SwatchCard key={s.name} swatch={s} />
                                ))}
                            </div>
                        </div>
                        <p className="text-xs text-ink-faint">
                            CMYK values are calculated from RGB for reference only — get a proof against your actual
                            stock/press before running anything where color-matching matters.
                        </p>
                    </div>
                </section>

                {/* ---------------------------------------------------------------- Logo */}
                <section id="logo" className="border-b border-border py-16">
                    <div className="container-plc flex flex-col gap-10">
                        <SectionHeader eyebrow="04 · Logo Usage" title="The mark: a shooting star, mid-burst.">
                            The mark is a comet — a gold trail exploding into a starburst with a blue "afterburner"
                            tail. It's the site's favicon, the avatar-gradient motif, and the shorthand for the brand
                            wherever the full wordmark won't fit. Use it alone only when Power Level Collective is
                            already identified nearby — otherwise pair it with the wordmark.
                        </SectionHeader>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="panel-cut-sm flex min-h-[190px] flex-col items-center justify-center gap-4 p-6" style={{ background: "#0a0d13" }}>
                                <img src="/img/logo.svg" alt="Power Level Collective mark" className="h-24 w-24" />
                                <span className="font-display text-xs font-bold uppercase tracking-wide text-[#9aa3b7]">
                                    On dark #0a0d13 — primary use
                                </span>
                            </div>
                            <div className="panel-cut-sm flex min-h-[190px] flex-col items-center justify-center gap-4 p-6" style={{ background: "#f7f5ee" }}>
                                <img src="/img/logo.svg" alt="Power Level Collective mark" className="h-24 w-24" />
                                <span className="font-display text-xs font-bold uppercase tracking-wide text-[#575f70]">
                                    On light #f7f5ee — secondary use
                                </span>
                            </div>
                            <div className="panel-cut-sm flex min-h-[190px] flex-col items-center justify-center gap-4 bg-surface-2 p-6">
                                <img src="/img/logo.svg" alt="Power Level Collective mark" className="h-24 w-24" />
                                <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-faint">
                                    On UI surface — avatars, favicons
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-ink-faint">
                                Clear space &amp; minimum size
                            </h3>
                            <div
                                className="panel-cut-sm flex items-center justify-center p-16"
                                style={{
                                    backgroundImage:
                                        "repeating-conic-gradient(var(--color-surface-2) 0% 25%, var(--color-surface) 0% 50%)",
                                    backgroundSize: "24px 24px",
                                }}
                            >
                                <div className="relative p-6" style={{ boxShadow: "inset 0 0 0 1px var(--color-gold)" }}>
                                    <img src="/img/logo.svg" alt="" className="h-20 w-20" />
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-ink-muted">
                                Keep clear space of at least ¼ of the mark's height on every side (the boxed line
                                above is the minimum). Never let text, photos, or other UI cross that boundary.
                                Don't reproduce the mark below <span className="font-semibold text-ink">24px</span> —
                                the burst detail disappears before that.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="panel-cut-sm flex flex-col items-center gap-3 p-5 text-center">
                                <div className="flex h-20 w-full items-center justify-center rounded bg-surface-2">
                                    <img src="/img/logo.svg" alt="" className="h-12 w-12 grayscale" />
                                </div>
                                <span className="font-display text-xs font-bold uppercase tracking-wide text-danger">
                                    Don't
                                </span>
                                <p className="text-xs text-ink-muted">
                                    Recolor or desaturate the mark — the gold-to-blue transition is the point.
                                </p>
                            </div>
                            <div className="panel-cut-sm flex flex-col items-center gap-3 p-5 text-center">
                                <div className="flex h-20 w-full items-center justify-center rounded bg-surface-2">
                                    <img
                                        src="/img/logo.svg"
                                        alt=""
                                        className="h-12 w-12"
                                        style={{ transform: "rotate(35deg) scaleX(-1)" }}
                                    />
                                </div>
                                <span className="font-display text-xs font-bold uppercase tracking-wide text-danger">
                                    Don't
                                </span>
                                <p className="text-xs text-ink-muted">
                                    Rotate or mirror it. The burst always travels toward the upper-right.
                                </p>
                            </div>
                            <div className="panel-cut-sm flex flex-col items-center gap-3 p-5 text-center">
                                <div className="flex h-20 w-full items-center justify-center rounded bg-surface-2">
                                    <img
                                        src="/img/logo.svg"
                                        alt=""
                                        className="h-12 w-12"
                                        style={{ filter: "drop-shadow(4px 4px 0 rgba(0,0,0,.6))" }}
                                    />
                                </div>
                                <span className="font-display text-xs font-bold uppercase tracking-wide text-danger">
                                    Don't
                                </span>
                                <p className="text-xs text-ink-muted">
                                    Add drop shadows, bevels, or outer glows. The mark carries its own depth via
                                    layered gold tones.
                                </p>
                            </div>
                            <div className="panel-cut-sm flex flex-col items-center gap-3 p-5 text-center">
                                <div className="flex h-20 w-full items-center justify-center rounded bg-surface-2">
                                    <img src="/img/logo.svg" alt="" className="h-12 w-12" />
                                </div>
                                <span className="font-display text-xs font-bold uppercase tracking-wide text-success">
                                    Do
                                </span>
                                <p className="text-xs text-ink-muted">
                                    Use it exactly as supplied, scaled proportionally, with clear space respected.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------------- Wordmark */}
                <section id="wordmark" className="border-b border-border bg-surface py-16">
                    <div className="container-plc flex flex-col gap-8">
                        <SectionHeader eyebrow="05 · Wordmark Usage" title="The full lockup.">
                            POWER LEVEL sits in gold, COLLECTIVE in blue, underscored by a bar carrying the same
                            gold-to-blue burst as the mark. This is the primary signature for headers, decks, and
                            anywhere the brand is introduced for the first time — use it instead of the mark alone
                            whenever there's room.
                        </SectionHeader>

                        <div className="panel-cut-sm flex items-center justify-center p-10" style={{ background: "#0a0d13" }}>
                            <img src="/img/wordmark_logo.svg" alt="Power Level Collective" className="h-auto w-full max-w-[30rem]" />
                        </div>

                        <div className="panel-cut-sm px-6">
                            <KVRow k="Color rule">
                                "POWER LEVEL" is always gold (<code>#f2af0d</code>); "COLLECTIVE" is always blue (
                                <code>#0d79f2</code>). Never swap or unify the two.
                            </KVRow>
                            <KVRow k="Minimum width">
                                120px on screen, 1in in print — below that the underline bar's burst detail is lost.
                            </KVRow>
                            <KVRow k="Backgrounds">
                                Dark surfaces only by default (as shown). If you must place it on a light ground, use
                                a reversed-value lockup rather than dropping it directly on white.
                            </KVRow>
                            <KVRow k="Don't">
                                Stack the two words at a different ratio, re-letter-space the type, or separate the
                                underline bar from the wordline.
                            </KVRow>
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------------- Voice */}
                <section id="voice" className="border-b border-border py-16">
                    <div className="container-plc flex flex-col gap-10">
                        <SectionHeader eyebrow="06 · Voice & Writing" title="Write like a lead who ships.">
                            Every line of site copy follows the same handful of rules. They're extracted from the
                            live site, not invented for this guide — match them exactly.
                        </SectionHeader>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="panel-cut-sm p-6">
                                <h3 className="mb-2 text-sm font-bold text-ink">Second person, direct address</h3>
                                <p className="text-sm text-ink-muted">
                                    "Choose Your Path," "Book a Call," "Tell us about your project." The visitor is
                                    always "you"; the Collective is always "we."
                                </p>
                            </div>
                            <div className="panel-cut-sm p-6">
                                <h3 className="mb-2 text-sm font-bold text-ink">Specific over superlative</h3>
                                <p className="text-sm text-ink-muted">
                                    "Shipped multiple AAA titles," "69 years combined experience" beats
                                    "industry-leading" or "world-class." If a number exists, use it.
                                </p>
                            </div>
                            <div className="panel-cut-sm p-6">
                                <h3 className="mb-2 text-sm font-bold text-ink">RPG vocabulary, sparingly</h3>
                                <p className="text-sm text-ink-muted">
                                    LVL, Party Stats, Character Sheet, Choose Your Path are load-bearing labels for
                                    real sections — not sprinkled into every sentence. One clear game reference per
                                    section is enough.
                                </p>
                            </div>
                            <div className="panel-cut-sm p-6">
                                <h3 className="mb-2 text-sm font-bold text-ink">Controls say what happens</h3>
                                <p className="text-sm text-ink-muted">
                                    "Book a Call," "Get Started," "See What We Do" — never "Submit" or "Learn More."
                                    A button names its outcome.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------------- Components */}
                <section id="components" className="border-b border-border bg-surface py-16">
                    <div className="container-plc flex flex-col gap-10">
                        <SectionHeader eyebrow="07 · UI Patterns & Iconography" title="The recurring shapes.">
                            These patterns appear everywhere on the site and should be reused rather than
                            reinvented — a new feature that needs a "card" should reach for a cut panel, not a
                            rounded one.
                        </SectionHeader>

                        <div className="panel-cut-sm px-6">
                            <KVRow k="Panel (large)">
                                <code>.panel-cut</code> — an 1.1rem cut on the top-left and bottom-right corners,
                                never rounded. Used for hero content blocks and stat sidebars.
                            </KVRow>
                            <KVRow k="Panel (small)">
                                <code>.panel-cut-sm</code> — same shape, 0.6rem cut. Used for tighter UI: badges,
                                buttons, credit tiles, and every box on this page.
                            </KVRow>
                            <KVRow k="Buttons">
                                Primary = gold gradient fill; secondary = neutral surface with an inset border that
                                turns gold on hover. Both share the small-panel cut and uppercase Blender Pro label.
                            </KVRow>
                            <KVRow k="Stat bars">
                                A labeled track filled left-to-right with the gold gradient — the RPG "skill bar,"
                                used for real metrics and decorative Party Stats alike.
                            </KVRow>
                        </div>

                        <div className="panel-cut-sm flex flex-wrap items-center gap-4 p-6">
                            <div className="w-full max-w-xs">
                                <StatBar label="Engineering" value={95} />
                            </div>
                            <span className="badge-level text-sm">
                                LVL <span className="text-lg">20</span>
                            </span>
                            <span className="chip">Unreal</span>
                            <span className="chip">Live Ops</span>
                            <button className="btn btn-primary" type="button">
                                Get Started
                            </button>
                        </div>

                        <div>
                            <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-ink-faint">
                                Iconography
                            </h3>
                            <p className="mb-4 max-w-[60ch] text-sm text-ink-muted">
                                Platform, engine, and studio marks are always the real brand icon where a legitimate,
                                properly-licensed one exists — never a redrawn lookalike. When no real mark is
                                available or licensable, fall back to a plain text badge rather than inventing one.
                                Icons sit on a neutral surface tile at a consistent size.
                            </p>
                            <div className="panel-cut-sm flex flex-wrap gap-3 p-6">
                                {iconExamples.map((platform) => (
                                    <IconBadge key={platform.name} item={platform} size="lg" />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------------- Assets */}
                <section id="assets" className="py-16">
                    <div className="container-plc flex flex-col gap-8">
                        <SectionHeader eyebrow="08 · Assets, Accessibility & Housekeeping" title="Where things live, and what to check." />
                        <div className="panel-cut-sm px-6">
                            <KVRow k="Mark (SVG)">
                                <code>public/img/logo.svg</code> — also exported as <code>logo.png</code>
                            </KVRow>
                            <KVRow k="Wordmark (SVG)">
                                <code>public/img/wordmark_logo.svg</code> — also exported as{" "}
                                <code>wordmark_logo.png</code>
                            </KVRow>
                            <KVRow k="Display font">
                                Blender Pro — Book/Medium/Bold/Heavy, self-hosted at{" "}
                                <code>public/fonts/Blender-Pro-*.ttf</code>. Confirm your license covers the intended
                                use (web embedding vs. print/merch) before shipping new materials commercially.
                            </KVRow>
                            <KVRow k="Body font">
                                Inter, variable weight 400–800, loaded from Google Fonts in{" "}
                                <code>apps/www/_layout.tsx</code>.
                            </KVRow>
                            <KVRow k="Source of truth">
                                Every token and component class on this page is the real one from{" "}
                                <code>apps/www/_styles/globals.css</code> — this page renders with the site's actual
                                CSS, not a copy of it. If a color or shape here ever looks wrong, the stylesheet
                                changed and this page will already show it.
                            </KVRow>
                            <KVRow k="Contrast">
                                Gold-on-dark-bg and blue-on-dark-bg both clear WCAG AA for large text/UI; body copy
                                always uses the ink/ink-muted tokens, never gold or blue, to keep long-form text
                                comfortably readable.
                            </KVRow>
                            <KVRow k="Motion">
                                Marquees and other ambient motion respect <code>prefers-reduced-motion</code> —
                                always pair new motion with a static fallback.
                            </KVRow>
                            <KVRow k="Editing this guide">
                                This entire page is <code>apps/www/style-guide/index.tsx</code> — a normal routed
                                page in this app, styled by the site's real stylesheet. Edit it like any other page.
                            </KVRow>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
