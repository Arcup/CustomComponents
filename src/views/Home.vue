<template>
  <div>
    <TheNavigation />
    <div id="container" class="container">
      <CCardInfo />
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import CCard from "../components/CCard.vue";
import CCardInfo from "../components/CCardInfo/CCardInfo.vue"
import TheNavigation from "../components/layouts/TheNavigation.vue";

import { ref, reactive } from "vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
    CCard,
    CCardInfo,
    TheNavigation,
  },
  setup(props) {
    const state = reactive({
      color: "red",
    })
    return {
      state,
    }
  }
};
</script>

<style lang="sass" scoped>
.container
  position: relative
  margin-left: 25%
</style>
