<template>
  <div class="demo">
    <div class="demo__container">
      <header class="demo__header">
        <h1 class="demo__title">Демо виджета редактора</h1>
        <p class="demo__description">
          Кликайте по любому тексту, который подсвечен желтым кругом, <br> чтобы отредактировать его.
        </p>
      </header>

      <div class="demo__content">
        <!-- Статический HTML -->
        <section class="demo__section">
          <h2 class="demo__section-title">Простой пример</h2>
          <div class="demo__example">
            <h3 data-widget="static-title">
              Заголовок страницы
            </h3>
            <p data-widget="static-content">
              Это пример статического HTML контента, который можно редактировать прямо на странице. 
              Просто кликните по любому тексту и начните печатать.
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Минимальная настройка виджета
</script>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;
@use 'sass:color';

.demo {
  padding: $p-4;
  background: linear-gradient(135deg, $bg-primary 0%, $bg-secondary 100%);
  min-height: 100vh;

  &__container {
    max-width: $breakpoint-xl;
    margin: 0 auto;
  }

  &__header {
    text-align: center;
    margin-bottom: $mb-5;
    padding: $p-5 0;
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: $mb-3;
    background: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__description {
    font-size: 1.2rem;
    color: $text-secondary;
    max-width: 600px;
    margin: 0 auto;
  }

  &__content {
    display: grid;
    gap: $p-5;
  }

  &__section {
    background: white;
    border-radius: 12px;
    padding: $p-5;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &__section-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: $mb-4;
    color: $text-primary;
  }

  &__example {
    border: 1px solid $text-muted;
    border-radius: 8px;
    padding: $p-4;
    background: $bg-secondary;
  }
}
</style> 