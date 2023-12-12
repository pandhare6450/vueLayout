<template>
  <div>
    <hr>
    <div>
      <slotProp>
        <template #default="slotProps">
          <div>

          <input type="text" :value="slotProps.title" ref="myRef">
          <br/>
          </div>
        </template>
      </slotProp>
      <propCheck >
        <h1>Hello</h1>
      </propCheck>
      <button @click="handleData">Click Me to Get</button>
    </div>
    {{ myRef }}
    <hr>
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
  </div>
</template>

<script setup>

import Card from './card.vue'
import slotProp from './slotProp.vue'
import { useSlots,ref } from 'vue';
import propCheck from './prop.vue'
const myRef = ref(null)

  const handleData = () =>  {
    console.log('Input Value:', myRef.value.value);
  };



</script>
