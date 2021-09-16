<template>
  <div>
    <ul class="list">
      <li class="list__title">
        {{ title }}
        <ul class="sublist">
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

    const clickItem = (name, component) => {
      emit("clickItem", name, component);
    };

    return {
      title,
      options,
      clickItem,
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