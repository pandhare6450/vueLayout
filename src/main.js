import { createApp } from 'vue'
import vueAwesomeSidebar from 'vue-awesome-sidebar'
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'
import './normalize.css'
import './style.css'
import './dashboard.css'
import './layout.css'
import App from './App.vue'
import router from './router'
import _ from 'lodash';
import { defineAsyncComponent } from 'vue';
const colorBtn = defineAsyncComponent(() => import('@components/BaseComponents/colorBtn.vue'))
const plainBtn = defineAsyncComponent(() => import('@components/BaseComponents/plainBtn.vue'))
const receivable = defineAsyncComponent(() => import('@components/BaseComponents/receivable.vue'))
const payable = defineAsyncComponent(() => import('@components/BaseComponents/payable.vue'))
const payment = defineAsyncComponent(() => import('@components/BaseComponents/payment.vue'))
const dispute = defineAsyncComponent(() => import('@components/BaseComponents/dispute.vue'))
const app = createApp(App);
  app.use(router);
  app.use(vueAwesomeSidebar);

  app
  .component('colorBtn', colorBtn)
  .component('plainBtn', plainBtn)
  .component('receivable', receivable)
  .component('payable', payable)
  .component('payment', payment)
  .component('dispute', dispute)

  app.config.globalProperties.$globalColorVariable = '#754555'

router.isReady().then(() => {
  app.mount("#app");
});
