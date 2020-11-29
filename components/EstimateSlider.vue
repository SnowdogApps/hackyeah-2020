<template>
  <section class="container mx-auto my-8 flex flex-col items-center">
    <input
      v-model="percent"
      type="range"
      min="0"
      max="100"
      class="lg:w-1/2 my-4 w-2/3"
    >

    <div class="text-4xl my-4 text-gray-600">
      <span class="font-bold">{{ percent }}%</span>  zebranej deszczówki
    </div>

    <div class="flex w-full flex-col lg:flex-row justify-center lg:space-x-20 space-y-10 lg:space-y-0 mt-16 lg:mt-8 items-center">
      <div class="w-52">
        <span class="block font-bold text-4xl mb-4">
          {{ garden }} litry
        </span>
        <span class="text-2xl font-light">
          wody na podlewanie ogrodu
        </span>
      </div>
      <div class="w-52">
        <span class="block font-bold text-4xl mb-4">
          {{ money }} zł
        </span>
        <span class="text-2xl font-light">
          zaoszczędzone rocznie
        </span>
      </div>
      <div class="w-52">
        <span class="block font-bold text-4xl mb-4">
          {{ deep }} m³
        </span>
        <span class="text-2xl font-light">
          więcej w wodach głębinowych
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      percent: 40,
      gardenAvg: 74400,
      moneyAvg: 636,
      deepAvg: 64
    }
  },
  computed: {
    garden () {
      return Math.ceil(this.gardenAvg * this.percent / 100)
    },
    money () {
      return Math.ceil(this.moneyAvg * this.percent / 100)
    },
    deep () {
      return Math.ceil(this.deepAvg * this.percent / 100)
    }
  }
}
</script>
