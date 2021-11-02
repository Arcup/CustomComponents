<template>
    <div>
        <label> {{ name.charAt(0).toUpperCase() + name.slice(1) }} </label><br>
        <textarea  type="text" spellcheck="false" v-model="value" @keyup="changeValue"></textarea>
    </div>
</template>
<script>
import { ref } from "vue";

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
textarea[type=text]{
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 10px;
    border: 1px solid white;
    color: black;
    width: 80%;
    height: 30px;
    padding-left: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
}
    
textarea[type=text]:focus {
    outline: none;
    border: 2px solid #02E9E9;
    color: black;
}

textarea {
    color: white;
    font-family: inherit;
    padding-top: 10px;
    resize: vertical;
    overflow: hidden;
}
</style>