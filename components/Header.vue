<template>
    <header class="header">
        <div class="image-holder">
            <img src="~/assets/images/web_logo.svg" alt="Type Racer Logo" class="logo">
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Header',
    props: {
        title: {
            required: false,
            type: String,
        }
    }
});

</script>

<style scoped>
header {
    align-items: center;
    background-color: white;
    width: 100%;
    bottom: 0;
}

.logo {
    display: block;
    margin: auto;
    /* height: 100%; */
    width: 40%;
    justify-content: center;
}
</style>