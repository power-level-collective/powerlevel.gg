import React from "react";
import { AlertIcon, CheckIcon } from "../icons/Icons.js";
import { services } from "../data/services.js";

export interface ContactStatus {
    type: "success" | "error";
    message?: string;
}

// Derived from `services` (rather than a hand-maintained parallel list) so a new or reordered
// service offering can't silently drift out of sync with the options a visitor can pick from.
const PROJECT_TYPES = [
    ...services.map((service) => ({ value: service.id, label: service.title })),
    { value: "not-sure", label: "Not Sure Yet" },
];

export default function ContactForm({ status }: { status?: ContactStatus | null }) {
    return (
        <div className="flex flex-col gap-5">
            {status?.type === "success" && (
                <div className="panel-cut-sm flex items-start gap-3 bg-surface p-4 text-sm text-success">
                    <CheckIcon width={18} height={18} className="mt-0.5 shrink-0" />
                    <span>Message received. We'll be in touch within 1 business day.</span>
                </div>
            )}
            {status?.type === "error" && (
                <div className="panel-cut-sm flex items-start gap-3 bg-surface p-4 text-sm text-danger">
                    <AlertIcon width={18} height={18} className="mt-0.5 shrink-0" />
                    <span>{status.message || "Something went wrong. Please try again."}</span>
                </div>
            )}

            <form
                id="contact-form"
                action="/api/contact"
                method="POST"
                className="panel-cut flex flex-col gap-5 p-7 sm:p-9"
            >
                <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="field-label">
                            Name
                        </label>
                        <input id="name" name="name" type="text" required className="field-input" placeholder="Jane Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="field-label">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="field-input"
                            placeholder="jane@studio.com"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="field-label">
                            Studio / Company
                        </label>
                        <input id="company" name="company" type="text" className="field-input" placeholder="Optional" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="projectType" className="field-label">
                            Project Type
                        </label>
                        <select id="projectType" name="projectType" className="field-input">
                            {PROJECT_TYPES.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="field-label">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="field-input resize-none"
                        placeholder="Tell us about your project, timeline, and team."
                    />
                </div>

                {/* Honeypot — hidden from real users, filled in by naive spam bots. */}
                <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    aria-hidden="true"
                />

                <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
                    <p className="text-xs text-ink-faint">We reply within 1 business day.</p>
                    <button type="submit" id="contact-submit" className="btn btn-primary">
                        Send Message
                    </button>
                </div>
            </form>

            <script
                dangerouslySetInnerHTML={{
                    __html: `(function () {
                        var form = document.getElementById("contact-form");
                        if (!form) return;
                        var submitBtn = document.getElementById("contact-submit");

                        form.addEventListener("submit", function (event) {
                            event.preventDefault();
                            var data = Object.fromEntries(new FormData(form).entries());
                            if (submitBtn) {
                                submitBtn.disabled = true;
                                submitBtn.textContent = "Sending…";
                            }

                            fetch(form.action, {
                                method: "POST",
                                headers: { "Content-Type": "application/json", Accept: "application/json" },
                                body: JSON.stringify(data),
                            })
                                .then(function (res) {
                                    return res.json().then(function (body) {
                                        return { ok: res.ok, body: body };
                                    });
                                })
                                .then(function (result) {
                                    var url = new URL(window.location.href);
                                    url.hash = "contact";
                                    if (result.ok) {
                                        url.searchParams.set("contact", "success");
                                        url.searchParams.delete("message");
                                    } else {
                                        url.searchParams.set("contact", "error");
                                        url.searchParams.set(
                                            "message",
                                            (result.body && result.body.message) || "Something went wrong."
                                        );
                                    }
                                    window.location.href = url.toString();
                                })
                                .catch(function () {
                                    form.submit();
                                });
                        });
                    })();`,
                }}
            />
        </div>
    );
}
