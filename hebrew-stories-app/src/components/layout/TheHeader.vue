<template>
  <header class="the-header">
    <div class="the-header__container">
      <div class="the-header__brand">
        <!-- Placeholder for Logo -->
        <a href="/" class="the-header__logo-link">
          <!-- <img src="/vite.svg" alt="App Logo" class="the-header__logo-img" /> --> <!-- Removed img tag for now -->
          <span class="the-header__title">סיפורים בעברית</span>
        </a>
      </div>
      <nav class="the-header__nav">
        <!-- Navigation links using router-link -->
        <ul class="the-header__nav-list">
          <li><router-link to="/">דף הבית</router-link></li>
          <li><router-link to="/about">אודות</router-link></li>
          <!-- Add more links as needed -->
        </ul>
      </nav>
      <!-- Removed actions section -->
    </div>
  </header>
</template>

<script setup>
// Removed BaseButton import as it's no longer used
// import BaseButton from '../base/BaseButton.vue'; 
</script>

<style scoped>
.the-header {
  background-color: var(--color-primary); /* Use primary color for background */
  color: var(--color-background); /* Use light color for text */
  padding-block: var(--space-md); /* Increase padding */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Slightly stronger shadow */
}

.the-header__container {
  max-width: 1280px; /* Example max width */
  margin-inline: auto;
  padding-inline: var(--space-md);
  display: flex;
  align-items: center;
  /* Adjust justification if needed now that actions are removed */
  /* justify-content: space-between; */ 
  gap: var(--space-lg); /* Increase gap */
}

.the-header__brand {
  flex-shrink: 0; /* Prevent brand from shrinking */
}

.the-header__logo-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  color: inherit; /* Inherit color from .the-header */
}

.the-header__logo-img {
  height: 32px; /* Adjust logo size */
  width: auto;
  display: block;
}

.the-header__title {
  font-size: 1.5rem; /* Slightly larger title */
  font-weight: 700; /* Bold */
}

.the-header__nav {
  flex-grow: 1; /* Allow nav to take up space */
  display: flex;
  justify-content: center; /* Center nav items */
}

.the-header__nav-list {
  display: flex;
  gap: var(--space-lg);
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Style router-link like regular links */
.the-header__nav-list a,
.the-header__nav-list .router-link-active,
.the-header__nav-list .router-link-exact-active {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85); /* Slightly transparent white for inactive links */
  font-weight: 600;
  font-size: 1.1rem; /* Slightly larger nav links */
  padding: var(--space-xs) var(--space-sm); /* Add padding for easier tapping */
  border-radius: var(--border-radius-sm);
  transition: color 0.2s ease-out, background-color 0.2s ease-out;
}

.the-header__nav-list a:hover,
.the-header__nav-list a:focus-visible,
.the-header__nav-list .router-link-active:hover,
.the-header__nav-list .router-link-exact-active:hover {
  color: var(--color-background); /* Full white on hover/focus */
  background-color: rgba(255, 255, 255, 0.1); /* Subtle background highlight */
}

/* Style for the currently active link */
.the-header__nav-list .router-link-exact-active {
  color: var(--color-background); /* Full white for active */
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.1); /* Subtle darker background for active */
}

/* Removed .the-header__actions styles */
</style>
