import { init, register, getLocaleFromNavigator, locale } from 'svelte-i18n';
import enLocale from './locales/en.json';

// Set default locale immediately
locale.set('en');

// Performance: Statically import default locale to avoid render blocking
// on initial page load (prevents blank screen while fetching en.json)
register('en', () => Promise.resolve(enLocale));

// Keep secondary locales dynamic to reduce initial bundle size
register('fr', () => import('./locales/fr.json'));

// Initialize with default locale as English
init({
  fallbackLocale: 'en',
  initialLocale: 'en' // Set to 'en' immediately instead of getLocaleFromNavigator()
});
