<template>
  <span
    class="base-icon material-symbols-outlined"
    :style="iconStyle"
    aria-hidden="true"
  >
    {{ name }}
  </span>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  /**
   * The name of the Material Symbols icon.
   * Find names at: https://fonts.google.com/icons
   */
  name: {
    type: String,
    required: true,
  },
  /**
   * Optional size for the icon (maps to font-size).
   * Can be a number (pixels) or a string with units (e.g., '1.5rem', '24px').
   */
  size: {
    type: [String, Number],
    default: null, // Inherits font size by default
  },
  /**
   * Optional color for the icon. Inherits text color by default.
   */
  color: {
    type: String,
    default: null, // Inherits color by default
  },
  // Potential future props: weight, fill, grade
});

// Compute inline styles for size and color if provided
const iconStyle = computed(() => {
  const styles = {};
  if (props.size) {
    styles['font-size'] = typeof props.size === 'number' ? `${props.size}px` : props.size;
  }
  if (props.color) {
    // Check if color is a CSS variable name
    if (props.color.startsWith('--')) {
       styles.color = `var(${props.color})`;
    } else {
       styles.color = props.color;
    }
  }
  return styles;
});
</script>

<style scoped>
.base-icon {
  /* Base styles for Material Symbols */
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  display: inline-block; /* Or inline-flex for better alignment control */
  line-height: 1; /* Prevent extra vertical space */
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr; /* Ensure icon direction is LTR */

  /* Better rendering */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'liga';

  /* Default alignment */
  vertical-align: middle; /* Adjust as needed, e.g., text-bottom */

  /* Default size and color are inherited from parent text */
  /* font-size: 1.5rem; /* Example default size if needed */
  /* color: inherit; /* Explicitly inherit color */

  /* Prevent user selection */
  user-select: none;
}
</style>
