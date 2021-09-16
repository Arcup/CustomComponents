<template>
  <div id="card" :style="getStyle().card">
    <div id="header" :style="getStyle().header">
      <h2>{{ getData().title }}</h2>
    </div>
    <div id="body" :style="getStyle().body">
      <h3>{{ getData().body }}</h3>
    </div>
    <div id="button" @click="clicButton()" :style="getStyle().button">Aceptar</div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { style, data } from "./index.js";

export default {
  props: ["style", "data"],

  setup(props, { emit }) {

    const getStyle = () => {
      for (const property in props.style) {
        for (const subProperty in props.style[property]) {
          style[property][subProperty] = props.style[property][subProperty];
        }
      }
      return style;
    };

    const getData = () => {
      for (const property in props.data) {
        data[property] = props.data[property];
      }
      return data;
    };

    const clicButton = () => {
      emit("clicButton");
    };

    return {
      getStyle,
      getData,
      clicButton,
    };
  }
};
</script>

<style lang="sass" scoped>
</style>