<template>
  <div id="card" class="content" :style="getStyleSection(getStyle().card)">
    <div id="header" :style="getStyleSection(getStyle().header)">
      <h2 class="content-title">{{ getData().title }}</h2>
    </div>
    <div id="body" class="content__header" :style="getStyleSection(getStyle().body)">
      <h3>{{ getData().body }}</h3>
    </div>
    <div id="button" class="content__button" @click="clicButton()" :style="getStyleSection(getStyle().button)">
      {{ getData().button }}
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { style, data } from "./index.js";

export default {
  props: ["style", "data"],

  setup(props, { emit }) {
    const getStyle = () => {
      for (const section in props.style) {
        for (const category in props.style[section]) {
          for (const property in props.style[section][category]) {
            style[section][category][property] = props.style[section][category][property];
          }
        }
      }
      return style;
    };

    const getStyleSection = (data) => {
      var dataSection = {}
      for (const property in data) {
        for (const subProperty in data[property]) {
          dataSection[subProperty] = data[property][subProperty];
        }
      }
      return dataSection;
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
      getStyleSection,
      getData,
      clicButton,
    };
  },
};
</script>

<style lang="sass" scoped>
.content
  position: relative
  text-align: center

  &-title
    margin-top: 0
    padding-top: 5%
    
  &__header      
    top: 0

  &__button  
    position: absolute      
    bottom: 0
</style>