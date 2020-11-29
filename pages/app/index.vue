<template>
  <div class="app mb-8">
    <section class="font-sans container m-auto text-center py-8">
      <h1 for="tagline" class="uppercase tracking-wide font-bold text-gray-700 border-b-2 border-gray-200 pb-4">
        Formularz profilujący
      </h1>
    </section>

    <stepper v-model="activeStep" :steps="steps" class="mb-4" />

    <!-- <horizontal-list
      v-if="activeStep === 0"
      heading="Typ zabudowy"
      :items="buildingTypes"
      @select="selectBuilding"
    /> -->

    <vertical-list
      v-if="activeStep === 0"
      heading="Do czego wykorzystujesz wodę"
      :items="usage"
      @toggle="handleToggle"
    />

    <div v-if="activeStep === 1">
      <h2 class="mt-2 mb-2 font-medium max-w-sm mx-auto text-center">
        Uzupełnij ponizsze pola:
      </h2>
      <section class="font-sans text-sm rounded w-full max-w-xl mx-auto mb-8 px-8 pt-6 pb-8">
        <app-input id="users" v-model="users" label="Liczba mieszkańców domu korzystających z toalety" />
        <app-input id="yearlyRainfall" v-model="yearlyRainfall" label="Suma rocznych opadów (l)" />
        <area-input id="roof" v-model="roof" label="Powierzchnia dachu" />
        <area-input v-if="hasLawn" id="lawn" v-model="lawn" label="Powierzchnia trawnika" />
        <area-input v-if="hasGarden" id="garden" v-model="garden" label="Powierzchnia ogródka" />
      </section>
    </div>

    <form-results v-if="activeStep === 2 && results" :results="results" />

    <div class="flex items-center justify-center mx-auto max-w-screen-sm mt-8 border-t-2 border-gray-200 pt-4">
      <app-button
        v-if="activeStep !== 0"
        class="mr-2"
        @click.native="prev"
      >
        Wróć
      </app-button>

      <app-button
        v-if="activeStep !== steps.length - 1"
        @click.native="next"
      >
        Dalej
      </app-button>
    </div>
  </div>
</template>

<script>
import calculator from '~/utils/calculator'

const steps = [
  'Zuzycie',
  'Dane',
  'Podsumowanie'
]
const buildingTypes = [
  {
    name: 'Blok/kamienica',
    description: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.',
    selected: false
  },
  {
    name: 'Dom',
    description: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.',
    selected: false
  },
  {
    name: 'Gospodarstwo',
    description: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.',
    selected: false
  }
]

const usage = [
  {
    id: 'flushing',
    name: 'Spłukiwanie toalety',
    description: 'Na spłukiwanie toalet przeciętny Polak zuzywa 100l wody rocznie.',
    selected: true,
    disabled: true
  },
  {
    id: 'garden',
    name: 'Podlewanie ogródka',
    description: 'Kwiatki się cieszą gdy woda sie leje.',
    selected: false,
    disabled: false
  },
  {
    id: 'lawn',
    name: 'Podlewanie trawnika',
    description: 'Mokry trawnik to zielony trawnik.',
    selected: false,
    disabled: false
  }
]

export default {
  layout: 'clean',
  data: () => ({
    activeStep: 0,
    users: 1,
    yearlyRainfall: 530,
    roof: 81.5,
    lawn: 0,
    garden: 0,
    steps,
    buildingTypes,
    usage,
    results: null
  }),

  computed: {
    hasLawn () {
      return this.usage.find(x => x.id === 'lawn').selected
    },

    hasGarden () {
      return this.usage.find(x => x.id === 'garden').selected
    }
  },

  watch: {
    activeStep (newVal) {
      if (newVal === this.steps.length - 1) {
        this.calc()
      }
    }
  },

  methods: {
    handleToggle (itemIndex) {
      this.usage[itemIndex].selected = !this.usage[itemIndex].selected
    },
    selectBuilding (index) {
      this.buildingTypes.forEach((item, i) => {
        item.selected = i === index
      })
      this.next()
    },
    prev () {
      this.activeStep--
    },
    next () {
      this.activeStep++
    },

    calc () {
      const { roof, lawn, garden, users, yearlyRainfall } = this
      calculator.calcSuggestedCapacity(roof, yearlyRainfall, garden, lawn, users)
      this.results = calculator.getResults()
    }
  }
}
</script>
