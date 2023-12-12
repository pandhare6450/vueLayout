<template>
  <div class="leftbar">
    <topbar />
    <VueAwesomeSideBar :menu="dataLeft" paddingTop="60px" width="270px" vueRouterEnabel></VueAwesomeSideBar>
  </div>
</template>

<script setup>
  import topbar from '@layouts/topbar.vue';
  import { defineAsyncComponent } from 'vue'
  import { BeakerIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid';
  import { ref, computed ,reactive} from 'vue'
  import { useRoute } from 'vue-router'
  import { set } from '@vueuse/core';
  const { path } = useRoute();
  const miniMenu = ref(false)
  const imgUrl = nm => new URL(`../../assets/svg/${nm}.svg`, import.meta.url)

  let permission = reactive({})

  setTimeout(()=>{
    permission.Accounts = [0,2,1]
    permission.Setting = [0,1,2,3]
    // isTeam.value = false
  },3000)

  const testMenu = [
    {
      name: 'Accounts',
      icon: { element: 'img', attributes: { 'src': imgUrl('accounts-g') }, class: '' },
      children: [
        { name: 'Profile', href: '/profile', icon: BeakerIcon, },
        { name: 'Form', href: '/form' },
        { name: 'Slot', href: '/slot' },
        { name: 'Filter', href: '/filter' },
        { name: 'Edit Save Button', href: '/editButton' },
      ],
    },
    {
      name: 'Setting',
      icon: { element: 'img', attributes: { 'src': imgUrl('setting-n') }, class: '' },
      children: [
        { name: 'Button', href: '/buttondemo', icon: BeakerIcon, },
        { name: 'Tab', href: '/tab' },
        { name: 'Terms', href: '/terms' },
        { name: 'Dynamic Form', href: '/dynamic-form' },
      ],
    }
  ]
  const isTeam = ref(false)
  const dataLeft = computed(() => {
    let Mydata = getLeftMenus()
    Mydata = Mydata.filter(vanm => vanm.children.length > 0)
    return Mydata
  })

  let appendList = testMenu.map(v => {
    v = { ...v, children: [] }
    return v
  })

  function getLeftMenus() {
    if (!isTeam.value) return testMenu
    testMenu.map(val => {
      if (permission[val.name] && permission[val.name].length > 0) {
        [...val.children].map((v, k) => {
          if (!permission[val.name].includes(k)) return
          appendList.forEach(vname => vname.name == val.name && vname.children.push(v))
        })
      }
    })
    return appendList;
  }

</script>
