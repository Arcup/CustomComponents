<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
$small: 300px
$medium: 900px
$large: 1200px

html
  font-size: 100%
  font-family: ComfortaaLight
@media (max-width: $medium)
  html
    font-size: 62.5%
</style>
