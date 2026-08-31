import React from "react";
import Header from "../shared/components/Header.js";
import Footer from "../shared/components/Footer.js";

export default function ErrorPage() {
    return (
        <div id="top" className="flex min-h-screen flex-col">
            <Header />
            <main className="container-plc flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
                <span className="eyebrow">Wipe</span>
                <h1 className="font-display text-7xl font-extrabold text-gold sm:text-8xl">500</h1>
                <p className="max-w-md text-ink-muted">
                    The party has wiped. Something went wrong on our end — try again in a moment.
                </p>
                <a href="/" className="btn btn-primary mt-2">
                    Return to Base Camp
                </a>
            </main>
            <Footer />
        </div>
    );
}
