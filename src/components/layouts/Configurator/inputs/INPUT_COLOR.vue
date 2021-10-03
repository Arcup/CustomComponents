<template>
    <div>
        <label> {{ name.charAt(0).toUpperCase() + name.slice(1) }} </label><br>
        <input :style="'background:' + value" type="color" v-model="value" @change="changeValue">
    </div>
</template>
<script>
import { ref, watch } from "vue";

export default {
    props: ["name", "value", "section", "config"],

    setup(props, {emit}) {

        const name = ref(props.name)
        const value = ref(props.value)

        const changeValue = () => {
            emit("changeValue", props.section, props.name, value.value);
        }
        
        return {
            name,
            value,
            changeValue,
        }
    }
}
</script>


<style scoped>
input[type="color"] {
	-webkit-appearance: none;
	border: none;
	-webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border: none;
    color: black;
    width: 85%;
    height: 30px;
    margin-top: 5px;
    margin-bottom: 10px;
}

input[type="color"]::-webkit-color-swatch {
	border: none;
}

label {
    color: white;
}
</style>