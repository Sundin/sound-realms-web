import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');

// const app = {
//   watch: {
//     // watching top-level property
//     currentRoute(val, oldVal) {
//       if (val !== oldVal) {
//         window.scrollTo(0, 0);
//       }
//     },
//   },
// };
