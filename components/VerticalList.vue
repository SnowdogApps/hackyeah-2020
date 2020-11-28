<template>
  <section>
    <h2 class="mt-2 mb-4 font-medium max-w-sm m-auto text-center">
      {{ heading }}
    </h2>
    <ul class="font-sans list-none p-0 container m-auto text-gray-900">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="inline-block border-b border-gray-300 flex justify-between items-center py-4 hover:shadow-lg cursor-pointer"
        @click="$emit('toggle', index)"
      >
        <div class="flex items-start w-2/5">
          <div class="w-10 h-10 rounded mr-3">
            <div :class="['rounded-full h-10 w-10 m-auto', item.selected ? 'bg-green-400' : 'bg-gray-300']" />
          </div>
          <span class="font-bold h-full">
            {{ item.name }}
          </span>
        </div>
        <p class="w-2/5">
          {{ item.description }}
        </p>
        <label for="status" class="font-bold w-1/5 text-right">
          {{ item.selected ? 'Active' : 'Inactive' }}
        </label>
      </li>
    </ul>
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
