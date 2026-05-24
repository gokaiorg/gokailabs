## 2024-05-14 - Improve dynamic form feedback accessibility
**Learning:** Svelte's conditional rendering (`{#if formStatus.message}`) for form responses visually appears for sighted users, but screen readers may miss the newly injected text entirely. The message div needs `role="status"` and `aria-live="polite"` so screen readers will announce the update. Also, "Sending..." text on a button isn't sufficient without a visual loading indicator (spinner) for better user feedback, and keyboard focus states are crucial for interactive elements.
**Action:** Always wrap dynamically inserted success/error messages in an element with `role="status"` and `aria-live="polite"`. Add visual spinners and strong `focus-visible` styling to form buttons.

## 2026-05-24 - Prevent focus loss by maintaining interactive elements
**Learning:** In Svelte components like LanguageSwitcher, swapping an interactive element (e.g., `<button>`) with a static tag (e.g., `<span>`) when its state changes (like becoming the active language) causes keyboard users to lose focus unexpectedly. It also breaks tab order.
**Action:** Instead of conditionally rendering different elements based on state, use a consistent interactive element (like `<button>`) and communicate its state using ARIA attributes (e.g., `aria-pressed`). Apply distinct styling for active/inactive states using dynamic classes.
