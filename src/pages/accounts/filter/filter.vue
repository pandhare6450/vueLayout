<template>
  <div>
    {{ filterData }}
    <div style="float:right;">
      <div class="Box-root Flex-flex">
        <div class="Box-root Flex-flex Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
          style="pointer-events:auto;">
          <div
            class="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex pdboxshadow">
            <div class="PressableCore-base Box-root">
              <plain-btn name="Filter" @saveClick="isFilterShow=!isFilterShow">
                <svg aria-hidden="true"
                  class="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--filter-svg Button-icon-svg Icon-color-svg Icon-color--gray600-svg"
                  height="12" width="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.994.004c.555 0 1.006.448 1.006 1a.997.997 0 0 1-.212.614l-5.782 7.39L9 13.726a1 1 0 0 1-.293.708L7.171 15.97A.1.1 0 0 1 7 15.9V9.008l-5.788-7.39A.996.996 0 0 1 1.389.214a1.01 1.01 0 0 1 .617-.21z"
                    fill-rule="evenodd"></path>
                </svg>
              </plain-btn>
            </div>
            <div class="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
            </div>
          </div>
        </div>
      </div>
      <filterDiv v-if="isFilterShow"/>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted ,provide,defineAsyncComponent} from 'vue'
const filterDiv = defineAsyncComponent(() => import('./filterDiv.vue'))
const isFilterShow=ref(false)
const filterData = ref({})
const handleClickOnFilter = () =>  isFilterShow.value = false

provide('handleClickOnFilter',handleClickOnFilter)

const fetchFilterQuery = data =>{
  isFilterShow.value = false
  filterData.value = data
}
provide('fetchFilterQuery',fetchFilterQuery)
</script>
