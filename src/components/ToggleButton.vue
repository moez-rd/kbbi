<template>
  <div class="flex items-center justify-center" :class="Class">
    <label for="toggleB" class="flex cursor-pointer items-center">
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input type="checkbox" id="toggleB" class="sr-only" :checked="modelValue" @input="$emit('update:modelValue', $event.target.checked)" />
        <!-- line -->
        <div class="block h-6 w-10 rounded-full bg-primary-700 dark:bg-gray-700"></div>
        <!-- dot -->
        <div class="dot absolute left-1 top-1 h-4 w-4 rounded-full bg-primary-100 transition"></div>
      </div>
      <!-- label -->
      <div class="ml-3 text-sm font-medium text-gray-100 dark:text-gray-300">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: ['modelValue', 'Class'],
  emits: ['update:modelValue']
}
</script>

<style lang="postcss">
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  @apply bg-gray-100;
}
</style>
