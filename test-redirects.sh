#!/bin/bash
# Gokai Labs Redirect Testing Script
# Run this to verify all redirects are working properly

echo "🧪 Testing Gokai Labs Website Redirects..."
echo "=========================================="

BASE_URL="https://gokai.org"
REDIRECTS=(
    "/about:#about"
    "/contact:#contact"
    "/project:#work"
    "/projects:#work"
    "/project/green-ghost:#work"
    "/project/ghostverse:#work"
    "/project/amann-inkspiration:#work"
    "/locations:#contact"
    "/locations/paris:#contact"
    "/locations/phuket:#contact"
    "/payment:#contact"
    "/sitemap:sitemap.xml"
)

echo "Testing redirects (expecting 301 status codes):"
echo ""

for redirect in "${REDIRECTS[@]}"; do
    OLD_PATH=$(echo $redirect | cut -d: -f1)
    EXPECTED_FRAGMENT=$(echo $redirect | cut -d: -f2)

    # Test the redirect
    RESPONSE=$(curl -s -I "${BASE_URL}${OLD_PATH}" | head -n 1)

    if [[ $RESPONSE == *"301"* ]]; then
        echo "✅ ${OLD_PATH} → ${EXPECTED_FRAGMENT} (301 redirect working)"
    elif [[ $RESPONSE == *"200"* ]]; then
        echo "⚠️  ${OLD_PATH} → Direct response (no redirect configured)"
    else
        echo "❌ ${OLD_PATH} → Unexpected response: ${RESPONSE}"
    fi
done

echo ""
echo "📋 Manual Testing Checklist:"
echo "1. Visit each old URL in browser"
echo "2. Verify it redirects to correct SPA section"
echo "3. Check browser URL contains the correct #anchor"
echo "4. Test on mobile devices"
echo "5. Verify smooth scrolling works"
echo ""
echo "🔍 Google Search Console Monitoring:"
echo "- Check for crawl errors"
echo "- Monitor redirect chains"
echo "- Track ranking changes"
echo "- Update sitemap submissions"
