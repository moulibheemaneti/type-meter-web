<template>
    <el-button color="#FBC404" v-on:click="startCountDown">Start Game</el-button>
    <!-- <p> {{ textToType}} </p> -->
    <p v-if="countDown !== 0 && isCountDownRunning">Game starts in {{ countDown }}</p>
    <p v-if="timerCount !== 0 && isTimerRunning">Time left: {{ timerCount }} seconds</p>
    <CustomTextArea name="speed-test" v-bind:readonly="isReadOnly" v-bind:autoFocus="!isReadOnly"
        placeholder="Type your text here..." v-model:textInput="textToConsider" @update:text-input="calculateChars">
    </CustomTextArea>
    <p v-if="timerCount === 0">Your gross typing speed is {{ Math.trunc(wpm) }} WPM</p>
</template>

<script setup lang="ts">
const textToType = "Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition. The core library is focused on the view layer only. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages."
const textToConsider = ref('');
const countDown = ref(3);
const isReadOnly = ref(true);
const isCountDownRunning = ref(false);
const isTimerRunning = ref(false);
const timerCount = ref(10);
const wpm = ref(0);

function startCountDown() {
    isCountDownRunning.value = true;
    var interval = setInterval(() => {
        countDown.value--;
        if (countDown.value === 0) {
            isReadOnly.value = false;
            clearInterval(interval);
            startTimer();
            isCountDownRunning.value = false;
        }
    }, 1000);
}

function startTimer() {
    isTimerRunning.value = true;
    var interval = setInterval(() => {
        timerCount.value--;
        if (timerCount.value === 0) {
            isReadOnly.value = true;
            isTimerRunning.value = false;
            clearInterval(interval);
            displayWPM();
        }
    }, 1000);
}

function calculateChars() {
    console.log(`chars: ${textToConsider.value.length}`)
}

function displayWPM() {
    // Resource for calculating WPM. (https://www.speedtypingonline.com/typing-equations)

    // ----- Gross WPM -------
    wpm.value = ((textToConsider.value.length) / 5) / (1 / 6);
}

function resetGame() {
    wpm.value = 0;
    textToConsider.value = '';

}
</script>

<style scoped>

</style>