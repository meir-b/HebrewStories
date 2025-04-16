<template>
  <div class="home-view">
    <h2>סיפורים</h2>
    <p>רשימת הסיפורים הזמינים לקריאה. סננו לפי גיל או נושא.</p>

    <!-- Filter Controls -->
    <div class="filter-controls">
      <div class="filter-group">
        <label for="age-filter">סנן לפי גיל:</label>
        <select id="age-filter" v-model="selectedAgeGroup">
          <option value="all">כל הגילאים</option>
          <option v-for="age in ageGroups" :key="age" :value="age">{{ age }}</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="category-filter">סנן לפי נושא:</label>
        <select id="category-filter" v-model="selectedCategory">
          <option value="all">כל הנושאים</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
    </div>

    <div class="story-list">
      <BaseCard
        v-for="story in filteredStories"
        :key="story.id"
        class="story-card"
      >
        <template v-if="story.image" #image>
          <img 
            :src="story.image" 
            :alt="`תמונה עבור ${story.title}`" 
            style="display: block; width: 100%; height: auto; object-fit: cover;" 
          />
        </template>
        <template #header>{{ story.title }}</template>
        <p>{{ story.summary }}</p>
        <template #footer>
          <router-link :to="{ name: 'Story', params: { id: story.id } }" custom v-slot="{ navigate }">
            <BaseButton 
              variant="primary" 
              icon-right="arrow_forward" 
              @click="navigate" 
              role="link"
            >
              קרא עוד
            </BaseButton> 
          </router-link>
        </template>
      </BaseCard>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { stories } from '../data/stories.js'; // Import story data
import BaseCard from '../components/base/BaseCard.vue';
import BaseButton from '../components/base/BaseButton.vue';

// --- Filtering Logic ---
const selectedAgeGroup = ref('all');
const selectedCategory = ref('all');

// Get unique age groups and categories from stories for filter options
const ageGroups = computed(() => [...new Set(stories.map(s => s.ageGroup))].sort());
const categories = computed(() => [...new Set(stories.map(s => s.category))].sort());

const filteredStories = computed(() => {
  return stories.filter(story => {
    const ageMatch = selectedAgeGroup.value === 'all' || story.ageGroup === selectedAgeGroup.value;
    const categoryMatch = selectedCategory.value === 'all' || story.category === selectedCategory.value;
    return ageMatch && categoryMatch;
  });
});
// --- End Filtering Logic ---

</script>

<style scoped>
.home-view h2 {
  margin-bottom: var(--space-sm);
}
.home-view > p { /* Target only the direct paragraph child */
  margin-bottom: var(--space-lg);
  color: var(--color-text-light);
}

.filter-controls {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
  padding: var(--space-md);
  background-color: var(--color-surface);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
}

.filter-group {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.filter-group label {
  font-weight: 600; /* Semi-bold */
  color: var(--color-text-light);
}

.filter-group select {
  padding: var(--space-xs) var(--space-sm);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-background); /* Match body background */
  min-width: 150px; /* Give select some base width */
}

.story-list {
  display: grid;
  /* Responsive grid: 1 column on small screens, 2 on medium, 3 on large */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
  gap: var(--space-lg);
}

/* Ensure cards in the grid don't get too small */
.story-card {
  min-width: 280px; 
}
</style>
