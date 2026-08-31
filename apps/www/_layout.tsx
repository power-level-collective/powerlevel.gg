import React, { PropsWithChildren } from "react";

const SITE_TITLE = "Power Level Collective — Veteran Game Development Consulting";
const SITE_DESCRIPTION =
    "Power Level Collective is a strike team of veteran AAA developers offering co-development, full-cycle development, and tools & pipeline engineering for the video game industry.";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{SITE_TITLE}</title>
                <meta name="description" content={SITE_DESCRIPTION} />
                <meta name="theme-color" content="#0a0d13" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={SITE_TITLE} />
                <meta property="og:description" content={SITE_DESCRIPTION} />
                <meta property="og:image" content="/img/social-card.png" />
                <meta property="og:image:width" content="2400" />
                <meta property="og:image:height" content="1260" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="/img/social-card.png" />

                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
                <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400..800;1,14..32,400..800&display=swap"
                />

                <link rel="stylesheet" href="/styles/globals.css" />

                {/* Blocking, before paint: applies a previously-chosen "light" preference so
                    there's no dark->light flash. Dark needs no script — it's the token default. */}
                <script
                    dangerouslySetInnerHTML={{
                        __html:
                            'try{if(localStorage.getItem("plc-theme")==="light"){document.documentElement.classList.add("light");}}catch(e){}',
                    }}
                />
            </head>
            <body className="bg-bg text-ink font-body">{children}</body>
        </html>
    );
}
