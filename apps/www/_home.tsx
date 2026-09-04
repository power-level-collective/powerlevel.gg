import React from "react";
import Header from "../shared/components/Header.js";
import Footer from "../shared/components/Footer.js";
import ServiceCard from "../shared/components/ServiceCard.js";
import StatBar from "../shared/components/StatBar.js";
import ContactForm from "../shared/components/ContactForm.js";
import { ChevronIcon } from "../shared/icons/Icons.js";
import { services } from "../shared/data/services.js";
import { partyStats } from "../shared/data/rosterSummary.js";
import { valueProps } from "../shared/data/valueProps.js";

export default function HomePage() {
    return (
        <div id="top" className="flex min-h-screen flex-col">
            <Header />

            <main className="flex flex-1 flex-col">
                {/* ---------------------------------------------------------------- Hero */}
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
                        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
                            <a href="#contact" className="btn btn-primary">
                                Start a Project
                                <ChevronIcon width={16} height={16} />
                            </a>
                            <a href="#services" className="btn btn-secondary">
                                See What We Do
                            </a>
                        </div>
                        <p className="mt-4 text-sm font-medium text-ink-faint">
                            Every consultant on our roster has shipped multiple AAA titles.
                        </p>
                    </div>
                </section>

                {/* ------------------------------------------------------------- Services */}
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

                {/* -------------------------------------------------------------- Why Us */}
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

                {/* -------------------------------------------------------------- Contact */}
                <section id="contact" className="py-24">
                    <div className="container-plc grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div className="flex flex-col gap-6">
                            <span className="eyebrow">Start a Quest</span>
                            <h2 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                                Ready to Power Level Your Studio?
                            </h2>
                            <p className="text-ink-muted">
                                Tell us about your project, timeline, and team. We'll get back to you within 1
                                business day.
                            </p>
                            <ol className="mt-2 flex flex-col gap-4">
                                {[
                                    "We reply within 1 business day",
                                    "A quick intro call to scope the work",
                                    "A clear proposal — team, timeline, cost",
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
