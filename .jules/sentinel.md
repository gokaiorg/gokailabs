## 2024-07-06 - Missing Content Security Policy (CSP)
**Vulnerability:** The application was lacking a Content-Security-Policy header in both its Netlify (`netlify.toml`) and Apache (`.htaccess`) deployment configurations.
**Learning:** Without a CSP, the application was missing a critical defense-in-depth layer against XSS and data injection. Implementing it required carefully analyzing external dependencies (Google Tag Manager, Google Analytics, and specific external image domains) and allowing 'unsafe-inline' for scripts and styles to maintain functionality.
**Prevention:** Always implement a strict CSP by default in deployment configurations (`netlify.toml`, `.htaccess`, etc.) and explicitly allow only verified external domains and directives needed for the application to function.
