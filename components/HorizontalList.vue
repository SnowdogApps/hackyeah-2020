<template>
  <section class="font-sans container m-auto text-center py-8">
    <h2 class="mt-2 mb-4 font-medium max-w-sm m-auto">
      {{ heading }}
    </h2>
    <hr class="border-b w-8 m-auto my-6">
    <div class="flex flex-wrap justify-between items-start">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center p-4 hover:shadow-lg cursor-pointer"
      >
        <div class="w-14 h-14 rounded-full mr-4 bg-gray-300" alt="" />
        <h2 class="my-4 font-medium">
          {{ item.name }}
        </h2>
        <p class="leading-normal mb-4 text-gray-700">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
