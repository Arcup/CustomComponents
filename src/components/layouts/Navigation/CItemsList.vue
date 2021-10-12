<template>
  <div>
    <ul class="list">
      <li class="list__title">
        <h2 @click="displayList">
          {{ title }}
          <span :class="{ 'rotate-180': !display }" class="list__title-icon">
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
  margin-bottom: 0.5em
.list
  padding: 0
  list-style-type: none
  &__title
    font-family: ComfortaaBold
    font-size: 1.3em
    margin-top: 0.6em
    left: 0
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
  width: 90%
  padding-left: 1em
  border-radius: 10px
  background-color: #182133ff
  transition: 0.1s linear
  &__element
    font-family: ComfortaaLight
    font-size: 0.8em
    margin-top: 0
    left: 0
    padding-top: 0.4em
    padding-bottom: 0.4em
    color: #fff
    cursor: pointer
    &:hover
      opacity: 0.7
      transition: 0.1s linear
.rotate-180 
  transform: rotate(180deg)
</style>