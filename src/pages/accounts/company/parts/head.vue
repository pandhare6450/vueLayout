<template>
   <div class="Box-root Padding-bottom--16 Flex-flex Flex-alignItems--center Flex-justifyContent--spaceBetween Box-divider--light-bottom-1">
    <span class="Text-color--dark Text-fontSize--28 Text-fontWeight--bold Text-lineHeight--32 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
      <span>Profile </span>
    </span>
    <span class="allErrs"  id="greenMsg"></span>
    <div class="Box-root">
      <div class="ContentHeader-end Box-root Margin-left--16 Flex-flex Flex-alignItems--flexStart">
        <div class="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex" style="background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;">
          <div class="PressableCore-base Box-root">
            <button class="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto" type="button" @click="isShowFun(false)">
              <div class="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--rowReversed" style="position: relative;">
                <div class="TextAligner Box-root" style="line-height: 20px; font-size: 14px; flex: 0 0 auto;"></div>
                <div class="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--rowReversed Flex-justifyContent--center" style="width: 100%; line-height: 0; flex: 1 1 auto;">
                  <div class="Box-root Padding-left--8">
                    <div aria-hidden="true" class="SVGInline SVGInline--cleaned SVG Icon Icon--edit Button-icon Icon-color Icon-color--gray600 Box-root Flex-flex" style="transform: translateY(1.1px);">
                      <svg aria-hidden="true" class="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--edit-svg Button-icon-svg Icon-color-svg Icon-color--gray600-svg" height="12" width="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.194 4.28L11.72.805l.087-.087a2.456 2.456 0 1 1 3.473 3.473zm-1.415 1.414l-9.264 9.264L0 16l1.042-4.515 9.264-9.264z" fill-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <span class="Button-label Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block" style="margin-top: -1px;">
                    <span>Edit</span>
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
</template>

<script setup>
import { inject } from 'vue'
const user = inject('user')
const isShowFun = inject('isShowFun')
</script>

<style lang="scss" scoped>

</style>