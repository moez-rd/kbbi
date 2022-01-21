<template>
  <section>
    <ul class="py-2 text-gray-800 dark:text-gray-300 px-12 sm:px-16 lg:px-0">
      <li v-for="(result, id) in data" :key="id" class="py-5">
        <h2 class="text-3xl">{{ result.lema[0] }}</h2>
        <h3 class="text-lg text-gray-500">{{ result.lema[1] }}</h3>
        <ol class="mt-2 list-decimal">
          <li v-for="(arti, id) in result.arti" :key="id" class="">
            <span
              class="
                text-primary-500
                dark:text-primary-400
                font-semibold
                italic
              ">{{ arti.kelas_kata }}</span> <span>{{ arti.deskripsi[0] }}</span> <span class="text-gray-400 dark:text-gray-500 italic">{{ arti.deskripsi[1] }}</span>
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
