<template>
  <div>
    <component :is="icon"  class="icon" />
    <slot/>
    {{ title }}

  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const { name,title } = defineProps({
  name: {
    type: String,
    requiered: true,
  },
  title :{
    type: String,
  }
})
const icon = defineAsyncComponent(() => import(`../../assets/svg/${name}.svg`))

</script>


<style scoped>
  .icon{
   width: 20px;
   height: 20px;
  }
</style>