import { createRouter, createWebHistory } from 'vue-router';

import Home from './home/Home.vue';
import Gametest from './gametest/Gametest.vue';
import Faq from './faq/Faq.vue';
import LearnMore from './learnmore/LearnMore.vue';
import Contact from './contact/Contact.vue';
import Presskit from './presskit/Presskit.vue';
import PrivacyPolicy from './privacy/PrivacyPolicy.vue';
import Newsletter from './newsletter/Newsletter.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/feedback', component: Contact },
  { path: '/faq', component: Faq },
  { path: '/learn-more', component: LearnMore },
  { path: '/game-testing', component: Gametest },
  { path: '/download', component: Gametest },
  { path: '/contact', component: Contact },
  { path: '/presskit', component: Presskit },
  { path: '/privacy-policy', component: PrivacyPolicy },
  { path: '/newsletter', component: Newsletter },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

export default router;
