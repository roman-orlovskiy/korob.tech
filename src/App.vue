<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
}

.main-content {
  padding-top: 80px; /* Отступ для фиксированного header */
}
</style>
