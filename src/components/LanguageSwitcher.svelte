<script>
  import { locale } from 'svelte-i18n';
  
  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'fr', name: 'FR' }
  ];
  
  function setLanguage(code) {
    $locale = code;
  }
</script>

<div class="flex items-center space-x-2 border border-gray-600 rounded-md overflow-hidden text-sm" role="group" aria-label="Language selection">
  {#each languages as lang}
    <button
      class="px-3 py-1 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none {$locale === lang.code ? 'bg-gray-700 text-white cursor-default' : 'hover:bg-gray-800'}"
      on:click={() => setLanguage(lang.code)}
      aria-label="Switch to {lang.code === 'en' ? 'English' : 'Français'}"
      aria-pressed={$locale === lang.code}
    >
      {lang.name}
    </button>
  {/each}
</div>