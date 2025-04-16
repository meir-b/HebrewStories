import { createRouter, createWebHistory } from 'vue-router';

// Import view components
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/story/:id', // Dynamic segment for story ID
    name: 'Story',
    // Lazy-load the StoryView component for better performance
    component: () => import('../views/StoryView.vue'), 
    props: true // Pass route params as props to the component
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use history mode
  routes, // short for `routes: routes`
  // Optional: Add scroll behavior
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }; // Scroll to top on new page load
    }
  },
});

export default router;
