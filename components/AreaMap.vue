<template>
  <section class="container m-auto">
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
      <p v-if="!mapVisible" class="text-sm mb-2">
        Jeśli nie znasz powierzchni skorzystaj z opcji <span class="font-bold">Zaznacz na mapie</span>
      </p>
      <p v-else class="text-sm mb-2">
        Skorzystaj z wyszukiwarki lub opcji <span class="font-bold">Geolokacja</span>. Następnie zaznacz obszar i kliknij <span class="font-bold">Zatwierdź</span>
      </p>
    </div>
    <div v-if="mapVisible">
      <input
        id="autocomplete"
        ref="autocomplete"
        v-model="autocomplete"
        class="w-full py-2 px-3 text-gray-700 leading-normal rounded relative border rounded mb-4 shadow appearance-none label-floating"
        type="text"
      >
      <div ref="map" class="w-full" style="height: 50vh" />
    </div>
    <div class="my-2">
      <button class="bg-black hover:bg-black text-white py-2 px-4" type="button" @click="initMap">
        Zaznacz na mapie
      </button>
      <template v-if="mapVisible">
        <button class="bg-black hover:bg-black text-white py-2 px-4" type="button" @click="useGeolocation">
          Geolokacja
        </button>
        <button class="bg-black hover:bg-black text-white py-2 px-4" type="button" @click="getArea">
          Zatwierdź
        </button>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    area: null,
    mapVisible: false,
    autocomplete: ''
  }),

  methods: {
    initMap () {
      this.mapVisible = true
      this.$nextTick(() => {
        const [lat, lng] = [52.404394, 16.9380253]
        this.$maps.showMap(this.$refs.map, lat, lng)
        const { autocomplete } = this.$refs
        this.$maps.initAutocomplete(autocomplete)
      })
    },

    getArea () {
      this.$maps.endMeasurement()
      const area = this.$maps.getMeasuredArea()
      if (!area) {
        alert('Zaznacz obszar')
        return
      }
      this.area = area
    },

    useGeolocation () {
      this.autocomplete = ''
      this.$maps.geolocate()
    }
  }
}
</script>
