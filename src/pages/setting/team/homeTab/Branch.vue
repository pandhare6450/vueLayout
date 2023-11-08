<template>
  <div>
    <h3>Branch Select</h3>
    <form action="">
      <div>
        <input type="text" class="form-control" v-model="inp">
        {{ inp }}
        {{ id  }}
      </div>
    </form>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props:{
    id:String
  },
  setup({id}) {
    // console.log({id});
    const inp = ref('Hello world')
    return {
      inp,id
    }
  }
}
</script>

<style>
.float-right {
  float: right;
}
</style>