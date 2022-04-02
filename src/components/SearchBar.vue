<template>
  <div class="py-4 px-3 sm:px-10">
    <form @submit.prevent="this.$emit('submit')">
      <div class="flex items-center rounded-md bg-gray-100 p-1 dark:bg-gray-800 dark:text-gray-300">
        <div class="ml-3"><i class="bi bi-search"></i></div>
        <input class="w-full border-none bg-transparent focus:ring-0" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" placeholder="Cari" type="search" />
        <button class="rounded-md bg-primary-500 px-4 py-2 text-primary-50 dark:bg-gray-700" type="submit">Cari</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: ['modelValue'],
  emits: ['submit', 'update:modelValue']
}
</script>
