<template>
  <div class="filter_tab">
    <div class="Box-root Box-divider--light-bottom-1 Padding-all--8" style="padding: 5px 5px 10px 9px;;">
      <label>
        <input type="checkbox" @click="handelClick"  ref="ischecked" /> {{ name }}
      </label>
    </div>
    <div v-if="isShow"  style="display: flex;">
      <div class="Box-root Box-background--gray50 Box-divider--light-bottom-1 Margin-top--0 Padding-all--12"
        style="max-height: 400px; overflow: hidden; transition: max-height 0.3s ease 0s, padding 0.3s ease 0s;">
        <span
          class="Text-color--gray Text-fontSize--12 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
          <div class="Box-root Flex-flex Flex-alignItems--center Flex-direction--row">
            <div
              class="PressableCore PressableCore--cursor--pointer PressableCore--height--small PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableButton Select Select--size--small Box-root Flex-inlineFlex pdboxshadow">
              <div class="PressableCore-base Box-root">
               <slot/>
                <div class="Select-arrows" style="color: rgb(60, 66, 87);">
                  <div aria-hidden="true"
                    class="SVGInline SVGInline--cleaned SVG Icon Icon--arrowUpDown Icon-color Icon-color--gray600 Box-root Flex-flex">
                    <svg aria-hidden="true"
                      class="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--arrowUpDown-svg Icon-color-svg Icon-color--gray600-svg"
                      height="12" width="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path
                        d="M11.891 9.992a1 1 0 1 1 1.416 1.415l-4.3 4.3a1 1 0 0 1-1.414 0l-4.3-4.3A1 1 0 0 1 4.71 9.992l3.59 3.591 3.591-3.591zm0-3.984L8.3 2.417 4.709 6.008a1 1 0 0 1-1.416-1.415l4.3-4.3a1 1 0 0 1 1.414 0l4.3 4.3a1 1 0 1 1-1.416 1.415z">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
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
  },
  isOffShow: {
    type: Boolean,
    required: true
  }
});
import { ref,toRefs,watch} from 'vue'
const isShow= ref(false)
const ischecked = ref(false)
const manageShow = toRefs(props).isOffShow
const handelClick = e => isShow.value = e.target.checked
watch(manageShow, (val) =>  isShow.value = ischecked.value.checked = false)
</script>
