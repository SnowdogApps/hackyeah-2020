<template>
  <section class="font-sans flex justify-between mt-6 mx-auto max-w-xl">
    <span
      v-for="(step, index) in steps"
      :key="index"
      href="#"
      class="w-1/4 relative flex flex-col items-center text-center text-xs text-black no-underline cursor-pointer"
      @click="$emit('input', index)"
    >
      <div :class="[ 'rounded-full h-8 w-8 flex items-center justify-center mb-2 z-10', index > value ? 'bg-gray-600 text-white' : index === value ? 'bg-white text-black border-black border-2' : 'bg-black text-white']">
        {{ index + 1 }}
      </div>
      <div :class="['absolute h-1 mt-4 bg-black inset-x-0', { 'left-1/2' : index === 0 }, { 'right-1/2' : index + 1 === steps.length } ]" />
      <label class="font-bold uppercase tracking-wide">{{ step }}</label>
    </span>
  </section>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
}
</script>
