<template>
  <div class="app">
    <section class="font-sans container m-auto text-center py-8">
      <h1 for="tagline" class="uppercase tracking-wide font-bold text-gray-700">
        Formularz profilujący
      </h1>
    </section>
    <stepper :steps="4" :active="2" />
    <horizontal-list heading="Typ zabudowy" :items="buildingTypes" />
    <vertical-list heading="Produkty / usługi" :items="usage" @toggle="handleToggle" />
    <user-form />
  </div>
</template>

<script>
export default {
  data: () => ({
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
    }
  }
}
</script>
