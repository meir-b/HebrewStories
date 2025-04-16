<template>
  <div class="about-view">
    <h2>אודות האתר</h2>
    <p>אתר זה מוקדש להצגת סיפורים קצרים ומרתקים בשפה העברית.</p>
    <p>מטרתנו היא לקדם את הקריאה וההנאה מהשפה העברית.</p>
    
    <BaseButton 
      icon-left="arrow_back"  
      style="margin-top: var(--space-lg);"
      @click="goHome" 
    >
      חזור לדף הבית
    </BaseButton>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; // Import useRouter
import BaseButton from '../components/base/BaseButton.vue';

const router = useRouter(); // Get the router instance

function goHome() {
  router.push('/'); // Navigate to the Home route
}
</script>

<style scoped>
.about-view h2 {
  margin-bottom: var(--space-md);
}

.about-view p {
  margin-bottom: var(--space-sm);
  line-height: 1.7;
}
</style>
