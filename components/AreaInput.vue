<template>
  <section class="container m-auto">
    <div>
      <label class="block text-gray-700 top-0 left-0 w-full py-2 leading-normal" :for="`${id}-area`">
        {{ label }} (m²)
      </label>
      <input
        :id="`${id}-area`"
        :value="value"
        class="w-full py-2 px-3 text-gray-700 leading-normal rounded relative border rounded mb-4 shadow appearance-none label-floating"
        type="number"
        @input="(e) => $emit('input', parseFloat(e.target.value))"
      >
      <p v-if="!mapVisible" class="text-xs mb-4">
        Jeśli nie znasz powierzchni skorzystaj z opcji <span class="action-link" @click="initMap">Zaznacz na mapie</span>
      </p>
      <ol v-else class="text-xs mb-4 list-decimal pl-4">
        <li>Skorzystaj z wyszukiwarki lub <span class="action-link" @click="useGeolocation">uzyj geolokacji</span>.</li>
        <li>Zaznacz obszar (PPM > <span class="italic">Measure distance</span>)</li>
        <li>Kliknij <span class="font-bold">Zatwierdź</span></li>
      </ol>
    </div>
    <div v-if="mapVisible">
      <input
        :id="`${id}-autocomplete`"
        ref="autocomplete"
        v-model="autocomplete"
        class="w-full py-2 px-3 text-gray-700 leading-normal rounded relative border rounded mb-4 shadow appearance-none label-floating"
        type="text"
      >
      <div ref="map" class="w-full" style="height: 50vh" />
    </div>
    <div class="my-2">
      <template v-if="mapVisible">
        <app-button @click.native="getArea">
          Zatwierdź
        </app-button>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },

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
      this.$emit('input', area)
      this.mapVisible = false
    },

    useGeolocation () {
      this.autocomplete = ''
      this.$maps.geolocate()
    }
  }
}
</script>

<style>
.action-link {
  @apply font-bold underline text-blue-500 cursor-pointer;
}
</style>
