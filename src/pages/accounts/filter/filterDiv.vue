<template>
  <div
    class="ContextualLayer-layer--topright ContextualLayer-layer--anytop ContextualLayer-layer--anyright ContextualLayer-context--anyright ContextualLayer-context--bottomright ContextualLayer-context--anybottom ContextualLayer-container ContextualLayer--pointerEvents"
    style="position: absolute; right: 14px; top: 75px;" ref="filterModalRef">
    <div class="ContextualPopover-animate ContextualPopover-animate-entered" role="dialog">
      <div class="ContextualPopover">
        <div class="ContextualPopover-contents">
          <div aria-labelledby="menu7-button" role="menu" tabindex="-1" class="Box-root">
            <div style="width: 250px;">
              <form>
                <div
                  class="Box-root Box-background--offset Box-divider--light-bottom-1 Padding-all--8 Flex-flex Flex-alignItems--center Flex-direction--row Flex-justifyContent--spaceBetween">
                  <div
                    class="PressableCore PressableCore--cursor--pointer PressableCore--height--small PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex pdboxshadow">
                    <div class="PressableCore-base Box-root">
                      <plain-btn name="Clear" @saveClick="handleClick('clear')" />
                    </div>
                  </div>
                  <span
                    class="Text-color--default Text-fontSize--15 Text-fontWeight--medium Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                    <span>Filters</span>
                  </span>
                  <div
                    class="PressableCore PressableCore--cursor--pointer PressableCore--height--small PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--blue Box-root Flex-inlineFlex pd_btn">
                    <div class="PressableCore-base Box-root">
                      <colorBtn name="Done" @saveClick="handleClick('done')" />
                    </div>
                  </div>
                </div>
                <div>
                  <filterCompoSelect name="Category">
                    <select :class="staticClass" v-model="filterData.category" style="color: rgb(60, 66, 87);">
                      <option value="0">Select Category </option>
                      <option value="Booking">Booking </option>
                      <option value="Service">Service</option>
                    </select>
                  </filterCompoSelect>
                  <filterCompoSelect name="Status">
                    <select :class="staticClass" v-model="filterData.status" style="color: rgb(60, 66, 87);">
                      <option value="0">Select Status </option>
                      <option value="Freeze">Freezed </option>
                      <option value="Draft">Draft </option>
                      <option value="Active">Active</option>
                      <option value="Deleted">Deleted</option>
                      <option value="Disputed">Dispute</option>
                    </select>
                  </filterCompoSelect>
                  <filterCompoSelect name="Source">
                    <select :class="staticClass" v-model="filterData.source" style="color: rgb(60, 66, 87);">
                      <option value="0">Select Source </option>
                      <option value="API">API </option>
                      <option value="Manual">Manual</option>
                    </select>
                  </filterCompoSelect>
                  <filterCompoInp name="Token ID">
                    <input aria-invalid="false" type="text" autocomplete="off" :class="staticInputClass"
                      v-model="filterData.token_id" style="color: rgb(60, 66, 87);">
                  </filterCompoInp>
                  <filterCompoInp name="Amount">
                    <input aria-invalid="false" type="text" autocomplete="off" :class="staticInputClass"
                      v-model="filterData.amount" style="color: rgb(60, 66, 87);">
                  </filterCompoInp>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, reactive, defineAsyncComponent } from 'vue'

const filterCompoSelect = defineAsyncComponent(() => import('./filterCompoSelect.vue'))

const filterCompoInp = defineAsyncComponent(() => import('./filterCompoInp.vue'))
import { onClickOutside } from '@vueuse/core';
const dateFromTo = defineAsyncComponent(() => import('./dateFromTo.vue'))
const emits = defineEmits(['update:modelValue']);
const filterModalRef = ref(null)
const fetchFilterQuery = inject('fetchFilterQuery')
const closeModal = () => {
    emits('update:modelValue', false);
  };
onClickOutside(filterModalRef,closeModal);

const initialState = reactive({
  category: 0,
  status: 0,
  source: 0,
  token_id: '',
  amount: '',
})
const filterData =({...initialState})
const handleClick = method => {
  if(method == 'clear')  Object.assign(filterData, initialState);
  fetchFilterQuery(filterData)
}

const staticClass = 'Select-element PressableContext Padding-right--24 Padding-left--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--16 PressableContext--fontSize--13 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--small PressableContext--radius--all PressableContext--width PressableContext--width--maximized'
const staticInputClass = 'Input Input--nowrap PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--16 PressableContext--fontSize--13 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--small PressableContext--radius--all PressableContext--width PressableContext--width--maximized TextInput-element--align--left PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--16 PressableContext--fontSize--13 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--small PressableContext--radius--all PressableContext--width PressableContext--width--maximized'
</script>
