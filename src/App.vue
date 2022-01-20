<template>
  <Header>
    <HeaderTitle />
    <p class="font-semibold tracking-wide">_By Moez</p>
  </Header>

  <Main>
    <SearchBar v-model="searchWord" @submit="search" />

    <article class="mt-10">
      <section v-if="wait" class="flex flex-col items-center mt-28">
        <Spinner />
        <p class="text-gray-400 text-sm font-light mt-1">Tunggu sebentar</p>
      </section>

      <section v-else-if="results">
        <ul class="py-2">
          <li v-for="(result, id) in results" :key="id" class="py-5">
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

      <section
        v-else
        class="flex flex-col items-center text-center p-28 text-gray-300"
      >
        <div class="text-7xl mb-4"><i class="bi bi-search"></i></div>
        <p class="text-5xl">Silakan masukkan kata di pencarian</p>
      </section>
    </article>
  </Main>

  <Footer>
    <p class="text-gray-200 text-sm font-semibold">
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
  </Footer>
</template>

<script>
import Header from '@/components/TheHeader.vue'
import Main from '@/components/TheMain.vue'
import Footer from '@/components/TheFooter.vue'
import HeaderTitle from '@/components/HeaderTitle.vue'
import SearchBar from '@/components/SearchBar.vue'
import Spinner from '@/components/SpinnerLoader.vue'

export default {
  name: 'App',
  components: { Header, Main, Footer, HeaderTitle, SearchBar, Spinner },
  data () {
    return {
      searchWord: '',
      wait: false,
      results: null,
      isLoading: true
    }
  },
  methods: {
    search () {
      this.wait = true
      console.log(this.wait)
      console.log(this.searchWord)
      this.axios
        .get(
                    `https://new-kbbi-api.herokuapp.com/cari/${this.searchWord}`
        )
        .then((response) => {
          this.wait = false
          this.results = response.data.data
          console.log(response.data)
        })
        .catch(() => {
          console.log('Data tidak ditemukan')
        })
    }
  }
}
</script>
