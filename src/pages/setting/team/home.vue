<template>
  <div class="container bg-light rounded p-5 mt-4">
    <div class="mb-5 text-primary">
      <h3>Home Page</h3>
    </div>
      <Tabwrapper>
        <Tab title="Branch"><Branch id="15"/></Tab>
        <Tab title="Model"><Model/></Tab>
        <Tab title="Terms"><Terms/></Tab>
        <Tab title="Tax"><Tax/></Tab>
        <Tab title="Submit"><Submit/></Tab>
      </Tabwrapper>
  </div>
</template>

<script setup>
import Tab from './homeTab/Tab.vue'
import Tabwrapper from './homeTab/Tabswrapper.vue'
import Branch from './homeTab/Branch.vue'
import Model from './homeTab/Models.vue'
import Terms from './homeTab/Terms.vue'
import Tax from './homeTab/Taxes.vue'
import Submit from './homeTab/Submit.vue'


// export default{
//   components:{
//     Tab,Tabwrapper,Branch,Model,Terms,Tax,Submit
//   }
// }
</script>

<style scoped>
.container{
  min-height: 60vh !important;
}
</style>