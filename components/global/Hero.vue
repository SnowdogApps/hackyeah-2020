<template>
  <section
    class="relative bg-blue-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-32 pb-48 sm:pb-64 md:pt-40 md:pb-48 lg:pt-40 xl:pb-64 2xl:pt-56 2xl:pb-96 text-center sm:text-left"
  >
    <div>
      <div class="relative w-full sm:w-2/3 lg:w-1/2 z-10">
        <h1 class="text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold">
          Fair Rate lets you find the fairrest
          rate.
        </h1>
        <p class="text-base leading-snug text-gray-700 mt-4">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
        <a href="#" class="w-full block sm:inline-block sm:w-auto px-6 py-4 bg-blue-600 text-white rounded-lg mt-8">Find the Fair Rate</a>
      </div>

      <div class="w-full absolute bottom-0 right-0">
        <hero-image />
      </div>
    </div>
  </section>
</template>

<script>
import HeroImage from '~/assets/home/hero.svg?inline'

export default {
  components: {
    HeroImage
  }
}
</script>
