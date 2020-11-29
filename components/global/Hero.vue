<template>
  <section
    class="relative bg-blue-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-32 pb-48 sm:pb-64 md:pt-40 md:pb-48 lg:pt-40 2xl:pt-56 text-center sm:text-left"
  >
    <div>
      <div class="relative w-full sm:w-2/3 lg:w-1/3 z-10">
        <h1 class="text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold mb-10">
          Co zdrobić żeby woda nie przeciekała nam przez palce?
        </h1>
        <p class="text-base leading-7 text-gray mt-4 mb-10 font-light pr-8">
          Każdy Polak korzystający z sieci wodociągowej zużywa około <span class="font-bold">150</span> litrów wody dziennie. Rozsądne gospodarowanie w obliczu zmniejszających się zasobów to coś, czemu należałoby poświęcić więcej uwagi zawczasu.
        </p>
        <nuxt-link to="/app" class="w-full block sm:inline-block sm:w-auto px-6 py-4 bg-primary text-white mt-8 rounded-md">
          POLICZ OSZCZĘDNOŚCI
        </nuxt-link>
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
