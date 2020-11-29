<template>
  <div>
    <label class="block text-gray-700 top-0 left-0 w-full py-2 leading-normal" for="users">
      {{ label }}
    </label>
    <input
      :id="id"
      :value="value"
      class="w-full py-2 px-3 text-gray-700 leading-normal rounded relative border rounded mb-4 shadow appearance-none label-floating"
      type="number"
      @input="(e) => $emit('input', parseInt(e.target.value))"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>
