<template>
  <div class="content">
    <section class="section__header">
      <h1 class="section__header-title">
        <img
          v-bind:src="
            require('./../../../assets/img/navigation/formaLogo-Arcup.png')
          "
          alt=""
          class="section__header-img"
        />
        ArComposition
      </h1>
    </section>
    <hr class="section__divider"/>
    <section class="section__list">
      <CItemList
        :title="cards.title"
        :options="cards.options"
        @clickItem="clickItemList"
      />
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
          isActive: true,
        },
        {
          name: "Card Low",
          component: "CCardLow",
          isActive: false,
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
  top: 0
  left: 0
  bottom: 0
  width: 15rem
  padding: 1em
  background-color: var(--sidebar-bg-color)
  float: left
  display: flex
  position: fixed
  flex-direction: column
  overflow: auto
  z-index: 1
  transition: 0.5s
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)

.section__header
  margin-bottom: 10px
  &-title
    text-align: center
    font-family: ComfortaaBold
    color: #fff
  &-img
    width: 0.7rem
    height: 1.3rem

.section__divider
  border: 0
  display:block
  width: 96%             
  background-color:#FFF
  height: 1px
  
.section__list
  text-align: left
  margin-top: 0.5em

</style>