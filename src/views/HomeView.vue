<template>
  <div class="bg-primary-500 h-screen">
    <div class="max-w-4xl mx-auto flex flex-col justify-between h-full">
      <header class="text-gray-100 pt-60 text-center">
        <HeaderTitle />
      </header>
      <main class="mb-60">
        <SearchBar v-model="entryWord" @submit="search" />
      </main>

      <footer class="py-8 text-center">
        <p class="text-gray-200 text-sm font-bold">
          Built with love by Moez |
          <a
            href="https://github.com/moez-rd/kbbi"
            class="hover:underline"
            target="_blank"
            ><i class="bi bi-github"></i> Github repository
            <i class="bi bi-box-arrow-up-right text-primary-300"></i
          ></a>
          |
          <a
            href="https://github.com/btrianurdin/new-kbbi-api"
            class="hover:underline"
            target="_blank"
            >API source <i class="bi bi-box-arrow-up-right text-primary-300"></i
          ></a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'HomeView',
  components: { HeaderTitle, SearchBar },
  data () {
    return {
      entryWord: ''
    }
  },
  methods: {
    search () {
      this.$router.push({ name: 'entry', params: { entryName: this.entryWord } })
    }
  }
}
</script>
