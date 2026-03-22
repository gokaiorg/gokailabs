## 2024-05-18 - [Missing Strict Security Headers]
**Vulnerability:** Missing strict security headers (Content-Security-Policy, Strict-Transport-Security, Permissions-Policy) in `netlify.toml` and `.htaccess`.
**Learning:** Static sites hosted on platforms like Netlify still require explicit configuration of security headers to mitigate risks like XSS (via CSP) and man-in-the-middle attacks (via HSTS). The initial configuration only included basic headers.
**Prevention:** Include a comprehensive set of security headers, including CSP, HSTS, and Permissions-Policy, in the initial project configuration templates for both Netlify (`netlify.toml`) and Apache (`.htaccess`) environments.
