<template> 
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="!collapsed">
        {{ name.charAt(0).toUpperCase() + name.slice(1) }}

        <button @click="resetComponent()">RESET</button>
      </span>
    </h1>
    <div v-show="!collapsed">
        <div v-for="section in sections" :key="section">
          <p class="section-styles" @click="section.active = !section.active"> 
           <label class="section-title">
            {{ section.section.charAt(0).toUpperCase() + section.section.slice(1).replace("_", " ") }}
            </label>
           <span
            :class="{ 'rotate-180': section.active }"
            class="collapse-section"
            >
              <i  class="fas fa-chevron-down" />
            </span>
          </p>
          <div v-show="section.active">
            <div v-for="data in section.data" :key="data">
              <li style="list-style-type: none; padding-left: 20px;">
                <component
                  :is="data.component"
                  :name="data.property"
                  :value="data.value"
                  :section="data.section"
                  :config="data.config"
                  @changeValue="changeValue"
                >
                </component>
              </li>
            </div>
          </div>
        </div>
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
import { reactive, ref, computed, watch, shallowRef } from "vue";
import { indexStyles } from "./index.js";

export default {
  props: ["name", "section"],
  setup(props, { emit }) {
    const name = ref(props.name);
    const sections = ref([])

    const collapsed = ref(false)
    const toggleSidebar = () => (collapsed.value = !collapsed.value)
    const SIDEBAR_WIDTH = 270
    const SIDEBAR_WIDTH_COLLAPSED = 38
    const sidebarWidth = computed(() => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`)
    const resetData = ref({})
    const resetDataFlag = ref(true)

    // Remueve las referencias al objeto default
    const removeReference = (object) => {
      return JSON.parse(JSON.stringify(object))
    };

    const getStyleSections = (dataReset) => {
      var arrayData = props.section
      if(dataReset){
        arrayData =  dataReset;
      }

      if(resetDataFlag.value ){
        resetData.value = removeReference(arrayData);
        resetDataFlag.value = false
      }

      var styles = [];
      for (const section in arrayData) {
        var active = false;
        if (Object.keys(arrayData)[0] === section) {
          active = true;
        }
        var sectionAppend = {
          section: section,
          active: active,
          data: []
        }
        
        for (const property in arrayData[section]) {
          sectionAppend.data.push({
            section: section,
            property: property,
            component: shallowRef(indexStyles[property].component),
            config: indexStyles[property].config,
            value: arrayData[section][property]
          });
        };
        styles.push(sectionAppend)
      }
      sections.value = styles
    };
    

    getStyleSections(false)

    watch(() => props.section, () => {
      getStyleSections(false)
    });
    watch(() => props.section, () => {
      resetDataFlag.value = true;
      getStyleSections()
    });

    const changeValue = (section, property, newValue) => {
      emit("changeValue", section, property, newValue);
    };

    const resetComponent = () => {
      getStyleSections(resetData.value)
      emit("reset", resetData.value);
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
      sections,
    };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #161e2e;
  --sidebar-item-hover: #02e9e9;
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

.section-styles {
  padding-bottom: 10px;
  cursor: pointer;
}

.section-title {
  padding-right: 10px;
  padding-left: 10px;
  cursor: pointer;
}

.collapse-icon {
  position: fixed;
  bottom: 0;
  transition: 0.5s linear;
  margin-bottom: 20px;
}
.collapse-section {
  position: absolute;
  text-align: right;
  transition: 0.2s linear;
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
