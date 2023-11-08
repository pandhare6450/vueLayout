<template>
  <div class="right-box">{{ content }}
    <Cog6ToothIcon class="icon"></Cog6ToothIcon>
    <BeakerIcon class="icon"></BeakerIcon>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { BeakerIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid';
const content = ref('Team page Index');
</script>


<style>
.icon{
  width: 15px;
  height: 15px;
}
</style>
