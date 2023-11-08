import { createWebHistory,createRouter } from "vue-router";
import { defineAsyncComponent} from 'vue'
/*------Account----*/

const account = defineAsyncComponent(() => import('./pages/setting/accounts/account.vue'))
const branches = defineAsyncComponent(() => import('./pages/setting/branches/branches.vue'))
const branding= defineAsyncComponent(() => import('./pages/setting/branding/branding.vue'))
const company= defineAsyncComponent(() => import('./pages/accounts/company/company.vue'))
const business= defineAsyncComponent(() => import('./pages/setting/business/business.vue'))
const team= defineAsyncComponent(() => import('./pages/setting/team/home.vue'))
const terms= defineAsyncComponent(() => import('./pages/setting/terms/terms.vue'))

const routes = [
  {path : '/company', name : 'Company', component : company},
  {path : '/team', name : 'Team', component : team},
  {path : '/account', name : 'Account', component : account},
  {path : '/branches', name : 'Branches', component : branches},
  {path : '/branding', name : 'Branding', component : branding},
  {path : '/business', name : 'Business', component : business},
  {path : '/terms', name : 'Terms', component : terms},

];

const router = createRouter({
  history : createWebHistory(),
  routes
});


export default router