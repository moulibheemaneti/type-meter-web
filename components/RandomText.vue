<template>
    <div>
        <button @click="generateRandomText">generate</button>
        <p>{{ quote.cite }}</p>
    </div>
</template>
<script setup>
const quotes = [
    "One of my most productive days was throwing away 1,000 lines of code.",
    "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
    "When in doubt, use brute force.",
    "Talk is cheap. Show me the code.",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
    "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris",
    "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.",
];

function generateRandomText() {
    const index = Math.floor(Math.random() * quotes.length);
    this.quote = quotes[index];
}
</script>