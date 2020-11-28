<template>
  <header
    id="navbar"
    class="w-full bg-transparent fixed top-0 left-0 z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-6"
  >
    <nav class="flex items-center justify-between">
      <div class="">
        <a href="/fair-rate-mortgage/">
          <logo-image />
        </a>
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
          <li><a href="#" class="sm:px-4 py-2 block">Rates</a></li>
          <li><a href="#" class="sm:px-4 py-2 sm:hidden lg:block">About Us</a></li>
          <li><a href="#" class="sm:px-4 py-2 sm:hidden md:block">Resources</a></li>
          <li><a href="#" class="sm:px-4 py-2 sm:hidden md:block">FAQs</a></li>
          <li><a href="#" class="sm:px-4 py-2 block text-blue-600 border border-gray-400 rounded-lg ml-4">Login</a></li>
          <li><a href="#" class="sm:px-4 py-2 block bg-blue-600 text-white rounded-lg ml-4">Get Started</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import LogoImage from '~/assets/logo.svg?inline'

export default {
  components: {
    LogoImage
  }
}
</script>
