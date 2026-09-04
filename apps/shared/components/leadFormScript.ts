import { KLAVIYO_COMPANY_ID, KLAVIYO_LIST_ID } from "../data/klaviyo.js";

/**
 * Client-only submit handler shared by every lead-capture form on the site (hero + footer).
 * Subscribes the visitor's email or phone directly to Klaviyo from the browser — there's no
 * server behind the deployed site (a static export, see .github/workflows/deploy-pages.yml) to
 * post to instead. Parameterized by DOM ids so multiple instances can coexist on one page without
 * colliding.
 */
export function leadFormScript(
    formId: string,
    submitId: string,
    successId: string,
    errorId: string,
    errorMessageId: string
): string {
    return `(function () {
        var form = document.getElementById("${formId}");
        if (!form) return;
        var submitBtn = document.getElementById("${submitId}");
        var successEl = document.getElementById("${successId}");
        var errorEl = document.getElementById("${errorId}");
        var errorMsgEl = document.getElementById("${errorMessageId}");

        var EMAIL_PATTERN = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        var PHONE_DIGITS_PATTERN = /^\\d{7,15}$/;

        function isEmail(value) {
            return EMAIL_PATTERN.test(value);
        }
        function isPhone(value) {
            return PHONE_DIGITS_PATTERN.test(value.replace(/[^\\d]/g, ""));
        }
        // Klaviyo requires E.164. Assumes a US number when no country code is present, since
        // that's the only format example shown in the form's placeholder.
        function toE164(phone) {
            var digits = phone.replace(/[^\\d]/g, "");
            if (phone.trim().indexOf("+") === 0) return "+" + digits;
            if (digits.length === 10) return "+1" + digits;
            if (digits.length === 11 && digits.indexOf("1") === 0) return "+" + digits;
            return "+" + digits;
        }

        function showSuccess() {
            if (successEl) successEl.hidden = false;
            if (errorEl) errorEl.hidden = true;
        }
        function showError(message) {
            if (errorMsgEl) errorMsgEl.textContent = message;
            if (errorEl) errorEl.hidden = false;
            if (successEl) successEl.hidden = true;
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            var data = Object.fromEntries(new FormData(form).entries());

            // Honeypot — a bot filled it in. Show success so it doesn't know to retry, but skip
            // the actual Klaviyo call.
            if (data.website) {
                showSuccess();
                form.reset();
                return;
            }

            var contact = (data.contact || "").trim();
            var email = isEmail(contact);
            var phone = !email && isPhone(contact);
            if (!email && !phone) {
                showError("Please enter a valid email address or phone number.");
                return;
            }

            if (submitBtn) submitBtn.disabled = true;
            submitBtn && submitBtn.classList.add("opacity-60");

            var profileAttributes = email
                ? { email: contact, subscriptions: { email: { marketing: { consent: "SUBSCRIBED" } } } }
                : { phone_number: toE164(contact), subscriptions: { sms: { marketing: { consent: "SUBSCRIBED" } } } };

            fetch("https://a.klaviyo.com/client/subscriptions/?company_id=${KLAVIYO_COMPANY_ID}", {
                method: "POST",
                headers: { "Content-Type": "application/vnd.api+json", revision: "2026-07-15" },
                body: JSON.stringify({
                    data: {
                        type: "subscription",
                        attributes: { profile: { data: { type: "profile", attributes: profileAttributes } } },
                        relationships: { list: { data: { type: "list", id: "${KLAVIYO_LIST_ID}" } } },
                    },
                }),
            })
                .then(function (res) {
                    if (res.status === 202 || res.ok) {
                        showSuccess();
                        form.reset();
                    } else {
                        showError("Something went wrong. Please try again.");
                    }
                })
                .catch(function () {
                    showError("Something went wrong. Please try again.");
                })
                .finally(function () {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.classList.remove("opacity-60");
                    }
                });
        });
    })();`;
}
