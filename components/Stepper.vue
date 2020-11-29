<template>
  <section class="font-sans flex justify-between mt-6 mx-auto max-w-xl">
    <span
      v-for="(step, index) in steps"
      :key="index"
      href="#"
      class="w-1/3 relative flex flex-col items-center text-center text-xs text-black no-underline cursor-pointer"
      @click="$emit('input', index)"
    >
      <div :class="[ 'rounded-full h-8 w-8 flex items-center justify-center mb-2 z-10 cursor-pointer', index > value ? 'bg-blue-400 text-white' : index === value ? 'bg-white font-bold text-blue-500 border-blue-500 border-2' : 'bg-blue-500 text-white']">
        {{ index + 1 }}
      </div>
      <div :class="['absolute h-1 mt-4 bg-blue-200 inset-x-0', { 'left-1/2' : index === 0 }, { 'right-1/2' : index + 1 === steps.length } ]" />
      <!-- <label class="text-blue-500 font-bold tracking-wide">{{ step }}</label> -->
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
