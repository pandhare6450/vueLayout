<template>
  <div
    class="FormRow FormRow--layout--inline FormRow--hasName Box-root Padding-horizontal--20 Padding-vertical--16 Flex-flex Flex-alignItems--flexStart Flex-direction--row"
    style="padding-left: 4px;">
    <div class="FormRow-start Box-root Padding-right--12 Padding-vertical--4" style="flex: 1 0 25%;">
      <div class="Box-root Flex-flex">
        <div class="Box-root">
          <span
            class="Text-color--dark Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
            <label class="FormRow-label" for="{{ name }}">
              <span>{{ name }}</span>
            </label>
          </span>
        </div>
      </div>
    </div>
    <div class="Box-root" style="flex: 1 1 75%;">
      <div class="FormRow-end Box-root" style="pointer-events: none;">
        <div class="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
          style="margin-left: -16px; margin-top: -16px;">
          <div class="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16" style="pointer-events: auto;">
            <div class="FormField">
              <div class="Box-root">
                <div
                  class="PressableCore PressableCore--cursor--text PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--long PressableField TextInput Box-root Flex-inlineFlex"
                  style="background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;">
                  <div class="PressableCore-base Box-root">
                    <input autocomplete="email" aria-invalid="false"  placeholder=""
                      type="text" :value="modelValue" @input="$emit('update:modelValue' , $event.target.value)"
                      :disabled="disabled"
                      class="teamEmail Input Input--nowrap PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--long TextInput-element TextInput-element--align--left PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--long"
                      style="color: rgb(60, 66, 87);" required="">
                  </div>
                  <div class="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
                  </div>
                </div>
                <span class="allErrs" >{{ error }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
const props = defineProps({
  name: String,
  error: String,
  disabled:{
    type:Boolean,
    default:false
  },
  modelValue:String
});
</script>

<style lang="css" scoped>
.allErrs{
  margin: 10px;
  color:red
}
</style>