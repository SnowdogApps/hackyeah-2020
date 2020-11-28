<template>
  <form class="font-sans text-sm rounded w-full max-w-xl mx-auto my-8 px-8 pt-6 pb-8">
    <div>
      <label class="block text-gray-700 top-0 left-0 w-full px-3 py-2 leading-normal" for="users">
        Ilość osób
      </label>
      <input
        id="users"
        v-model="users"
        class="w-full py-2 px-3 text-gray-700 leading-normal rounded relative border rounded mb-4 shadow appearance-none label-floating"
        type="number"
      >
    </div>

    <area-map />
    <!-- TODO: colect more data -->
  </form>
</template>

<script>
export default {
  data: () => ({
    users: 1
  })
}
</script>
