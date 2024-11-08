<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from './type';
import { getPrefixCls, getPrefixPascal } from '@arch-design/arch-ui/_utils';
import { throttle } from 'lodash-es';
import AIcon from '../Icon/Icon.vue';
import { computed, inject, ref } from 'vue';
import { BUTTON_GROUP_CTX_KEY } from './constants';

const compName = 'button';
const compPrefix = getPrefixCls(compName);

defineOptions({
  name: getPrefixPascal(compName),
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  type: 'primary',
});

const emit = defineEmits<ButtonEmits>();

const slots = defineSlots();

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0);
const size = computed(() => ctx?.size ?? props?.size ?? '');
const type = computed(() => ctx?.type ?? props?.type ?? '');
const disabled = computed(() => ctx?.disabled || props?.disabled || false);
const _ref = ref<HTMLButtonElement | void>();
const iconStyle = computed(() => ({ marginRight: slots.default ? '6px' : '0px' }));

const handleBtnClick = (e: MouseEvent) => emit('click', e);

const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);

defineExpose<ButtonInstance>({
  ref: _ref,
  disabled,
  size,
  type,
});
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    :type="tag === 'button' ? nativeType : 0"
    :disabled="disabled || loading ? true : 0"
    :class="{
      [`${compPrefix}`]: compPrefix,
      [`${compPrefix}--${type}`]: type,
      [`${compPrefix}--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="(e: MouseEvent) => (useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e))"
  >
    <template v-if="loading">
      <slot name="loading">
        <a-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          size="1x"
          :style="iconStyle"
          spin
        />
      </slot>
    </template>
    <template v-else-if="icon">
      <a-icon :icon="icon" :style="iconStyle" size="1x" />
    </template>
    <slot></slot>
  </component>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
