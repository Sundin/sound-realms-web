import Vue from 'vue';

import routes from './routes';
import NotFound from './pages/NotFound.vue';

Vue.config.productionTip = false;

const vm = new Vue({
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    },
  },
  mounted() {
    // Handle browser back button
    window.addEventListener('popstate', () => {
      this.currentRoute = document.location.pathname;
    });
  },
  render(createElement) {
    return createElement(this.ViewComponent);
  },
  watch: {
    // watching top-level property
    currentRoute(val, oldVal) {
      if (val !== oldVal) {
        window.scrollTo(0, 0);
      }
    },
  },
});

vm.$mount('#app');
