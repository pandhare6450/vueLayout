<template>
  <div>
    <h2>Sample Form</h2>
    <form @submit.prevent="submitHandler">
      <Edit name="Email" v-model="getInput.email" :error="error.email" />
      <Edit name="Name" v-model="getInput.name" :error="error.name" />
      <Edit name="Surname" v-model="getInput.surname" :error="error.surname" />
      <Edit name="Address" v-model="getInput.address" :error="error.address" />
      <div>
        <colorBtn name="Hello" type="submit"  :disabled="btnDisable" @saveClick="submitHandler" />
      </div>
      {{ getInput }}
    </form>
  </div>
</template>

<script setup>
import Edit from '@pages/accounts/profile/parts/editFields.vue'
import { inject, reactive, ref, provide, watch } from 'vue'
import _ from 'lodash'
const btnDisable = ref(true)
const getInput = reactive({
  name: 'Abc',
  email: 'example@example.com',
  surname: 'Def',
  address: 'Pune'
})
const error = reactive({ email: null, name: null, surname: null, address: null })
watch(getInput,_.debounce( (input) => {
  error.email = error.name = error.surname = null

  if(input.name.length < 3) error.name = 'Must be Grater than 3 letters'
  if(input.surname.length < 3) error.surname = 'Must be Grater than 3 letters'
  if(!validateEmail()) error.email = "Please enter valid email address"
},500),{ deep: true });


watch(error,_.debounce( (input) => {
  console.log({error});
  btnDisable.value = !(error.email == null && error.name == null && error.surname == null)
  console.log(btnDisable.value)
},500),{ deep: true });


const validateEmail = () => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(getInput.email))
const submitHandler =()=>{
 alert(getInput.email);
}
</script>

<style lang="scss" scoped></style>