<template>
  <footer class="border-t-2 border-gray-300 dark:border-gray-800 py-8 w-full">
    <div
      class="
        max-w-4xl
        mx-auto
        flex flex-col
        sm:flex-row
        text-gray-700
        dark:text-gray-400
        text-sm
        font-bold
        justify-center
        sm:justify-start
        items-center
        space-y-1
        sm:space-y-0 sm:space-x-2
      "
    >
      <slot></slot>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
</style>
