<template>
  <div>
    <label class="marketposition_chkb Text-fontWeight">
      <span
        class="Text-color--dark Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--18 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block">{{ label }}</span>
      <input type="checkbox" name="chekinEliFilter" :checked="modelValue" @input="$emit('update:modelValue' , $event.target.checked)">
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script setup>
  const props = defineProps({
    label: {
    type: String,
    default: '',
  },
});


</script>

<style lang="scss" scoped>

</style>