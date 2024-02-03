<template>
  <div>
    <div class="card">
      <p class="card-title">{{ name }}</p>
      <p class="small-desc">
        <slot name="header">Default Header</slot>
        <br>
        <slot name="body">Default Body</slot>
        <br>
        <slot name="footer">No footer found</slot>
        <br>
        <slot>I am anonymous slot</slot>
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type:String,
    default:'Some Product'
  },
}
)
</script>
<style lang="scss" scoped>
  @import './card.css'
</style>