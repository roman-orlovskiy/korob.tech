<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <router-link to="/" class="footer-link">
          Главная
        </router-link>
        <div class="footer-logo">
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
}

.footer-container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
  padding: 0 $p-4;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: $p-3;
}

.footer-link {
  color: $text-light;
  text-decoration: none;
  font-family: $font-family-primary;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: $primary-color;
  }
}

.footer-logo {
  font-family: $font-family-primary;
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 0.05em;
}

@media (max-width: $breakpoint-sm) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: $p-2;
  }
}
</style> 