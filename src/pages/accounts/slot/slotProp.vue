<template>
  <div>
    I am slot Prop
  <slot  :title="dataAdd"></slot>
  <input type="text" v-model="dataAdd">
  </div>
</template>

<script setup>
import {ref ,onMounted} from 'vue'
const dataAdd =  ref('from_Child_Element')
</script>
