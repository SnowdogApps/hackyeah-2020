<template>
  <section>
    <h2 class="mt-2 mb-4 font-medium max-w-sm mx-auto text-center">
      {{ heading }}
    </h2>

    <ul class="font-sans list-none p-0 container mx-auto text-gray-900 max-w-xs md:max-w-lg px-2">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="['inline-block border-blue-400 flex justify-between items-center py-4 hover:shadow-lg cursor-pointer', {'border-b' : index !== items.length - 1} ]"
        @click="item.disabled ? null : $emit('toggle', index)"
      >
        <div class="flex items-center">
          <div class="w-10 h-10 rounded mr-3 relative">
            <div :class="['rounded-full h-10 w-10 m-auto', item.selected ? 'bg-green-400' : 'bg-gray-300']" />
            <check-mark-image class="h-10 w-10 absolute top-0 bottom-0 left-0 right-0 m-auto" />
          </div>

          <span class="font-bold h-full">
            {{ item.name }}
          </span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import CheckMarkImage from '~/assets/home/check-mark.svg?inline'

export default {
  components: {
    CheckMarkImage
  },
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
