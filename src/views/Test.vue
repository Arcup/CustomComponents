<template>
  <div><CCardLow :style="{title:{'color': 'white'}} "/></div>
  <div><TheConfigurator :name="'Prueba'" :section="section"/></div>
</template>
<script>
import CCardLow from "@/components/CCardLow/CCardLow.vue";
import { style } from "@/components/CCardLow/index.js";
import TheConfigurator from "@/components/layouts/Configurator/TheConfigurator.vue";


export default {
  components: {
    CCardLow,
    TheConfigurator,
  },
  setup(props) {
    const section = style.card
    return {
      section
    }
  }
};
</script>
