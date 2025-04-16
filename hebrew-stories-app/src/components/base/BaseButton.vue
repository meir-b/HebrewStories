<template>
  <button
    :class="['base-button', `base-button--${variant}`]"
    :disabled="disabled"
    type="button"
  >
    <span class="base-button__content">
      <BaseIcon v-if="iconLeft" :name="iconLeft" class="base-button__icon base-button__icon--left" />
      <span class="base-button__label">
        <slot></slot>
      </span>
      <BaseIcon v-if="iconRight" :name="iconRight" class="base-button__icon base-button__icon--right" />
    </span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseIcon from './BaseIcon.vue'; // Import BaseIcon

defineProps({
  /**
   * The visual style of the button.
   * @values primary, secondary, text
   */
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'text'].includes(value),
  },
  /**
   * Whether the button is disabled.
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Optional icon name (Material Symbols) to display on the left.
   */
  iconLeft: {
    type: String,
    default: null,
  },
  /**
   * Optional icon name (Material Symbols) to display on the right.
   */
  iconRight: {
    type: String,
    default: null,
  },
});
</script>

<style scoped>
.base-button {
  /* Reset default button styles */
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  font-family: var(--font-family-base); /* Use variable */
  font-size: 1rem; /* Base font size */
  font-weight: 600; /* Slightly bolder */
  text-align: center;
  text-decoration: none;
  display: inline-flex; /* Allows alignment of content */
  align-items: center;
  justify-content: center;
  padding: var(--space-sm) var(--space-md); /* Use spacing variables */
  border-radius: var(--border-radius-sm); /* Use border radius variable */
  transition: background-color 0.2s ease-out, border-color 0.2s ease-out, color 0.2s ease-out, opacity 0.2s ease-out;
  line-height: 1.2; /* Adjust line height */
  min-height: 44px; /* Minimum touch target size */
  min-width: 44px; /* Minimum touch target size */
  white-space: nowrap; /* Prevent text wrapping */
}

.base-button__content {
  display: inherit; /* Inherit flex properties */
  align-items: center;
  gap: var(--space-sm); /* Use spacing variable */
  /* Ensure label doesn't shrink if button width is constrained */
  flex-grow: 1; 
  text-align: center; /* Center label text if it wraps */
}

.base-button__label:empty {
  display: none; /* Hide empty label span */
}

.base-button__icon {
  /* Icons generally shouldn't shrink */
  flex-shrink: 0; 
  /* Adjust icon size slightly relative to button font size */
  font-size: 1.2em; 
}

/* Add specific padding adjustments if only an icon is present */
.base-button__label:empty + .base-button__icon--right,
.base-button__icon--left + .base-button__label:empty {
  margin-inline: auto; /* Center the single icon */
}

/* Reduce padding slightly for icon-only buttons */
.base-button:has(.base-button__label:empty) {
   padding: var(--space-sm); /* Adjust as needed */
}


/* Variants */
.base-button--primary {
  background-color: var(--color-primary);
  color: var(--color-background); /* Assuming white text on primary */
  border: 1px solid var(--color-primary);
}

.base-button--primary:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}

.base-button--secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.base-button--secondary:hover:not(:disabled) {
  /* TODO: Consider creating a CSS variable for this rgba value */
  background-color: rgba(0, 123, 255, 0.1); 
}

.base-button--text {
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid transparent; /* Maintain layout */
  padding-inline: var(--space-sm); /* Use spacing variable */
}

.base-button--text:hover:not(:disabled) {
  /* TODO: Consider creating a CSS variable for this rgba value */
  background-color: rgba(0, 123, 255, 0.1); 
}

/* Disabled state */
.base-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Focus state (using :focus-visible for better accessibility) */
.base-button:focus-visible {
  outline: 2px solid var(--color-focus); /* Use focus color variable */
  outline-offset: 2px;
}
</style>
