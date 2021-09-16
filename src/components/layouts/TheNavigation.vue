<template>
  <div>
    <div class="content">
      <section>
        <h1>Cartmanmundi</h1>
        <img
          v-bind:src="require('./../../assets/cartmangordo.jpg')"
          alt=""
          class="section__image"
        />
      </section>
      <hr />
      <ul>
        <li class="list__element-first">
          Card componentes
          <ul>
            <li
              class="list__element-second"
              v-for="card in cardList"
              :key="card.name"
              @click="clickItemList(card.name, card.component)"
            >
              {{ card.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup(props, { emit }) {
    const cardList = reactive([
      {
        name: "Card Information",
        component: "CCardInfo",
      },
      {
        name: "Card Low",
        component: "CCardLow",
      },
    ]);

    const clickItemList = (name, component) => {
      emit("clicItemList", name, component);
    };

    return {
      cardList,
      clickItemList,
    };
  },
};
</script>

<style lang="sass" scoped>
.content
  height: 100%
  width: 20%
  position: fixed
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important
  z-index: 10

.list__element-first
  margin-left: 2px
  font-size: 14pt
  font-family: bold

.list__element-second
  margin-left: 4px
  font-size: 10pt
  cursor: pointer

.section__image
  width: 120px
  height: 70px
  margin-left: 15px
</style>