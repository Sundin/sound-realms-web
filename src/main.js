import { createApp } from "vue";
import VueGtag from "vue-gtag-next";
// Weird linter bug (https://stackoverflow.com/a/71793890)
// eslint-disable-next-line import/no-unresolved
import { Amplify } from "aws-amplify";
import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faXmark);
library.add(faTrash);
library.add(faUserSecret);

Amplify.configure({
  aws_cognito_region: "eu-north-1",
  aws_user_pools_id: "eu-north-1_wScBt5dG1",
  aws_user_pools_web_client_id: "6rji8tci1r0u5mfdp8iemtvjmn"
});

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

const store = createStore({
  state() {
    return {
      user: null,
      shoppingCart: []
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addToCart(state, product) {
      state.shoppingCart.push(product);
      state.shoppingCart = state.shoppingCart.filter((value, index, array) => {
        return array.indexOf(value) === index;
      });
    },
    removeFromCart(state, product) {
      state.shoppingCart = state.shoppingCart.filter(function(el) {
        return el.id !== product.id;
      });
    }
  },
  plugins: [vuexLocal.plugin]
});

createApp(App)
  .use(router)
  .use(store)
  .use(VueGtag, {
    property: {
      id: "G-J9XKGMD9SC",
      params: {
        send_page_view: false
      }
    }
  })
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
