<template>
  <div style="display: flex;">
    <card name="Laptop Hp">
      <template v-slot:header>
        <p>This is the header content</p>
      </template>
      <template v-slot:body>
        <p>This is the body content</p>
      </template>
      <template v-slot:footer>
        <p>This is the footer content</p>
      </template>
      <template v-slot:default>
        <p>This is the default </p>
        <p> content for anonymous</p>
      </template>
    </card>
    <card />
  </div>
</template>

<script setup>
import Card from './card.vue'
</script>

<style lang="scss" scoped></style>