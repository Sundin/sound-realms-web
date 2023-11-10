import { createRouter, createWebHistory } from 'vue-router';

import { trackRouter } from 'vue-gtag-next';
import Home from './home/Home.vue';
import Gametest from './gametest/Gametest.vue';
import Faq from './faq/Faq.vue';
import LearnMore from './learnmore/LearnMore.vue';
import Contact from './contact/Contact.vue';
import Presskit from './presskit/Presskit.vue';
import FodKickstarterPress from './presskit/FodKickstarterPress.vue';
import FodFunded from './presskit/FodFunded.vue';
import FodKsComplete from './presskit/FodKsComplete.vue';
import Dracula from './presskit/Dracula.vue';
import PrivacyPolicy from './privacy/PrivacyPolicy.vue';
import PrivacyPolicy2 from './privacy/PrivacyPolicy2.vue';
import PrivacyPolicy3 from './privacy/PrivacyPolicy3.vue';
import Newsletter from './newsletter/Newsletter.vue';
import FortressOfDeath from './adventures/fortressofdeath/FortressOfDeath.vue';
import MaceAndMagic from './adventures/maceandmagic/MaceAndMagic.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/feedback', component: Contact },
  { path: '/faq', component: Faq },
  { path: '/learn-more', component: LearnMore },
  { path: '/game-testing', component: Gametest },
  { path: '/download', component: Gametest },
  { path: '/contact', component: Contact },
  { path: '/presskit', component: Presskit },
  { path: '/press', component: Presskit },
  { path: '/press/fod-kickstarter', component: FodKickstarterPress },
  { path: '/press/fod-funded', component: FodFunded },
  { path: '/press/fod-ks-complete', component: FodKsComplete },
  { path: '/press/dracula', component: Dracula },
  { path: '/privacy-policy', component: PrivacyPolicy },
  { path: '/privacypolicy', component: PrivacyPolicy2 },
  { path: '/privacy', component: PrivacyPolicy3 },
  { path: '/fortressofdeath', component: FortressOfDeath, meta: { title: 'The Fortress of Death' } },
  { path: '/maceandmagic', component: MaceAndMagic, meta: { title: 'Mace & Magic' } },
  { path: '/newsletter', component: Newsletter },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  window.scrollTo(0, 0);
});

trackRouter(router);

export default router;
