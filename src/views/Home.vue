<template>
  <div>
    <TheNavigation @clicNavigation="getComponent()"/>
    <div id="container" class="container">
      <CCardInfo @clicButton="soyUnError()"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue"
import CCard from "../components/CCard.vue"
import CCardInfo from "../components/CCardInfo/CCardInfo.vue"
import CCardLow from "../components/CCardLow/CCardLow.vue"
import TheNavigation from "../components/layouts/TheNavigation.vue"

import { ref, reactive } from "vue"

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
    })
    const soyUnError = () => {

      try {
         let sn = ['teclado', 'mouse', 'pantalla'];
        /*sn.forEach((e, i, a) => {
          console.log('indice: ' + i + '-' + 'elemento: ' + e + ', content: ' + a);
        })
        var namelistA = new Array(4294967296);*/
        let holi = sn.splice(0, 2);
        console.log('Solo me falta mi pantalla porque yo soy: ' + holi);
       
      } catch (e) {
        if (e instanceof RangeError) {
          console.log('Entro a la excepción que queríamos');
        }
        console.log('lo cachamos' + e);
      }
    };
    const evento = () => {
      console.log("Estoy desde el padre");
    };
    return {
      state,
      evento,
      soyUnError
    }
  }
};
</script>

<style lang="sass" scoped>
.container
  position: relative
  margin-left: 22%
</style>
