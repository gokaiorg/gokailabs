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

<div class="flex items-center space-x-2 border border-gray-600 rounded-md overflow-hidden text-sm">
  {#each languages as lang}
    {#if $locale === lang.code}
      <span class="px-3 py-1 bg-gray-700 text-white">
        {lang.name}
      </span>
    {:else}
      <button 
        class="px-3 py-1 hover:bg-gray-800 transition-colors"
        on:click={() => setLanguage(lang.code)}
        aria-label="Switch to {lang.code === 'en' ? 'English' : 'Français'}"
      >
        {lang.name}
      </button>
    {/if}
  {/each}
</div>