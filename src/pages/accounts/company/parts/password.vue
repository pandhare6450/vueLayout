<template>
  <div
    class="FormRow FormRow--layout--inline Box-root Padding-horizontal--20 Padding-vertical--16 Flex-flex Flex-alignItems--flexStart Flex-direction--row"
    style="padding-left: 4px;">
    <div class="FormRow-start Box-root Padding-right--12 Padding-vertical--4" style="flex: 1 0 25%;">
      <div class="Box-root Flex-flex">
        <div class="Box-root">
          <span
            class="Text-color--dark Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
            <label class="FormRow-label">
              <span>Password</span>
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
                  class="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex"
                  style="background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;">
                  <div class="PressableCore-base Box-root">
                    <button onclick="letOpenPassword()"
                      class="btn js-btn-modal UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto"
                      type="button" style="color: rgb(60, 66, 87);padding-top:3px;padding-bottom:3px;"
                      id="page_section_profile_changepass_btn_admin">
                      <div class="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                        style="position: relative;">
                        <div class="TextAligner Box-root" style="line-height: 20px; font-size: 14px; flex: 0 0 auto;">
                        </div>
                        <div
                          class="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center"
                          style="width: 100%; line-height: 0; flex: 1 1 auto;">
                          <span
                            class="Button-label Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block">
                            <span>Change password…</span>
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
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>