<template>
  <div class="widget-editor">
    <div class="container">
      <h1>Виджет редактора</h1>
      <p>Здесь будет размещен редактор виджетов.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Страница виджет редактора
</script>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;

.widget-editor {
  padding: $p-4;
}

.container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: $mb-3;
  font-family: $font-family-primary;
}

p {
  font-size: 1.1rem;
  color: $text-secondary;
  line-height: 1.6;
  font-family: $font-family-primary;
}
</style> 