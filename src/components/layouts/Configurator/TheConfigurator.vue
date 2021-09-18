<template>
    <div>
        <h1> {{ name}} </h1>
        <div v-for="style in getStyleSections()" :key="style.property">
            <component 
                v-bind:is="style.component" 
                :name="style.property"
                :config="style.config"
                :value="style.value"
                v-model="style.value"
                @changeValue="changeValue">
            </component>
        </div>
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