<template>
  <section class="container m-auto">
    <div>
      <label class="block text-gray-700 top-0 left-0 w-full py-2 leading-normal" :for="`${id}-area`">
        {{ label }} (m²)
      </label>
      <input
        :id="`${id}-area`"
        :value="value"
        :disabled="drawingActive"
        class="w-full py-2 px-3 text-gray-700 leading-normal rounded relative border rounded mb-4 shadow appearance-none label-floating"
        type="number"
        @input="(e) => $emit('input', parseFloat(e.target.value))"
      >
      <p v-if="!mapVisible" class="text-xs mb-4">
        Jeśli nie znasz powierzchni skorzystaj z opcji <span class="font-bold underline text-primary cursor-pointer" @click="initMap">Zaznacz na mapie</span>
      </p>
    </div>
    <div v-if="mapVisible">
      <input
        :id="`${id}-autocomplete`"
        ref="autocomplete"
        v-model="autocomplete"
        class="w-full py-2 px-3 text-gray-700 leading-normal rounded relative border rounded mb-2 shadow appearance-none label-floating"
        type="text"
      >
      <p :class="['font-bold', {'text-primary underline cursor-pointer' : !drawingActive}]" @click="drawingActive ? null :useGeolocation">
        Pobierz aktualną lokalizację <gps-image class="inline ml-2 mb-2" />
      </p>
      <div ref="map" class="w-full" style="height: 50vh" />
    </div>
    <div class="my-2">
      <template v-if="mapVisible">
        <p v-if="drawingActive" class="mb-2">
          Zaznacz obszar na mapie
        </p>
        <app-button type="secondary" :disabled="drawingActive" @click.native="startMeasurements">
          Rysuj
        </app-button>
        <app-button @click.native="getArea">
          Zmierz
        </app-button>
      </template>
    </div>
  </section>
</template>

<script>
import GpsImage from '~/assets/gps.svg?inline'

export default {

  components: {
    GpsImage
  },
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
    autocomplete: '',
    drawingActive: false
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
      this.drawingActive = false
      this.$maps.endMeasurement()
      const area = Math.ceil(this.$maps.getMeasuredArea())
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
    },

    startMeasurements () {
      this.drawingActive = true
      this.$maps.startMeasurements()
    }
  }
}
</script>
