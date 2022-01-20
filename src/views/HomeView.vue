<template>
  <div class="bg-primary-500 dark:bg-gray-900 h-screen">
    <div class="max-w-4xl mx-auto flex flex-col justify-between h-full">
      <div class="flex justify-end p-5">
        <ToggleButton @click="toggleTheme" v-model="checked"
          >Mode gelap</ToggleButton
        >
      </div>
      <div>
        <header class="text-gray-100 dark:text-gray-200 text-center">
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
            <i
              class="
                bi bi-box-arrow-up-right
                text-primary-300
                dark:text-gray-400
              "
            ></i>
          </FooterLink>
        </div>
        <span class="hidden sm:block">|</span>
        <div>
          <FooterLink href="https://github.com/btrianurdin/new-kbbi-api">
            API source
            <i
              class="
                bi bi-box-arrow-up-right
                text-primary-300
                dark:text-gray-400
              "
            ></i>
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
  data () {
    return {
      entryWord: '',
      checked: ''
    }
  },
  methods: {
    search () {
      this.$router.push({
        name: 'entry',
        params: { entryName: this.entryWord }
      })
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
    if (document.documentElement.classList.contains('dark')) {
      this.checked = true
    } else {
      this.checked = false
    }
  }
}
</script>
