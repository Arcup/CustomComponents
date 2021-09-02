<template>
  <div id="card" class="card">
    <div id="header" class="cardHeader">
      <h2>Yo soy el header y este es mi contador: {{ contador }}</h2>
    </div>
    <div id="body" class="cardBody">
      <h3>Yo soy el body</h3>
    </div>
    <div id="button" class="cardButton" @click="plusCount">Aceptar</div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  props: [],

  setup(props) {
    const contador = ref(0);

    const plusCount = () => {
      contador.value++;
    };
    return {
      contador,
      plusCount,
    };
  },
};
</script>

<style lang="sass" scoped>
$width-card: 300px
$height-card: 500px
$radius-card: 3px
$radius-button-card: 3px
$body-color-card: #f8f8f8ff
$border-color-card: #73f3f3ff
$button-color-card: #161e2eff
$header-color-card: #ffffffff
$text-align-card: center

.card
    position: relative
    width: $width-card
    height: $height-card
    border-radius: $radius-card
    border: 1px solid $border-color-card
    background-color: $body-color-card
    text-align: $text-align-card

    .cardHeader
        width: 100%
        height: $height-card/3
        top: 0
        background-color: $header-color-card

    .cardBody
        height: auto

    .cardButton
        position: absolute
        width: 90%
        height: auto
        margin-bottom: 5px
        border-radius: $radius-button-card
        margin-left: 5%
        bottom: 0
        color: white
        background-color: $button-color-card
        cursor: pointer
</style>