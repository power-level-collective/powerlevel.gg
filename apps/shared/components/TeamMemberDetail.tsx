import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import MonogramAvatar from "./MonogramAvatar.js";
import StatBar from "./StatBar.js";
import { CreditGrid, IconBadge } from "./CreditBadge.js";
import { ChevronIcon } from "../icons/Icons.js";
import { SCHEDULER_URL } from "../data/links.js";
import type { TeamMember } from "../data/team.js";

export default function TeamMemberDetail({ member }: { member: TeamMember }) {
    const bioParagraphs = member.longBio && member.longBio.length > 0 ? member.longBio : [member.bio];
    const hobbies = member.hobbies.filter(Boolean);

    return (
        <div id="top" className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1 py-16 sm:py-20">
                <div className="container-plc flex flex-col gap-12">
                    <a href="/team" className="nav-link inline-flex w-fit items-center gap-1.5">
                        <ChevronIcon width={14} height={14} className="rotate-180" />
                        Back to the Team
                    </a>

                    <div className="grid gap-10 lg:grid-cols-[16rem_1fr]">
                        <div className="flex flex-col items-start gap-4">
                            <div className="w-40 sm:w-full lg:w-full">
                                <MonogramAvatar name={member.name} />
                            </div>
                            <span className="badge-level text-sm">
                                LVL <span className="text-lg">{member.level}</span>
                            </span>
                            <span className="chip">{member.classTag}</span>
                        </div>

                        <div className="flex flex-col gap-3">
                            <span className="eyebrow">Character Sheet</span>
                            <h1 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                                {member.name}
                            </h1>
                            <p className="text-lg text-ink-muted">{member.title}</p>
                        </div>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                        <div className="flex min-w-0 flex-col gap-10">
                            <section className="flex flex-col gap-4">
                                <h2 className="font-display text-xl font-bold text-ink">Biography</h2>
                                <div className="flex flex-col gap-4">
                                    {bioParagraphs.map((paragraph, index) => (
                                        <p key={index} className="text-sm leading-relaxed text-ink-muted">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </section>

                            <section className="flex flex-col gap-4">
                                <h2 className="font-display text-xl font-bold text-ink">Skills</h2>
                                <div className="flex flex-wrap gap-2">
                                    {member.skills.map((skill) => (
                                        <span key={skill} className="chip">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="panel-cut flex flex-col gap-6 p-7 sm:p-9">
                            <div>
                                <span className="eyebrow">Stats</span>
                                <p className="mt-2 text-xs text-ink-faint">Character build for {member.name.split(" ")[0]}.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                {member.stats.map((stat) => (
                                    <StatBar key={stat.label} label={stat.label} value={stat.value} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <section className="flex flex-col gap-4">
                        <h2 className="font-display text-xl font-bold text-ink">Credits</h2>
                        {member.credits.length > 0 ? (
                            <div className="flex flex-col divide-y divide-border">
                                {member.credits.map((credit) => (
                                    <div
                                        key={credit.title}
                                        className="flex flex-col gap-3 py-4 first:pt-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                                    >
                                        <div className="flex min-w-0 items-center gap-4">
                                            {credit.logo && (
                                                <img
                                                    src={credit.logo}
                                                    alt=""
                                                    className="h-28 w-28 shrink-0 object-contain"
                                                />
                                            )}
                                            <div className="min-w-0">
                                                <h3 className="font-display text-base font-bold text-ink">
                                                    {credit.url ? (
                                                        <a
                                                            href={credit.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:text-gold hover:underline"
                                                        >
                                                            {credit.title}
                                                        </a>
                                                    ) : (
                                                        credit.title
                                                    )}
                                                    {credit.year > 0 && (
                                                        <span className="ml-2 font-body text-sm font-normal text-ink-faint">
                                                            ({credit.year})
                                                        </span>
                                                    )}
                                                </h3>
                                                {credit.role && <p className="text-sm text-ink-muted">{credit.role}</p>}
                                                {credit.studio && (
                                                    <p className="text-sm text-ink-faint">
                                                        {credit.studio.url ? (
                                                            <a
                                                                href={credit.studio.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="hover:text-gold hover:underline"
                                                            >
                                                                {credit.studio.name}
                                                            </a>
                                                        ) : (
                                                            credit.studio.name
                                                        )}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
                                            {credit.engine && (
                                                <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                                                    <span className="field-label">Engine:</span>
                                                    <IconBadge item={credit.engine} />
                                                </div>
                                            )}
                                            {credit.platforms.length > 0 && (
                                                <div className="flex flex-col items-start gap-1.5 sm:items-end">
                                                    <span className="field-label">Platforms:</span>
                                                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                                                        {credit.platforms.map((platform) => (
                                                            <IconBadge key={platform.name} item={platform} />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm italic text-ink-faint">Credits coming soon.</p>
                        )}
                    </section>

                    <section className="flex flex-col gap-4">
                        <h2 className="font-display text-xl font-bold text-ink">Studios</h2>
                        <CreditGrid credits={member.studios} emptyLabel="Studio history coming soon." />
                    </section>

                    <section className="flex flex-col gap-4">
                        <h2 className="font-display text-xl font-bold text-ink">Hobbies</h2>
                        {hobbies.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                                {hobbies.map((hobby) => (
                                    <span key={hobby} className="chip">
                                        {hobby}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm italic text-ink-faint">Hobbies coming soon.</p>
                        )}
                    </section>

                    <div className="panel-cut flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
                        <div>
                            <h2 className="font-display text-xl font-bold text-ink">
                                Want {member.name.split(" ")[0]} on your project?
                            </h2>
                            <p className="mt-1 text-sm text-ink-muted">We'll reach out within 1 business day.</p>
                        </div>
                        <a
                            href={SCHEDULER_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary shrink-0"
                        >
                            Book a Call
                            <ChevronIcon width={16} height={16} />
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
