import { createApp } from 'vue';
import VueGtag from 'vue-gtag-next';
// Weird linter bug (https://stackoverflow.com/a/71793890)
// eslint-disable-next-line import/no-unresolved
import { Amplify } from 'aws-amplify';
import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist'
import App from './App.vue';
import router from './router';

Amplify.configure({
  aws_cognito_region: 'eu-north-1',
  aws_user_pools_id: 'eu-north-1_wScBt5dG1',
  aws_user_pools_web_client_id: '6rji8tci1r0u5mfdp8iemtvjmn',
});

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

const store = createStore({
  state() {
    return {
      user: null,
      shoppingCart: [],
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addToCart(state, product) {
      state.shoppingCart.push(product);
    }
  },
  plugins: [vuexLocal.plugin],
});

createApp(App)
  .use(router)
  .use(store)
  .use(VueGtag, {
    property: {
      id: 'G-J9XKGMD9SC',
      params: {
        send_page_view: false,
      },
    },
  })
  .mount('#app');
