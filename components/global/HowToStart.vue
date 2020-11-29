<template>
  <section-wrapper heading="Jak zacząć" class="bg-white">
    <div class="flex justify-center items-center space-x-4 lg:flex-row flex-col">
      <div class="start-card">
        <needs-image class="mb-12" />
        <h3 class="uppercase font-bold text-xl text-gray">
          Definiujemy potrzeby
        </h3>
        <p>
          Pomożemy wypełnić ankietę dzięki której poznamy Twoje potrzeby.
        </p>
      </div>

      <arrow-circle-image class="transform rotate-90 md:rotate-0 min-w-max" />

      <div class="start-card">
        <solutions-image class="mb-12" />
        <h3 class="uppercase font-bold text-xl text-gray">
          Definiujemy potrzeby
        </h3>
        <p>
          Pomożemy wypełnić ankietę dzięki której poznamy Twoje potrzeby.
        </p>
      </div>

      <arrow-circle-image class="transform rotate-90 md:rotate-0 min-w-max" />

      <div class="start-card">
        <savings-image class="mb-12" />
        <h3 class="uppercase font-bold text-xl text-gray">
          Definiujemy potrzeby
        </h3>
        <p>
          Pomożemy wypełnić ankietę dzięki której poznamy Twoje potrzeby.
        </p>
      </div>
    </div>
  </section-wrapper>
</template>

<script>
import SolutionsImage from '~/assets/home/solutions.svg?inline'
import NeedsImage from '~/assets/home/needs.svg?inline'
import SavingsImage from '~/assets/home/savings.svg?inline'
import ArrowCircleImage from '~/assets/home/arrow-circle.svg?inline'

export default {
  components: {
    SolutionsImage,
    NeedsImage,
    SavingsImage,
    ArrowCircleImage
  }
}
</script>

<style>
.start-card {
  @apply flex flex-col w-96 items-center p-16 my-4 md:my-0;
}
</style>
