<template>
  <div class="right-box">{{ content }}

    <BeakerIcon style="width: 30px;"/>
    <Cog6ToothIcon style="width: 30px;"/>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const content = ref('Branches page');
import svg from '@components/svg.vue'
import { BeakerIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid';
</script>
