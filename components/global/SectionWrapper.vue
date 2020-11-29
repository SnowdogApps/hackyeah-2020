<template>
  <section class="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-20 text-center">
    <h2 class="text-4xl font-extrabold text-gray">
      {{ heading }}
    </h2>
    <divider />

    <slot />
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    }
  }
}
</script>
