<template>
  <div>
    <TheNavigation />
    <div id="container" class="container">
      <CCard />
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import CCard from "../components/CCard.vue";
import TheNavigation from "../components/layouts/TheNavigation.vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
    CCard,
    TheNavigation,
  },
};
</script>

<style lang="sass" scoped>
.container
  position: relative
  margin-left: 25%
</style>
