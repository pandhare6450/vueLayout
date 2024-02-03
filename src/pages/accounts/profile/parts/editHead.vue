<template>
   <div
      class="Box-root Padding-bottom--16 Flex-flex Flex-alignItems--center Flex-justifyContent--spaceBetween Box-divider--light-bottom-1">
      <span
        class="Text-color--dark Text-fontSize--28 Text-fontWeight--bold Text-lineHeight--32 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
        <span>Profile</span>
      </span>
      <span class="allErrs" id="netErr"></span>
      <div class="ContentHeader-end Box-root Margin-left--16 Flex-flex Flex-alignItems--flexStart">
        <div class="ButtonGroup Box-root" style="pointer-events: none;">
          <div
            class="Box-root Flex-flex Flex-alignItems--center Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
            style="margin-left: -8px; margin-top: -8px;">
            <div class="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8" style="pointer-events: auto;">
              <div
                class="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex"
                style="background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;">
                <div class="PressableCore-base Box-root">
                  <button
                    class="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto"
                    type="button" style="color:rgb(255, 255, 255);" @click="isShowFun(true)">
                    <div class="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                      style="position: relative;">
                      <div class="TextAligner Box-root" style="line-height: 20px; font-size: 14px; flex: 0 0 auto;"></div>
                      <div
                        class="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center"
                        style="width: 100%; line-height: 0; flex: 1 1 auto;">
                        <span
                          class="Button-label Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                          style="margin-top: -1px;">
                          <span>Cancel</span>
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
                </div>
              </div>
            </div>
            <div class="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8" style="pointer-events: auto;">
              <div
                class="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex"
                style="color:rgb(255, 255, 255);background-color:#7545FF; box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;">
                <div class="PressableCore-base Box-root">
                  <button
                    class="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto"
                    type="button" style="color:rgb(255, 255, 255);background-color: #263B7E;" @click="handleSave()">
                    <div class="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                      style="position: relative;">
                      <div class="TextAligner Box-root" style="line-height: 20px; font-size: 14px; flex: 0 0 auto;"></div>
                      <div
                        class="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center"
                        style="width: 100%; line-height: 0; flex: 1 1 auto;">
                        <span
                          class="Button-label Text-color--white Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                          style="margin-top: -1px;">
                          <span>Save</span>
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { inject } from 'vue'
const user = inject('user')
const isShowFun = inject('isShowFun')
const handleSave = inject('handleSave')
</script>

<style lang="scss" scoped>

</style>