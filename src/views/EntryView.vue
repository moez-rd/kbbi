<template>
  <div class="flex h-screen flex-col">
    <Navbar>
      <router-link class="text-xl font-black text-primary-50 dark:text-gray-300" :to="{ name: 'home' }">KBBI</router-link>

      <ToggleButton @click="toggleTheme" v-model="checked">Mode gelap</ToggleButton>
    </Navbar>
    <Main>
      <div>
        <header class="mt-10">
          <div class="mx-auto max-w-4xl border-b-2 border-gray-300 pb-5 dark:border-gray-800 sm:pt-10">
            <SearchBar v-model="entryWord" @submit="search" />
          </div>
        </header>
        <div class="mx-auto max-w-4xl pb-20">
          <Spinner v-if="wait" />
          <p v-else-if="error" class="mt-20 cursor-default px-4 text-center text-lg text-gray-400 dark:text-gray-600">Terjadi kesalahan atau data tidak ditemukan</p>
          <EntrySection v-else :data="results" />
        </div>
      </div>
      <Footer>
        <div>
          <p>Built with love by Moez</p>
        </div>
        <span class="hidden sm:block">|</span>
        <div>
          <FooterLink href="https://github.com/moez-rd/kbbi">
            <i class="bi bi-github"></i>
            Github repository
            <i class="bi bi-box-arrow-up-right text-gray-400"></i>
          </FooterLink>
        </div>
        <span class="hidden sm:block">|</span>
        <div>
          <FooterLink href="https://github.com/btrianurdin/new-kbbi-api">
            API source
            <i class="bi bi-box-arrow-up-right text-gray-400"></i>
          </FooterLink>
        </div>
      </Footer>
    </Main>
  </div>
</template>

<script>
import Spinner from '@/components/SpinnerLoader.vue'
import EntrySection from '@/components/EntrySection.vue'
import SearchBar from '@/components/SearchBar.vue'
import Footer from '@/components/EntryFooter.vue'
import FooterLink from '@/components/FooterLink.vue'
import Navbar from '@/components/EntryNavbar.vue'
import Main from '@/components/EntryMain.vue'
import ToggleButton from '@/components/ToggleButton.vue'

export default {
  name: 'EntryView',
  components: {
    EntrySection,
    Footer,
    FooterLink,
    SearchBar,
    Spinner,
    Navbar,
    Main,
    ToggleButton
  },
  data() {
    return {
      wait: false,
      error: false,
      results: null,
      entryWord: this.$route.params.entryName,
      checked: localStorage.theme === 'dark'
    }
  },
  methods: {
    fetchData() {
      this.error = false
      this.wait = true
      this.axios
        .get(`https://new-kbbi-api.herokuapp.com/cari/${this.entryWord}`)
        .then((response) => {
          this.wait = false
          this.results = response.data.data
          this.manageResults(response.data.data)
          console.log(response.data)
        })
        .catch(() => {
          console.log('Data tidak ditemukan')
          this.wait = false
          this.error = true
        })
    },
    manageResults(results) {
      results.forEach((data) => {
        data.arti.forEach((meaning) => {
          // shorten word class
          // Example: before -> 'adv[Adverbia: kata yang menjelaskan verba, adjektiva, adverbia lain, atau kalimat]'
          //          will be -> 'adv'
          const classIndex = meaning.kelas_kata.indexOf('[')
          meaning.kelas_kata = meaning.kelas_kata.substring(0, classIndex)

          // separate between description and examples
          // Example: before -> 'ketika, saat: -- engkau datang, saya sedang mandi'
          //          will be -> ['ketika, saat:', '-- engkau datang, saya sedang mandi']
          const desIndex = meaning.deskripsi.indexOf(':')
          let description = meaning.deskripsi
          let example = ''
          if (desIndex !== -1) {
            description = meaning.deskripsi.substring(0, desIndex + 1)
            example = meaning.deskripsi.substring(desIndex + 1)
          }
          meaning.deskripsi = [description, example]
        })

        // separate between entries with additional words in the entry
        // Example: before -> 'ma.kin bentuk tidak baku: mangkin, semakin'
        //          will be -> ['ma.kin', 'bentuk tidak baku: mangkin, semakin']
        const index = data.lema.indexOf(' ')
        let entry = data.lema
        let additionalEntry = ''
        if (index !== -1) {
          entry = data.lema.substring(0, index)
          additionalEntry = data.lema.substring(index)
        }
        data.lema = [entry, additionalEntry]
      })
    },
    search() {
      this.$router.replace({
        name: 'entry',
        params: { entryName: this.entryWord }
      })
      this.fetchData()
    },
    toggleTheme() {
      if (this.checked) {
        localStorage.theme = 'light'
      } else {
        localStorage.theme = 'dark'
      }
      this.setTheme()
    },
    setTheme() {
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  },
  mounted() {
    this.setTheme()
    this.fetchData()
  },
  watch: {
    setTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>

<style></style>
