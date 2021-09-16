<template>
  <div>
    <TheNavigation @clic-item-list="setComponent" />
    <div id="container" class="container">
      <h1>{{ getNameComponent }}</h1>
      <keep-alive>
        <component v-bind:is="getComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import CCard from "../components/CCard.vue";
import CCardInfo from "../components/CCardInfo/CCardInfo.vue";
import CCardLow from "../components/CCardLow/CCardLow.vue";
import TheNavigation from "../components/layouts/TheNavigation.vue";

import { ref, reactive } from "vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
    CCard,
    CCardInfo,
    CCardLow,
    TheNavigation,
  },
  setup(props) {
    const state = reactive({
      color: "red",
    });
    const setComponent = (name, component) => {
      getNameComponent.value = name;
      getComponent.value = component;
    };
    const getComponent = ref("CCardInfo");
    const getNameComponent = ref("Card info");
    return {
      state,
      setComponent,
      getNameComponent,
      getComponent
    };
  },
};
</script>

<style lang="sass" scoped>
.container
  position: relative
  margin-left: 22%
</style>
