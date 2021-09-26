<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="!collapsed">
        {{ name.charAt(0).toUpperCase() + name.slice(1) }}

        <button @click="resetComponent()">RESET</button>
      </span>
    </h1>
    <div v-if="!collapsed">
      <ul>
        <div v-for="style in getStyleSections()" :key="style.property">
          <li style="list-style-type: none">
            <component
              v-bind:is="style.component"
              :name="style.property"
              :config="style.config"
              :value="style.value"
              v-model="style.value"
              @changeValue="changeValue"
            >
            </component>
          </li>
        </div>
      </ul>
    </div>

    <h1>
      <span
        @click="toggleSidebar"
        :class="{ 'rotate-180': collapsed }"
        class="collapse-icon"
        style="cursor: pointer"
      >
        <i class="fas fa-arrow-right" />
      </span>
    </h1>
  </div>
</template>

<script>
import { reactive, ref, computed, watch } from "vue";
import { indexStyles } from "./index.js";

export default {
  props: ["name", "section"],
  setup(props, { emit }) {
    const name = ref(props.name);

    const collapsed = ref(true)
    const toggleSidebar = () => (collapsed.value = !collapsed.value)
    const SIDEBAR_WIDTH = 300
    const SIDEBAR_WIDTH_COLLAPSED = 38
    const sidebarWidth = computed(() => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`)

    watch(props.section, (count, prevCount) => {
      getStyleSections()
    })

    const getStyleSections = () => {
      var styles = [];
      for (const property in props.section) {
        styles.push({
          property: property,
          component: indexStyles[property].component,
          config: indexStyles[property].config,
          value: props.section[property],
        });
      }
      return styles;
    };

    const changeValue = (property, newValue) => {
      emit("changeValue", property, newValue);
    };

    const resetComponent = () => {
      emit("reset");
    };

    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
      name,
      props,
      getStyleSections,
      changeValue,
      resetComponent,
    };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #161e2e;
  --sidebar-item-hover: #02E9E9;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: right;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 1.5em;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

.collapse-icon {
  position: fixed;
  bottom: 0;
  transition: 0.5s linear;
  margin-bottom: 20px;
}
.rotate-180 {
  transform: rotate(180deg);
}
button {
  background-color: var(--sidebar-item-hover);
  border: 0px;
  color: var(--sidebar-bg-color);
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
}
</style>
