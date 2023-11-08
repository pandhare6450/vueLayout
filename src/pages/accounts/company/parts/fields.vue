<template>
  <div
    class="FormRow FormRow--layout--inline FormRow--hasName Box-root Padding-horizontal--20 Padding-vertical--16 Flex-flex Flex-alignItems--flexStart Flex-direction--row"
    style="padding-left: 4px;">
    <div class="FormRow-start Box-root Padding-right--12 Padding-vertical--4" style="flex: 1 0 25%;">
      <div class="Box-root Flex-flex">
        <div class="Box-root">
          <span
            class="Text-color--dark Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
            <label class="FormRow-label" for="email">
              <span>{{ name  }}</span>
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
                <div class="Box-root Padding-horizontal--8 Padding-vertical--4" style="margin-top: 1px;">{{ val }}</div>
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
  val: String
});

</script>
