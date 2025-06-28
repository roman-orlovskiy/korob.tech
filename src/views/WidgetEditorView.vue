<template>
  <div class="widget-editor">
    <div class="widget-editor__container">
      <h1 class="widget-editor__title">Виджет редактора</h1>
      <p class="widget-editor__description">Здесь будет размещен редактор виджетов.</p>
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

  &__container {
    max-width: $breakpoint-xl;
    margin: 0 auto;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    color: $text-primary;
    margin-bottom: $mb-3;
    font-family: $font-family-primary;
  }

  &__description {
    font-size: 1.1rem;
    color: $text-secondary;
    line-height: 1.6;
    font-family: $font-family-primary;
  }
}
</style> 