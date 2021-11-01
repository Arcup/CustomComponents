<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="!collapsed">
        {{ name.charAt(0).toUpperCase() + name.slice(1) }}
      </span>
    </h1>
    <div v-show="!collapsed">
      <div class="padding_buttons"></div>
      <button 
        @click="stylesOrData='STYLE'"
        style="margin-right: 1rem;"
        :class="{ 
          'button_select': stylesOrData ==='STYLE',
          'button_no_select': stylesOrData !=='STYLE' 
        }">
          Styles
      </button>
      <button 
        @click="stylesOrData='DATA'"
        :class="{ 
          'button_select': stylesOrData ==='DATA',
          'button_no_select': stylesOrData !=='DATA' 
        }">
          Data
      </button>
      <div v-show="stylesOrData === 'STYLE'">
        <button @click="resetComponent()" class="button_no_select" style="margin-top: 1rem">Reset Styles</button>
        <div v-for="section in sections" :key="section">
          <p class="section-styles" @click="section.active = !section.active">
            <label class="section-title">
              {{section.section.charAt(0).toUpperCase() + section.section.slice(1).replace("_", " ")
              }}
            </label>
            <span
              :class="{ 'rotate-180': section.active }"
              class="collapse-section"
            >
              <i class="fas fa-chevron-down" />
            </span>
          </p>
          <div v-show="section.active">
            <div v-for="data in section.data" :key="data">
              <li style="list-style-type: none; padding-left: 20px">
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
      <div v-show="stylesOrData ==='DATA'" style="padding-top: 2rem">
        <div v-for="data in datas" :key="data">
          <li style="list-style-type: none; padding-left: 20px">
            <component
              :is="data.component"
              :name="data.property"
              :value="data.value"
              @changeValue="changeValueData"
            >
            </component>
          </li>
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
  props: ["name", "section", "data"],
  setup(props, { emit }) {
    const name = ref(props.name);
    const sections = ref([]);
    const datas = ref([]);

    const collapsed = ref(false);
    const toggleSidebar = () => (collapsed.value = !collapsed.value);
    const SIDEBAR_WIDTH = 270;
    const SIDEBAR_WIDTH_COLLAPSED = 38;
    const sidebarWidth = computed(() => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`);

    const stylesOrData = ref("STYLE");

    //  Recibe una palabra y la traduce desde el objeto i18n
    const changeLanguage = computed(() => {

      // No se si esta forma de hacer la internacionalización se viable

      var newArray = [];
      section.forEach(element => {
        var aux = '';
        switch(element.section) {
          case "sizes_section":
            aux = $t("configurator.size");
          break;
          default: 
          aux = 'Soy una sección'
          break;
        }
        newArray.push(aux);
      });
      return newArray;
    });

    const resetData = ref({});
    const resetDataFlag = ref(true);

    // Remueve las referencias al objeto default
    const removeReference = (object) => {
      return JSON.parse(JSON.stringify(object));
    };

    const getStyleSections = (dataReset) => {
      var arrayData = props.section;
      if (dataReset) {
        arrayData = dataReset;
      }

      if (resetDataFlag.value) {
        resetData.value = removeReference(arrayData);
        resetDataFlag.value = false;
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
          data: [],
        };

        for (const property in arrayData[section]) {
          sectionAppend.data.push({
            section: section,
            property: property,
            component: shallowRef(indexStyles[property].component),
            config: indexStyles[property].config,
            value: arrayData[section][property],
          });
        }
        styles.push(sectionAppend);
      }
      sections.value = styles;
    };

    const getDataComponent = () => {
      var datasAux = [];
      for (const property in props.data) {
        datasAux.push({
          property: property,
          component: shallowRef(indexStyles["DATA_FIELD"].component),
          value: props.data[property],
        });
      }      
      datas.value = datasAux;
    };

    getStyleSections(false);
    getDataComponent();

    watch(() => props.section, () => {
        getStyleSections(false);
    });
    watch(() => props.section, () => {
      resetDataFlag.value = true;
      getStyleSections();
    });
    watch(() => props.data, () => {
        getDataComponent();
    });

    const changeValue = (section, property, newValue) => {
      emit("changeValueStyle", section, property, newValue);
    };

    const changeValueData = (section, property, newValue) => {
      emit("changeValueData", property, newValue);
    };

    const resetComponent = () => {
      getStyleSections(resetData.value);
      emit("reset", resetData.value);
    };

    return {
      collapsed,
      stylesOrData,
      toggleSidebar,
      sidebarWidth,
      changeLanguage,
      name,
      props,
      getStyleSections,
      getDataComponent,
      changeValue,
      changeValueData,
      resetComponent,
      sections,
      datas,
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
.button_select {
  background: var(--sidebar-item-hover);
  border: 2px;
  color: var(--sidebar-bg-color);
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
}
.button_no_select {
  background: var(--sidebar-bg-color);
  color: var(--sidebar-item-hover);
  border: 2px solid var(--sidebar-item-hover);
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
}
</style>
