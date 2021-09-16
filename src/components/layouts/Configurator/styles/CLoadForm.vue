<template>
    <div>
        <input type="text"> {{form}}
    </div>
</template>
<script>
import { ref } from "vue";

export default {
    props: ["form"],
    setup(props) {

        const form = ref(props.form)
        
        return {
            form,
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