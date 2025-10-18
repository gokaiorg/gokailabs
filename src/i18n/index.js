import { init, register, getLocaleFromNavigator, locale } from 'svelte-i18n';

// Set default locale immediately
locale.set('en');

// Register the locales
register('en', () => import('./locales/en.json'));
register('fr', () => import('./locales/fr.json'));

// Initialize with default locale as English
init({
  fallbackLocale: 'en',
  initialLocale: 'en' // Set to 'en' immediately instead of getLocaleFromNavigator()
});
