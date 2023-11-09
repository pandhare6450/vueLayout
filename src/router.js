import { createWebHistory,createRouter } from "vue-router";
import { defineAsyncComponent} from 'vue'
/*------Account----*/

const profile = defineAsyncComponent(() => import('./pages/accounts/profile/profile.vue'))
const form = defineAsyncComponent(() => import('./pages/accounts/form/form.vue'))
const buttondemo= defineAsyncComponent(() => import('./pages/setting/button/buttondemo.vue'))
const tab= defineAsyncComponent(() => import('./pages/setting/team/home.vue'))
const terms= defineAsyncComponent(() => import('./pages/setting/terms/terms.vue'))
const slot= defineAsyncComponent(() => import('./pages/accounts/slot/slot.vue'))

const routes = [
  {path : '/profile', name : 'profile', component : profile},
  {path : '/tab', name : 'Tab', component : tab},
  {path : '/buttondemo', name : 'Buttondemo', component : buttondemo},
  {path : '/terms', name : 'Terms', component : terms},
  {path : '/form', name : 'Form', component : form},
  {path : '/slot', name : 'Slot', component : slot},

];

const router = createRouter({
  history : createWebHistory(),
  routes
});


export default router