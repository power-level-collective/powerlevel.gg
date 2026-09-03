import React from "react";
import { AlertIcon, CheckIcon } from "../icons/Icons.js";

export interface ContactStatus {
    type: "success" | "error";
    message?: string;
}

export default function ContactForm({ status }: { status?: ContactStatus | null }) {
    return (
        <div className="flex flex-col gap-5">
            {status?.type === "success" && (
                <div className="panel-cut-sm flex items-start gap-3 bg-surface p-4 text-sm text-success">
                    <CheckIcon width={18} height={18} className="mt-0.5 shrink-0" />
                    <span>Got it. We'll reach out within 1 business day to set up a call.</span>
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
                <div className="flex flex-col gap-2">
                    <label htmlFor="contact" className="field-label">
                        Email or Phone
                    </label>
                    <input
                        id="contact"
                        name="contact"
                        type="text"
                        required
                        className="field-input"
                        placeholder="jane@studio.com or (555) 123-4567"
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
                    <p className="text-xs text-ink-faint">By entering your number or email address you agree to receive recurring automated
                        marketing messages from Power Level Collective at the number or email provided. Consent is not a condition
                        of purchase. Msg and data rates may apply. Reply STOP to opt out from texts, HELP for help. See our&nbsp;
                        <a href="/privacy">privacy policy</a>.
                    </p>
                    <button type="submit" id="contact-submit" className="btn btn-primary">
                        Get Started
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
