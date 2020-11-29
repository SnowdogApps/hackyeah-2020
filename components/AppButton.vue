<template>
  <button :class="['py-2 px-4 uppercase font-bold rounded-md', type === 'secondary' ? 'text-primary bg-white border-primary border-2' : 'text-white bg-primary', { 'opacity-50': disabled }]" type="button" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
