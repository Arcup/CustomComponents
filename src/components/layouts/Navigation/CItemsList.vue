<template>
  <div>
    <ul class="list">
      <li class="list__title">
        <h2 @click="displayList">
          {{ title }}
          <span v-if="display">
              <i class="fas fa-angle-down list__title-icon" />
          </span>
          <span v-else>
              <i class="fas fa-angle-right list__title-icon" />
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
      display.value = !display.value
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
.sublist
  list-style: none
  margin-top: 0.4em
  &__element
    font-family: ComfortaaLight
    margin-left: 0.1em
    margin-top: 0.8em
    font-size: 0.7em
    color: #fff
    cursor: pointer
    transition: 0.2s linear
    &:hover
      border-bottom: inset
      border-bottom-color: var(--sidebar-item-hover)
      border-bottom-right-radius: 0.5em
      
</style>