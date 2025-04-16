import { createApp } from 'vue';
import router from './router'; // Import the router instance
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.use(router); // Tell the app to use the router

app.mount('#app');
