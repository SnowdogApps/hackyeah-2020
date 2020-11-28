<template>
  <div ref="map" class="w-full" style="height: 50vh" />
</template>

<script>
export default {
  mounted () {
    const [lat, lng] = [52.404394, 16.9380253]
    this.$maps.showMap(this.$refs.map, lat, lng)
  }
}
</script>
