<template>
  <section class="font-sans text-sm rounded w-full max-w-xl mx-auto mb-8 px-8 pt-6 pb-8 font-bold">
    <div class="border-b-2 border-gray-200 mb-6 pb-6">
      <p class="text-black">
        Sugerowana pojemność zbiornika
      </p>
      <span class="text-blue-500 text-2xl">
        {{ formatNumber(results.suggestedCapacity) }} litry
      </span>
    </div>
    <div class="border-b-2 border-gray-200 mb-6 pb-6">
      <p class="text-black">
        Szacowane zapotrzebowanie na wodę
      </p>
      <span class="text-blue-500 text-2xl">
        {{ formatNumber(results.estimatedUsage) }} litry / rok
      </span>
    </div>
    <div>
      <p class="text-black">
        Szacowana ilość zebranej deszczówki
      </p>
      <span class="text-blue-500 text-2xl">
        {{ formatNumber(results.rainfallCollected) }} litry / rok
      </span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    results: {
      type: Object,
      required: true
    }
  },

  methods: {
    formatNumber (val) {
      return Math.ceil(val.toFixed(2))
    }
  }
}
</script>
