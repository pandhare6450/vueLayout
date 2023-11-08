<template>
  <div class="right-box">{{ content }}

    <gear class="icon" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import gear from '@svg/gear.svg';
const content = ref('Approvals page');
</script>
