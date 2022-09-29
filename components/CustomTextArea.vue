<template>
    <el-input type="textarea" class="text-area" :name="props.name" :placeholder="placeholder" rows="1"
        @input="resizeTextArea" v-model="textInput"></el-input>
</template>

<script setup lang="ts">

const props = defineProps({
    name: {
        required: true,
        type: String,
    },
    placeholder: {
        required: false,
        type: String,
    },
    textInput: {
        required: false,
        type: String,
    }
})

const emits = defineEmits(["update:textInput"]);

watch(() => props.textInput, () => {
    if (props.textInput === '') {
        var element = document.getElementsByName(props.name)[0];
        element.style.height = "auto";
    }
},);

function resizeTextArea() {
    var element = document.getElementsByName(props.name)[0];

    // console.log(textAreaValue.value)
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
    // emits("update:onTyping", textAreaValue.value)
    emits("update:textInput", props.textInput);
}
</script>

<style>
.el-textarea__inner {
    width: 100%;
    padding: 1rem;
    margin: 1rem 0rem;
    resize: none;
    box-sizing: border-box;
}
</style>