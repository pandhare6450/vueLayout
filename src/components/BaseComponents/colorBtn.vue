<template>
  <div
    class="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex" style="margin:5px">
    <div class="PressableCore-base Box-root">
      <button @click.prevent="sendData"
        :type="type"
        v-bind:class="['UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto', { 'active-class': isActive }]"
        :disabled="disabled" style="color: rgb(255, 255, 255);">
        <div class="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
          style="position: relative;">
          <div class="TextAligner Box-root" style="line-height: 20px; font-size: 14px; flex: 0 0 auto;"></div>
          <div class="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center"
            style="width: 100%; line-height: 0; flex: 1 1 auto;">
            <span
              class="Button-label Text-color--white Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
              style="margin-top: -1px;">
              <span>{{ name }}</span>
            </span>
          </div>
        </div>
      </button>
    </div>
    <div class="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
  id: {
    type: String,
    default: null,
  },
  isActive: {
    type: Boolean,
    default: false,
  }
});
import { getCurrentInstance, ref } from 'vue';
const emit = defineEmits(['saveClick',])
const sendData = () => {
  emit('saveClick', props.id??'')
}
const instance = getCurrentInstance();
const globalColor = ref(instance.appContext.config.globalProperties.$globalColorVariable);

</script>

<style lang="css" scoped>
button {
  background-color: v-bind(globalColor);
}

button[disabled] {
  opacity: 0.6
}
</style>