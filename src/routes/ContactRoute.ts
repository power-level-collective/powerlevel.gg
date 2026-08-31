///////////////////////////////////////////////////////////////////////////////
// Copyright (C) 2026 Jean-Philippe Steinmetz <caskater47@gmail.com>
///////////////////////////////////////////////////////////////////////////////
import { ObjectDecorators } from "@rapidrest/core";
import { RouteDecorators, type HttpRequest, type HttpResponse } from "@rapidrest/service-core";

const { ApiRoute, Post, Request, Response } = RouteDecorators;
const { Logger } = ObjectDecorators;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactSubmission {
    name?: string;
    email?: string;
    company?: string;
    projectType?: string;
    message?: string;
    /** Honeypot field. Real visitors never fill this in; only bots do. */
    website?: string;
}

/**
 * Handles marketing-site contact form submissions at `POST /api/contact`.
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

        const name = submission.name?.trim();
        const email = submission.email?.trim();
        const message = submission.message?.trim();

        if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
            return this.respond(res, wantsJson, 400, "error", "Please fill in your name, a valid email, and a message.");
        }

        // `body` (not `message`) — winston merges this object's keys onto the log record, and a
        // `message` key here would silently overwrite winston's own top-level `message` field.
        this.logger.info("[ContactRoute] New contact form submission", {
            name,
            email,
            company: submission.company?.trim(),
            projectType: submission.projectType,
            body: message,
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
