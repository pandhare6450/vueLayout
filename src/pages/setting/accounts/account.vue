<template>
  <div>
    <h1>{{ content }}</h1>
    <colorBtn name="Hello" :disabled="false" @saveClick="saveChildData" />

    <plainBtn name="Cancel" :disabled="true" @saveClick="saveChildData"/>
    <hr>
    <div class="alert alert-danger mt-3" v-if="danger">
      Volume is grate than usual limit...
    </div>

    <div class="d-flex justify-content-around">
      <h5>Volume is : {{ counter }}</h5>

      <plainBtn name="Increase" :disabled="danger" @saveClick="++counter"/>
      <plainBtn name="Decrease" @saveClick="--counter"/>

    </div>
    <gear class="icon" />
    </div>
</template>
<script setup>
import { ref,watch  } from 'vue';

const content = ref('Company page');
const counter = ref(2)
const danger = ref(false)

watch(counter, (newValue, oldValue) => {
  if(newValue == 8 && newValue > oldValue) {
    danger.value = true;
    alert('More than usual')
  }
  if(newValue < 8)  danger.value = false;
});
const saveChildData =(val)=>{
  alert('I am clicked  '+val);
}
</script>


<style>

</style>