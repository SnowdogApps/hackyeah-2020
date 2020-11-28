<template>
  <section>
    <input
      v-model="percent"
      type="range"
      min="0"
      max="100"
    >

    {{ percent }}%

    <p>{{ garden }} litry wody na podlewanie ogrodu</p>
    <p>{{ money }} zł zaoszczedzone rocznie</p>
    <p>{{ deep }} m3 wiecej w wodach głębinowych</p>
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
