<template>
  <div class="h-screen bg-primary-500 dark:bg-gray-900">
    <div class="mx-auto flex h-full max-w-4xl flex-col justify-between">
      <div class="flex justify-end p-5">
        <ToggleButton @click="toggleTheme" v-model="checked">Mode gelap</ToggleButton>
      </div>
      <div>
        <header class="text-center text-gray-100 dark:text-gray-200">
          <HeaderTitle />
        </header>
        <main class="mt-7 sm:mt-16">
          <SearchBar v-model="entryWord" @submit="search" />
        </main>
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
            <i class="bi bi-box-arrow-up-right text-primary-300 dark:text-gray-400"></i>
          </FooterLink>
        </div>
        <span class="hidden sm:block">|</span>
        <div>
          <FooterLink href="https://github.com/btrianurdin/new-kbbi-api">
            API source
            <i class="bi bi-box-arrow-up-right text-primary-300 dark:text-gray-400"></i>
          </FooterLink>
        </div>
      </Footer>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle.vue'
import SearchBar from '@/components/SearchBar.vue'
import Footer from '@/components/HomeFooter.vue'
import FooterLink from '@/components/FooterLink.vue'
import ToggleButton from '@/components/ToggleButton.vue'

export default {
  name: 'HomeView',
  components: { HeaderTitle, SearchBar, Footer, FooterLink, ToggleButton },
  data() {
    return {
      entryWord: '',
      checked: localStorage.theme === 'dark'
    }
  },
  methods: {
    search() {
      this.$router.push({
        name: 'entry',
        params: { entryName: this.entryWord }
      })
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
  }
}
</script>
