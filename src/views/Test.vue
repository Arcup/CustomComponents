<template>
  <div><CCardLow :style="{title:{'color': 'white'}}"/></div>
  {{section.section}}
  <div>
  <TheConfigurator
    :name="section.name"
    :section="section.section"
    @changeValue="changeValue"/>
  </div>
</template>
<script>
import CCardLow from "@/components/CCardLow/CCardLow.vue";
import { style } from "@/components/CCardLow/index.js";
import TheConfigurator from "@/components/layouts/Configurator/TheConfigurator.vue";
import { reactive, ref } from "vue";

export default {
  components: {
    CCardLow,
    TheConfigurator,
  },
  setup(props) {
    const section = reactive({
      name: "Seccion de prueba",
      section: style.card,
    })
    const changeValue = (property, newValue) => {
      section.section[property] = newValue;
    }
    return {
      section,
      changeValue
    }
  }
};
</script>
