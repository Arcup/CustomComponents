<template>
    <div>
        <h1> {{ section.name}} </h1>
        <div v-for="style in section.styles" :key="style">
        {{style}}
            <CLoadForm :form="getForm(style)"/>
        </div>
    </div>
</template>
<script>
import { reactive } from "vue";
import CLoadForm from "./styles/CLoadForm.vue"
import { indexStyles } from "./styles/index.js"

export default {
    components: {
        CLoadForm,
    },
    props: ["name", "section"],
    setup(props) {

        const getStyleSections = () => {
            var styles = []
            for (const property in props.section) {
                styles.push(property)
            }
            return styles
        }

        const getForm = (style) => {
            return indexStyles[style];
        }

        const section = reactive({
            name: props.name,
            styles: getStyleSections(props.section)
        })
        
        return {
            section,
            getForm,
        }
    }
}
</script>