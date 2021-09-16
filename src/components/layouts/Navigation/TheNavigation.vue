<template>
  <div>
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
      <hr />
      <section class="section__list">
        <CItemList :title="cards.title" :options="cards.options" @clickItem="clickItemList"/>
      </section>
    </div>
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
  height: 100%
  width: 16rem
  position: fixed
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important
  z-index: 10

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
  margin-top: 7px
  margin-left: 15px
</style>