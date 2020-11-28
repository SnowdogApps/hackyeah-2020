<template>
  <footer class="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-12 pb-10 text-center sm:text-left">
    <div class="flex flex-col sm:flex-row sm:flex-wrap">
      <div class="sm:w-1/2 lg:w-1/5">
        <h6 class="text-sm text-gray-600 font-bold uppercase">
          Company
        </h6>
        <ul class="mt-4">
          <li><a href="#">Resources</a></li>
          <li class="mt-2">
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>

      <div class="mt-8 sm:w-1/2 sm:mt-0 lg:w-1/5 lg:mt-0">
        <h6 class="text-sm text-gray-600 font-bold uppercase">
          Legal
        </h6>
        <ul class="mt-4">
          <li><a href="#">NMLS Consumer Access</a></li>
          <li class="mt-2">
            <a href="#">Privacy Policy</a>
          </li>
          <li class="mt-2">
            <a href="#">Terms of Use</a>
          </li>
          <li class="mt-2">
            <a href="#">Disclosures & Licensing</a>
          </li>
        </ul>
      </div>

      <div class="mt-8 sm:w-1/2 sm:mt-12 lg:w-1/5 lg:mt-0">
        <h6 class="text-sm text-gray-600 font-bold uppercase">
          Contact
        </h6>
        <ul class="mt-4">
          <li><a href="#">hello@fairrate.com</a></li>
          <li class="mt-2">
            <a href="#">+62 202 555 0117</a>
          </li>
        </ul>
      </div>

      <div class="mt-12 sm:w-1/2 lg:w-2/5 lg:mt-0 lg:pl-12">
        <div>
          <logo-image />
        </div>

        <p class="text-base text-gray-600 mt-4">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh.
        </p>
      </div>
    </div>

    <div class="mt-16">
      <hr class="mb-8">
      <p class="text-sm text-gray-600">
        2020 © Wateca. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import LogoImage from '~/assets/logo.svg?inline'

export default {
  components: {
    LogoImage
  }
}
</script>
