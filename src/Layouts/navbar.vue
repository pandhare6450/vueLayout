<template>
<nav class="navbar fixed-top navbar-light bkpdhmrd_navbar">
  <div class="bkpdhmrd_navbar_main">
    <div class="">
      <span>
        <SVG name="gear"/>
      </span>
    </div>
    <div class="Margin-left--12">
      <span>
        <SVG name="alert-g"/>
      </span>
    </div>
    <div class="Margin-left--12" @click="modals.user=!modals.user" style="cursor:pointer">
      <SVG name="user_nav"/>
    </div>
  </div>

  <userPop  v-if="modals.user" v-model="modals.user" />

</nav>
</template>

<script setup>
import {ref,reactive,defineAsyncComponent} from 'vue'
const userPop = defineAsyncComponent(() => import('./userPop.vue'))
import SVG from '@components/svg.vue'
const modals = reactive({
  user:false
})

</script>