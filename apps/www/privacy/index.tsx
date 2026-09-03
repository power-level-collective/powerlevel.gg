import React from "react";
import Header from "../../shared/components/Header.js";
import Footer from "../../shared/components/Footer.js";

const EFFECTIVE_DATE = "September 3, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="flex flex-col gap-3">
            <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-ink-muted">{children}</div>
        </section>
    );
}

export default function PrivacyPage() {
    return (
        <div id="top" className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1 py-16 sm:py-20">
                <div className="container-plc flex max-w-3xl flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <span className="eyebrow">Legal</span>
                        <h1 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">Privacy Policy</h1>
                        <p className="text-sm text-ink-faint">Effective {EFFECTIVE_DATE}</p>
                    </div>

                    <p className="text-sm leading-relaxed text-ink-muted">
                        This policy explains what information Power Level Collective ("we," "us," or "our") collects
                        when you visit powerlevel.gg, how we use it, and the choices available to you. If you have
                        questions, contact us at{" "}
                        <a href="mailto:contact@powerlevel.gg" className="text-gold hover:underline">
                            contact@powerlevel.gg
                        </a>
                        .
                    </p>

                    <Section title="1. Information We Collect">
                        <p>We collect two kinds of information:</p>
                        <ul className="flex flex-col gap-2 pl-5 list-disc">
                            <li>
                                <span className="font-semibold text-ink">Information you provide.</span> When you
                                submit our contact form, we collect the email address or phone number you enter so we
                                can respond to you.
                            </li>
                            <li>
                                <span className="font-semibold text-ink">Aggregate usage statistics.</span> We collect
                                anonymized, aggregate information about how visitors use our site — such as which
                                pages are viewed and general traffic volume — to understand and improve the site.
                                This is not collected via tracking cookies and is not tied to your identity or
                                combined with your contact information.
                            </li>
                        </ul>
                    </Section>

                    <Section title="2. How We Use Your Information">
                        <p>We use the information we collect to:</p>
                        <ul className="flex flex-col gap-2 pl-5 list-disc">
                            <li>Respond to your inquiry and follow up to schedule a call;</li>
                            <li>
                                Send you marketing communications about our services, if you've provided your contact
                                information, in accordance with the consent described below; and
                            </li>
                            <li>Understand aggregate site usage and improve our website.</li>
                        </ul>
                        <p className="font-semibold text-ink">We do not sell your personal information.</p>
                    </Section>

                    <Section title="3. Text Message Communications">
                        <p>
                            By submitting a phone number through our contact form, you agree to receive recurring
                            automated marketing text messages from Power Level Collective at the number provided.
                            Consent is not a condition of any purchase. Message and data rates may apply. Message
                            frequency varies. Reply STOP at any time to opt out, or HELP for assistance. Your phone
                            number and consent records are kept confidential and are not shared with third parties
                            for their own marketing purposes.
                        </p>
                    </Section>

                    <Section title="4. Email Communications">
                        <p>
                            Marketing emails include an unsubscribe link that takes effect immediately. We may still
                            contact you directly regarding an active inquiry or scheduled call after you unsubscribe
                            from marketing messages.
                        </p>
                    </Section>

                    <Section title="5. Cookies & Tracking">
                        <p>
                            We do not use advertising or cross-site tracking cookies, and we do not require a cookie
                            consent banner because we don't rely on cookies or persistent identifiers to collect the
                            aggregate usage statistics described above. Our web hosting provider may keep standard
                            server access logs (such as IP address and browser type) for security and reliability
                            purposes; these logs are not used to build profiles of individual visitors.
                        </p>
                    </Section>

                    <Section title="6. Service Providers">
                        <p>
                            We may work with service providers who help us operate our website, respond to
                            inquiries, and deliver the communications described above. These providers only receive
                            the information necessary to perform their services on our behalf and are not permitted
                            to use it for their own purposes. We may also disclose information when required by law.
                        </p>
                    </Section>

                    <Section title="7. Data Retention">
                        <p>
                            We retain the contact information you submit until you opt out or ask us to delete it.
                            Aggregate usage statistics, which are not tied to your identity, may be retained longer
                            for historical trend analysis.
                        </p>
                    </Section>

                    <Section title="8. Your Rights & Choices">
                        <p>You can:</p>
                        <ul className="flex flex-col gap-2 pl-5 list-disc">
                            <li>Reply STOP to any text message to opt out of future texts;</li>
                            <li>Use the unsubscribe link in any marketing email; or</li>
                            <li>
                                Email{" "}
                                <a href="mailto:contact@powerlevel.gg" className="text-gold hover:underline">
                                    contact@powerlevel.gg
                                </a>{" "}
                                to access, correct, or delete the personal information we hold about you.
                            </li>
                        </ul>
                        <p>
                            Depending on where you live, applicable law (such as the GDPR or the CCPA) may give you
                            additional rights over your personal information, including the right to object to
                            certain processing. Contact us to exercise any of these rights.
                        </p>
                    </Section>

                    <Section title="9. Children's Privacy">
                        <p>
                            Our services are directed to businesses and industry professionals, not to individuals
                            under 13, and we do not knowingly collect personal information from children.
                        </p>
                    </Section>

                    <Section title="10. Changes to This Policy">
                        <p>
                            We may update this policy from time to time. Changes will be posted on this page with a
                            revised effective date. If a change materially affects how we use the contact information
                            you've already provided, we'll take reasonable steps to notify you.
                        </p>
                    </Section>

                    <Section title="11. Contact Us">
                        <p>
                            Questions about this policy or your information can be sent to{" "}
                            <a href="mailto:contact@powerlevel.gg" className="text-gold hover:underline">
                                contact@powerlevel.gg
                            </a>
                            .
                        </p>
                    </Section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
