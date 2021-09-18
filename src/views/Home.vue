<template>
  <div>
    <TheNavigation @clic-item-list="setComponent" />
    <div id="container" class="container">
      <h1>{{ getNameComponent }}</h1>
      <!-- <keep-alive> -->
        <component v-bind:is="getComponent" :style="{'card':section.section}"></component>
      <!-- </keep-alive> -->
      <div style="float: right">
      <TheConfigurator :name="section.name" :section="section.section" @changeValue="changeValueSection"/>
    </div>
  </div>
    </div>
    
  
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import CCard from "../components/CCard.vue";

import CCardInfo from "../components/CCardInfo/CCardInfo.vue";
import { style } from "../components/CCardInfo/index.js";

import CCardLow from "../components/CCardLow/CCardLow.vue";
import TheNavigation from "../components/layouts/Navigation/TheNavigation.vue";
import TheConfigurator from "../components/layouts/Configurator/TheConfigurator.vue";

import { ref, reactive } from "vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
    CCard,
    CCardInfo,
    CCardLow,
    TheNavigation,
    TheConfigurator,
  },
  setup(props) {
    const state = reactive({
      color: "red",
    });

    const section = reactive({
      name: "card",
      section: style.card,
    })

    const setComponent = (name, component) => {
      getNameComponent.value = name;
      getComponent.value = component;
    };
    const getComponent = ref("CCardInfo");
    const getNameComponent = ref("Card info");

    const changeValueSection = (property, newValue) => {
      section.section[property] = newValue;
    }

    return {
      state,
      section,
      setComponent,
      getNameComponent,
      getComponent,
      changeValueSection,
    };
  },
};
</script>

<style lang="sass" scoped>
.container
  position: relative
  margin-left: 18rem
.configurator
  margin-right: auto
</style>
