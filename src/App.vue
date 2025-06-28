<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app">
    <Header />
    <main class="app__content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@use '@/assets/variables.scss' as *;

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__content {
    flex: 1;
  }
}
</style>
