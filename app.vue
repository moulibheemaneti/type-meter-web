<template>
  <Header :title="pageTitle"></Header>
  <main>
    <TypeCount></TypeCount>
  </main>
  <el-button color="#FBC404" v-on:click="scrollToTop">
    Go to top
  </el-button>
  <Footer></Footer>
</template>

<script setup lang="ts">
const pageTitle = 'App';

function scrollToTop() {
  window.scrollTo({
    // top: document.getElementById,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.el-button {
  position: fixed;
  bottom: 2rem;
  right: 3rem;
  display: block;
  float: right;
  color: white;
}
</style>