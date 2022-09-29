<template>
    <section>
        <div class="counter-container">
            <span class="counter-container-title"> Character Count: </span>
            <span class="counter-container-description"> {{ characterCount }} </span>
        </div>

        <div class="counter-container">
            <span class="counter-container-title"> Word Count: </span>
            <span class="counter-container-description"> {{ wordCount }} </span>
        </div>
    </section>

    <CustomTextArea name="count-text" placeholder="Type your text here..." v-model:textInput="textToConsider"
        @update:text-input="whileTyping">
    </CustomTextArea>
    <el-button color="#FBC404" v-on:click="clearText">Clear Text</el-button>
</template>

<script setup lang="ts">

const textToConsider = ref('');
const wordCount = ref(0);
const characterCount = ref(0);

function whileTyping(value: string) {
    textToConsider.value = value;
    // Dynamically resizing text area.
    calculateCharacterCount(textToConsider.value)
    calculateWordCount(textToConsider.value)
}

function calculateWordCount(text: string) {
    // Split sentences before actual word count.
    let tempLines: string[] = text.trim().split("\n");

    let temp: string[];

    let tempCount: number = 0;

    for (let line of tempLines) {
        temp = line.trim().split(" ");
        temp = temp.filter(obj => { return obj !== '' });
        temp = temp.filter(obj => { return obj !== ' ' });
        tempCount = tempCount + temp.length;
    }
    wordCount.value = tempCount;
}

function calculateCharacterCount(text: string) {

    let finalText: string = "";

    const regex: RegExp = /\s+/g;

    // Remove white spaces in the string for more accurate character count.
    finalText = text.trim().replace(regex, '');

    // console.log(this.text.trim().match(regex));

    // Length of the white space removed string is the actual character count.
    characterCount.value = finalText.trim().length;
}

function clearText() {
    // Clear the text and reset both wordcount and character count to 0.
    wordCount.value = 0;
    characterCount.value = 0;
    textToConsider.value = '';
}
</script>


<style>
.counter-container {
    padding: 1em 2em;
    margin: 1em 2em;
    display: inline-block;
    text-align: center;
    align-items: center;
    background-color: #FBC404;
    color: white;
    border: 0.5em solid #EA9A00;
}

.counter-container-title,
.counter-container-description {
    font-weight: bolder;
    display: block;
}

.counter-container-description {
    font-size: 5rem;
}
</style>

<!-- Scoped style -->
<style scoped>
section {
    display: flex;
    align-items: center;
    justify-content: center;
}

.el-button {
    color: white;
}
</style>