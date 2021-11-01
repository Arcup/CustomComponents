<template>
  <router-view/>
</template>

<style lang="sass">
$small: 300px
$medium: 900px
$large: 1200px

html
  font-size: 100%
  font-family: ComfortaaLight
  height: 100%
@media (max-width: $medium)
  html
    font-size: 62.5%
body
  background: linear-gradient(to bottom, #FFFFFF, #D6D6D6)
  margin: 0
</style>
