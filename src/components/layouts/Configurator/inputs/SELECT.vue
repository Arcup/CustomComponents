<template>
    <div>
        <label> {{ name }}</label><br>
        <select v-model="value" @change="changeValue">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
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

</style>