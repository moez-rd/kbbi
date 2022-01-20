<template>
  <main
    class="
      flex flex-col
      justify-between
      overflow-y-auto
      h-screen
      scroll-smooth
      scrollbar-track-gray-200 dark:scrollbar-track-gray-900 scrollbar-thumb-primary-300 dark:scrollbar-thumb-gray-700 lg:scrollbar-thin
      bg-gray-200
      dark:bg-gray-900
    "
  >
    <slot></slot>
  </main>
</template>
