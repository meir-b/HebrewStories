<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
</script>

<template>
  <div class="app-container">
    <TheHeader />
    <main class="app-main-content">
      <router-view /> <!-- Render the matched route component here -->
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure container takes full viewport height */
}

.app-main-content {
  flex-grow: 1; /* Allow main content to take up available space */
  padding: var(--space-lg); /* Use spacing variable */
  max-width: 1280px; /* Match header/footer max-width */
  width: 100%;
  margin-inline: auto; /* Center content */
  /* Remove text-align center if not desired globally */
  /* text-align: center; */ 
}

/* Example styling for the placeholder content */
.app-main-content h1 {
  margin-block-end: var(--space-md);
}
</style>
