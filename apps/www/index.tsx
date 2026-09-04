import React from "react";
import Header from "../shared/components/Header.js";
import Footer from "../shared/components/Footer.js";
import ServiceCard from "../shared/components/ServiceCard.js";
import StatBar from "../shared/components/StatBar.js";
import { CreditBadge, CreditMarquee, IconBadge } from "../shared/components/CreditBadge.js";
import ContactForm from "../shared/components/ContactForm.js";
import HeroLeadForm from "../shared/components/HeroLeadForm.js";
import { ChevronIcon, StarIcon } from "../shared/icons/Icons.js";
import { SCHEDULER_URL } from "../shared/data/links.js";
import { services } from "../shared/data/services.js";
import {
    rosterRoles,
    rosterSkills,
    rosterShippedTitles,
    rosterStudios,
    rosterPlatforms,
    rosterEngines,
    partyStats,
} from "../shared/data/rosterSummary.js";
import { valueProps } from "../shared/data/valueProps.js";

export default function HomePage() {
    return (
        <div id="top" className="flex min-h-screen flex-col">
            <Header />

            <main className="flex flex-1 flex-col">
                <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
                    <div className="hud-grid pointer-events-none absolute inset-0" aria-hidden="true" />
                    <div className="container-plc relative flex flex-col items-center gap-6 text-center">
                        <span className="eyebrow">Game Development Consulting</span>
                        <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
                            Power Level Your Studio.
                        </h1>
                        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
                            Power Level Collective is a strike team of veteran AAA developers offering custom backend &amp; infrastructure,
                            tools &amp; pipeline engineering, co-development, and full-cycle development.
                        </p>
                        <div className="mt-2 flex w-full flex-col items-center gap-4 sm:w-auto">
                            <HeroLeadForm />
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <a
                                    href={SCHEDULER_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary shrink-0"
                                >
                                    Book a Call
                                    <ChevronIcon width={16} height={16} />
                                </a>
                                <a href="#services" className="btn btn-secondary shrink-0">
                                    See What We Do
                                </a>
                            </div>
                        </div>
                        <p className="mt-4 text-sm font-medium text-ink-faint">
                            Every consultant on our roster has shipped multiple AAA titles.
                        </p>
                    </div>
                </section>

                <section id="services" className="border-b border-border py-24">
                    <div className="container-plc flex flex-col gap-14">
                        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
                            <span className="eyebrow">What We Offer</span>
                            <h2 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                                Choose Your Path
                            </h2>
                            <p className="text-ink-muted">Four ways to bring veteran firepower to your roadmap.</p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {services.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="why-us" className="border-b border-border py-24">
                    <div className="container-plc grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4">
                                <span className="eyebrow">Why Power Level Collective</span>
                                <h2 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                                    Built Different. Shipped Often.
                                </h2>
                            </div>
                            <div className="flex flex-col gap-7">
                                {valueProps.map((prop, index) => (
                                    <div key={prop.title} className="flex gap-4">
                                        <span className="badge-level h-fit shrink-0 text-xs">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <h3 className="text-lg font-bold text-ink">{prop.title}</h3>
                                            <p className="mt-1 text-sm leading-relaxed text-ink-muted">{prop.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="panel-cut flex flex-col gap-6 p-7 sm:p-9">
                            <div>
                                <span className="eyebrow">Party Stats</span>
                                <p className="mt-2 text-xs text-ink-faint">
                                    A track record built one shipped title at a time.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                {partyStats.map((stat) => (
                                    <StatBar key={stat.label} label={stat.label} value={stat.fill} display={stat.value} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="border-b border-border bg-bg py-7">
                    <div className="container-plc flex items-center gap-4">
                        <span
                            className="h-px flex-1"
                            style={{ background: "linear-gradient(90deg, transparent, var(--color-gold))" }}
                        />
                        <StarIcon width={14} height={14} className="shrink-0 text-gold" />
                        <span
                            className="h-px flex-1"
                            style={{ background: "linear-gradient(90deg, var(--color-blue-deep), transparent)" }}
                        />
                    </div>
                </div>

                <section id="team" className="border-b border-border py-24">
                    <div className="container-plc flex flex-col gap-10">
                        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
                            <span className="eyebrow">Shipped Titles</span>
                            <h2 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                                Proof, Not Promises
                            </h2>
                            <p className="text-ink-muted">A track record built one shipped title at a time.</p>
                        </div>
                        {rosterShippedTitles.length > 0 ? (
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                                {rosterShippedTitles.map((title) => (
                                    <CreditBadge key={title.name} credit={title} size="lg" />
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm italic text-ink-faint">Shipped titles coming soon.</p>
                        )}
                    </div>
                </section>

                <section className="border-b border-border py-24">
                    <div className="container-plc flex flex-col gap-10">
                        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
                            <span className="eyebrow">Game Technology Masters</span>
                            <h2 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                                Every Platform. Every Engine.
                            </h2>
                            <p className="text-ink-muted">
                                From console to mobile, PC, and VR. We've worked with nearly every engine and platform.
                            </p>
                        </div>
                        <div className="panel-cut flex flex-col gap-8 p-7 sm:p-9">
                            <div className="flex flex-col gap-4">
                                <span className="eyebrow">Platforms</span>
                                <div className="flex flex-wrap gap-3">
                                    {rosterPlatforms.map((platform) => (
                                        <IconBadge key={platform.name} item={platform} size="lg" />
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 border-t border-border pt-8">
                                <span className="eyebrow">Engines</span>
                                <div className="flex flex-wrap gap-3">
                                    {rosterEngines.map((engine) => (
                                        <IconBadge key={engine.name} item={engine} size="lg" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-b border-border bg-surface py-12">
                    <div className="container-plc mb-6">
                        <span className="eyebrow">Studio Pedigree</span>
                    </div>
                    <CreditMarquee credits={rosterStudios} emptyLabel="Studio history coming soon." />
                </section>

                <section id="contact" className="py-24">
                    <div className="container-plc grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div className="flex flex-col gap-6">
                            <span className="eyebrow">Start a Quest</span>
                            <h2 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                                Ready to Power Level Your Studio?
                            </h2>
                            <p className="text-ink-muted">
                                Leave your email or phone number and we'll reach out within 1 business day to book a
                                call.
                            </p>
                            <ol className="mt-2 flex flex-col gap-4">
                                {[
                                    "Drop your email or phone below",
                                    "We reach out within 1 business day",
                                    "We book a call to scope the work",
                                ].map((step, index) => (
                                    <li key={step} className="flex items-center gap-3 text-sm text-ink-muted">
                                        <span className="badge-level h-fit shrink-0 text-xs">{index + 1}</span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <ContactForm />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
