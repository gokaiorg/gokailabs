## 2024-06-25 - Svelte Dynamic Array Allocation in Templates
**Learning:** Using `Array(n)` inside Svelte `{#each}` blocks creates a new array object on every render, causing unnecessary memory allocation and garbage collection overhead.
**Action:** Replace dynamic array creation in templates with a hoisted static constant array and use conditional rendering `{#if}` within the `{#each}` loop instead.

## 2024-06-25 - Redundant Regex Compilation in Event Handlers
**Learning:** Regex literals inside event handlers like `handleSubmit` are recompiled on every invocation, adding unnecessary CPU overhead.
**Action:** Hoist regex literals to the component/module scope when they do not depend on dynamic local state.
