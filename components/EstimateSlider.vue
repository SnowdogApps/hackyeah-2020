<template>
  <section class="container mx-auto my-8 flex flex-col items-center">
    <input
      v-model="percent"
      type="range"
      min="0"
      max="100"
      class="md:w-1/2 my-4 w-2/3"
    >

    <div class="font-bold text-3xl mb-4">
      {{ percent }}%
    </div>

    <p class="mb-2">
      <span class="font-bold">
        {{ garden }} litry
      </span>
      wody na podlewanie ogrodu
    </p>
    <p class="mb-2">
      <span class="font-bold">
        {{ money }} zł
      </span>
      zaoszczedzone rocznie
    </p>
    <p class="mb-2">
      <span class="font-bold">
        {{ deep }} m3
      </span>
      wiecej w wodach głębinowych
    </p>
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
