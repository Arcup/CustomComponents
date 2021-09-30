<template>
  <div>
    <ul class="list">
      <li class="list__title">
        <h2 @click="displayList">
          {{ title }}
          <span :class="{ 'rotate-90': !display }" class="list__title-icon">
            <i class="fas fa-angle-down"/>
          </span>
          
        </h2>
        <ul class="sublist" v-if="display">
          <li
            class="sublist__element"
            v-for="item in options"
            :key="item.name"
            @click="clickItem(item.name, item.component)"
          >
            {{ item.name }}
            <div class="sublist__element-border"></div>
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
h2
  font-size: 1em
.list
  padding: 0
  list-style-type: none
  &__title
    font-family: ComfortaaBold
    margin-top: 0.6em
    left: 0
    font-size: 1.3em
    color: #fff
    cursor: pointer
    &-icon
      width: 0.8em
      height: 0.8em
      margin-top: 0.1em
      margin-left: 0.7em
      position: fixed
      transition: 0.2s linear
.sublist
  list-style: none
  margin-top: 0.4em
  &__element
    font-family: ComfortaaLight
    margin-top: 0.8em
    font-size: 0.8em
    color: #fff
    cursor: pointer
    &-border
      width: 0%
      transition: width 0.4s
    &:hover
      .sublist__element-border
        width: 100%
        border-bottom: solid
        border-bottom-color: var(--sidebar-item-hover)
        border-bottom-width: thin
.rotate-90 
  transform: rotate(-90deg)
</style>