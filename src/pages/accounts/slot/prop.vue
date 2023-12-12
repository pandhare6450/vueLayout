<!-- ChildComponent.vue -->
<template>
  <div>
    <slot name="mySlot"></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    // Emit an event to notify the parent component about the slot content
    this.$emit('slotContent', this.$slots.mySlot);
  }
}
</script>
