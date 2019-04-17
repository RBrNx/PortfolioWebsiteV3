import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import dotenv from 'dotenv';
import VueParticles from 'vue-particles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faYoutube,
  faVuejs,
  faAws,
  faBitbucket,
  faCss3Alt,
  faHtml5,
  faJira,
  faJsSquare,
  faLess,
  faMarkdown,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
  faStackOverflow,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

dotenv.config();

library.add(
  faTimes,
  faExternalLinkAlt,
  faGithub,
  faYoutube,
  faVuejs,
  faAws,
  faBitbucket,
  faCss3Alt,
  faHtml5,
  faJira,
  faJsSquare,
  faLess,
  faMarkdown,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
  faStackOverflow,
  faLinkedin,
);

Vue.use(VueApollo);
Vue.use(VueParticles);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    link: new HttpLink({
      uri: process.env.VUE_APP_GRAPHCMS_ENDPOINT,
      headers: { authorization: `Bearer ${process.env.VUE_APP_GRAPHCMS_AUTH}` },
    }),
    cache: new InMemoryCache(),
  }),
});

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({ offset: 75 });
  },
  apolloProvider,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
