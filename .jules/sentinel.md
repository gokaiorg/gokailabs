## 2025-05-28 - Added Content Security Policy and Security Headers
**Vulnerability:** Missing strict Content Security Policy (CSP), Strict Transport Security (HSTS), and Permissions-Policy in Netlify and Apache configurations.
**Learning:** The application lacked defense-in-depth measures to prevent XSS, data injection, and unencrypted traffic. It also left sensitive browser APIs (camera, geolocation) enabled by default.
**Prevention:** Always implement a strict CSP, HSTS, and Permissions-Policy by default when configuring a web server or hosting platform. Use a whitelist approach for `img-src` to explicitly allow required external domains.
