<template>
  <div class="leftbar">
    <topbar/>
    <VueAwesomeSideBar
      :menu="testMenu"
      paddingTop="60px"
      width="270px"
      vueRouterEnabel
     ></VueAwesomeSideBar>
  </div>
</template>

<script setup>
  import topbar from '@layouts/topbar.vue';
  import { defineAsyncComponent } from 'vue'
  import { BeakerIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid';
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  const {path} = useRoute();
  const miniMenu = ref(false)
  const imgUrl = nm => new URL(`../../assets/svg/${nm}.svg`, import.meta.url)




  const testMenu = [
  {
    name: 'Accounts',
    icon: {element: 'img', attributes:{'src': imgUrl('accounts-g')}, class: '' },
    children: [
      {name: 'Company', href: '/company', icon: BeakerIcon,},
      {name: 'Property', href: '/property'},
    ],
  },
  {
    name: 'Setting',
    icon: {element: 'img', attributes:{'src': imgUrl('setting-n')}, class: '' },
    children: [
      {name: 'Account', href: '/account', icon: BeakerIcon,},
      {name: 'Team', href: '/team'},
      {name: 'Terms', href: '/terms'},
    ],
  }
]

</script>
