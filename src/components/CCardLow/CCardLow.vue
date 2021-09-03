<template>
  <div class="padding_standar">
    <div :style="getStyle().title">
      <div class="padding_standar">{{ getData().title }}</div>
    </div>
    <div :style="getStyle().subTitle">
      <div class="padding_standar">{{ getData().subTitle }}</div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { style, data } from "./index.js";

export default {
  props: ["style", "data"],
  setup(props) {
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

    return {
      getStyle,
      getData,
    };
  },
};
</script>

<style scoped>
.padding_standar {
  padding: 1em;
}
</style>
