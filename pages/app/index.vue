<template>
  <div class="app mb-8">
    <section class="font-sans container m-auto text-center py-8">
      <h1 for="tagline" class="uppercase tracking-wide font-bold text-gray-700">
        Formularz profilujący
      </h1>
    </section>

    <stepper v-model="activeStep" :steps="steps" class="mb-4" />

    <horizontal-list
      v-if="activeStep === 0"
      heading="Typ zabudowy"
      :items="buildingTypes"
    />

    <vertical-list
      v-if="activeStep === 1"
      heading="Produkty / usługi"
      :items="usage"
      @toggle="handleToggle"
    />

    <user-form v-if="activeStep === 2" />

    <div class="flex items-center justify-center mx-auto max-w-screen-sm mt-8">
      <button
        v-if="activeStep !== 0"
        class="bg-black hover:bg-black text-white py-2 px-4 mr-4"
        type="button"
        @click="prev"
      >
        Wroc
      </button>

      <button
        v-if="activeStep !== steps.length - 1"
        class="bg-black hover:bg-black text-white py-2 px-4"
        type="button"
        @click=" next"
      >
        Dalej
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'clean',
  data: () => ({
    activeStep: 0,
    steps: [
      'Zabudowa',
      'Zuzycie',
      'Dane',
      'Podsumowanie'
    ],
    buildingTypes: [
      {
        name: 'Blok/kamienica',
        description: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.'
      },
      {
        name: 'Dom',
        description: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.'
      },
      {
        name: 'Gospodarstwo',
        description: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.'
      }
    ],
    usage: [
      {
        name: 'Podlewanko',
        description: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.',
        selected: true
      },
      {
        name: 'Myćko',
        description: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.',
        selected: false
      },
      {
        name: 'Pićko',
        description: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.',
        selected: false
      }
    ]
  }),

  methods: {
    handleToggle (itemIndex) {
      this.usage[itemIndex].selected = !this.usage[itemIndex].selected
    },
    prev () {
      this.activeStep--
    },
    next () {
      this.activeStep++
    }
  }
}
</script>
