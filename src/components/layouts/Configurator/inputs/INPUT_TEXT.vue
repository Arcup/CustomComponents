<template>
    <div>
        <label> {{ name }} </label><br>
        <input type="text" v-model="value" @keyup="changeValue">
    </div>
</template>
<script>
import { ref } from "vue";

export default {
    props: ["name", "value", "config"],
    setup(props, {emit}) {

        const name = ref(props.name)
        const value = ref(props.value)

        const changeValue = () => {
            emit("changeValue", props.name, value.value);
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
input[type=text]{
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    border: 1px solid black;
    color: black;
    width: 250px;
    height: 30px;
    padding-left: 10px;
}
    
input[type=text]:focus {
    outline: none;
    border: 1px solid #02E9E9;
    color: black;
}
</style>