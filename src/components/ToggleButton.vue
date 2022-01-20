<template>
  <div class="flex items-center justify-center" :class="Class">
    <label for="toggleB" class="flex items-center cursor-pointer">
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input
          type="checkbox"
          id="toggleB"
          class="sr-only"
          :checked="modelValue"
          @input="$emit('update:modelValue', $event.target.checked)"
        />
        <!-- line -->
        <div class="block bg-primary-700 dark:bg-gray-700 w-10 h-6 rounded-full"></div>
        <!-- dot -->
        <div
          class="
            dot
            absolute
            left-1
            top-1
            bg-primary-100
            w-4
            h-4
            rounded-full
            transition
          "
        ></div>
      </div>
      <!-- label -->
      <div class="ml-3 text-gray-100 dark:text-gray-300 text-sm font-medium"><slot></slot></div>
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

<style>
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  @apply bg-gray-100
}
</style>
