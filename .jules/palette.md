## 2024-05-04 - Accessible State Toggles
**Learning:** Swapping between interactive (`<button>`) and static (`<span>`) elements for selected state causes keyboard focus loss and breaks screen reader flow.
**Action:** Use a persistent `<button>` element with `aria-pressed` to indicate state, relying on CSS for visual differences, ensuring continuous focus management.
