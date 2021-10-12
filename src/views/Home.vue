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
      <component :is="getComponent" :style="getStyleComponent"></component>
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

    // Aisigna la información necesaria para comenzar a editar un nuevo componente
    const setComponent = (name, component) => {
      getNameComponent.value = name;
      getComponent.value = COMPONENTS[component].COMPONENT;
      getStyleComponent.value = COMPONENTS[component].STYLES;

      setSectionConfigurator(Object.keys(COMPONENTS[component].STYLES)[0], component);
    };

    // Asigna una sección del componente al configurador
    const setSectionConfigurator = (firstSectionStyles, component) => {
      getNameSectionConfigurator.value = firstSectionStyles;
      getSectionConfigurator.value = COMPONENTS[component].STYLES[firstSectionStyles];
    };

    // Variables para el funcionamiento del configurador
    const getSectionConfigurator = ref(COMPONENTS["CCardInfo"].STYLES["card"]);
    const getNameSectionConfigurator = ref("card");

    // Variables para el funcionamiento del visor de componentes
    const getComponent = shallowRef(COMPONENTS["CCardInfo"].COMPONENT);
    const getNameComponent = ref("Card Information");
    const getStyleComponent = ref(COMPONENTS["CCardInfo"].STYLES);

    // Recibe los cambios de la sección activa (configurador) y los aplica al componente
    const changeValueSection = (section, property, newValue) => {
      getStyleComponent.value[getNameSectionConfigurator.value][section][property] = newValue;
    };

    // Reinicia la sección activa del configurador
    const resetComponent = (resetData) => {
      getStyleComponent.value[getNameSectionConfigurator.value] = resetData
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
