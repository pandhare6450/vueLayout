<template>
  <div>
    Edit Save Button
    <div>
      <button @click="handleBtnName">{{ button_name }}</button>
      <div class="Box-root">
        <div class="FormRow-end Box-root" >
          <div class="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap">
            <div class="Box-root Box-hideIfEmpty Margin-left--16">
              <div class="FormField">
                <div class="Box-root">
                  <div
                    class="PressableCore PressableCore--cursor--text PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--long PressableField TextInput Box-root Flex-inlineFlex boxshadow">
                    <div class="PressableCore-base Box-root">
                      <input
                      ref="inpFocus"
                        :disabled="isDisbled"
                        v-model="inputValue"
                        class="Input Input--nowrap PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--long TextInput-element TextInput-element--align--left PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--long"
                         >
                    </div>
                    <div class="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
                    </div>
                  </div>
                  <span class="allErrs">{{ error }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {{ inputValue }}
  </div>
</template>

<script setup>
import {ref,watch } from 'vue'
const button_name =ref('Edit')
const error =ref('')
const isDisbled = ref(true)
const inpFocus=ref(null)
const inputValue=ref('')
const handleBtnName = () =>{
  if(error.value !='') return
  button_name.value = button_name.value == 'Edit' ? 'Save' : 'Edit'
  isDisbled.value = button_name.value == 'Edit'
  inpFocus.value.focus()
}
watch(inputValue,(inp)=>{
  error.value =''
  error.value = inp.length < 3 ? 'Please enter atleast three characters' : ''
})
</script>

<style lang="css" scoped>
button {
  background-color: transparent;
  border: none;
  padding: 5px;
  color: rgb(31, 31, 182);
  margin-left: 27%;
}
.allErrs{
  color:red
}
</style>
