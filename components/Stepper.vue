<template>
  <section class="font-sans flex justify-between mt-6 mx-auto max-w-xl">
    <a
      v-for="step in steps"
      :key="step"
      href="#"
      class="w-1/4 relative flex flex-col items-center text-center text-xs text-black no-underline"
    >
      <div :class="[ 'rounded-full h-8 w-8 flex items-center justify-center mb-2 z-10', step > active ? 'bg-gray-600 text-white' : step === active ? 'bg-white text-black border-black border-2' : 'bg-black text-white']">
        {{ step }}
      </div>
      <div :class="['absolute h-1 mt-4 bg-black inset-x-0', { 'left-1/2' : step === 1}, { 'right-1/2' : step === steps } ]" />
      <label class="font-bold uppercase tracking-wide">Step {{ step }}</label>
    </a>
  </section>
</template>

<script>
export default {
  props: {
    steps: {
      type: Number,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.step--done {
  @apply bg-black;
}
</style>
