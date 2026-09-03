/**
 * Progressive-enhancement submit handler shared by every lead-capture form on the site (hero +
 * footer). Parameterized by DOM ids and a `source`/`hash` pair so multiple instances can coexist
 * on one page without colliding, and so each form can tell whether a post-submit redirect's status
 * belongs to it.
 */
export function leadFormScript(formId: string, submitId: string, source: string, hash: string): string {
    return `(function () {
        var form = document.getElementById("${formId}");
        if (!form) return;
        var submitBtn = document.getElementById("${submitId}");

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
                    url.hash = "${hash}";
                    url.searchParams.set("source", "${source}");
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
    })();`;
}
