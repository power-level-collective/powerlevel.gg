import React from "react";

/**
 * Source for public/img/social-card.png (the site's og:image / twitter:image, wired up in
 * _layout.tsx). Edit this page, then regenerate the PNG: run `yarn dev`, open
 * http://localhost:3000/_social-card in a browser, and screenshot the card's root `<div>` at
 * 1200x630 (or 2400x1260 for a sharper 2x export — that's what the current
 * public/img/social-card.png was captured at). Devtools' "Capture node screenshot" on that div
 * is the easiest way to get an exact crop; a Playwright `locator("body > div").screenshot()`
 * works too. Save the result over public/img/social-card.png.
 *
 * Not linked from anywhere in the site's nav — reachable only by URL.
 */
export default function SocialCardPage() {
    return (
        <div className="relative flex h-[630px] w-[1200px] flex-col justify-center overflow-hidden bg-bg px-[90px]">
            <div className="hud-grid absolute inset-0" />
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse 900px 500px at 18% 30%, rgba(242,175,13,0.16), transparent 60%)",
                }}
            />
            <img src="/img/wordmark_logo.svg" alt="" className="absolute left-[90px] top-[60px] h-[72px] w-auto" />
            <p className="eyebrow relative mb-6 text-[22px]">Game Development Consulting</p>
            <h1 className="relative mb-7 max-w-[900px] font-display text-[84px] font-extrabold leading-[1.02] text-ink">
                Power Level
                <br />
                Your Studio.
            </h1>
            <p className="relative max-w-[760px] text-[27px] leading-relaxed text-ink-muted">
                Veteran AAA developers for co-development, full-cycle
                <br />
                development, and custom game backends.
            </p>
            <div className="absolute inset-x-[90px] bottom-14 flex items-center justify-between">
                <span className="font-display text-2xl font-bold tracking-wide text-gold">powerlevel.gg</span>
                <span className="font-display text-xl font-medium uppercase tracking-wide text-ink-faint">
                    Co-Dev · Full-Cycle Dev · Backend · Tools
                </span>
            </div>
        </div>
    );
}
