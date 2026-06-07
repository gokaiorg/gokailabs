## 2024-05-14 - Improve dynamic form feedback accessibility
**Learning:** Svelte's conditional rendering (`{#if formStatus.message}`) for form responses visually appears for sighted users, but screen readers may miss the newly injected text entirely. The message div needs `role="status"` and `aria-live="polite"` so screen readers will announce the update. Also, "Sending..." text on a button isn't sufficient without a visual loading indicator (spinner) for better user feedback, and keyboard focus states are crucial for interactive elements.
**Action:** Always wrap dynamically inserted success/error messages in an element with `role="status"` and `aria-live="polite"`. Add visual spinners and strong `focus-visible` styling to form buttons.

## 2025-06-07 - Prevent keyboard focus loss by not swapping interactive elements
**Learning:** Swapping interactive elements (like `<button>`) with static tags (like `<span>`) when their state changes causes keyboard users to lose their focus position unexpectedly.
**Action:** Always maintain the interactive element structure for state changes, instead styling it to reflect the new state, and using `aria-pressed` or similar attributes to convey the active/inactive status to screen readers.
