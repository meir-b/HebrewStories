<template>
  <footer class="the-footer">
    <div class="the-footer__container">
      <p class="the-footer__copyright">
        &copy; {{ currentYear }} סיפורים בעברית. כל הזכויות שמורות.
      </p>
      <!-- Removed placeholder nav links -->
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.the-footer {
  background-color: var(--color-background); /* Use theme background */
  border-top: 1px solid var(--color-border);
  padding-block: var(--space-md); /* Consistent padding with header */
  margin-block-start: var(--space-xl); /* Space above the footer */
  color: var(--color-text-light);
  font-size: 0.9rem;
  text-align: center; /* Center content in the footer */
}

.the-footer__container {
  max-width: 1280px; /* Example max width */
  margin-inline: auto;
  padding-inline: var(--space-md);
  display: flex;
  /* Center content since links are removed */
  justify-content: center; 
  gap: var(--space-md);
}

.the-footer__copyright {
  margin: 0; /* Reset paragraph margin */
}

/* Removed .the-footer__links styles */
</style>
