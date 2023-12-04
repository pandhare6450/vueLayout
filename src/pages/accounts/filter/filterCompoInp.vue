<template>
  <div class="filter_tab">
    <div class="Box-root Box-divider--light-bottom-1 Padding-all--8" style="padding: 5px 5px 10px 9px;">
      <label> <input type="checkbox" autocomplete="off"  @click="handelClick" > {{ name }}
      </label>
    </div>
    <div v-if="isShow" style="display: flex;">
      <div class="Box-root Box-background--gray50 Box-divider--light-bottom-1 Margin-top--0 Padding-all--12"
        style="max-height: 400px; overflow: hidden; transition: max-height 0.3s ease 0s, padding 0.3s ease 0s;">
        <span
          class="Text-color--gray Text-fontSize--12 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
          <div class="Box-root Flex-flex Flex-alignItems--center Flex-direction--row">
            <div class="Box-root" style="white-space: nowrap;"><span>is
                equal to</span></div>
            <div class="Box-root Padding-left--8" style="flex-grow: 1;">
              <span>
                <div
                  class="PressableCore PressableCore--cursor--text PressableCore--height--small PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableField TextInput Box-root Flex-inlineFlex"
                  style=" background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                                    ">
                  <div class="PressableCore-base Box-root">
                    <slot/>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  }
});
import { ref } from 'vue'
const isShow = ref(false)

const handelClick = e => isShow.value = e.target.checked

</script>
