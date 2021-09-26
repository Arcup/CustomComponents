<template>
  <div>
    <TheConfigurator
      :name="getNameSectionConfigurator"
      :section="getSectionConfigurator"
      @changeValue="changeValueSection"
      @reset="resetComponent"
    />
    <TheNavigation @clic-item-list="setComponent" />
    <div id="container" class="container">
      <h1>{{ getNameComponent }}</h1>
      <!-- <keep-alive> -->
      <component v-bind:is="getComponent" :style="getStyleComponent"></component>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import TheNavigation from "../components/layouts/Navigation/TheNavigation.vue";
import TheConfigurator from "../components/layouts/Configurator/TheConfigurator.vue";
import { COMPONENTS } from "@/components/index.js";

import { ref, shallowRef, reactive } from "vue";

export default {
  name: "Home",

  components: {
    TheNavigation,
    TheConfigurator,
  },
  setup(props) {
    const setComponent = (name, component) => {
      getNameComponent.value = name;
      getComponent.value = COMPONENTS[component].COMPONENT;
      getStyleComponent.value = COMPONENTS[component].STYLES;
      resetValue = JSON.parse(JSON.stringify(COMPONENTS[component].STYLES))

      setSectionConfigurator(Object.keys(COMPONENTS[component].STYLES)[0], component);
    };

    const setSectionConfigurator = (firstSectionStyles, component) => {
      getNameSectionConfigurator.value = firstSectionStyles;
      getSectionConfigurator.value = COMPONENTS[component].STYLES[firstSectionStyles];
    };

    const getSectionConfigurator = ref(COMPONENTS["CCardInfo"].STYLES["card"]);
    const getNameSectionConfigurator = ref("card");

    const getComponent = shallowRef(COMPONENTS["CCardInfo"].COMPONENT);
    const getNameComponent = ref("Card info");
    const getStyleComponent = ref(COMPONENTS["CCardInfo"].STYLES);

    var resetValue = JSON.parse(JSON.stringify(COMPONENTS["CCardInfo"].STYLES))

    const changeValueSection = (property, newValue) => {
      getStyleComponent.value[getNameSectionConfigurator.value][property] = newValue;
    };

    const resetComponent = () => {
      getStyleComponent.value[getNameSectionConfigurator.value] = resetValue[getNameSectionConfigurator.value]
      getSectionConfigurator.value = resetValue[getNameSectionConfigurator.value]

    };

    return {
      setComponent,
      changeValueSection,
      resetComponent,
      getNameComponent,
      getComponent,
      getStyleComponent,
      getSectionConfigurator,
      getNameSectionConfigurator,
    };
  },
};
</script>

<style lang="sass" scoped>
.container
  position: relative
  margin-left: 18rem
</style>
