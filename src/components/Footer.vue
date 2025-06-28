<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <nav class="footer__nav">
          <router-link to="/" class="footer__link">
            Главная
          </router-link>
          <router-link to="/widget-editor" class="footer__link">
            КОРОБ. Редактор
          </router-link>
          <router-link to="/contacts" class="footer__link">
            Контакты
          </router-link>
        </nav>
        <div class="footer__logo">
          КОРОБ © 2025
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Компонент футера
</script>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;

.footer {
  background-color: $bg-dark;
  color: $text-light;
  padding: $p-4 0;
  margin-top: auto;

  &__container {
    max-width: $breakpoint-xl;
    margin: 0 auto;
    padding: 0 $p-4;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: $p-3;
  }

  &__nav {
    display: flex;
    gap: $p-4;
    align-items: center;
    flex-wrap: wrap;
  }

  &__link {
    color: $text-light;
    text-decoration: none;
    font-family: $font-family-primary;
    font-weight: 500;
    transition: color 0.2s ease;
    
    &:hover {
      color: $primary-color;
    }
    
    &.router-link-active {
      color: $primary-color;
    }
  }

  &__logo {
    font-family: $font-family-primary;
    font-size: 1.125rem;
    letter-spacing: 0.05em;
  }

  @media (max-width: $breakpoint-sm) {
    &__content {
      flex-direction: column;
      text-align: center;
      gap: $p-3;
    }
    
    &__nav {
      flex-direction: column;
      gap: $p-2;
    }
  }
}
</style> 