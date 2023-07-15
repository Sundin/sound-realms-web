import { createApp } from 'vue';
import VueUniversalModal from 'vue-universal-modal';
import App from './App.vue';
import router from './router';
import 'vue-universal-modal/dist/index.css';


createApp(App).use(router).use(VueUniversalModal, {
  teleportTarget: '#modals',
}).mount('#app');
