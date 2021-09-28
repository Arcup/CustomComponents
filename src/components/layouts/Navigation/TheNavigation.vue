<template>
    <div class="content">
      <section class="section__header">
        <h1 class="section__header-title">Cartmanmundi</h1>
        <img
          v-bind:src="
            require('./../../../assets/img/navigation/cartmangordo.jpg')
          "
          alt=""
          class="section__header-img"
        />
      </section>
      <section class="section__list">
        <CItemList :title="cards.title" :options="cards.options" @clickItem="clickItemList"/>
      </section>
    </div>
</template>

<script>
import { reactive } from "vue";
import CItemList from "./CItemsList.vue";

export default {
  components: {
    CItemList,
  },
  setup(props, { emit }) {
    const cards = reactive({
      title: "Card components",
      options: [
        {
          name: "Card Information",
          component: "CCardInfo",
        },
        {
          name: "Card Low",
          component: "CCardLow",
        },
      ],
    });

    const clickItemList = (name, component) => {
      emit("clicItemList", name, component);
    };

    return {
      clickItemList,
      cards,
    };
  },
};
</script>

<style lang="sass" scoped>
.content 
  width: 15rem
  float: left
  position: fixed
  z-index: 1
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)
  top: 0
  left: 0
  bottom: 0
  padding: 1em
  transition: 0.5s
  display: flex
  flex-direction: column
  overflow: auto

.section__header
  margin-bottom: 10px
  &-title
    text-align: center
    font-family: ComfortaaBold
  &-img
    display: block
    margin-left: auto
    margin-right: auto
    width: 120px
    height: 70px
.section__list
  text-align: left
  margin-top: 0.5em


</style>