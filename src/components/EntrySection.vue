<template>
  <section>
    <ul class="py-2">
      <li v-for="(result, id) in data" :key="id" class="py-5">
        <h2 class="text-3xl">{{ result.lema }}</h2>
        <ol class="mt-2 list-decimal">
          <li v-for="(arti, id) in result.arti" :key="id" class="">
            <ul class="mt-2">
              <li class="text-gray-400 text-sm">{{ arti.kelas_kata }}</li>
              <li>{{ arti.deskripsi }}</li>
            </ul>
          </li>
        </ol>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'EntrySection',
  props: ['data']
}
</script>

<style>
</style>
