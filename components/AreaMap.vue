<template>
  <div>
    <div>
      <label class="block text-gray-700 top-0 left-0 w-full px-3 py-2 leading-normal" for="area">
        Powierzchnia
      </label>
      <input
        id="area"
        v-model="area"
        class="w-full py-2 px-3 text-gray-700 leading-normal rounded relative border rounded mb-4 shadow appearance-none label-floating"
        type="text"
      >
    </div>
    <button class="bg-black hover:bg-black text-white py-2 px-4" type="button" @click="getArea">
      pobierz z mapy
    </button>
    <div ref="map" class="w-full" style="height: 50vh" />
  </div>
</template>

<script>
export default {
  data: () => ({
    area: null
  }),

  mounted () {
    const [lat, lng] = [52.404394, 16.9380253]
    this.$maps.showMap(this.$refs.map, lat, lng)
  },

  methods: {
    getArea () {
      this.$maps.endMeasurement()
      const area = this.$maps.getMeasuredArea()
      this.area = area
    }
  }
}
</script>
