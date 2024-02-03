<template>
  <div>
    <Header/>
    <div class="ContentBlock Box-root Box-background--white">
      <form id="profileUpdForm">
        <div class="FormLayout Box-root Box-background--white">
          <div class="Box-root">
            <fieldset class="FormBlock">
              <div class="Box-root Padding-vertical--8">
                <div class="Box-root">
                  <Edit name="Email" v-model="getInput.email" :error="error.email"/>
                  <Edit name="Name" v-model="getInput.name" :error="error.name" />
                  <Edit name="Surname"  v-model="getInput.surname" :error="error.surname" />
                  <Password/>
                  <Timezone/>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Header from '@pages/accounts/profile/parts/editHead.vue'
import Edit from '@pages/accounts/profile/parts/editFields.vue'
import Password from '@pages/accounts/profile/parts/password.vue'
import Timezone from '@pages/accounts/profile/parts/Timezone.vue'
import { inject ,reactive,ref,provide,watch} from 'vue'
import _ from 'lodash'
import useUser from  '@pages/accounts/profile/api.js'
const user = inject('user')
const updateOnUser = inject('updateOnUser')

const getInput = reactive({
  name : user.value.name,
  email : user.value.email,
  surname : user.value.surname
})

watch(getInput,_.debounce( (input) => {
  error.email = error.name = error.surname = null
  console.log({input});
  if(input.name.length < 3) error.name = 'Must be Grater than 3 letters'
  if(input.surname.length < 3) error.surname = 'Must be Grater than 3 letters'
  if(!validateEmail()) error.email = "Please enter valid email address"
},500),{ deep: true });


const error = reactive({email: null,  name: null,  surname: null})

const handleSave = () =>{
  if(!(error.name == null && error.email == null && error.surname == null))
    return
  const data ={name:getInput.name,surname:getInput.surname,email:getInput.email,timezone:user.value.timezone}
  updateOnUser(data)

}

const validateEmail = () => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(getInput.email))

provide('handleSave',handleSave)
</script>

<style lang="scss" scoped></style>