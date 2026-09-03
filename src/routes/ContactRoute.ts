///////////////////////////////////////////////////////////////////////////////
// Copyright (C) 2026 Jean-Philippe Steinmetz <caskater47@gmail.com>
///////////////////////////////////////////////////////////////////////////////
import { ObjectDecorators } from "@rapidrest/core";
import { RouteDecorators, type HttpRequest, type HttpResponse } from "@rapidrest/service-core";

const { ApiRoute, Post, Request, Response } = RouteDecorators;
const { Logger } = ObjectDecorators;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Loose phone check: strip everything but digits and require a plausible minimum length, so
// visitors can type in whatever punctuation/format they're used to (dashes, parens, spaces, +country code).
const PHONE_DIGITS_PATTERN = /^\d{7,15}$/;

interface ContactSubmission {
    /** Email address or phone number — visitors provide whichever they prefer to be reached at. */
    contact?: string;
    /** Honeypot field. Real visitors never fill this in; only bots do. */
    website?: string;
}

function isEmail(value: string): boolean {
    return EMAIL_PATTERN.test(value);
}

function isPhone(value: string): boolean {
    return PHONE_DIGITS_PATTERN.test(value.replace(/[^\d]/g, ""));
}

/**
 * Handles marketing-site lead capture submissions at `POST /api/contact`.
 *
 * Collects a single email-or-phone contact so we can follow up within 1 business day to book a
 * call — the site's actual scheduling flow otherwise lives entirely on the external calendar tool.
 *
 * Supports two request shapes so the same handler serves both the no-JS form
 * fallback and the progressively-enhanced fetch() submission (see
 * `apps/shared/components/ContactForm.tsx`):
 * - `application/x-www-form-urlencoded` (a plain HTML form submit) responds with a 303 redirect back to `/` carrying a `contact` status in the query string.
 * - `application/json` (the enhanced client-side submit) responds with JSON.
 */
@ApiRoute("/contact")
export class ContactRoute {
    @Logger
    protected logger: any;

    @Post()
    public async submit(submission: ContactSubmission, @Request req: HttpRequest, @Response res: HttpResponse) {
        const wantsJson = String(req.headers["content-type"] || "").includes("application/json");

        // Silently accept spam-bot submissions (honeypot filled in) without sending or logging them.
        if (submission.website) {
            return this.respond(res, wantsJson, 200, "success");
        }

        const contact = submission.contact?.trim();

        if (!contact || !(isEmail(contact) || isPhone(contact))) {
            return this.respond(res, wantsJson, 400, "error", "Please enter a valid email address or phone number.");
        }

        // `body` (not `message`) — winston merges this object's keys onto the log record, and a
        // `message` key here would silently overwrite winston's own top-level `message` field.
        this.logger.info("[ContactRoute] New lead submission", {
            contact,
            method: isEmail(contact) ? "email" : "phone",
        });

        return this.respond(res, wantsJson, 200, "success");
    }

    private respond(res: HttpResponse, wantsJson: boolean, status: number, result: "success" | "error", message?: string) {
        if (wantsJson) {
            return res.status(status).json({ success: result === "success", message });
        }

        const params = new URLSearchParams({ contact: result });
        if (message) params.set("message", message);
        res.status(303).setHeader("Location", `/?${params.toString()}#contact`);
        return res.end();
    }
}
