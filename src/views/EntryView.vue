<template>
  <div class="h-screen flex flex-col">
    <Navbar>
      <router-link
        class="text-xl text-primary-50 dark:text-gray-300 font-black"
        :to="{ name: 'home' }"
        >KBBI</router-link
      >

      <ToggleButton @click="toggleTheme" v-model="checked"
        >Mode gelap</ToggleButton
      >
    </Navbar>
    <Main>
      <div>
        <header class="mt-10">
          <div
            class="
              max-w-4xl
              mx-auto
              sm:pt-10
              pb-5
              border-b-2
              dark:border-gray-800
            "
          >
            <SearchBar v-model="entryWord" @submit="search" />
          </div>
        </header>
        <div class="max-w-4xl mx-auto pb-20">
          <Spinner v-if="wait" />
          <p
            v-else-if="error"
            class="
              text-gray-400
              dark:text-gray-600
              text-lg
              cursor-default
              text-center
              px-4
              mt-20
            "
          >
            Terjadi kesalahan atau data tidak ditemukan
          </p>
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
  data () {
    return {
      wait: false,
      error: false,
      results: null,
      entryWord: this.$route.params.entryName,
      checked: ''
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
    },
    toggleTheme () {
      if (this.checked) {
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
      }
    }
  },
  mounted () {
    this.fetchData()
    if (document.documentElement.classList.contains('dark')) {
      this.checked = true
    } else {
      this.checked = false
    }
  }
}
</script>

<style>
</style>
