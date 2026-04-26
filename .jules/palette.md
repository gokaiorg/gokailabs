## 2024-05-14 - Improve dynamic form feedback accessibility
**Learning:** Svelte's conditional rendering (`{#if formStatus.message}`) for form responses visually appears for sighted users, but screen readers may miss the newly injected text entirely. The message div needs `role="status"` and `aria-live="polite"` so screen readers will announce the update. Also, "Sending..." text on a button isn't sufficient without a visual loading indicator (spinner) for better user feedback, and keyboard focus states are crucial for interactive elements.
**Action:** Always wrap dynamically inserted success/error messages in an element with `role="status"` and `aria-live="polite"`. Add visual spinners and strong `focus-visible` styling to form buttons.
## 2024-05-18 - Prevent focus loss on state changes
**Learning:** Swapping interactive elements (like `<button>`) with static tags (like `<span>`) when their state changes causes loss of keyboard focus, breaking accessibility for keyboard and screen reader users.
**Action:** Maintain the interactive element across states. Use `aria-pressed` to communicate the active state to screen readers and apply dynamic classes to represent the visual state.
