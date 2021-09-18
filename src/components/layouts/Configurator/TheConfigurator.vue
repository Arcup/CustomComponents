<template>
    <div class="navbar_padding" style="background-color: #161e2e;">
        <h1> {{name.charAt(0).toUpperCase() + name.slice(1)}} </h1>
        <ul>
        <div v-for="style in getStyleSections()" :key="style.property">
            <li class="navbar_padding_inputs">
                <component 
                    v-bind:is="style.component" 
                    :name="style.property"
                    :config="style.config"
                    :value="style.value"
                    v-model="style.value"
                    @changeValue="changeValue">
                </component>
            </li>
        </div>
        </ul>
    </div>
</template>
<script>
import { reactive, ref } from "vue";
import { indexStyles } from "./index.js"

export default {
    props: ["name", "section"],
    setup(props,{emit}) {

        const name = ref(props.name)

        const getStyleSections = () => {
            var styles = []
            for (const property in props.section) {
                styles.push({
                    "property": property,
                    "component": indexStyles[property].component,
                    "config": indexStyles[property].config,
                    "value": props.section[property],
                })
            }
            return styles
        }

        const changeValue = (property, newValue) => {
            emit("changeValue", property, newValue)
        }
        
        return {
            name,
            getStyleSections,
            changeValue,
        }
    }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

h1 {
    color: white;
    text-align: center;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar_padding {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 5%;
    padding-left: 5%;
}

.navbar_padding_inputs {
    padding: 5px;
}
 
</style>