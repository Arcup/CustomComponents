<template>
  <div class="">
    <TheConfigurator
      :name="getNameSectionConfigurator"
      :section="getSectionConfigurator"
      :data="getDataConfigurator"
      @changeValueStyle="changeValueSection"
      @changeValueData="changeValueData"
      @reset="resetComponent"
    />
    <TheNavigation @clic-item-list="setComponent" />
    <div id="container" class="container">
      <CLanguage />
      <h1 class="title_component">{{ getNameComponent }}</h1>
      <!-- <keep-alive> -->
      <component :is="getComponent" :style="getStyleComponent" :data="getDataComponent"></component>
      <!-- </keep-alive> -->
      <!-- <TheCodigator :section="getComponent" /> -->
    </div>
  </div>
</template>

<script>
import TheNavigation from "../components/layouts/Navigation/TheNavigation.vue";
import TheConfigurator from "../components/layouts/Configurator/TheConfigurator.vue";
import TheCodigator from "../components/layouts/Codigator/TheCodigator.vue"
import CLanguage from "../components/layouts/Global/CLanguage.vue"
import { COMPONENTS } from "@/components/index.js";

import { ref, shallowRef, reactive } from "vue";

export default {
  name: "Home",

  components: {
    TheNavigation,
    TheConfigurator,
    TheCodigator,
    CLanguage
  },
  
  setup(props) {

    // Aisigna la información necesaria para comenzar a editar un nuevo componente
    const setComponent = (name, component) => {
      getNameComponent.value = name;
      getComponent.value = COMPONENTS[component].COMPONENT;
      getStyleComponent.value = COMPONENTS[component].STYLES;
      getDataComponent.value = COMPONENTS[component].DATA;

      setSectionConfigurator(Object.keys(COMPONENTS[component].STYLES)[0], component);
    };

    // Asigna una sección del componente al configurador
    const setSectionConfigurator = (firstSectionStyles, component) => {
      getNameSectionConfigurator.value = firstSectionStyles;
      getSectionConfigurator.value = COMPONENTS[component].STYLES[firstSectionStyles];
      getDataConfigurator.value = COMPONENTS[component].DATA;
    };

    // Variables para el funcionamiento del configurador
    const getSectionConfigurator = ref(COMPONENTS["CCardInfo"].STYLES["card"]);
    const getDataConfigurator = ref(COMPONENTS["CCardInfo"].DATA);
    const getNameSectionConfigurator = ref("card");

    // Variables para el funcionamiento del visor de componentes
    const getComponent = shallowRef(COMPONENTS["CCardInfo"].COMPONENT);
    const getNameComponent = ref("Card Information");
    const getStyleComponent = ref(COMPONENTS["CCardInfo"].STYLES);
    const getDataComponent = ref(COMPONENTS["CCardInfo"].DATA);

    // Recibe los cambios de la sección activa (configurador / Styles) y los aplica al componente
    const changeValueSection = (section, property, newValue) => {
      getStyleComponent.value[getNameSectionConfigurator.value][section][property] = newValue;
    };
    // Recibe los cambios de la label activa (configurador / data) y los aplica al componente
    const changeValueData = (section, newValue) => {
      getDataComponent.value[section] = newValue;
    };

    // Reinicia la sección activa del configurador (Styles)
    const resetComponent = (resetData) => {
      getStyleComponent.value[getNameSectionConfigurator.value] = resetData
    };

    return {
      setComponent,
      changeValueSection,
      changeValueData,
      resetComponent,
      getNameComponent,
      getComponent,
      getStyleComponent,
      getDataComponent,
      getSectionConfigurator,
      getDataConfigurator,
      getNameSectionConfigurator,
    };
  },
};
</script>

<style lang="sass" scoped>
.container
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center

.title_component
  padding-top: 1rem

</style>
