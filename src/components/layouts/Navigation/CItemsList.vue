<template>
  <div>
    <ul class="list">
      <li class="list__title" @click="displayList">
        {{ title }}
        <ul class="sublist" v-if="display">
          <li
            class="sublist__element"
            v-for="item in options"
            :key="item.name"
            @click="clickItem(item.name, item.component)"
          >
            {{ item.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const title = props.title;
    const options = props.options;
    const display = ref(true);
    const clickItem = (name, component) => {
      emit("clickItem", name, component);
    };
    const displayList = () => {
      display.value = !display.value;
    };
    return {
      title,
      options,
      display,
      clickItem,
      displayList,
    };
  },
};
</script>

<style lang="sass" scoped>
.list
  list-style: none
  &__title
    font-family: ComfortaaBold
    margin-top: 8px
    margin-left: 2px
    font-size: 1.3em
    cursor: pointer
.sublist
  list-style: none
  margin-top: 5px
  &__element
    font-family: ComfortaaLight
    margin-left: 10px
    margin-top: 4px
    font-size: 0.7em
    cursor: pointer
</style>