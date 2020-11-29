<template>
  <section class="relative bg-primary px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-12 pb-40">
    <div class="text-center">
      <h2 class="text-5xl leading-tight font-bold text-white">
        150 litrów
      </h2>
    </div>

    <div class="flex flex-col md:flex-row mt-12 items-center justify-between">
      <div class="w-full md:w-1/2">
        <rates-image class="w-full" />
      </div>

      <div class="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 md:pr-48 text-white">
        <p>
          Tyle wody zużywasz dziennie - to aż <span class="font-bold">54750 litrów</span> rocznie.
        </p>

        <ul class="mt-6">
          <li>
            <div class="flex items-center mb-4">
              <check-mark-image class="w-5" />
              <span class="ml-2">
                Ograniczając użycie tylko o <span class="font-bold">5%</span> zmiejszysz zapotrzebowanie na wode o prawie <span class="font-bold">3000 litrów</span>
              </span>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <check-mark-image class="w-5" />
              <span class="ml-2">
                Czy wiesz że dzieki użyciu wody deszczowej do spłukiwania WC możesz oszczedzić rocznie <span class="font-bold">16425</span> litrów wody?
              </span>
            </div>
          </li>
        </ul>

        <nuxt-link to="/app" class="inline-block px-6 py-4 bg-white text-primary rounded-md mt-8">
          SPRAWDŹ INNE PORADY
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import CheckMarkImage from '~/assets/home/check-mark.svg?inline'
import RatesImage from '~/assets/home/rates.svg?inline'

export default {
  components: {
    CheckMarkImage,
    RatesImage
  }
}
</script>
