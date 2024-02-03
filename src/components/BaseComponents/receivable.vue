<template>
  <div
    class="Badge Badge--variant--status Box-root Box-background--live Flex-inlineFlex Flex-alignItems--center Flex-direction--row">
    <span
      class="Badge-text Text-color--blue600 Text-color--blue600 Text-fontSize--12 Text-fontWeight--medium Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--inline"><span>{{ name }}</span></span>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'Receivable',
  }
});
</script>

<style lang="scss" scoped>

.Badge{
  margin: 5px;
}
.Box-background--live {
    background-color: #7df19b;
}
</style>