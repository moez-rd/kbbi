<template>
  <div class="h-screen flex flex-col">
    <nav class="bg-primary-500 py-4">
      <div class="max-w-4xl mx-auto">
        <router-link
          class="text-xl text-primary-50 font-black"
          :to="{ name: 'home' }"
          >KBBI</router-link
        >
      </div>
    </nav>

    <main
      class="
        flex flex-col
        justify-between
        overflow-y-auto
        h-screen
        scroll-smooth
        scrollbar-track-gray-50 scrollbar-thumb-primary-300 scrollbar-thin
      "
    >
      <header class="mt-10">
        <div class="max-w-4xl mx-auto pt-10 pb-5 border-b-2">
          <SearchBar v-model="entryWord" @submit="search" />
        </div>
      </header>
      <div class="max-w-4xl mx-auto pb-20">
        <Spinner v-if="wait" />
        <p v-else-if="error" class="text-gray-400 text-lg cursor-default">
          Terjadi kesalahan atau data tidak ditemukan
        </p>
        <EntrySection v-else :data="results" />
      </div>
      <Footer>
        <p class="text-gray-700 text-sm font-bold">
          Built with love by Moez |
          <a
            href="https://github.com/moez-rd/kbbi"
            class="hover:underline"
            target="_blank"
            ><i class="bi bi-github"></i> Github repository
            <i class="bi bi-box-arrow-up-right text-gray-400"></i
          ></a>
          |
          <a
            href="https://github.com/btrianurdin/new-kbbi-api"
            class="hover:underline"
            target="_blank"
            >API source <i class="bi bi-box-arrow-up-right text-gray-400"></i
          ></a>
        </p>
      </Footer>
    </main>
  </div>
</template>

<script>
import Spinner from '@/components/SpinnerLoader.vue'
import EntrySection from '@/components/EntrySection.vue'
import SearchBar from '@/components/SearchBar.vue'
import Footer from '@/components/TheFooter.vue'

export default {
  name: 'EntryView',
  components: { EntrySection, Footer, SearchBar, Spinner },
  data () {
    return {
      wait: false,
      error: false,
      results: null,
      entryWord: this.$route.params.entryName
    }
  },
  methods: {
    fetchData () {
      this.error = false
      this.wait = true
      this.axios
        .get(`https://new-kbbi-api.herokuapp.com/cari/${this.entryWord}`)
        .then((response) => {
          this.wait = false
          this.results = response.data.data
          console.log(response.data)
        })
        .catch(() => {
          console.log('Data tidak ditemukan')
          this.wait = false
          this.error = true
        })
    },
    search () {
      this.$router.replace({
        name: 'entry',
        params: { entryName: this.entryWord }
      })
      this.fetchData()
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style>
</style>
