<template>
  <div>
    <ul class="list">
      <li class="list__title">
        <h2 @click="displayList">
          {{ title }}
          <img
            v-bind:src="
              require(`./../../../assets/img/navigation/${arrowDisplay}`)
            "
            alt="up arrow list"
            :class="'list__title-img-' + arrowStyle" 
          />
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
    const arrowDisplay = ref('arrow_down.png');
    const arrowStyle = ref('down');

    const clickItem = (name, component) => {
      emit("clickItem", name, component);
    };

    const displayList = () => {
      display.value = !display.value
      arrowDisplay.value = !display.value ? 'arrow_right.png' : 'arrow_down.png'
      arrowStyle.value = !display.value ? 'right' : 'down'
    };

    return {
      title,
      options,
      display,
      arrowDisplay,
      arrowStyle,
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
  list-style: none
  &__title
    font-family: ComfortaaBold
    margin-top: 8px
    margin-left: 2px
    font-size: 1.3em
    cursor: pointer
    &-img-down
      margin-left: 0.4em
      margin-bottom: 0.08em
      width: 0.6rem
      height: 0.5rem
    &-img-right
      margin-left: 0.4em
      width: 0.45rem
      height: 0.65rem
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