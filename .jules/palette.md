## 2024-05-14 - Improve dynamic form feedback accessibility
**Learning:** Svelte's conditional rendering (`{#if formStatus.message}`) for form responses visually appears for sighted users, but screen readers may miss the newly injected text entirely. The message div needs `role="status"` and `aria-live="polite"` so screen readers will announce the update. Also, "Sending..." text on a button isn't sufficient without a visual loading indicator (spinner) for better user feedback, and keyboard focus states are crucial for interactive elements.
**Action:** Always wrap dynamically inserted success/error messages in an element with `role="status"` and `aria-live="polite"`. Add visual spinners and strong `focus-visible` styling to form buttons.
## 2026-06-21 - Prevent focus loss in toggle switches
**Learning:** Swapping interactive elements (like `<button>`) with static ones (like `<span>`) when they become active causes screen readers and keyboard users to lose focus context.
**Action:** Keep elements interactive regardless of their active state and communicate that state using `aria-pressed` along with appropriate styling.
