<template>
  <div tabindex="-1" style="outline: none;">
    <div class="Box-root">
      <a role="menuitem" class="UnstyledLink ButtonLink Menu-item Flex-flex" href="javascript:void(0);">
        <div class="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--rowReversed" style="position: relative;">
          <div class="TextAligner Box-root" style="line-height: 20px; font-size: 14px; flex: 0 0 auto;">
          </div>
          <div
            class="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--rowReversed Flex-justifyContent--flexStart"
            style="line-height: 0; flex: 1 1 auto;">
            <span
              class="ButtonLink-label Text-color--blue Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
              style="margin-top: -1px;">
              <span
                class="Text-color--blue Text-align--left Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block">


                <div class="handleActive" >
                  {{ name }}</div>

              </span>
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
});
</script>

<style lang="scss" scoped></style>