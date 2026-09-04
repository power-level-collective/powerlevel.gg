import React from "react";
import { AlertIcon, CheckIcon, ChevronIcon } from "../icons/Icons.js";
import { leadFormScript } from "./leadFormScript.js";
import type { ContactStatus } from "./ContactForm.js";

export default function HeroLeadForm({ status }: { status?: ContactStatus | null }) {
    return (
        <div className="flex w-full flex-col gap-2 sm:w-[28rem]">
            <label htmlFor="hero-contact" className="field-label">
                Share your email or phone. We'll reach out.
            </label>
            <form
                id="hero-contact-form"
                action="/api/contact"
                method="POST"
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
                <input
                    id="hero-contact"
                    name="contact"
                    type="text"
                    required
                    className="field-input min-w-0 flex-1"
                    placeholder="Email or phone number"
                />

                {/* Honeypot — hidden from real users, filled in by naive spam bots. */}
                <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    aria-hidden="true"
                />

                <button type="submit" id="hero-contact-submit" className="btn btn-primary shrink-0">
                    Get Started
                    <ChevronIcon width={16} height={16} />
                </button>
            </form>

            <p className="text-xs text-ink-faint">
                By entering your number or email address you agree to receive recurring automated marketing messages
                from Power Level Collective at the number or email provided. Consent is not a condition of purchase.
                Msg and data rates may apply. Reply STOP to opt out from texts, HELP for help. See our{" "}
                <a href="/privacy" className="hover:text-gold hover:underline">
                    privacy policy
                </a>
                .
            </p>

            {status?.type === "success" && (
                <div className="flex items-center gap-2 text-sm text-success">
                    <CheckIcon width={16} height={16} className="shrink-0" />
                    <span>Got it. We'll reach out within 1 business day.</span>
                </div>
            )}
            {status?.type === "error" && (
                <div className="flex items-center gap-2 text-sm text-danger">
                    <AlertIcon width={16} height={16} className="shrink-0" />
                    <span>{status.message || "Something went wrong. Please try again."}</span>
                </div>
            )}

            <script
                dangerouslySetInnerHTML={{ __html: leadFormScript("hero-contact-form", "hero-contact-submit", "hero", "top") }}
            />
        </div>
    );
}
