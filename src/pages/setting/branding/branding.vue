<template>
  <div class="right-box">{{ content }}
    <Svg name="gear" >Gear</Svg>
    <Svg name="clipboard" >Clipboard</Svg>
    <Svg name="additional">Additional</Svg>
    <Svg name="blocked">blocked</Svg>
    <Svg name="check-c">check</Svg>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const content = ref('Branding page');
import Svg from '@components/svg.vue'
</script>
