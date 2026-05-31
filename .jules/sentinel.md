## 2026-05-31 - Add strict Content-Security-Policy
**Vulnerability:** Missing Content-Security-Policy (CSP) headers leaving application vulnerable to XSS and data injection.
**Learning:** Required mapping all external dependencies (Google Analytics, external image hosting from portfolio, GTM) to construct a strict but functional CSP using only explicitly required domains.
**Prevention:** Always implement a strict, domain-specific CSP for any app making cross-origin requests or displaying external media.
