<template>
  <div class="p-4" style="min-height: 380px;" v-show="title == selectedTitle">
    <slot />
  </div>
</template>


<script>
import { inject } from 'vue';

export default {
  props :['title'],
  setup(props, {slots}) {
    const selectedTitle = inject('selectedTitle');
    return{
      selectedTitle
    }
  }
}
</script>