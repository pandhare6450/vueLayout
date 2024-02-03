import { createWebHistory,createRouter } from "vue-router";
import { defineAsyncComponent} from 'vue'
/*------Account----*/

const profile = defineAsyncComponent(() => import('./pages/accounts/profile/profile.vue'))
const form = defineAsyncComponent(() => import('./pages/accounts/form/form.vue'))
const buttondemo= defineAsyncComponent(() => import('./pages/setting/button/buttondemo.vue'))
const dynamicForm= defineAsyncComponent(() => import('./pages/setting/dynamicForm/index.vue'))
const tab= defineAsyncComponent(() => import('./pages/setting/team/home.vue'))
const terms= defineAsyncComponent(() => import('./pages/setting/terms/terms.vue'))
const slot= defineAsyncComponent(() => import('./pages/accounts/slot/slot.vue'))
const filter= defineAsyncComponent(() => import('./pages/accounts/filter/filter.vue'))
const editButton= defineAsyncComponent(() => import('./pages/accounts/editButton/editButton.vue'))

const routes = [
  {path : '/profile', name : 'profile', component : profile},
  {path : '/tab', name : 'Tab', component : tab},
  {path : '/buttondemo', name : 'Buttondemo', component : buttondemo},
  {path : '/terms', name : 'Terms', component : terms},
  {path : '/form', name : 'Form', component : form},
  {path : '/slot', name : 'Slot', component : slot},
  {path : '/filter', name : 'Filter', component : filter},
  {path : '/dynamic-form', name : 'dynamic.form', component : dynamicForm},
  {path : '/editButton', name : 'editButton', component : editButton},

];

const router = createRouter({
  history : createWebHistory(),
  routes
});


export default router