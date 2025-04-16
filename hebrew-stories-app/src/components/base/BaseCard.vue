<template>
  <div class="base-card">
    <div v-if="$slots.image" class="base-card__image">
      <slot name="image"></slot>
    </div>
    <div class="base-card__content">
      <div v-if="$slots.header" class="base-card__header">
        <slot name="header"></slot>
      </div>
      <div v-if="$slots.default" class="base-card__body">
        <slot></slot>
      </div>
      <div v-if="$slots.footer" class="base-card__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed for this basic structure yet
</script>

<style scoped>
.base-card {
  background-color: var(--color-surface); /* Use surface color variable */
  border-radius: 12px; /* Slightly rounder corners */
  border: 1px solid var(--color-border); /* Add a subtle border */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); /* Softer shadow */
  overflow: hidden; /* Ensure content respects border-radius */
  display: flex;
  flex-direction: column; /* Stack image and content vertically */
  transition: box-shadow 0.2s ease-out;
}

.base-card:hover {
   box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1); /* Slightly more pronounced shadow on hover */
   border-color: transparent; /* Hide border on hover if shadow is enough */
}

.base-card__image {
  display: block; /* Ensure the container behaves as a block */
  line-height: 0; /* Remove extra space below image */
  overflow: hidden; /* Clip any overflowing content from the slot */
  /* The image itself should be styled within the slot content */
  /* e.g., <img style="display: block; width: 100%; height: auto;" ... /> */
  /* Or rely on global image styles if applicable */
}

/* Removed the :deep(img) style block */

.base-card__content {
  padding: var(--space-md); /* Use spacing variable */
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allow content to fill remaining space */
}

.base-card__header {
  margin-block-end: var(--space-sm); /* Use spacing variable */
  font-size: 1.25rem; /* Larger font for header */
  font-weight: 700; /* Ensure bold */
  color: var(--color-primary-dark); /* Use a theme color */
}

.base-card__body {
  flex-grow: 1; /* Allow body to take up available space */
  margin-block-end: var(--space-md); /* Use spacing variable */
  color: var(--color-text-light); /* Use text-light variable */
  line-height: 1.6;
}

/* Remove bottom margin from body if it's the last element */
.base-card__body:last-child {
  margin-block-end: 0;
}

.base-card__footer {
  margin-block-start: auto; /* Push footer to the bottom */
  padding-block-start: var(--space-sm); /* Use spacing variable */
  /* Optional: Remove or lighten border */
  /* border-top: 1px solid var(--color-border); */ 
  font-size: 0.9rem;
  /* Keep secondary color or adjust if needed */
  color: var(--color-secondary); 
  /* Align content if needed, e.g., button */
  display: flex;
  justify-content: flex-end; /* Align button to the right (start in RTL) */
}
</style>
