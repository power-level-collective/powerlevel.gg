import React from "react";
import Header from "../../shared/components/Header.js";
import Footer from "../../shared/components/Footer.js";
import TeamCard from "../../shared/components/TeamCard.js";
import { team } from "../../shared/data/team.js";

export default function TeamPage() {
    return (
        <div id="top" className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1 py-16 sm:py-20">
                <div className="container-plc flex flex-col gap-14">
                    <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
                        <span className="eyebrow">Meet the Party</span>
                        <h1 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                            Your AAA Strike Team
                        </h1>
                        <p className="text-ink-muted">
                            Every member of the Collective has shipped multiple AAA titles start to finish.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {team.map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
