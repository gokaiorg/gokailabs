## 2024-05-10 - Adding Strict Content Security Policy

**Vulnerability:** The application was missing a Content-Security-Policy (CSP) header, which could allow Cross-Site Scripting (XSS) or data injection attacks.
**Learning:** Due to the use of external assets (Google Tag Manager, Google Analytics, images hosted on various domains), specific endpoints must be allowed. Furthermore, since the project relies on dynamically injected styles/scripts via Svelte/Tailwind, `'unsafe-inline'` is required for `style-src` and `script-src`.
**Prevention:** To prevent missing or mismatched CSP headers across deployment environments, always mirror header configurations in both `.htaccess` (for Apache) and `netlify.toml` (for Netlify deployments).
