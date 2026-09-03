import React from "react";
import type { Credit } from "../data/team.js";

export function CreditBadge({ credit }: { credit: Credit }) {
    const Wrapper = credit.url ? "a" : "div";
    const wrapperProps = credit.url ? { href: credit.url, target: "_blank", rel: "noopener noreferrer" } : {};

    if (credit.logo) {
        return (
            <Wrapper
                {...wrapperProps}
                className="panel-cut-sm flex min-h-24 items-center justify-center bg-surface-2 px-6 py-4 transition hover:bg-surface"
            >
                <img src={credit.logo} alt={credit.name} className="max-h-16 max-w-full object-contain" />
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

export function CreditGrid({ credits, emptyLabel }: { credits: Credit[]; emptyLabel: string }) {
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
 * seamlessly: the list is rendered twice back-to-back and the track animates exactly -50% of its
 * own width, so the second copy lines up perfectly with where the first one started.
 */
export function CreditMarquee({ credits, emptyLabel }: { credits: Credit[]; emptyLabel: string }) {
    if (credits.length === 0) {
        return <p className="container-plc text-sm italic text-ink-faint">{emptyLabel}</p>;
    }
    const track = [...credits, ...credits];
    const duration = Math.max(20, credits.length * 2.2);
    return (
        <div className="marquee">
            <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
                {track.map((credit, index) => (
                    <div key={`${credit.name}-${index}`} className="w-44 shrink-0 sm:w-56">
                        <CreditBadge credit={credit} />
                    </div>
                ))}
            </div>
        </div>
    );
}
