# Gokai Labs SEO Migration Strategy

## Current Production Pages → New SPA Sections

| Old URL | New SPA Section | Redirect Type | SEO Priority |
|---------|----------------|---------------|--------------|
| `/about` | `/#about` | 301 Redirect | High |
| `/contact` | `/#contact` | 301 Redirect | High |
| `/projects` or `/work` | `/#work` | 301 Redirect | High |
| `/services` | `/#services` | 301 Redirect | High |
| `/blog` | Keep or redirect | Medium | Medium |
| Other pages | Evaluate case-by-case | Low | Low |

## Recommended .htaccess Redirects

```apache
# Redirect old pages to SPA sections
Redirect 301 /about https://gokai.org/#about
Redirect 301 /contact https://gokai.org/#contact
Redirect 301 /projects https://gokai.org/#work
Redirect 301 /work https://gokai.org/#work
Redirect 301 /services https://gokai.org/#services
Redirect 301 /testimonials https://gokai.org/#testimonials
```

## Why Redirects Are Better Than Recreation

### ✅ **SEO Benefits:**
- **Link Equity Preservation**: 301 redirects pass 90-99% of link juice
- **User Experience**: Visitors land on relevant content immediately
- **Crawl Budget**: Search engines efficiently discover new structure
- **No Duplicate Content**: Clean URL structure

### ✅ **Technical Benefits:**
- **Faster Development**: No need to rebuild existing content
- **Maintenance**: Single codebase to maintain
- **Performance**: SPA loads faster than multiple pages
- **Consistency**: Unified design and functionality

### ✅ **Business Benefits:**
- **Time Savings**: Focus on core business instead of recreation
- **Cost Effective**: Less development time and resources
- **Scalability**: Easy to add new sections to SPA

## Implementation Steps

1. **Audit Current Pages**: Document all existing URLs and their importance
2. **Set Up Redirects**: Configure server-side 301 redirects
3. **Update Internal Links**: Change any internal navigation to SPA anchors
4. **Monitor & Update**: Track redirects in Google Search Console
5. **Update Sitemaps**: Submit new sitemap with SPA sections

## SPA Anchor Link Optimization

Ensure smooth scrolling to sections:
```javascript
// Add to main.js or App.svelte
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
```
