<template>
  <form class="font-sans text-sm rounded w-full max-w-xl mx-auto my-8 px-8 pt-6 pb-8">
    <app-input id="users" v-model="users" label="Liczba mieszkańców domu korzystających z toalety" />
    <app-input id="yearlyRainfal" v-model="yearlyRainfal" label="Suma rocznych opadów (l)" />
    <area-input id="roof" v-model="roof" label="Powierzchnia dachu" />
    <area-input id="lawn" v-model="lawn" label="Powierzchnia ogródka" />
    <area-input id="garden" v-model="garden" label="Powierzchnia trawnika" />
  </form>
</template>

<script>
export default {
  data: () => ({
    users: 1,
    yearlyRainfal: 530,
    roof: 0,
    lawn: 0,
    garden: 0
  })
}
</script>
