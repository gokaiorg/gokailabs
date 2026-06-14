## 2026-06-14 - CSP Explicit Domain Mapping Required
**Vulnerability:** Weak/Missing Content-Security-Policy leading to potential unauthorized domains executing scripts or loading assets.
**Learning:** The application inherently relies on external domains like Google Tag Manager, Google Analytics, and specific storage buckets/domains for images. A default strict CSP breaks the application due to these integrations unless explicitly allowed.
**Prevention:** Always maintain an explicit and comprehensive mapping of all required external domains and explicitly add them to the CSP directives (e.g., `img-src`, `script-src`, `connect-src`) rather than broadly using `*` or allowing unrestricted external access.
