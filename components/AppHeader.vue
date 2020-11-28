<template>
  <header
    id="navbar"
    class="w-full bg-transparent fixed top-0 left-0 z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-6"
  >
    <nav class="flex items-center justify-between">
      <div class="">
        <nuxt-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="188" height="39">
            <text
              transform="translate(87 29)"
              fill="#454f5b"
              font-size="24"
            >
              <tspan x="0" y="0">FairRate</tspan>
            </text>
            <path d="M54 39H0L27 6l27 33zM23 22v11h8V22h-8z" fill="#4ad5f6" />
            <path d="M54 0L40 16h27L54 0" fill="#95cdb1" />
            <path d="M69 18L55 34h27L69 18" fill="#ffc48b" /></svg>
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
          <li><a href="#" class="sm:px-4 py-2 block">Rates</a></li>
          <li><a href="#" class="sm:px-4 py-2 sm:hidden lg:block">About Us</a></li>
          <li><a href="#" class="sm:px-4 py-2 sm:hidden md:block">Resources</a></li>
          <li><a href="#" class="sm:px-4 py-2 sm:hidden md:block">FAQs</a></li>
          <li>
            <nuxt-link to="/login" class="sm:px-4 py-2 block text-blue-600 border border-gray-400 rounded-lg ml-4">
              Login
            </nuxt-link>
          </li>
          <li><nuxt-link to="/register" class="sm:px-4 py-2 block bg-blue-600 text-white rounded-lg ml-4">Get Started</nuxt-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>
