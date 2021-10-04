<template>
  <div class="zoom padding_y" :style="getStyleSection(getStyle().card)">
    <div :style="getStyleSection(getStyle().subTitle)">
      <div class="padding_x">{{ getData().subTitle }}</div>
    </div>
    <div :style="getStyleSection(getStyle().title)">
      <div class="padding_x">{{ getData().title }}</div>
    </div>
    <div :style="getStyleSection(getStyle().description)">
      <div class="padding_x">{{ getData().description }}</div>
    </div>
    <div class="padding_x padding_y">
      <button @click="action()" class="action_button" :style="getStyleSection(getStyle().button)">
        <strong>{{ getData().button }}</strong>
      </button>
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

    const action = () => {
      emit("action");
    };

    return {
      getStyle,
      getStyleSection,
      getData,
      action,
      props,
    };
  },
};
</script>

<style scoped>
.padding_x {
  padding-left: 10px;
  padding-right: 10px;
}
.padding_y {
  padding-bottom: 20px;
  padding-top: 20px;
}
.action_button {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
}
.zoom {
  transition: transform 0.2s;
}
.zoom:hover {
  transform: scale(1.03);
}
</style>
