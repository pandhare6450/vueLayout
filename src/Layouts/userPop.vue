<template>
  <div
    class="ContextualLayer-layer--topright ContextualLayer-layer--anytop ContextualLayer-layer--anyright ContextualLayer-context--bottom ContextualLayer-context--anybottom ContextualLayer-container ContextualLayer--pointerEvents rd_profile "
    id="userPopupTop" style="right: 39px;top: 5%;width: 232px;position:fixed"
    tabindex="-1" ref="userModalRef">
    <div class="ContextualPopover-animate ContextualPopover-animate-entered" role="dialog">
      <div class="ContextualPopover">
        <div class="ContextualPopover-arrowContainer">
          <div class="ContextualPopover-arrow"></div>
        </div>
        <div class="ContextualPopover-contents">
          <div aria-labelledby="menu4-button" id="menu4" role="menu" tabindex="-1" class="Box-root">
            <div class="Box-root" style="width: 232px;">
              <div>
                <div class="Box-root Box-divider--light-bottom-1 Padding-all--12">
                  <span
                    class="Text-color--dark Text-fontSize--16 Text-fontWeight--medium Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block">
                    <div class="TruncatedText" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                      <div>
                       PayDocker
                      </div>
                    </div>
                  </span>
                  <span
                    class="Text-color--default Text-fontSize--12 Text-fontWeight--regular Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                    <span>
                      <span>
                        Master
                      </span>
                    </span>
                  </span>
                </div>
                <div class="Box-root Padding-vertical--8">
                  <Button name="Profile"/>
                  <Button name="Security"/>
                  <Button name="Sign Out"/>
                  <button class="btn" @click="closeModal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Button from './button.vue'
  import { onMounted, onUnmounted, ref } from 'vue';
  import { onClickOutside } from '@vueuse/core';
  const emits = defineEmits(['update:modelValue']);
  const closeModal = () => {
    emits('update:modelValue', false);
  };

  const userModalRef = ref(null)
  const handleClose = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };
  onClickOutside(userModalRef,closeModal);
  onMounted(() => {
    document.addEventListener('keyup', handleClose);
  });

  onUnmounted(() => {
    document.removeEventListener('keyup', handleClose);
  });
</script>

<style lang="css" scoped>
.btn{
  padding: 3px;
  border: none;
  margin-left: 11px;
  background-color: transparent;
  color: #263b7e;
  font-weight: 500;
}
</style>