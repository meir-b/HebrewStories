<template>
  <div class="story-view">
    <div v-if="story" class="story-content">
      <h2>{{ story.title }}</h2>
      <img 
        v-if="story.image" 
        :src="story.image" 
        :alt="`תמונה עבור ${story.title}`" 
        class="story-image"
      />
      <p class="story-summary">{{ story.summary }}</p>
      
      <div class="story-full-text">
        {{ story.fullText }}
      </div>

      <BaseButton 
        icon-left="arrow_back" 
        variant="secondary" 
        @click="goBack"
        style="margin-top: var(--space-lg);"
      >
        חזרה לרשימה
      </BaseButton>
    </div>
    <div v-else class="story-not-found">
      <h2>סיפור לא נמצא</h2>
      <p>מצטערים, לא מצאנו סיפור עם המזהה "{{ id }}".</p>
      <BaseButton 
        icon-left="home" 
        variant="primary" 
        @click="goBack"
        style="margin-top: var(--space-lg);"
      >
        חזרה לדף הבית
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { stories } from '../data/stories.js'; // Import sample data
import BaseButton from '../components/base/BaseButton.vue';

const props = defineProps({
  /**
   * The ID of the story, passed from the route params.
   */
  id: {
    type: String,
    required: true,
  },
});

const router = useRouter();

// Find the story based on the id prop
const story = computed(() => {
  return stories.find(s => s.id === props.id);
});

function goBack() {
  // Go back to the previous page in history, or home if no history
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push({ name: 'Home' }); // Navigate by route name
  }
}
</script>

<style scoped>
.story-view {
  padding-block: var(--space-md);
}

.story-content h2 {
  margin-bottom: var(--space-md);
  font-size: 2rem;
}

.story-image {
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius-md);
  margin-bottom: var(--space-lg);
  display: block;
  max-height: 400px; /* Limit image height */
  object-fit: cover;
  margin-inline: auto; /* Center image if narrower than container */
}

.story-summary {
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin-bottom: var(--space-lg);
  font-style: italic;
}

.story-full-text {
  line-height: 1.8; /* Increase line spacing for readability */
  white-space: pre-line; /* Render newline characters as line breaks */
  margin-block-start: var(--space-lg); /* Add space above the text */
  font-size: 1.1rem; /* Slightly larger font for story text */
}

.story-not-found {
  text-align: center;
  padding: var(--space-xl);
}

.story-not-found h2 {
  color: var(--color-secondary);
  margin-bottom: var(--space-md);
}
</style>
