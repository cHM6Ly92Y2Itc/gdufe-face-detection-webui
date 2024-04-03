<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="page">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<style></style>
