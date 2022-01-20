<template>
  <div class="py-4 px-10">
    <form @submit.prevent="this.$emit('submit')">
      <div class="flex items-center bg-gray-100 p-1 rounded-md">
        <div class="ml-3"><i class="bi bi-search"></i></div>
        <input
          class="w-full bg-transparent border-none focus:ring-0"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          placeholder="Cari"
          type="search"
        />
        <button
          class="bg-primary-500 px-4 py-2 rounded-md text-primary-50"
          type="submit"
        >
          Cari
        </button>
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
