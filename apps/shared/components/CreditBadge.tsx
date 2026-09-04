import React from "react";
import type { Studio } from "../data/team.js";

/**
 * Small icon-only badge for a compact inline row (e.g. platforms/engine on a credit line) — the
 * name only shows on hover/focus, unlike CreditBadge's full logo tile. Falls back to a small text
 * chip when there's no icon to show instead.
 */
export function IconBadge({ item }: { item: { name: string; icon?: string; logo?: string; url?: string } }) {
    const src = item.icon || item.logo;
    const Wrapper = item.url ? "a" : "span";
    const wrapperProps = item.url ? { href: item.url, target: "_blank", rel: "noopener noreferrer" } : {};

    if (!src) {
        return (
            <Wrapper {...wrapperProps} className="chip">
                {item.name}
            </Wrapper>
        );
    }

    return (
        <Wrapper
            {...wrapperProps}
            className="group relative flex h-8 w-8 shrink-0 items-center justify-center rounded bg-surface-2 p-1.5 shadow-[inset_0_0_0_1px_var(--color-border)] transition hover:bg-surface"
        >
            <img src={src} alt={item.name} className="h-full w-full object-contain" />
            <span className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-bg-elevated px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-ink opacity-0 shadow-[inset_0_0_0_1px_var(--color-border-strong)] transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                {item.name}
            </span>
        </Wrapper>
    );
}

export function CreditBadge({ credit }: { credit: Studio }) {
    const Wrapper = credit.url ? "a" : "div";
    const wrapperProps = credit.url ? { href: credit.url, target: "_blank", rel: "noopener noreferrer" } : {};

    if (credit.logo) {
        return (
            <Wrapper
                {...wrapperProps}
                className="panel-cut-sm group relative flex min-h-24 items-center justify-center bg-surface-2 px-6 py-4 transition hover:bg-surface"
            >
                <img src={credit.logo} alt={credit.name} className="max-h-16 max-w-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center bg-bg/90 px-3 text-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                        {credit.name}
                    </span>
                </span>
            </Wrapper>
        );
    }
    return (
        <Wrapper
            {...wrapperProps}
            className="panel-cut-sm flex min-h-24 items-center justify-center bg-surface-2 px-6 py-4 text-center transition hover:bg-surface"
        >
            <span className="font-display text-sm font-bold uppercase tracking-wide text-ink">{credit.name}</span>
        </Wrapper>
    );
}

export function CreditGrid({ credits, emptyLabel }: { credits: Studio[]; emptyLabel: string }) {
    if (credits.length === 0) {
        return <p className="text-sm italic text-ink-faint">{emptyLabel}</p>;
    }
    return (
        <div className="credit-scroll flex snap-x snap-proximity gap-3 overflow-x-auto pb-2">
            {credits.map((credit) => (
                <div key={credit.name} className="w-40 shrink-0 snap-start sm:w-48">
                    <CreditBadge credit={credit} />
                </div>
            ))}
        </div>
    );
}

/**
 * Full-bleed, continuously auto-scrolling logo strip (the "as seen in" / customer-logos marketing
 * pattern) — meant to span the full width of the page, outside any max-width container. Loops
 * seamlessly: the list is repeated `copies` times back-to-back and the track animates by exactly
 * one copy's width (100% / copies), so the next copy always lines up perfectly with where the
 * previous one started. A short list (e.g. a handful of engines) needs more than 2 copies —
 * otherwise the doubled track is narrower than the viewport and the loop point is visibly inside
 * it instead of off-screen — so `copies` scales up as the list gets shorter, targeting a track of
 * around 12 tiles either way.
 */
export function CreditMarquee({ credits, emptyLabel }: { credits: Studio[]; emptyLabel: string }) {
    if (credits.length === 0) {
        return <p className="container-plc text-sm italic text-ink-faint">{emptyLabel}</p>;
    }
    const copies = Math.max(2, Math.ceil(12 / credits.length));
    const track = Array.from({ length: copies }, () => credits).flat();
    const duration = Math.max(20, credits.length * 2.2);
    return (
        <div className="marquee">
            <div
                className="marquee-track"
                style={{ animationDuration: `${duration}s`, "--marquee-copies": copies } as React.CSSProperties}
            >
                {track.map((credit, index) => (
                    <div key={`${credit.name}-${index}`} className="w-44 shrink-0 sm:w-56">
                        <CreditBadge credit={credit} />
                    </div>
                ))}
            </div>
        </div>
    );
}
