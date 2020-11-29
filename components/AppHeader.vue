<template>
  <header
    id="navbar"
    :class="['w-full bg-transparent fixed top-0 left-0 z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-6', { 'header-condensed': headerCondensed }]"
  >
    <nav class="flex items-center justify-between">
      <div class="">
        <nuxt-link to="/">
          <logo-image />
        </nuxt-link>
      </div>

      <div class="block sm:hidden">
        <button type="button" class="navbar-toggler">
          <span class="navbar-toggler-bar" />
          <span class="navbar-toggler-bar" />
          <span class="navbar-toggler-bar" />
        </button>
      </div>

      <div class="hidden sm:flex">
        <ul class="flex flex-col sm:flex-row">
          <nuxt-link
            v-for="(item, index) in items"
            :key="index"
            :to="item.to"
            class="sm:px-4 py-2 block"
          >
            {{ item.text }}
          </nuxt-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import LogoImage from '~/assets/logo.svg?inline'

const items = [
  {
    text: 'Kalkulator',
    to: '/app'
  },
  {
    text: 'Partnerzy',
    to: '/partners'
  },
  {
    text: 'Logowanie',
    to: '/login'
  }
]

export default {
  components: {
    LogoImage
  },

  data: () => ({
    items,
    headerCondensed: false
  }),

  mounted () {
    //  TODO: remove listener beforeDestoryed / throttle this
    window.addEventListener('scroll', () => {
      const { scrollY } = window
      this.headerCondensed = scrollY > 50
    })
  },

  methods: {

  }
}
</script>

<style>
.header-condensed {
  @apply bg-white shadow;
}
</style>
