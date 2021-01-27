/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy';
import VueCookieAcceptDecline from 'vue-cookie-accept-decline';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component(ImgLazy.name, ImgLazy);
  Vue.component('vue-cookie-accept-decline', VueCookieAcceptDecline);
}