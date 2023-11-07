import { createApp } from 'vue';
import VueGtag from 'vue-gtag-next';
// Weird linter bug (https://stackoverflow.com/a/71793890)
// eslint-disable-next-line import/no-unresolved
import { Amplify } from 'aws-amplify';
import App from './App.vue';
import router from './router';

Amplify.configure({
  aws_cognito_region: 'eu-north-1',
  aws_user_pools_id: 'eu-north-1_wScBt5dG1',
  aws_user_pools_web_client_id: '6rji8tci1r0u5mfdp8iemtvjmn',
});

createApp(App)
  .use(router)
  .use(VueGtag, {
    property: {
      id: 'G-J9XKGMD9SC',
      params: {
        send_page_view: false,
      },
    },
  })
  .mount('#app');
